# Matronae

Scripture on gender roles, left to right — forty-one passages from the Hebrew Bible, the New Testament, and the deuterocanon, arranged by who-leads-whom rather than by book or date.

Rendered as a design-monograph web reader modeled on *Déjà Vu* and *By Degrees*: one passage per page, paginated left-to-right with keyboard, wheel, or swipe. Each page paints itself with a color from a blue → white → red ramp keyed to the passage's spectrum score (−5 women lead … +5 women must not teach).

## What's in the book

Each page carries:

- A **title** (the passage or figure)
- A **source** line (Old or New Testament, book)
- A **year** (approximate date of event or composition; BCE negative)
- A **spectrum** score (−5 to +5)
- A **gesture** (the punch — usually a verse quoted directly)
- A **body** paragraph of textual and interpretive context
- A **citation** (verse references)
- A **primary-source link** (Bible Gateway)
- An **In plain terms** gloss

Navigation is strictly by spectrum. Ties broken by year ascending.

## The color ramp

| Score | Label              | Background |
| ----- | ------------------ | ---------- |
| −5    | women lead         | deep blue  |
| −3    | women prophesy     | blue       |
| −1    | women praised      | pale blue  |
|  0    | one in Christ      | neutral    |
| +1    | honor given        | pale red   |
| +3    | wives submit       | red        |
| +5    | women silent       | deep red   |

The reader's body background crossfades from one page to the next so the spectrum drift is felt, not just read.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
```

Static output lands in `build/`.

## Keybindings

- `→` or horizontal scroll — next (rightward) page
- `←` — previous (leftward) page
- `↓` / `↑` / Space / PageDown / PageUp — scroll the current page
- `Esc` — cover

## Author

Andrew Gauger
