# LAUNCH TONIGHT — My Agent on GitHub Pages (phone only, $0)

**Use the FINAL zip the agent hands you tonight — not an older download.** The final zip is rebuilt after the free-brains wire-in. Check the file is named `github-my-agent.zip` and was handed to you tonight before you start. Never add `chris-agent-v2.html`, `chris-agent-free-ready.html`, or `chris-agent-free.html` to the repo — those carry your personal key and are never public.

**You need:** your phone, Chrome, the zip, a GitHub account (make one below if you don't have one), your free Gemini key (the one already in your personal agent — or make a new free one at `aistudio.google.com` → **Get API key** → **Create API key**). No computer, no money.

## A. Get the files on your phone

1. Open the chat, tap the `github-my-agent.zip` file to download it.
2. Open **Files** → **Downloads**, tap `github-my-agent.zip` → **Extract**. You should see a `github-my-agent` folder with `my-agent.html` inside.

## B. GitHub — create the repo

3. In **Chrome** (not the GitHub app), go to `github.com` and sign in. No account yet: tap **Sign up** and finish it first.
4. Tap **+** (top right) → **New repository**. Name: `my-agent`. Tap **Public**. Tap **Create repository**. Leave everything else blank.

## C. Upload — folder by folder, 17 rounds (Chrome only; the GitHub app can't upload)

5. In Chrome, open your new repo. Tap **Add file** → **Upload files** → **choose your files**, pick the files, type a short commit message, tap **Commit changes**. Repeat per round:
   - **Round 1 — root (7 files):** `my-agent.html`, `business-builder-worker.html`, `README.md`, `LICENSE`, `RELEASE-NOTES.md`, `agent-manifest.json`, `sw.js`
   - **Round 2 — `icons/` (2 files):** open the `icons` folder in the repo first, then upload `my-agent-icon-192.png`, `my-agent-icon-512.png`
   - **Round 3 — `apps/` (1 file):** open the `apps` folder, upload `README.md`
   - **Rounds 4–17 — one per app folder (2 files each: `README.md` + the `.html`):** `agent-context-pack`, `crypto-learning-tracker`, `debate-the-dead`, `deep-clean-checklist-bundle`, `forklift-inspection-pack`, `houseplant-care-cards`, `human-ai-helper`, `night-shift-survival-planner`, `ocean-cleanup-action-pack`, `painting-estimate-calculator`, `stoic-coach-7-moments`, `stoic-daily-practice`, `understanding-refugees-guide`, `verified-oracle`
6. **`.nojekyll` (hidden file — the picker won't show it):** in the repo tap **Add file** → **Create new file**, name it `.nojekyll`, leave the contents empty, tap **Commit new file**.

## D. Turn on Pages

7. In the repo tap **Settings** (on a phone it may sit inside the **More** menu) → **Pages** in the left sidebar.
8. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Set **Branch** to **main** and the folder to **/(root)**. Tap **Save**.
9. Wait up to 10 minutes. Refresh the Pages settings — GitHub shows your live address: `https://<your-username>.github.io/my-agent/`

## E. Install it like an app + pick a brain (no key needed to start)

10. Open `https://<your-username>.github.io/my-agent/my-agent.html` in Chrome.
11. Tap **⋮** (top right) → **Add to Home screen** → **Add**. Tap the new **My Agent** icon — it opens full-screen.
12. **Start with Pollinations or OVHcloud — no key, zero setup:** tap the **Pollinations** tab (or **OVHcloud**) and just type and send. **Puter.js** needs you to sign into your own free Puter account first (tap **Sign in to Puter** in the app; it burns your own free monthly allowance — size unpublished). **Gemini** needs your own free key: tap **Customize**, paste your free Gemini key into the **Gemini key** field (make one at `aistudio.google.com` → **Get API key** → **Create API key** if you don't have one). It saves automatically. **Groq** and **OpenRouter** need their own free keys the same way. **Cloudflare** is optional — the app itself warns direct Cloudflare calls fail in a browser (CORS); use Pollinations, OVHcloud, or Gemini to start.

## F. Share — SEPARATE approval, your tap

13. **Do not share the storefront link yet.** The public storefront share is still waiting on your approval — that is a separate tap after launch, not part of this checklist.

## G. Check it worked

14. Live link opens with no error. 15. Type a question, tap **Send** — you get an answer (try the **Pollinations** tab first — no key needed). 16. Close it, tap the home-screen icon — it opens full-screen again. 17. If anything fails, re-download a fresh copy of `my-agent.html` from the repo and try again — your key and settings live in the browser, not the file.

**If a step looks different on your screen, stop and tell Luna what you see — don't guess a button.**
