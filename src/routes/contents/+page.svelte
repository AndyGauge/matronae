<script>
  import { base } from '$app/paths';
  import { flat } from '$lib/outline.js';
  import { paletteFor, SPECTRUM_LABELS } from '$lib/palette.js';

  const spectrums = [-3, -2, -1, 0, 1, 2, 3];
  const groups = spectrums
    .map((s) => {
      const entries = flat.filter((e) => e.spectrum === s);
      return {
        spectrum: s,
        label: SPECTRUM_LABELS[s],
        entries,
        palette: paletteFor(s),
        firstNum: entries[0]?.num
      };
    })
    .filter((g) => g.entries.length > 0);

  // Force the neutral white palette on the contents page so the category
  // swatches read cleanly regardless of which page the reader came from.
  // Also override the global body overflow:hidden (which exists for the
  // fixed-viewport reader pages) so this long list can scroll.
  $effect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute(
      'style',
      '--bg:#ffffff;--ink:#14110d;--muted:rgba(20,17,13,0.56);--rule:rgba(20,17,13,0.16);--accent:#6a6a6a;'
    );
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  });

  function symbolsFor(spectrum) {
    if (spectrum === 0) return '♀♂';
    const glyph = spectrum > 0 ? '♂' : '♀';
    return glyph.repeat(Math.abs(spectrum));
  }
</script>

<svelte:head>
  <title>Contents — Matronae</title>
</svelte:head>

<main class="page">
  <header class="top">
    <a class="mark" href="{base}/">Matronae</a>
    <nav class="top-nav">
      <a class="cover-link" href="{base}/">Cover ←</a>
    </nav>
  </header>

  <div class="intro">
    <div class="kicker">Contents</div>
    <h1>Forty-one passages,<br /><span class="italic">seven categories</span></h1>
    <p class="sub">Click a category to open its first passage; click any title to jump directly.</p>
  </div>

  <div class="groups">
    {#each groups as group}
      <section class="group">
        <a class="group-head" href="{base}/{group.firstNum}">
          <span class="swatch" style:background={group.palette.bg} style:border-color={group.palette.bg}></span>
          <span class="symbols">{symbolsFor(group.spectrum)}</span>
          <span class="group-label">{group.label}</span>
          <span class="group-count">{group.entries.length}</span>
          <span class="group-arrow">→</span>
        </a>
        <ul class="entry-list">
          {#each group.entries as e}
            <li>
              <a class="entry" class:invert={e.invert} href="{base}/{e.num}">
                <span class="entry-num">{e.num}</span>
                <span class="entry-title">{e.title}</span>
                <span class="entry-source">{e.jurisdiction}</span>
              </a>
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
</main>

<style>
  .page {
    min-height: 100vh;
    min-height: 100dvh;
    padding: 4vw 7vw 6vw;
    display: flex;
    flex-direction: column;
    gap: 3vw;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
  }

  .mark {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1rem;
    letter-spacing: 0;
    text-transform: none;
    color: var(--ink);
  }

  .cover-link {
    color: var(--muted);
    transition: color 160ms ease;
  }
  .cover-link:hover { color: var(--ink); }

  .intro {
    max-width: 1100px;
  }

  .kicker {
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: var(--muted);
    margin-bottom: 1.2rem;
  }

  h1 {
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(2.4rem, 6vw, 4.8rem);
    line-height: 0.98;
    letter-spacing: -0.025em;
    color: var(--ink);
  }

  h1 .italic {
    font-style: italic;
    font-weight: 200;
  }

  .sub {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
    color: var(--muted);
    margin-top: 1.6rem;
    max-width: 52ch;
    line-height: 1.45;
  }

  .groups {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 2rem;
  }

  .group {
    border-top: 1px solid var(--rule);
    padding-top: 1.4rem;
  }

  .group-head {
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    align-items: baseline;
    gap: 1rem;
    padding: 0.4rem 0;
    color: var(--ink);
    transition: color 160ms ease;
  }

  .group-head:hover {
    color: var(--ink);
  }
  .group-head:hover .group-arrow { transform: translateX(4px); }

  .swatch {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 0 1px var(--rule);
    transform: translateY(2px);
  }

  .symbols {
    font-family: var(--sans);
    font-size: 1rem;
    letter-spacing: 0.08em;
    color: var(--muted);
    min-width: 3ch;
  }

  .group-label {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1.3rem, 2.2vw, 1.9rem);
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  .group-count {
    font-family: var(--sans);
    font-size: 0.7rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .group-arrow {
    font-family: var(--serif);
    font-size: 1.2rem;
    color: var(--muted);
    transition: transform 160ms ease;
  }

  .entry-list {
    list-style: none;
    margin: 0.6rem 0 0;
    padding: 0 0 0 calc(14px + 1rem + 3ch + 1rem);
    display: flex;
    flex-direction: column;
  }

  .entry {
    display: grid;
    grid-template-columns: 3ch minmax(0, 2fr) minmax(0, 1fr);
    gap: 1.2rem;
    align-items: baseline;
    padding: 0.45rem 0;
    border-bottom: 1px dotted var(--rule);
    color: var(--ink);
  }

  .entry:hover { background: rgba(20, 17, 13, 0.03); }

  .entry.invert {
    color: #14051e;
  }
  .entry.invert .entry-title {
    font-weight: 500;
  }

  .entry-num {
    font-family: var(--sans);
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    color: var(--muted);
  }

  .entry-title {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(0.98rem, 1.15vw, 1.12rem);
    line-height: 1.3;
    color: var(--ink);
    overflow-wrap: break-word;
  }

  .entry-source {
    font-family: var(--sans);
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    text-align: right;
    overflow-wrap: break-word;
  }

  @media (max-width: 720px) {
    .page {
      padding: 5vw 6vw 8vw;
    }

    .group-head {
      grid-template-columns: auto auto 1fr auto;
      gap: 0.8rem;
    }
    .group-arrow { display: none; }

    .entry-list {
      padding-left: 0;
    }

    .entry {
      grid-template-columns: 2.4ch minmax(0, 1fr);
      gap: 0.8rem;
      row-gap: 0.2rem;
    }

    .entry-source {
      grid-column: 2;
      text-align: left;
      letter-spacing: 0.1em;
      font-size: 0.62rem;
    }

    .entry-title {
      grid-column: 2;
    }
  }
</style>
