// Spectrum ramp: -3 (pale red / women lead) → 0 (pale green / one in Christ) → +3 (pale violet / women silent).
// Seven ROYGBIV buckets, each sitting at a gentle pastel so the chromatic drift is
// felt, not shouted, and dark ink reads comfortably on every page.
//
// One entry can additionally flip to the INVERTED palette via an `invert: true`
// flag in outline.js — that's the outlier treatment for the verse the whole
// argument turns on. Dark near-black background, light ink.

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
  [ 2]: { bg: '#dbd7ef', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#2d2080', mode: 'light' }, // pale indigo
  [ 3]: { bg: '#e8d8ef', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)', rule: 'rgba(20,17,13,0.2)', accent: '#4a1a7a', mode: 'light' }  // pale violet
};

/** The outlier treatment — applied when an entry has `invert: true`. */
/** @type {Palette} */
const INVERTED = {
  bg: '#14051e',
  ink: LIGHT_INK,
  muted: 'rgba(244,239,227,0.7)',
  rule: 'rgba(244,239,227,0.26)',
  accent: '#c49ad8',
  mode: 'dark'
};

/**
 * @param {number} spectrum
 * @param {boolean} [invert]
 */
export function paletteFor(spectrum, invert = false) {
  if (invert) return INVERTED;
  const s = Math.max(-3, Math.min(3, Math.round(spectrum)));
  return RAMP[s];
}

/**
 * @param {number} spectrum
 * @param {boolean} [invert]
 */
export function styleFor(spectrum, invert = false) {
  const p = paletteFor(spectrum, invert);
  return (
    `--bg:${p.bg};` +
    `--ink:${p.ink};` +
    `--muted:${p.muted};` +
    `--rule:${p.rule};` +
    `--accent:${p.accent};`
  );
}

/**
 * @param {number} spectrum
 * @param {boolean} [invert]
 */
export function modeFor(spectrum, invert = false) {
  return paletteFor(spectrum, invert).mode;
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
