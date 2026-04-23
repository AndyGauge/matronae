// Minimal inline markdown: **text** → <strong>, *text* → <em>.
// All input is hardcoded in outline.js (trusted). Bold processed first so
// its wrapper tag removes the asterisks before the emphasis pass runs.
const ESCAPE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ESCAPE[c]);

export function md(text) {
  if (!text) return '';
  return escape(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
