// Testament badges in place of jurisdiction flags.
// Each passage's `jurisdiction` field starts with "Old Testament" or
// "New Testament"; we detect that and hand back a small SVG badge.

const OT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Old Testament">
<rect width="24" height="16" fill="#d4c9a8"/>
<rect x="0.5" y="0.5" width="23" height="15" fill="none" stroke="#14110d" stroke-width="0.6" stroke-opacity="0.35"/>
<text x="12" y="11" text-anchor="middle" font-family="Georgia, serif" font-size="9" font-style="italic" font-weight="600" fill="#14110d">OT</text>
</svg>`;

const NT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="New Testament">
<rect width="24" height="16" fill="#e8e1d0"/>
<rect x="0.5" y="0.5" width="23" height="15" fill="none" stroke="#14110d" stroke-width="0.6" stroke-opacity="0.35"/>
<text x="12" y="11" text-anchor="middle" font-family="Georgia, serif" font-size="9" font-style="italic" font-weight="600" fill="#14110d">NT</text>
</svg>`;

const BOTH = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" aria-label="Old and New Testaments">
<rect width="12" height="16" fill="#d4c9a8"/>
<rect x="12" width="12" height="16" fill="#e8e1d0"/>
<rect x="0.5" y="0.5" width="23" height="15" fill="none" stroke="#14110d" stroke-width="0.6" stroke-opacity="0.35"/>
<text x="6" y="11" text-anchor="middle" font-family="Georgia, serif" font-size="7.5" font-style="italic" font-weight="600" fill="#14110d">OT</text>
<text x="18" y="11" text-anchor="middle" font-family="Georgia, serif" font-size="7.5" font-style="italic" font-weight="600" fill="#14110d">NT</text>
</svg>`;

/**
 * @param {string} jurisdiction
 * @returns {string}
 */
export function flagFor(jurisdiction) {
  if (!jurisdiction) return '';
  const hasOT = /Old Testament/i.test(jurisdiction);
  const hasNT = /New Testament/i.test(jurisdiction);
  if (hasOT && hasNT) return BOTH;
  if (hasNT) return NT;
  if (hasOT) return OT;
  return '';
}
