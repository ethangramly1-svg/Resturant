# Yuen's Chinese Food Carryout — Landing Page Wireframe

Single-page scroll, anchor-linked sections. Mobile collapses to single column.
Design system: `design.md` (Modern Eastern Heritage / 新中式).

---

## §0 — TOP NAV (sticky)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  YUEN'S 阮氏          MENU   STORY   VISIT   [ ORDER ONLINE → ]            │
│  ──carryout──                                                              │
└────────────────────────────────────────────────────────────────────────────┘
```
- Left: wordmark + tiny Chinese stamp + "carryout" descriptor
- Center: 3 anchor links (#menu, #story, #visit), letterspaced uppercase
- Right: primary CTA button — vermilion fill, white text, no radius

---

## §1 — HERO (100vh)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   [eyebrow]   FAMILY-OWNED · SINCE 1987                                    │
│                                                                            │
│   The neighborhood                                  ┌──────────┐           │
│   takeout, made with                                │   ◆      │           │
│   patience.                                         │  传家     │           │
│                                                     │          │           │
│   [body copy 2 lines]                               │ 01 // 04 │           │
│                                                     └──────────┘           │
│   [ ORDER ONLINE → ]  [ SEE THE MENU ]                                     │
│                                                                            │
│        ░░░░░░░░░░░░  animated ink-smoke SVG behind  ░░░░░░░░░░░░          │
└────────────────────────────────────────────────────────────────────────────┘
```
- LEFT 60%: eyebrow (vermilion, letterspaced) / H1 (Playfair, ~5rem) / 2-line subhead / dual CTA
- RIGHT 40%: vertical sequence label ("SEQUENCE") + boxed Chinese stamp ("传家" — passed-down craft) + counter "01 // 04"
- BACKGROUND: full-bleed animated SVG — drifting ink-wash blobs at 7% opacity behind everything

---

## §2 — MENU (#menu)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                   ──── ◆ ────                                              │
│                   THE MENU                                                 │
│                   What we cook every day.                                  │
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
- Section header centered, ◆ ornament above
- Category nav: thin ink-line tabs, current category darkens
- **Menu items: two-column flow per category** — name left, leader dots, price right-aligned (Songti serif)
- Vertical rhythm of ~6rem between categories (留白 — let it breathe)
- Bottom CTA: secondary ghost button → full PDF menu

---

## §3 — STORY (#story)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ──── ◆ ────                                                              │
│   OUR STORY                                                                │
│                                                                            │
│   ┌──────────────────────────┐    ┌─────────────────────────────────┐     │
│   │                          │    │  Three generations of the Yuen  │     │
│   │   [family photo —        │    │  family have stood at this wok. │     │
│   │    grandparents at       │    │                                 │     │
│   │    the wok, B&W]         │    │  [3 short paragraphs:           │     │
│   │                          │    │   - founding 1987               │     │
│   │                          │    │   - the recipes                 │     │
│   │                          │    │   - today]                      │     │
│   └──────────────────────────┘    └─────────────────────────────────┘     │
│                                                                            │
│         「 慢工出細活 」                                                    │
│         "Slow work brings fine results."                                   │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```
- Two-column: image left (B&W treatment), narrative right
- Pull quote: centered Chinese proverb + English translation in italic serif
- Mobile: stacks, image first

---

## §4 — VISIT (#visit)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ──── ◆ ────                                                              │
│   COME IN, OR CALL AHEAD                                                   │
│                                                                            │
│   ┌─────────────┐    ┌──────────────────────┐    ┌──────────────────┐     │
│   │  HOURS      │    │  ADDRESS             │    │  CONTACT         │     │
│   │             │    │                      │    │                  │     │
│   │  MON  CLOSED│    │  [street]            │    │  [phone]         │     │
│   │  TUE  11–10 │    │  [city, ST zip]      │    │                  │     │
│   │  WED  11–10 │    │                      │    │  [email]         │     │
│   │  THU  11–10 │    │  [embedded map —     │    │                  │     │
│   │  FRI  11–11 │    │   greyscale tiles]   │    │  Parking: free   │     │
│   │  SAT  12–11 │    │                      │    │  Curbside avail. │     │
│   │  SUN  12–9  │    │                      │    │                  │     │
│   └─────────────┘    └──────────────────────┘    └──────────────────┘     │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```
- Three columns, equal weight
- Hours as a clean monospaced-ish table (Songti tabular)
- Map: muted greyscale tiles so it doesn't clash with palette
- Right column doubles as overflow for ops details

---

## §5 — ORDER CTA (full-bleed)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ████████████  VERMILION BG  ████████████████████████████████████████    │
│                                                                            │
│   Order in 90 seconds.                                                     │
│   Pickup ready in 20.                                                      │
│                                                                            │
│   [ DOORDASH ]  [ GRUBHUB ]  [ UBER EATS ]  [ CALL (xxx) xxx-xxxx ]       │
│                                                                            │
│   ████████████████████████████████████████████████████████████████████    │
└────────────────────────────────────────────────────────────────────────────┘
```
- Full-bleed `#B22222` background, rice-paper `#FCF9F2` text
- One big headline, four equal CTAs as outlined buttons (white border, hover = inverse)
- Sets up the conversion ask after the trust-building sections

---

## §6 — FOOTER

```
┌────────────────────────────────────────────────────────────────────────────┐
│  YUEN'S 阮氏                                                                │
│                                                                            │
│  © 2026 YUEN'S CARRYOUT          MENU  STORY  VISIT  ORDER       IG  FB    │
└────────────────────────────────────────────────────────────────────────────┘
```
- Wordmark, copyright, sitemap, social icons
- Thin top border (1px ink), generous padding

---

## Section flow logic

1. **Hero** — set tone (premium, calm, family-owned)
2. **Menu** — answer the #1 user question ("what do you have?")
3. **Story** — build trust (why this isn't the same as every other takeout)
4. **Visit** — give the practical info (where, when, how)
5. **Order CTA** — capture the conversion (now that they trust you)
6. **Footer** — escape hatch

Each section is one logical "stop" on the scroll. No section should require horizontal eye-darting.
