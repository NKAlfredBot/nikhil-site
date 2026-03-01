---
title: "Bots Might Save the Dead Internet"
description: "Using AI agents to curate high-quality content from the internet wasteland, creating personalized oases of discovery"
date: "2026-02-23"
tags: ["ai", "bots", "curation", "internet", "social-media"]
source: "substack"
original_url: "https://fullstackhuman.substack.com/p/bots-might-save-the-dead-internet"
---

The 2026 internet is a vast wasteland, filled with trash and hostile actors ready to yell at you, steal your belongings, or hypnotize you into stupor.

But along those Mad Max-like badlands are some oases of wonder; around the barren bends are jungles full of exotic ideas and rejuvenating tonics.

The mission is to avoid the bad stuff and find the good.

Most of us internet users have not equipped the hazmat suits that seem necessary to go out on our own excursions to find wonders. Without protective gear, we're constantly inhaling the detritus of trans-fatty information and the fumes of white hot takes.

Many of us who can feel the effects of spending too much time on today's internet have resorted to a couple of things: touch grass, and build your own attentional defenses.

These are both good. But maybe there's another tool — using the very AI agents that are spawning exponential internet trash to go find the internet treasures.

![Hazmat suit illustration](https://substackcdn.com/image/fetch/$s_!vtOk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F75f54610-7428-4732-9af8-a4b1be595dfe_500x492.webp)

## An experiment

Earlier this month, I decided to deploy my Open Claw bot, Alfred, on a mission: bring me 5 long form essays that could span topics ranging from sports to tech to biodesign to art, the weirder the better, but with a quality bar similar to the New Yorker or something like [pudding.cool](https://pudding.cool).

To set it up for its mission I did a few things:

- I gave it a small list of accounts on X that I respected, and another list of media outlets (like The New Yorker and pudding.cool specifically) whose work I thought was of the caliber I wanted in my daily reading. I did this in the Slack message to Alfred via Open Claw, although I will switch to a markdown file for ongoing memory/updates.

- I asked it to follow 500 accounts on X, but to spread out the act of following over a week. We set up a cron job to follow 5 accounts every hour, with the hopes of evading bot detectionWe got to ~300 follows before getting detected by Cloudflare. We could try adding some jitter to how many to follow and when to follow if we wanted to try more evasion

- I then asked it to send me 5 essays/long reads from those followed accounts

These were the results:

5 interesting reads from your feed tonight:

1. "Life At The Edge" by @asadkkhaliq — essay on local AI and intelligence diffusing to edge devices like computing did in the 80s/90s. Michael Dempsey (Compound VC) recommended it.

→

[Asad Khaliq@asadkhaliq(essay) Life At The Edge

"Local AI" today is mostly about giving models OS-level access so that more files and context can be transferred to the cloud for inference. But intelligence is about to diffuse to the edge just as computing did in the 80s and 90s

Some thoughts on rent 1:47 PM · Feb 6, 2026 · 109K Views12 Replies · 20 Reposts · 282 Likes](https://x.com/asadkkhaliq/status/2019769887087046986)

2. Artforum: "Forever 2001" — Rachel Wetzler on artist Banks Violette and the long arc of the Bush era
→ https://www.artforum.com/features/banks-violette-forever-2001-262227/

3. Claude Code Teams docs — Agent swarms that delegate to parallel teammates who research, debug, and build while coordinating. (Uses lots of tokens, experimental)
→ https://code.claude.com/docs/en/agent-teams

4. OpenAI + Ginkgo autonomous lab — GPT-5 connected to a lab, proposing experiments at scale, learning from results. 40% protein production cost reduction.
→
[https://x.com/OpenAI/status/2019455692298817817](https://x.com/OpenAI/status/2019455692298817817)

5. Kareem Carr on software engineering — "The washing machine didn't end washing clothes. The real software engineering is about to begin: niche applications."
→
[Dr Kareem Carr@kareem_carrI don't see why the end of software engineers has to mean the end of software engineering. The washing machine didn't mean the end of washing clothes.

The real software engineering is about to begin: a torrent of new software for niche applications.6:56 PM · Feb 6, 2026 · 4.75K Views4 Replies · 1 Repost · 36 Likes](https://x.com/kareem_carr/status/2019847622031536214)

The underlying list of accounts and topics should have pushed the output essays to cover wider ground, but on any given day, this list seems fine.

A little art, a little politics, a little tech. Not super weird (yet) and no sports (yet) nor music or interactive pieces (yet), but it was a good start.

## Some immediate reactions

I read everything it gave me. It was better than going on X. I didn't feel my heart rate spike. I didn't have to contend with stupid hot takes inserting themselves into my internal dialogue.

But it was still limited to my curation. Alfred was a proxy for me, taking on the radiation risk of entering the nuclear content fields.

I wanted more variation than I could give in Alfred's instructions. If Alfred had some friends also depositing their gems in a common vault that I could view, we'd be in a better place with diversity of content.

## Where this could head

On my own, I could spin up more agents with different personalities. I could even prompt them to bring me surprising content. But no matter what variance I give it, my single person's directions will place a ceiling on what kind of diversity of information I might get back.

Instead, if more people I respected set up bots with interesting perspectives and pointed them at a common database, it might allow for an interesting higher-quality small-scale social media network, where the contributors are limited by design.

Think of it like this:

- People continue to post content into the public commons (anywhere on the internet that is readable by anyone)
- Bots are configured to look for certain things: topics, styles, lengths, "difficulty", particular cultural perspectives, etc
- Bots traverse the public commons and bring back curated media to their home network / human
- Humans are able to see a smaller set of higher quality / more aligned information
- Humans can be in many networks, but not forced to engage with a single newsfeed like we currently do on X, IG, etc with centralized rules for what we get to see

## Implementation details

In the environment I describe above, we may see a few things change on the technical side:

- Content would need to be tagged in ways that our personal bots could read and make good curatorial decisions on our behalf.
- Personal websites/blogs could become more popular again, both because vibecoding them is fairly trivial now, and because of the need to change the metadata associated with content.
- Something like RSS could be the protocol to allow bots to find content, but it might need different semantics.I ran this idea by Claude, and it suggested: "Current RSS is basically \"title, description, link, date.\" Bot-native feeds would want more: content type, topic tags, relationship metadata (\"this post is a response to X\"), confidence signals, maybe even the author's own framing of who they think should see this. You'd essentially be publishing not just content but routing hints — your bot telling other bots how to route it."

The nice thing is, this is quite easy to try out, and it doesn't need to be some mega-product. All we really need to do is decide where we are going to dump our curated media/data.

From there, each of us could read from that data however we'd like. The simplest interface would just be a text file with new curations appended to the bottom of the list.

We could also offer UIs that others could use out-of-the-box if they did not want to build their own. Those UIs could do more interesting filtering and surfacing, and be built with the kind of design that people are used to experiencing in modern web apps.

The networks themselves should be small and curated to avoid just re-building the same mess we have now. Those networks could potentially be networked together, and the UIs built to access the underlying media would play a large role in how the data is experienced.

## Let me know!

If any of you who made it this far want to try sharing an information portal together, shoot me a comment or message and we can experiment!

The internet is worth saving. We just need might need help from a few scouts.
