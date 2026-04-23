// Spectrum ramp: -3 (pale red / women lead) → 0 (pale green / one in Christ) → +3 (pale violet / women silent).
// Seven ROYGBIV buckets at about half opacity — each bucket is the saturated rainbow
// hue mixed halfway toward white, so the chromatic drift is quiet and dark ink
// reads comfortably on every page.

const LIGHT_INK = '#f4efe3';
const DARK_INK = '#14110d';

/** @typedef {{bg:string, ink:string, muted:string, rule:string, accent:string, mode:'dark'|'light'}} Palette */

/** @type {Record<number, Palette>} */
const RAMP = {
  [-3]: { bg: '#fddee0', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#a0202e', mode: 'light' }, // pale rose
  [-2]: { bg: '#fbe7cf', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#a04a0a', mode: 'light' }, // pale peach
  [-1]: { bg: '#f5dfa3', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#7a5a10', mode: 'light' }, // pale gold
  [ 0]: { bg: '#ddefd2', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#1f5a1a', mode: 'light' }, // pale mint
  [ 1]: { bg: '#d3e6f4', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#0f3a7a', mode: 'light' }, // pale sky
  [ 2]: { bg: '#dbd7ef', ink: DARK_INK,  muted: 'rgba(20,17,13,0.6)',    rule: 'rgba(20,17,13,0.2)',     accent: '#2d2080', mode: 'light' }, // pale indigo
  [ 3]: { bg: '#1a0b24', ink: LIGHT_INK, muted: 'rgba(244,239,227,0.7)', rule: 'rgba(244,239,227,0.26)', accent: '#c49ad8', mode: 'dark'  }  // inverted — deep violet on near-black
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
