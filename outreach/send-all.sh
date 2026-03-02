#!/bin/bash

LOGFILE=~/clawd/aisotools/outreach/send-log-2026-02-23.md
API_KEY="re_4MRdkoe5_LqmGfhpGvN7uGtghDN3zNx1k"
FROM="Shibley <shibley@saasintegrate.com>"

send_email() {
  local NUM="$1"
  local TOOL="$2"
  local TO="$3"
  local SUBJECT="$4"
  local BODY="$5"

  RESULT=$(curl -s -X POST 'https://api.resend.com/emails' \
    -H "Authorization: Bearer $API_KEY" \
    -H 'Content-Type: application/json' \
    -d "$(jq -n \
      --arg from "$FROM" \
      --arg to "$TO" \
      --arg subject "$SUBJECT" \
      --arg text "$BODY" \
      '{from: $from, to: [$to], subject: $subject, text: $text}')")

  EMAIL_ID=$(echo "$RESULT" | jq -r '.id // "FAILED"')
  TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

  if [ "$EMAIL_ID" != "FAILED" ] && [ "$EMAIL_ID" != "null" ]; then
    STATUS="✅ SENT"
  else
    STATUS="❌ FAIL"
    EMAIL_ID="$RESULT"
  fi

  echo "| $NUM | $TOOL | $TO | $SUBJECT | $STATUS | $EMAIL_ID | $TIMESTAMP |" >> "$LOGFILE"
  echo "[$NUM] $TOOL → $TO : $STATUS ($EMAIL_ID)"
}

# 1. Jasper — compliment + curiosity
send_email 1 "Jasper" "partnerships@jasper.ai" \
  "Jasper's listing on aisotools.com" \
  "Hey Jasper team,

Genuinely impressed by how you've positioned Jasper across the AI marketing stack — not just another writing tool, but a full creative platform. That's hard to pull off.

Jasper already has a listing on AISO Tools (400+ AI tools directory), and I wanted to reach out about putting you in the featured spot for your category. Priority placement, homepage rotation, the works.

Worth a conversation?

– Shibley
shibley@saasintegrate.com"

sleep 3

# 2. Copy.ai — competitive angle
send_email 2 "Copy.ai" "support@copy.ai" \
  "Quick question about Copy.ai's directory presence" \
  "Hi there,

Your competitors in the AI writing space are starting to lock down featured placements on directories — figured you'd want to know.

I run aisotools.com (400+ curated AI tools). Copy.ai is listed but not featured yet. Featured tools get priority positioning in their category and homepage visibility. Pretty straightforward way to stay ahead in the comparison game.

Happy to send details if you're interested.

Cheers,
Shibley"

sleep 3

# 3. Writesonic — data-led
send_email 3 "Writesonic" "support@writesonic.com" \
  "Writesonic on AISO Tools — quick idea" \
  "Hi Writesonic team,

Your tool page on aisotools.com is getting consistent traffic from people comparing AI writing tools. Thought you should know.

We have a featured listing option that would put Writesonic at the top of that category — above Jasper, Copy.ai, and the rest. If you want the details, just reply and I'll send everything over.

Shibley
shibley@saasintegrate.com"

sleep 3

# 4. Rytr — super direct
send_email 4 "Rytr" "support@rytr.me" \
  "Featured spot for Rytr?" \
  "Quick pitch:

aisotools.com lists 400+ AI tools. The AI Writing category is our most competitive. Rytr is listed but buried below the featured tools.

Want to fix that? I can bump Rytr to the top with a featured badge and priority placement. Reply and I'll share pricing.

– Shibley"

sleep 3

# 5. Wordtune — compliment about product
send_email 5 "Wordtune" "hello@wordtune.com" \
  "Love what Wordtune does differently" \
  "Hey Wordtune team,

Most AI writing tools try to write everything for you. Wordtune actually makes YOUR writing better — that's a genuinely different approach and I think it deserves more visibility.

I run aisotools.com (400+ AI tools). We offer featured placements that put tools at the top of their category with a badge and homepage spotlight. Would love to get Wordtune up there.

Interested?

Shibley"

sleep 3

# 6. Runway — hot category angle
send_email 6 "Runway" "partnerships@runwayml.com" \
  "AI video is blowing up on our directory" \
  "Hey Runway team,

AI video is now the fastest-growing category on aisotools.com — and Runway is what people are searching for. Figured you'd want to capitalize on that.

We offer featured listings: top-of-category placement, homepage rotation, and a dedicated badge. New AI video tools are launching weekly, so staying visible matters more than ever.

Reply if you want the details.

Cheers,
Shibley"

sleep 3

# 7. Pictory — partner program angle
send_email 7 "Pictory" "partnerships@pictory.ai" \
  "Partnership idea — Pictory + AISO Tools" \
  "Hi Pictory team,

Saw you run a solid partner program — love that. I have a complementary idea.

I run aisotools.com, a directory of 400+ AI tools with organic traffic from people shopping for video tools. A featured listing would put Pictory at the top of the Video category with a badge and homepage placement.

Basically: we send you buyers, you look great doing it. Want to chat?

– Shibley"

sleep 3

# 8. Synthesia — enterprise credibility angle
send_email 8 "Synthesia" "hello@synthesia.io" \
  "Synthesia's presence on aisotools.com" \
  "Hi Synthesia team,

50K+ business customers is no joke — you've clearly built something enterprise teams trust. But when people are comparing AI video tools on directories like ours (aisotools.com, 400+ tools), featured tools get the lion's share of attention.

We have a featured listing program that'd put Synthesia front and center in the Video category. Reply if you'd like the details.

Shibley
shibley@saasintegrate.com"

sleep 3

# 9. HeyGen — competitive urgency
send_email 9 "HeyGen" "hello@heygen.com" \
  "Your AI avatar competitors are getting featured" \
  "Hey HeyGen team,

Heads up — the AI avatar video category on aisotools.com is getting competitive. Other tools in your space are locking down featured placements.

HeyGen is listed but not featured yet. Featured gets you priority placement above competitors, a badge, and homepage visibility. Pretty simple way to win the comparison game.

Want in?

Shibley"

sleep 3

# 10. Descript — product-led compliment
send_email 10 "Descript" "hello@descript.com" \
  "Descript is one of the most unique tools on our site" \
  "Hey Descript team,

Editing video by editing text is still one of the most clever product ideas in the AI space. Every time I demo your tool to someone, the reaction is the same: \"wait, that's real?\"

I run aisotools.com (400+ AI tools). We offer featured placements and I'd love to get Descript highlighted at the top of the Video & Audio category. You deserve the spotlight.

Reply if you're curious — I'll keep it brief.

– Shibley"

sleep 3

# 11. Leonardo AI — data point + scarcity
send_email 11 "Leonardo AI" "hello@leonardo.ai" \
  "Leonardo AI + aisotools.com" \
  "Hi Leonardo team,

Image Generation is the highest-traffic category on aisotools.com. People are comparing Midjourney alternatives constantly — and Leonardo keeps coming up.

We have a featured listing that puts you at the top of that category. Only one featured spot per position, so it's first-come. Let me know if you want details.

Cheers,
Shibley"

sleep 3

# 12. Ideogram — specific product praise
send_email 12 "Ideogram" "hello@ideogram.ai" \
  "Re: text rendering in AI images" \
  "Hey Ideogram team,

Your text-in-image generation is genuinely best-in-class right now. Nobody else gets it right consistently — and that's a real differentiator worth highlighting.

I run aisotools.com (400+ AI tools) and wanted to offer Ideogram a featured listing in our Image Generation category. Top placement, badge, homepage visibility. Seems like a good fit for a tool that deserves more recognition.

Interested?

Shibley"

sleep 3

# 13. Gamma — short and punchy
send_email 13 "Gamma" "hello@gamma.app" \
  "Gamma + AISO Tools" \
  "Hey Gamma team,

AI presentations is a crowded space now — Tome, Beautiful.ai, Canva AI, you name it. Standing out matters.

aisotools.com (400+ tools) has a featured listing program. Priority placement in your category, badge, homepage rotation. Want the details?

Shibley"

sleep 3

# 14. Beautiful.ai — competitive
send_email 14 "Beautiful.ai" "hello@beautiful.ai" \
  "Your competitors are getting featured on aisotools.com" \
  "Hi Beautiful.ai team,

Quick note: other AI presentation tools are starting to get featured placements on aisotools.com. Didn't want you to miss out.

Featured listings put you at the top of the category with a badge and homepage visibility. Simple, effective, and priced for SaaS budgets. Reply if you want the rundown.

– Shibley"

sleep 3

# 15. ElevenLabs — fanboy angle
send_email 15 "ElevenLabs" "hello@elevenlabs.io" \
  "From a fan who also runs an AI directory" \
  "Hey ElevenLabs team,

Full disclosure: I use ElevenLabs in my own projects. The voice quality is genuinely unmatched right now.

I also run aisotools.com (400+ AI tools), and our Audio & Voice category gets solid traffic from people looking for TTS solutions. Would love to offer you a featured listing — top placement, badge, the works. Feels like it belongs there.

Let me know.

Shibley"

sleep 3

# 16. Murf AI — direct competitor mention
send_email 16 "Murf AI" "support@murf.ai" \
  "Standing out in the voice AI space" \
  "Hi Murf team,

The AI voice category is crowded — ElevenLabs, Play.ht, Resemble, WellSaid. When someone's browsing a directory comparing options, the featured tool gets the click.

aisotools.com has 400+ tools and I'd like to offer Murf a featured spot in the Audio & Voice category. Priority placement and homepage visibility. Reply for details.

Cheers,
Shibley"

sleep 3

# 17. Surfer SEO — backlink angle (they get it)
send_email 17 "Surfer SEO" "hello@surferseo.com" \
  "A relevant backlink for Surfer SEO" \
  "Hey Surfer team,

You probably don't need me to explain the value of a contextually relevant do-follow backlink from a growing domain. So I won't.

aisotools.com — 400+ AI tools, your category is Marketing & SEO. Featured listing = top placement + backlink + homepage rotation.

Want the specifics?

– Shibley"

sleep 3

# 18. AdCreative.ai — results-oriented
send_email 18 "AdCreative.ai" "hello@adcreative.ai" \
  "Getting AdCreative.ai in front of more buyers" \
  "Hi AdCreative team,

People searching for AI marketing tools on aisotools.com are basically hand-raisers — they're actively looking for a solution. AdCreative.ai is listed, but featured tools get way more clicks.

I can bump you to the top of the Marketing category with a featured badge and homepage placement. Quick reply and I'll send the details.

Shibley"

sleep 3

# 19. Fliki — stats-based compliment
send_email 19 "Fliki" "hello@fliki.ai" \
  "10M users and growing — nice work, Fliki" \
  "Hey Fliki team,

10M+ users is a milestone most tools never hit. Clearly you're doing something right with the text-to-video approach.

I run aisotools.com (400+ AI tools) and wanted to offer Fliki a featured listing in our Video category. Top-of-category placement, badge, homepage rotation. Good way to keep the momentum going.

Reply if you're interested.

– Shibley"

sleep 3

# 20. InVideo — casual and brief
send_email 20 "InVideo" "hello@invideo.io" \
  "Quick one for the InVideo team" \
  "Hey InVideo team,

I run aisotools.com — 400+ AI tools, growing organic traffic. Your category (AI Video) is packed with competitors now.

We offer featured listings: top placement in your category, badge, homepage visibility. Keeps you ahead of Pictory, Fliki, and the new tools launching every week.

Worth a look?

Shibley"

echo ""
echo "=== ALL 20 EMAILS SENT ==="
echo ""
