#!/usr/bin/env node

/**
 * Apply Enrichment Script
 * 
 * Reads enriched-tools.json and updates the corresponding Tool entries
 * in the batch files with real scraped data.
 * 
 * Usage: node scripts/apply-enrichment.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const ENRICHED_DATA_PATH = join(PROJECT_ROOT, 'data', 'enriched-tools.json');
const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Format pricing tiers as TypeScript
 */
function formatPricingTiers(tiers) {
  if (!tiers || tiers.length === 0) return null;
  
  const formatted = tiers.map(tier => {
    const features = tier.features.map(f => `"${f.replace(/"/g, '\\"')}"`).join(', ');
    return `    { name: "${tier.name.replace(/"/g, '\\"')}", price: "${tier.price.replace(/"/g, '\\"')}", features: [${features}] }`;
  }).join(',\n');
  
  return `[\n${formatted}\n  ]`;
}

/**
 * Format features array as TypeScript
 */
function formatFeatures(features) {
  if (!features || features.length === 0) return null;
  return features.map(f => `"${f.replace(/"/g, '\\"')}"`);
}

/**
 * Update a tool entry in a TypeScript file
 */
function updateToolInFile(filePath, slug, enrichedData) {
  let content = readFileSync(filePath, 'utf-8');
  
  // Find the tool object by slug
  const slugPattern = new RegExp(`slug:\\s*["']${slug}["']`, 'g');
  const match = slugPattern.exec(content);
  
  if (!match) {
    console.log(`  ⚠️  Could not find slug "${slug}" in ${filePath}`);
    return false;
  }
  
  // Find the start and end of this tool object
  const startIndex = content.lastIndexOf('{', match.index);
  let braceCount = 1;
  let endIndex = startIndex + 1;
  
  while (braceCount > 0 && endIndex < content.length) {
    if (content[endIndex] === '{') braceCount++;
    if (content[endIndex] === '}') braceCount--;
    endIndex++;
  }
  
  const toolObject = content.substring(startIndex, endIndex);
  let updatedObject = toolObject;
  
  let changes = [];
  
  // SKIP description updates — too risky with regex on TypeScript strings
  // The original hand-written descriptions are better than scraped meta tags anyway
  
  // Add/update logoUrl if we have one
  if (enrichedData.meta?.ogImage || enrichedData.meta?.favicon) {
    const logoUrl = enrichedData.meta.ogImage || enrichedData.meta.favicon;
    
    // Make absolute URL if relative
    let absoluteLogoUrl = logoUrl;
    if (logoUrl && !logoUrl.startsWith('http')) {
      try {
        absoluteLogoUrl = new URL(logoUrl, enrichedData.url).href;
      } catch (err) {
        absoluteLogoUrl = logoUrl;
      }
    }
    
    if (absoluteLogoUrl) {
      if (/logoUrl:/.test(updatedObject)) {
        updatedObject = updatedObject.replace(
          /logoUrl:\s*["']([^"']*?)["']/,
          `logoUrl: "${absoluteLogoUrl}"`
        );
      } else {
        // Add before features
        updatedObject = updatedObject.replace(
          /features:/,
          `logoUrl: "${absoluteLogoUrl}",\n    features:`
        );
      }
      changes.push('logoUrl');
    }
  }
  
  // Add/update screenshotUrl if we have og:image
  if (enrichedData.meta?.ogImage) {
    let screenshotUrl = enrichedData.meta.ogImage;
    if (!screenshotUrl.startsWith('http')) {
      try {
        screenshotUrl = new URL(screenshotUrl, enrichedData.url).href;
      } catch (err) {}
    }
    
    if (screenshotUrl) {
      if (/screenshotUrl:/.test(updatedObject)) {
        updatedObject = updatedObject.replace(
          /screenshotUrl:\s*["']([^"']*?)["']/,
          `screenshotUrl: "${screenshotUrl}"`
        );
      } else {
        // Add after logoUrl or before features
        if (/logoUrl:/.test(updatedObject)) {
          updatedObject = updatedObject.replace(
            /(logoUrl:\s*["'][^"']*["'],)/,
            `$1\n    screenshotUrl: "${screenshotUrl}",`
          );
        } else {
          updatedObject = updatedObject.replace(
            /features:/,
            `screenshotUrl: "${screenshotUrl}",\n    features:`
          );
        }
      }
      changes.push('screenshotUrl');
    }
  }
  
  // SKIP features updates — scraper grabs nav items and garbage
  // Original hand-curated features are higher quality
  
  // Add pricing tiers if we have them
  if (enrichedData.pricingTiers && enrichedData.pricingTiers.length > 0) {
    const formattedTiers = formatPricingTiers(enrichedData.pricingTiers);
    if (formattedTiers) {
      if (/pricingTiers:/.test(updatedObject)) {
        // Update existing
        updatedObject = updatedObject.replace(
          /pricingTiers:\s*\[.*?\]/s,
          `pricingTiers: ${formattedTiers}`
        );
      } else {
        // Add after pricingDetails or before features
        if (/pricingDetails:/.test(updatedObject)) {
          updatedObject = updatedObject.replace(
            /(pricingDetails:\s*["'][^"']*["'],)/,
            `$1\n  pricingTiers: ${formattedTiers},`
          );
        } else {
          updatedObject = updatedObject.replace(
            /features:/,
            `pricingTiers: ${formattedTiers},\n    features:`
          );
        }
      }
      changes.push(`pricingTiers (${enrichedData.pricingTiers.length})`);
    }
  }
  
  // Add lastVerified date
  const today = new Date().toISOString().split('T')[0];
  if (/lastVerified:/.test(updatedObject)) {
    updatedObject = updatedObject.replace(
      /lastVerified:\s*["'][^"']*["']/,
      `lastVerified: "${today}"`
    );
  } else {
    updatedObject = updatedObject.replace(
      /addedDate:/,
      `lastVerified: "${today}",\n    addedDate:`
    );
  }
  changes.push('lastVerified');
  
  // Add websiteStatus if not active
  if (enrichedData.websiteStatus && enrichedData.websiteStatus !== 'active') {
    if (/websiteStatus:/.test(updatedObject)) {
      updatedObject = updatedObject.replace(
        /websiteStatus:\s*["'][^"']*["']/,
        `websiteStatus: "${enrichedData.websiteStatus}"`
      );
    } else {
      updatedObject = updatedObject.replace(
        /lastVerified:/,
        `websiteStatus: "${enrichedData.websiteStatus}",\n    lastVerified:`
      );
    }
    changes.push(`websiteStatus (${enrichedData.websiteStatus})`);
  }
  
  if (changes.length === 0) {
    console.log(`  ℹ️  No changes for ${slug}`);
    return false;
  }
  
  // Replace in content
  const updatedContent = content.substring(0, startIndex) + updatedObject + content.substring(endIndex);
  
  console.log(`  ✅ Updated ${slug}: ${changes.join(', ')}`);
  
  if (!DRY_RUN) {
    writeFileSync(filePath, updatedContent, 'utf-8');
  }
  
  return true;
}

/**
 * Main application function
 */
async function main() {
  console.log('🔄 Apply Enrichment Script');
  console.log('==========================================\n');
  
  if (DRY_RUN) {
    console.log('🧪 DRY RUN MODE - No files will be modified\n');
  }
  
  // Load enriched data
  console.log('📂 Loading enriched data...');
  const enrichedData = JSON.parse(readFileSync(ENRICHED_DATA_PATH, 'utf-8'));
  console.log(`   Found ${Object.keys(enrichedData).length} enriched tools\n`);
  
  // Process each batch file
  const batchFiles = [
    'tools.ts',
    'tools-batch1.ts',
    'tools-batch2.ts',
    'tools-batch3.ts',
    'tools-batch4.ts',
  ];
  
  let totalUpdated = 0;
  
  // Track which tools we've already updated to avoid duplicates
  const updatedSlugs = new Set();
  
  for (const batchFile of batchFiles) {
    const filePath = join(PROJECT_ROOT, 'src', 'data', batchFile);
    console.log(`\n📝 Processing ${batchFile}...`);
    
    let fileUpdated = 0;
    
    for (const [slug, data] of Object.entries(enrichedData)) {
      if (!updatedSlugs.has(slug)) {
        if (updateToolInFile(filePath, slug, data)) {
          fileUpdated++;
          totalUpdated++;
          updatedSlugs.add(slug);
        }
      }
    }
    
    console.log(`   ${fileUpdated} tools updated in ${batchFile}`);
  }
  
  console.log('\n==========================================');
  console.log(`✅ Complete! ${totalUpdated} tools updated total`);
  
  if (DRY_RUN) {
    console.log('\n🧪 This was a dry run. Run without --dry-run to apply changes.');
  }
  
  console.log('==========================================\n');
}

// Run
main().catch(console.error);
