// Spectrum ramp: -5 (pale red / women lead) → 0 (pale green / one in Christ) → +5 (pale violet / women silent).
// Each bucket is a very pale ROYGBIV wash — red, red-orange, orange, amber, yellow,
// green, teal, blue, indigo, violet, deep violet — light enough to carry dark ink
// throughout. A subtle chromatic drift, not a saturated rainbow.

const LIGHT_INK = '#f4efe3';
const DARK_INK = '#14110d';

/** @typedef {{bg:string, ink:string, muted:string, rule:string, accent:string, mode:'dark'|'light'}} Palette */

/** @type {Record<number, Palette>} */
const RAMP = {
  [-5]: { bg: '#f8dadd', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#a82030', mode: 'light' }, // pale red
  [-4]: { bg: '#f9e0cc', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#a44512', mode: 'light' }, // pale red-orange
  [-3]: { bg: '#fbe8cb', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#a86810', mode: 'light' }, // pale orange
  [-2]: { bg: '#fcefcd', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#8a6a0a', mode: 'light' }, // pale amber
  [-1]: { bg: '#fbf6c9', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#6a6010', mode: 'light' }, // pale yellow
  [ 0]: { bg: '#e4efce', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#2a6a1a', mode: 'light' }, // pale green
  [ 1]: { bg: '#d2eae7', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#1a5a5a', mode: 'light' }, // pale teal
  [ 2]: { bg: '#d9e5f2', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#1a4a8a', mode: 'light' }, // pale blue
  [ 3]: { bg: '#dcd5ec', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#2d2380', mode: 'light' }, // pale indigo
  [ 4]: { bg: '#e2d3ee', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#4a1e8a', mode: 'light' }, // pale violet
  [ 5]: { bg: '#d8c7e6', ink: DARK_INK, muted: 'rgba(20,17,13,0.58)', rule: 'rgba(20,17,13,0.18)', accent: '#3a1470', mode: 'light' }  // pale deep violet
};

/** @param {number} spectrum */
export function paletteFor(spectrum) {
  const s = Math.max(-5, Math.min(5, Math.round(spectrum)));
  return RAMP[s];
}

/** @param {number} spectrum */
export function styleFor(spectrum) {
  const p = paletteFor(spectrum);
  return (
    `--bg:${p.bg};` +
    `--ink:${p.ink};` +
    `--muted:${p.muted};` +
    `--rule:${p.rule};` +
    `--accent:${p.accent};`
  );
}

/** @param {number} spectrum */
export function modeFor(spectrum) {
  return paletteFor(spectrum).mode;
}

export const SPECTRUM_LABELS = {
  [-5]: 'women lead',
  [-4]: 'women commissioned',
  [-3]: 'women prophesy',
  [-2]: 'women act',
  [-1]: 'women praised',
  [ 0]: 'one in Christ',
  [ 1]: 'honor given',
  [ 2]: 'man as head',
  [ 3]: 'wives submit',
  [ 4]: 'keep at home',
  [ 5]: 'women silent'
};
