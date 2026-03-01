---
title: "A studio, music, dirt on the floors, and touch sensors"
description: "Building an interactive sound installation where visitors walk on soil embedded with sensors that control the music"
date: "2024-02-23"
tags: ["art", "music", "installation", "arduino", "creative-coding"]
source: "substack"
original_url: "https://fullstackhuman.substack.com/p/a-studio-music-dirt-on-the-floors"
---

After spending the last 6 months "working" from home, I found a studio! I've been here two weeks and it's already been miraculous for focus and inspiration. There's something special about having a separation of spaces, a nice little walk to clear the head, and a room where I can do pretty much *anything*.

The studio is inside an art gallery called [Black Brick Project](https://www.blackbrickproject.com/). When I moved in, I found out that we'll have an open studio + new gallery starting ~April 10th where I can show work. A deadline! After this very unstructured last few months, it's actually kinda refreshing. That got the wheels spinning…

I'm considering covering the floor of my studio with dirt. When visitors arrive, they'll take off their shoes and walk around. As they walk around, they'll hear sounds and begin to realize that their movements are part of the soundscape — they're controlling parts of the composition.

To do this, I'll place sensors under the soil and run them into an Arduino, which will communicate with Ableton. I'll compose the music modularly, with some parameters of the audio effects or perhaps even the note creation controlled by the audience.

To test this setup quickly, I wired up some touch capacitive sensors and used the Ableton/Max For Live [Connection Kit](https://github.com/Ableton/m4l-connection-kit/blob/main/Arduino/Firmata/StandardFirmata.ino) to get the Arduino talking to Ableton. It worked pretty well without much heavy lifting on my end. No coding, just some setup and connecting wires to the right places!

In the video below you'll hear the note get modulated by each sensor. The second one is easier to hear — it shifts the pitch. The first one adds an LFO and changes the panning, which is harder to hear without headphones.

Regardless, it worked! I extended the contact area for each sensor by alligator-clipping scrap metal to the sensors, which also worked. Now I need to grab some soil and see how the sensors respond when buried in dirt :)

Here's another video of just one touch sensor wired into Arduino + Ableton:

Stay tuned for more progress updates. I'd love to hear reactions, questions, ideas… and if you're in NYC message me to come drop by the space!
