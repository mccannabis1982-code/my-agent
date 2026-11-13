# My Agent — Your Own Personal AI Agent in One File

**My Agent is a single HTML file that turns into your own personal AI agent.** No install, no account, no server, no subscription. Download it, open it in your browser, add your own free API key, and it chats, researches, debates, helps with jobs, and works hands-free while you drive.

Made by Christopher McCann, Kingwood, TX. Questions or help: [mccann.c808@gmail.com](mailto:mccann.c808@gmail.com).

## What it does

- **Multi-brain chat** — talk to Gemini, Groq, OpenRouter, Pollinations, OVHcloud, Puter, or Cloudflare. Pick one brain, or ask them all at once (Ask-all swarm) and compare answers. Pollinations and OVHcloud need no key at all — they work the moment you open the file.
- **Debate mode** — make two AI brains argue a question from opposite sides, then judge the winner.
- **Job mode** — fill in your own resume facts once (name, city, work history, skills, what you want) and it tailors job answers to you. It ships with blank placeholders — your facts stay yours.
- **Driving mode** — hands-free listen-and-talk loop for the road.
- **Voice in and out** — tap the microphone to talk, and it can read answers aloud. Your device's own voice — never a voice clone of anyone.
- **Teach-it memory** — tell it things to remember and it saves them on your device only.
- **Live search** — Gemini grounding looks up current information instead of guessing.
- **OpenRouter model picker** — choose which OpenRouter model answers.
- **Integrations panel** — example code for legitimate public APIs (no login needed), so you can draft your own connections.
- **Avatar customizer** — built-in choices, your initials, or your own photo.
- **Daily request counter** — see how much of your free tier you've used today.
- **Installs like an app** — add it to your phone's home screen and it opens full-screen.

## Your journey: from finding it to using it — phone only, no computer needed

Everything below is done on your phone, in Chrome. There are no computer steps anywhere in this guide.

1. **Open the live link in Chrome** — the seller shares a link like `https://<username>.github.io/<repo-name>/my-agent.html`. Tap it and the app opens, ready to use. No download, no install from a store.
2. **Add to Home screen:** in Chrome tap the three-dot menu (⋮) → **Add to Home screen** → **Add**. Now it has an icon on your phone like any app. Tap it and it opens full-screen.
3. **Add your free API key** (see below) — then just start talking to it.

**No live link? Download it instead:** open the repo in Chrome, tap the file **`my-agent.html`**, tap **Download** (the download icon, or the three-dot menu → Download). Then open your Files app → Downloads, tap `my-agent.html`, and choose **Chrome** when Android asks which app to use. The app runs in Chrome — but add it to your home screen from the live link above, not from a downloaded file: a downloaded file opens at a `content://` address on your phone, and Chrome's home-screen shortcut is made for real web addresses (`https://`), so the live link is the reliable way to get the icon. If the seller hasn't shared a live link yet, ask them for it — it's free for them to turn on (see "GitHub Pages" below).

## Install instructions (step by step) — on your phone, in Chrome

### The live link (recommended — this is how you get the home-screen icon)

1. Open the seller's live link in Chrome (it looks like `https://<username>.github.io/<repo-name>/my-agent.html`).
2. Tap ⋮ (top right) → **Add to Home screen** → **Add**.
3. Tap the new **My Agent** icon on your home screen. It opens full-screen, like an app.
4. Add your free API key (below). Done — it remembers your key and your settings on that device.

### The downloaded file (try it without a live link)

1. In Chrome, open the repo, tap `my-agent.html`, then tap **Download**.
2. Open your Files app → Downloads, tap `my-agent.html`, and choose **Chrome** when asked.
3. The app runs in Chrome. Add your free API key (below) and start chatting.
4. To get the home-screen icon, use the live link above — the downloaded file opens at a `content://` address, and Chrome's **Add to Home screen** is built for real web addresses, so the icon step is only reliable from the live link.

The live link already includes everything the app needs (its name, icon, and offline support) — nothing extra to keep next to the file. If you use the downloaded file, keep `agent-manifest.json` and the `icons/` folder next to `my-agent.html` in the same folder so the home-screen install looks and feels like a real app. The file still works without them.

## Add your own free API key

My Agent ships with **no API key inside it** — the key field is empty on purpose. You bring your own free key, and it stays in your browser only. It is never sent to the seller.

**Gemini (recommended — free, no card needed):**

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account and click **Get API key** → **Create API key**.
3. Copy the key.
4. In My Agent, open **Customize** and paste it into the **Gemini key** field. It saves automatically in your browser.

**Groq (free, no card needed):**

1. Go to [Groq Console](https://console.groq.com/).
2. Sign in and create an API key under **API Keys**.
3. Paste it into the **Groq key** field in My Agent.

**OpenRouter (free models available, no card needed for free models):**

1. Go to [OpenRouter Keys](https://openrouter.ai/keys).
2. Sign in and create a key.
3. Paste it into the **OpenRouter key** field in My Agent, then pick a model in the OpenRouter model picker.

You only need **one** of the three to start chatting. Add more later if you want the Ask-all swarm and Debate mode. **Pollinations and OVHcloud need no key at all** — they are already on and work the moment you open the file (see Brains below).

## Brains — what answers, and what each one costs

My Agent has seven brains. Three need a free key you paste in yourself; two need no key at all; one needs your own free sign-in; one needs a free Cloudflare account. No brain is unlimited — every free tier has a cap, and the app tells you the cap honestly instead of hiding it.

**No key needed — work straight away:**

- **Pollinations (gpt-oss-20b)** — no key, no sign-in, browser-direct. Best-effort free lane: the anonymous limit is **not published**, so expect 402 errors under load — the app shows the retry time when one is given and suggests another brain. This lane may be retired without notice. Do not use the keyed API at gen.pollinations.ai — that one is paid.
- **OVHcloud AI Endpoints (gpt-oss-120b first choice, plus gpt-oss-20b, Qwen3.5-397B, Qwen3.8-27B, Mistral-Small-3.2-24B, Qwen3.5-9B)** — no key, no sign-in, browser-direct. Anonymous tier: **about 2 requests/minute per IP per model**. The limit is per model, so switching models raises your total throughput. gpt-oss-120b is the strongest free model in the app.

**Your own free sign-in (optional, never the default):**

- **Puter.js (gpt-5.5, claude-opus-5-5, grok-4.7, glm-5.3, deepseek-v4-pro, gemini-3.8-flash)** — sign in to your own free Puter account on first use; no key to paste. Each user burns their own **free monthly allowance, size unpublished** — Puter may ask you to top up. If you are not signed in, this brain stays out of Ask-all and Debate.

**Free key needed (paste your own key in Customize):**

- **Gemini** — free tier, no card. Get a key at Google AI Studio.
- **Groq** — free tier, no card. Get a key at console.groq.com.
- **OpenRouter `:free` models** — free models need no card. Get a key at openrouter.ai. Free tier: 50 requests/day (1,000/day only after a one-time $10 credit purchase — a spend, not free to reach).

**Free Cloudflare account needed (4th keyed brain):**

- **Cloudflare Workers AI (Llama 3.3 70B, gpt-oss-120b, Llama 3.1 8B)** — free Workers account, no card stated. **10,000 Neurons/day**, resets 00:00 UTC; over the cap calls fail and never bill you. **Browser warning: calling Cloudflare's API straight from this file is expected to FAIL in a browser** — the API answers preflight requests with "405 OPTIONS not supported" and sends no CORS headers, so the browser blocks the call. This is not a bug in your key or account. Working routes: (1) a tiny free Cloudflare Worker as a proxy — the Worker calls the API server-side, where there is no CORS; (2) the Termux Node agent, which has no browser restrictions. If Cloudflare ever adds CORS support, this brain will work directly.

**Not wired as free brains (checked Nov 12, 2026):** LLM7.io (weak, 2 small models, metered cost), Together AI (gated behind a $15 first purchase), Fireworks ($1 starter credit only), DeepInfra (no free tier on official pricing), DuckDuckGo AI Chat (no official API, bot challenge blocks programmatic use), Chutes (free tier ended Mar 2026), SiliconFlow / Zhipu / ModelScope (identity / real-name verification blockers). Mistral Free mode, NVIDIA NIM, and Cohere trial are documented maybes only — not wired in.

## Frequently asked questions

**Does it need the internet?**
The file itself opens and works offline, but AI answers need the internet — Pollinations, OVHcloud, Puter, Gemini, Groq, OpenRouter, or Cloudflare answer over the web (Pollinations and OVHcloud need no key; the others need your free key or sign-in). Without internet, the app still opens, but it can't fetch AI replies.

**Does it cost anything?**
The file is a one-time purchase. The API keys are free: Gemini's free tier, Groq's free tier, and OpenRouter's free models need no card. Free tiers have daily limits — if you hit one, the AI company will say so, and you can wait until the next day or switch to another brain.

**Is my key safe?**
Your key is stored only in your own browser (local storage) on your own device. It is never sent to the seller, and this repo contains no key at all. Don't share your key with anyone, and don't paste it anywhere except the key field inside the app.

**Should I put passwords or my Social Security number in it?**
No. Never paste passwords, your SSN, bank details, or anyone else's private information into the chat. Keys go in the key fields only. The app is a helper, not a vault.

**Does it know who I am?**
No — it ships blank. It only knows what you type into Job mode and Teach-it memory, and that stays on your device. Delete the file and clear your browser data and it's gone.

**Which browsers work?**
Chrome on Android is best for Add to Home screen and voice features. Safari on iPhone also works (tap Share → Add to Home Screen). Use your phone's browser — no computer needed.

**What if it stops working?**
Free-tier limits reset daily. If the app itself misbehaves, re-download a fresh copy of `my-agent.html` from this repo — your settings live in the browser, not the file, so a fresh copy usually fixes it. Still stuck? Email [mccann.c808@gmail.com](mailto:mccann.c808@gmail.com).

## Also in this repo

- **`business-builder-worker.html`** — Business Builder Worker ($15): everything My Agent does, plus a research mode that cites a source for every claim, a fresh $0-startup business idea every hour, and a launch wizard that waits for your approval at every step. Same deal: one file, bring your own free key.
- **`apps/`** — 14 more single-file apps and guides from the same store (Stoic companions, a painting estimate calculator, a night-shift planner, and more). See [`apps/README.md`](apps/README.md) for the list and prices.
- **`agent-manifest.json`** and **`icons/`** — the install manifest and app icons for My Agent's home-screen install. Keep them next to `my-agent.html`.

## GitHub Pages — open it straight from the web (for the repo owner)

GitHub Pages serves this repo over `https`, so customers can open My Agent in the browser and Add to Home screen without downloading anything. It is free, and the whole setup is done on your phone, in Chrome. To turn it on:

1. **Use Chrome, not the GitHub app.** The GitHub app can create a repo, but it can't upload files or change Pages settings — those steps need the GitHub website. In Chrome, go to `github.com/<username>/<repo-name>/settings/pages` (or open the repo → **Settings** — on a phone it may sit inside the **More** menu — then **Pages** in the left sidebar). If a link opens the GitHub app instead, long-press it and choose **Open in Chrome**.
2. The repo must be **Public** — on a free GitHub account, Pages only works from public repos.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to **main** and the folder to **/(root)**, then click **Save**.
5. Wait a minute (it can take up to 10 minutes for the first publish), refresh the Pages settings — GitHub shows the live address, in the form `https://<username>.github.io/<repo-name>/`.
6. The live app link is `https://<username>.github.io/<repo-name>/my-agent.html`. Share that link and customers can install straight from it.

This repo already includes an empty `.nojekyll` file at the root, so GitHub serves the files exactly as-is instead of running them through its Jekyll builder.

### Uploading the files from your phone (for the repo owner)

Create the repo first: in the GitHub app tap **+** → **New repository**, name it (e.g. `my-agent`), set it to **Public**, and create it. Then switch to **Chrome** for the upload — the GitHub app can't upload files.

1. In Chrome, open the repo on github.com. Tap **Add file** → **Upload files** → **choose your files**, pick the files, type a short commit message, and tap **Commit changes**.
2. **Upload folder by folder.** Drag-and-drop doesn't work on a phone touchscreen, and whole-folder upload isn't reliable in Chrome on Android — so open each folder in the repo first, then upload that folder's files in one batch (you can pick several files at once). There are 39 files in 17 folders (root, `apps/`, `icons/`, and 14 app folders); the root files first, then `icons/`, then each folder inside `apps/`.
3. **Start with the root files only** and the site is already live: `my-agent.html`, `business-builder-worker.html`, `README.md`, `LICENSE`, `RELEASE-NOTES.md`, `agent-manifest.json`, `sw.js`, plus `icons/` (2 files). Turn on Pages, share the live link, and add the `apps/` folders afterwards at your own pace.
4. **`.nojekyll` is a hidden file** — your phone's file picker may not show it, so you can't select it to upload. Instead, in the repo tap **Add file** → **Create new file**, name it `.nojekyll`, leave the contents empty, and commit it.
5. Every file here is small (the largest is under 200 KB; 964 KB total), far below GitHub's 25 MB per-file browser-upload limit, and 39 files is below the 100-file batch limit — size is not a problem, only the folder-by-folder tapping is slow. If you have access to a terminal app on your phone (Termux), `git clone` + `git push` uploads everything in one go — but it is not required; the browser steps above work on their own.

Full GitHub instructions: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). GitHub itself: [github.com](https://github.com/).

## License

MIT License — see [LICENSE](LICENSE). You may use, copy, and modify this software freely; the seller's paid files are licensed for the buyer's personal use — please don't resell, re-upload, or share them publicly. The MIT license text is here: [opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).

## Support

Email: [mccann.c808@gmail.com](mailto:mccann.c808@gmail.com)
