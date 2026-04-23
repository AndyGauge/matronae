// Spectrum ramp: -3 (red / women lead) → 0 (green / one in Christ) → +3 (violet / women silent).
// Seven pure ROYGBIV buckets, one per spectrum position. Each hue is medium-pale —
// clearly named (red, orange, yellow, green, blue, indigo, violet) and light enough
// to carry dark ink throughout. Dramatic color steps, subtle ink.

const LIGHT_INK = '#f4efe3';
const DARK_INK = '#14110d';

/** @typedef {{bg:string, ink:string, muted:string, rule:string, accent:string, mode:'dark'|'light'}} Palette */

/** @type {Record<number, Palette>} */
const RAMP = {
  [-3]: { bg: '#f89ba0', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)',  rule: 'rgba(20,17,13,0.2)', accent: '#a0202e', mode: 'light' }, // Red
  [-2]: { bg: '#f5b66f', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)',  rule: 'rgba(20,17,13,0.2)', accent: '#a04a0a', mode: 'light' }, // Orange
  [-1]: { bg: '#f0d64a', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)',  rule: 'rgba(20,17,13,0.2)', accent: '#5a4a0a', mode: 'light' }, // Yellow
  [ 0]: { bg: '#98cf76', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)',  rule: 'rgba(20,17,13,0.2)', accent: '#1f5a1a', mode: 'light' }, // Green
  [ 1]: { bg: '#7ab4e0', ink: DARK_INK, muted: 'rgba(20,17,13,0.6)',  rule: 'rgba(20,17,13,0.2)', accent: '#0f3a7a', mode: 'light' }, // Blue
  [ 2]: { bg: '#9488cd', ink: DARK_INK, muted: 'rgba(20,17,13,0.62)', rule: 'rgba(20,17,13,0.2)', accent: '#2d2080', mode: 'light' }, // Indigo
  [ 3]: { bg: '#b98cce', ink: DARK_INK, muted: 'rgba(20,17,13,0.62)', rule: 'rgba(20,17,13,0.2)', accent: '#4a1a7a', mode: 'light' }  // Violet
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
