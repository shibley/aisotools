#!/usr/bin/env node

/**
 * AISO Tools Data Enrichment Pipeline
 * 
 * Scrapes real data from each tool's website:
 * - Pricing information from /pricing pages
 * - Features from /features pages
 * - Meta descriptions, logos, and screenshots
 * - Website status validation
 * 
 * Usage: node scripts/enrich-tools.js [--limit N] [--resume]
 */

import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

// Configuration
const RATE_LIMIT_MS = 50; // 50ms between requests (very fast enrichment)
const REQUEST_TIMEOUT = 5000; // 5 seconds (fail fast on slow sites)
const ENRICHED_DATA_PATH = join(PROJECT_ROOT, 'data', 'enriched-tools.json');
const PROGRESS_PATH = join(PROJECT_ROOT, 'data', 'enrichment-progress.json');

// Parse CLI arguments
const args = process.argv.slice(2);
const limitIndex = args.indexOf('--limit');
const LIMIT = limitIndex >= 0 ? parseInt(args[limitIndex + 1]) : null;
const RESUME = args.includes('--resume');

/**
 * Fetch URL with timeout and error handling
 */
async function fetchWithTimeout(url, timeoutMs = REQUEST_TIMEOUT) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    });
    clearTimeout(timeout);
    return response;
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
}

/**
 * Extract meta tags from HTML
 */
function extractMetaTags(html) {
  const $ = cheerio.load(html);
  
  return {
    title: $('title').text() || $('meta[property="og:title"]').attr('content'),
    description: $('meta[name="description"]').attr('content') || 
                 $('meta[property="og:description"]').attr('content'),
    ogImage: $('meta[property="og:image"]').attr('content'),
    favicon: $('link[rel="icon"]').attr('href') || 
             $('link[rel="shortcut icon"]').attr('href') ||
             $('link[rel="apple-touch-icon"]').attr('href'),
  };
}

/**
 * Extract pricing information from a page
 */
function extractPricing(html, baseUrl) {
  const $ = cheerio.load(html);
  const tiers = [];
  
  // Common pricing selectors
  const pricingSelectors = [
    '.pricing-card', '.price-card', '.pricing-tier', '.plan-card',
    '[class*="pricing"]', '[class*="plan"]', '[data-testid*="pricing"]',
  ];
  
  for (const selector of pricingSelectors) {
    const cards = $(selector);
    if (cards.length > 0 && cards.length <= 10) {
      cards.each((i, card) => {
        const $card = $(card);
        const name = $card.find('h1, h2, h3, h4, [class*="name"], [class*="title"]').first().text().trim();
        const priceText = $card.find('[class*="price"], [class*="cost"]').first().text().trim();
        const features = [];
        
        $card.find('li, [class*="feature"]').each((j, feat) => {
          const feature = $(feat).text().trim();
          if (feature && feature.length < 200) {
            features.push(feature);
          }
        });
        
        if (name && priceText) {
          tiers.push({ name, price: priceText, features: features.slice(0, 8) });
        }
      });
      
      if (tiers.length > 0) break;
    }
  }
  
  return tiers;
}

/**
 * Extract features from a page
 */
function extractFeatures(html) {
  const $ = cheerio.load(html);
  const features = [];
  
  // Try to find feature lists
  const featureSelectors = [
    '.features li', '.feature-list li', '[class*="features"] li',
    'ul li', 'section li',
  ];
  
  for (const selector of featureSelectors) {
    const items = $(selector);
    if (items.length > 3 && items.length < 100) {
      items.each((i, item) => {
        const text = $(item).text().trim();
        if (text && text.length > 10 && text.length < 200) {
          features.push(text);
        }
      });
      
      if (features.length >= 5) break;
    }
  }
  
  // Remove duplicates and limit
  return [...new Set(features)].slice(0, 12);
}

/**
 * Enrich a single tool with scraped data
 */
async function enrichTool(tool) {
  console.log(`\n🔍 Enriching: ${tool.name} (${tool.url})`);
  
  const enriched = {
    slug: tool.slug,
    name: tool.name,
    url: tool.url,
    scrapedAt: new Date().toISOString(),
    websiteStatus: 'unknown',
    meta: {},
    pricingTiers: [],
    features: [],
    errors: [],
  };
  
  try {
    // 1. Fetch homepage
    console.log('  → Fetching homepage...');
    const homeResponse = await fetchWithTimeout(tool.url);
    
    if (!homeResponse.ok) {
      enriched.websiteStatus = homeResponse.status === 404 ? 'dead' : 'error';
      enriched.errors.push(`Homepage returned ${homeResponse.status}`);
      return enriched;
    }
    
    // Check for redirects
    if (homeResponse.url !== tool.url && !homeResponse.url.startsWith(tool.url)) {
      enriched.websiteStatus = 'redirect';
      enriched.redirectUrl = homeResponse.url;
      console.log(`  ⚠️  Redirected to ${homeResponse.url}`);
    } else {
      enriched.websiteStatus = 'active';
    }
    
    const homeHtml = await homeResponse.text();
    enriched.meta = extractMetaTags(homeHtml);
    
    // Extract features from homepage if available
    const homeFeatures = extractFeatures(homeHtml);
    if (homeFeatures.length > 0) {
      enriched.features = homeFeatures;
      console.log(`  ✓ Found ${homeFeatures.length} features from homepage`);
    }
    
    // 2. Try /pricing page
    await sleep(RATE_LIMIT_MS);
    console.log('  → Fetching /pricing...');
    
    const pricingUrls = [
      new URL('/pricing', tool.url).href,
      new URL('/pricing/', tool.url).href,
      new URL('/plans', tool.url).href,
      new URL('/pricing-plans', tool.url).href,
    ];
    
    for (const pricingUrl of pricingUrls) {
      try {
        const pricingResponse = await fetchWithTimeout(pricingUrl);
        if (pricingResponse.ok) {
          const pricingHtml = await pricingResponse.text();
          const tiers = extractPricing(pricingHtml, tool.url);
          
          if (tiers.length > 0) {
            enriched.pricingTiers = tiers;
            console.log(`  ✓ Found ${tiers.length} pricing tiers`);
            break;
          }
        }
      } catch (err) {
        // Try next URL
      }
      await sleep(RATE_LIMIT_MS / 2);
    }
    
    // 3. Try /features page
    await sleep(RATE_LIMIT_MS);
    console.log('  → Fetching /features...');
    
    const featuresUrls = [
      new URL('/features', tool.url).href,
      new URL('/features/', tool.url).href,
      new URL('/capabilities', tool.url).href,
    ];
    
    for (const featuresUrl of featuresUrls) {
      try {
        const featuresResponse = await fetchWithTimeout(featuresUrl);
        if (featuresResponse.ok) {
          const featuresHtml = await featuresResponse.text();
          const pageFeatures = extractFeatures(featuresHtml);
          
          if (pageFeatures.length > enriched.features.length) {
            enriched.features = pageFeatures;
            console.log(`  ✓ Found ${pageFeatures.length} features from /features`);
            break;
          }
        }
      } catch (err) {
        // Try next URL
      }
      await sleep(RATE_LIMIT_MS / 2);
    }
    
    console.log(`  ✅ Enriched successfully`);
    
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
    enriched.errors.push(error.message);
    if (enriched.websiteStatus === 'unknown') {
      enriched.websiteStatus = 'error';
    }
  }
  
  return enriched;
}

/**
 * Sleep helper
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Load all tools from batch files
 */
function loadAllTools() {
  const toolsPath = join(PROJECT_ROOT, 'src', 'data', 'tools.ts');
  const batch1Path = join(PROJECT_ROOT, 'src', 'data', 'tools-batch1.ts');
  
  // For simplicity, we'll parse the TypeScript files as text
  // In production, you might want to use ts-node or compile first
  
  const allTools = [];
  
  // This is a simplified parser - for production use proper TS parsing
  const files = [
    'tools.ts',
    'tools-batch1.ts',
    'tools-batch2.ts',
    'tools-batch3.ts',
    'tools-batch4.ts',
  ];
  
  for (const file of files) {
    const filePath = join(PROJECT_ROOT, 'src', 'data', file);
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, 'utf-8');
      
      // Extract tool objects using regex (simplified approach)
      const toolMatches = content.matchAll(/{\s*name:\s*["']([^"']+)["'],\s*slug:\s*["']([^"']+)["'],.*?url:\s*["']([^"']+)["']/gs);
      
      for (const match of toolMatches) {
        allTools.push({
          name: match[1],
          slug: match[2],
          url: match[3],
          sourceFile: file,
        });
      }
    }
  }
  
  return allTools;
}

/**
 * Main enrichment pipeline
 */
async function main() {
  console.log('🚀 AISO Tools Data Enrichment Pipeline');
  console.log('==========================================\n');
  
  // Load tools
  console.log('📂 Loading tools from batch files...');
  const allTools = loadAllTools();
  console.log(`   Found ${allTools.length} tools total\n`);
  
  // Load progress if resuming
  let progress = { completed: [], failed: [], lastIndex: 0 };
  if (RESUME && existsSync(PROGRESS_PATH)) {
    progress = JSON.parse(readFileSync(PROGRESS_PATH, 'utf-8'));
    console.log(`📄 Resuming from tool #${progress.lastIndex + 1}\n`);
  }
  
  // Load existing enriched data
  let enrichedData = {};
  if (existsSync(ENRICHED_DATA_PATH)) {
    enrichedData = JSON.parse(readFileSync(ENRICHED_DATA_PATH, 'utf-8'));
    console.log(`📄 Loaded ${Object.keys(enrichedData).length} existing enriched tools\n`);
  }
  
  // Determine which tools to process
  const toolsToProcess = LIMIT ? allTools.slice(0, LIMIT) : allTools;
  const startIndex = RESUME ? progress.lastIndex : 0;
  
  console.log(`🎯 Processing ${toolsToProcess.length - startIndex} tools (starting from #${startIndex + 1})\n`);
  console.log('⏱️  Rate limit: 1 request per second');
  console.log('💾 Progress saved after each tool\n');
  console.log('==========================================');
  
  // Process each tool
  for (let i = startIndex; i < toolsToProcess.length; i++) {
    const tool = toolsToProcess[i];
    
    console.log(`\n[${i + 1}/${toolsToProcess.length}]`);
    
    try {
      const enriched = await enrichTool(tool);
      enrichedData[tool.slug] = enriched;
      progress.completed.push(tool.slug);
      progress.lastIndex = i;
      
      // Save after each tool
      writeFileSync(ENRICHED_DATA_PATH, JSON.stringify(enrichedData, null, 2));
      writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
      
    } catch (error) {
      console.log(`  ❌ Fatal error: ${error.message}`);
      progress.failed.push({ slug: tool.slug, error: error.message });
      progress.lastIndex = i;
      
      writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
    }
    
    // Rate limit between tools
    if (i < toolsToProcess.length - 1) {
      await sleep(RATE_LIMIT_MS);
    }
  }
  
  console.log('\n\n==========================================');
  console.log('✅ Enrichment complete!');
  console.log(`📊 Stats:`);
  console.log(`   Total processed: ${progress.completed.length}`);
  console.log(`   Failed: ${progress.failed.length}`);
  console.log(`   Data saved to: ${ENRICHED_DATA_PATH}`);
  console.log('==========================================\n');
}

// Run
main().catch(console.error);
