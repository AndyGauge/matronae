// Spectrum ramp: -3 (pale red / women lead) → 0 (pale green / one in Christ) → +3 (pale violet / women silent).
// Seven ROYGBIV buckets at about half opacity — each bucket is the saturated rainbow
// hue mixed halfway toward white, so the chromatic drift is quiet and dark ink
// reads comfortably on every page.

const LIGHT_INK = '#f4efe3';
const DARK_INK = '#14110d';

/** @typedef {{bg:string, ink:string, muted:string, rule:string, accent:string, mode:'dark'|'light'}} Palette */

/** @type {Record<number, Palette>} */
const RAMP = {
  [-3]: { bg: '#fccdcf', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#a0202e', mode: 'light' }, // pale red
  [-2]: { bg: '#fadab7', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#a04a0a', mode: 'light' }, // pale orange
  [-1]: { bg: '#f7eaa4', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#5a4a0a', mode: 'light' }, // pale yellow
  [ 0]: { bg: '#cbe7ba', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#1f5a1a', mode: 'light' }, // pale green
  [ 1]: { bg: '#bcd9ef', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#0f3a7a', mode: 'light' }, // pale blue
  [ 2]: { bg: '#c9c3e6', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#2d2080', mode: 'light' }, // pale indigo
  [ 3]: { bg: '#dcc5e6', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#4a1a7a', mode: 'light' }  // pale violet
};

/** @param {number} spectrum */
export function paletteFor(spectrum) {
  const s = Math.max(-3, Math.min(3, Math.round(spectrum)));
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
  [-3]: 'women lead',
  [-2]: 'women act',
  [-1]: 'women praised',
  [ 0]: 'one in Christ',
  [ 1]: 'honor given',
  [ 2]: 'wives submit',
  [ 3]: 'women silent'
};
