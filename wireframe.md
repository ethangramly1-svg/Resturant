# Yuen's Chinese Food Carryout — Landing Page Wireframe

Single-page scroll, anchor-linked sections. Mobile collapses to single column.
Design system: `design.md` (Modern Eastern Heritage / 新中式).

---

## §0 — TOP NAV (sticky)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  YUEN'S 阮氏          MENU   VISIT          [ CALL (410) 327-2225 ]        │
│  ──carryout──                                                              │
└────────────────────────────────────────────────────────────────────────────┘
```
- Left: wordmark + tiny Chinese stamp + "carryout" descriptor
- Center: 2 anchor links (#menu, #visit), letterspaced uppercase
- Right: primary CTA button — vermilion fill, white text, no radius (calls the restaurant)

---

## §1 — HERO (100vh)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   [eyebrow]   [POSITIONING LINE — TBD]                                     │
│                                                                            │
│   The neighborhood                                  ┌──────────┐           │
│   takeout, made with                                │   ◆      │           │
│   patience.                                         │  始于东方 │           │
│                                                     │          │           │
│   [subhead TBD]                                     │ 01 // 03 │           │
│                                                     └──────────┘           │
│   [ CALL (410) 327-2225 ]  [ SEE THE MENU ]                                │
│                                                                            │
│        ░░░░░░░░░░░░  animated ink-smoke SVG behind  ░░░░░░░░░░░░          │
└────────────────────────────────────────────────────────────────────────────┘
```
- LEFT 60%: eyebrow (vermilion, letterspaced — TBD) / H1 (Playfair, ~5rem) / subhead TBD / dual CTA (call + menu)
- RIGHT 40%: vertical sequence label ("SEQUENCE") + boxed Chinese stamp (generic motif `始于东方`) + counter "01 // 03"
- BACKGROUND: full-bleed animated SVG — drifting ink-wash blobs at ~7% opacity behind everything

---

## §2 — MENU (#menu)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                   ──── ◆ ────                                              │
│                   THE MENU                                                 │
│                   [Real menu TBD — placeholder shown]                      │
│                                                                            │
│   [ Appetizers ] [ Soups ] [ Lo Mein ] [ Chow Mein ] [ Fried Rice ]        │
│   [ Chef's Specials ] [ Combo Plates ]                                     │
│                                                                            │
│   ─────────────────────────────────────────────────────────────────        │
│   APPETIZERS                                                               │
│                                                                            │
│   Egg Roll (1) ················································  $1.95     │
│   Spring Roll (2) ··············································  $2.50     │
│   Crab Rangoon (6) .............................................  $5.95     │
│   ...                                                                      │
│                                                                            │
│   ─────────────────────────────────────────────────────────────────        │
│   LO MEIN                                                                  │
│   ...                                                                      │
│                                                                            │
│                   [ VIEW FULL MENU (PDF) ]                                 │
└────────────────────────────────────────────────────────────────────────────┘
```
- Section header centered, ◆ ornament above, sub-line marked as TBD placeholder
- Category nav: thin ink-line tabs, current category darkens
- **Menu items: two-column flow per category** — name left, leader dots, price right-aligned (Songti serif)
- Vertical rhythm of ~6rem between categories (留白 — let it breathe)
- Bottom CTA: secondary ghost button → full PDF menu (URL TBD)

---

## §3 — VISIT (#visit)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ──── ◆ ────                                                              │
│   COME IN, OR CALL AHEAD                                                   │
│                                                                            │
│   ┌─────────────┐    ┌──────────────────────┐    ┌──────────────────┐     │
│   │  HOURS      │    │  ADDRESS             │    │  CONTACT         │     │
│   │             │    │                      │    │                  │     │
│   │  Open today │    │  536 N Chester St    │    │  (410) 327-2225  │     │
│   │  until 1AM  │    │  Baltimore, MD 21205 │    │                  │     │
│   │             │    │                      │    │  Carryout.       │     │
│   │  [Full      │    │  ┌──────────────┐    │    │                  │     │
│   │   weekly    │    │  │ Google Maps  │    │    │                  │     │
│   │   hours     │    │  │ iframe embed │    │    │                  │     │
│   │   TBD]      │    │  │              │    │    │                  │     │
│   │             │    │  └──────────────┘    │    │                  │     │
│   └─────────────┘    └──────────────────────┘    └──────────────────┘     │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```
- Three columns, equal weight
- HOURS: shows known fact ("Open today until 1 AM") + bracketed placeholder for the full weekly schedule + a "call for current hours" line. No invented week.
- ADDRESS: real address (linked to Google Maps), embedded Google Maps iframe below
- CONTACT: just the phone number for now — no email until Chris provides one

---

## §4 — ORDER CTA (full-bleed)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ████████████  VERMILION BG  ████████████████████████████████████████    │
│                                                                            │
│   Order by phone.                                                          │
│   Or come in.                                                              │
│                                                                            │
│            [ CALL (410) 327-2225 ]   [ GET DIRECTIONS → ]                  │
│                                                                            │
│   ████████████████████████████████████████████████████████████████████    │
└────────────────────────────────────────────────────────────────────────────┘
```
- Full-bleed `#B22222` background, rice-paper `#FCF9F2` text
- Two equal CTAs as outlined buttons (white border, hover = inverse)
- DoorDash / Grubhub / Uber Eats removed until integrations exist — add back when they go live

---

## §5 — FOOTER

```
┌────────────────────────────────────────────────────────────────────────────┐
│  YUEN'S 阮氏                                                                │
│                                                                            │
│  © 2026 YUEN'S CARRYOUT          MENU  VISIT  CALL          IG  FB         │
└────────────────────────────────────────────────────────────────────────────┘
```
- Wordmark, copyright, sitemap (3 links), social icons
- Thin top border (1px ink), generous padding

---

## Section flow logic

1. **Hero** — set tone (calm, premium, place-anchored)
2. **Menu** — answer the #1 user question ("what do you have?")
3. **Visit** — give the practical info (where, when, how to reach)
4. **Order CTA** — capture the conversion (call or directions)
5. **Footer** — escape hatch

Each section is one logical "stop" on the scroll. No section should require horizontal eye-darting.

*Story section removed — Chris's call. If a story is added later, slot it between Menu and Visit (the trust beat).*
