# Release Notes

## v1.0.0 — November 12, 2026

First public release of the My Agent GitHub package.

### What's in this release

- **My Agent (`my-agent.html`) — $12 (suggested test price).** The generic, keyless personal AI agent: multi-brain chat (Gemini, Groq, OpenRouter, Pollinations, OVHcloud, Puter, Cloudflare), Ask-all swarm, Debate mode, Job mode, hands-free Driving mode, voice input and read-aloud, teach-it memory (saved on the buyer's device), avatar customizer, live search (Gemini grounding), model pickers, integrations panel for legitimate public APIs, daily request counter, and home-screen install via `agent-manifest.json` + `icons/`. Ships with the key field empty — the buyer adds their own free key. Pollinations and OVHcloud need no key at all; Puter needs the buyer's own free Puter sign-in (never the default brain).
- **Business Builder Worker (`business-builder-worker.html`) — $15 (suggested).** Everything My Agent does, plus research mode with a cited source for every claim, a fresh $0-startup business idea every hour (with browsable history), and a launch wizard that waits for the buyer's approval at every step.
- **14 more single-file apps in `apps/`** — Stoic companions, practical guides, calculators, and planners (see `apps/README.md` for names, descriptions, and prices).
- **README.md** — customer-facing install guide, API-key setup, FAQ, and GitHub Pages instructions.
- **`.nojekyll`** — empty file at the root so GitHub Pages serves the files exactly as-is (no Jekyll processing).
- **LICENSE** — MIT License.
- **This file** — release notes.

### Sources and checks for this release

- `my-agent.html` is a byte-identical copy of the scrubbed generic template `chris-agent-template.html` (verified Nov 12, 2026: placeholders instead of personal facts, empty key field, zero personal identifiers).
- `business-builder-worker.html` was the newest canonical file when first packaged, but the package copy went stale — the launch-prep check on Nov 12, 2026 found it still carried the pre-neutralization demos (placeholder "My mom's name is Debra", Houston weather coordinates, Kingwood geocoding). It was re-synced Nov 12, 2026 from the canonical root file `~/workspace/business2/business-builder-worker.html` (Denver demos, "My favorite color is blue") and is now byte-identical to it (cmp clean).
- Every file in the package was scanned for key-like patterns before release — 0 hits (see verification in the release checklist).
- `my-agent.html` contains zero personal identifiers. The `apps/` files intentionally carry the seller's public contact (business email mccann.c808@gmail.com) and bylines — that is public seller information, not a private identifier. No file in this package contains an API key or password.

### Known limits

- AI answers need internet. Pollinations and OVHcloud need no key; Gemini, Groq, OpenRouter, and Cloudflare need a free key from the buyer, and Puter needs the buyer's own free Puter sign-in. Free tiers have daily limits; the app reports them but cannot raise them.
- The file itself works offline, but without internet it cannot fetch AI replies.
- The hourly business-idea timer in Business Builder Worker only runs while the page stays open.
- Research mode answers from the AI brain's knowledge; it cannot reach the dark web, paywalled pages, or logged-in accounts. Check every cited source yourself before spending money.
- The Stoic apps answer only with verified verbatim quotes from Marcus Aurelius, Epictetus, and Seneca (public-domain texts), with citations shown.
- Voice features work best in Chrome; some browsers limit microphone or speech features.
- The paid files are sold for the buyer's personal use — please don't resell, re-upload, or share them publicly. Support: mccann.c808@gmail.com.

### What is NOT in this package (on purpose)

- `chris-agent-v2.html`, `chris-agent-free-ready.html`, and `chris-agent-free.html` are never published — those contain a baked-in personal API key and go only to the owner as direct attachments.
