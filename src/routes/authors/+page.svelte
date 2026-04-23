<script>
  import { base } from '$app/paths';
  import { flat } from '$lib/outline.js';
  import { authors } from '$lib/authors.js';
  import { md } from '$lib/md.js';

  function linkedEntriesFor(author) {
    return flat.filter((e) =>
      author.books.some((book) => e.jurisdiction.includes(`· ${book}`))
    );
  }

  const sections = authors.map((a) => ({
    ...a,
    entries: linkedEntriesFor(a)
  }));

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
</script>

<svelte:head>
  <title>Authors — Matronae</title>
</svelte:head>

<main class="page">
  <header class="top">
    <a class="mark" href="{base}/">Matronae</a>
    <nav class="top-nav">
      <a class="nav-link" href="{base}/contents">Contents</a>
      <a class="nav-link" href="{base}/">Cover ←</a>
    </nav>
  </header>

  <div class="intro">
    <div class="kicker">Authors</div>
    <h1>Who wrote these,<br /><span class="italic">and why that matters</span></h1>
    <p class="sub">The Bible is a library, not a book. Every passage comes out of a person, a moment, a design. These are brief commentaries on the authors whose writings furnish the spectrum — what they were trying to build, and how that shapes how we should read their restrictions.</p>
  </div>

  <div class="authors">
    {#each sections as author}
      <section class="author" id={author.name.toLowerCase().replace(/\s+/g, '-')}>
        <header class="author-head">
          <div class="author-head-text">
            <h2 class="author-name">{author.name}</h2>
            {#if author.epithet}
              <div class="epithet">{author.epithet}</div>
            {/if}
            <div class="dates">{author.dates}</div>
          </div>
        </header>

        <div class="commentary">
          {#each author.commentary as para}
            <p>{@html md(para)}</p>
          {/each}
        </div>

        {#if author.entries.length > 0}
          <div class="linked">
            <div class="linked-label">Passages</div>
            <ul class="linked-list">
              {#each author.entries as e}
                <li>
                  <a class="entry" class:invert={e.invert} href="{base}/{e.num}">
                    <span class="entry-num">{e.num}</span>
                    <span class="entry-title">{e.title}</span>
                    <span class="entry-source">{e.jurisdiction}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
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

  .top-nav {
    display: flex;
    gap: 1.2rem;
  }

  .mark {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1rem;
    letter-spacing: 0;
    text-transform: none;
    color: var(--ink);
  }

  .nav-link {
    color: var(--muted);
    transition: color 160ms ease;
  }
  .nav-link:hover { color: var(--ink); }

  .intro { max-width: 960px; }

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
    font-size: clamp(2.4rem, 5.5vw, 4.4rem);
    line-height: 1.02;
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
    font-size: clamp(1rem, 1.25vw, 1.18rem);
    color: var(--muted);
    margin-top: 1.6rem;
    max-width: 60ch;
    line-height: 1.45;
  }

  .authors {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 2rem;
  }

  .author {
    border-top: 1px solid var(--rule);
    padding-top: 2rem;
    display: grid;
    grid-template-columns: minmax(220px, 1fr) minmax(0, 3fr);
    gap: 3rem;
  }

  .author-head {
    position: sticky;
    top: 2rem;
    align-self: start;
  }

  .author-name {
    font-family: var(--serif);
    font-weight: 300;
    font-style: italic;
    font-size: clamp(1.7rem, 2.4vw, 2.2rem);
    line-height: 1.05;
    letter-spacing: -0.015em;
    color: var(--ink);
    margin: 0;
  }

  .epithet {
    font-family: var(--sans);
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: var(--accent);
    margin-top: 0.8rem;
  }

  .dates {
    font-family: var(--sans);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    color: var(--muted);
    margin-top: 0.4rem;
  }

  .commentary {
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(1rem, 1.1vw, 1.08rem);
    line-height: 1.6;
    color: var(--ink);
    max-width: 62ch;
  }

  .commentary p {
    margin: 0 0 1rem;
  }

  .commentary p:last-child {
    margin-bottom: 0;
  }

  .commentary :global(strong) {
    font-weight: 600;
    color: var(--ink);
  }

  .commentary :global(em) {
    font-style: italic;
  }

  .linked {
    grid-column: 2;
    margin-top: 1.8rem;
    border-top: 1px dotted var(--rule);
    padding-top: 1rem;
    max-width: 62ch;
  }

  .linked-label {
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--muted);
    margin-bottom: 0.8rem;
  }

  .linked-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .entry {
    display: grid;
    grid-template-columns: 3ch minmax(0, 2fr) minmax(0, 1fr);
    gap: 1.2rem;
    align-items: baseline;
    padding: 0.4rem 0;
    border-bottom: 1px dotted var(--rule);
    color: var(--ink);
  }

  .entry:hover { background: rgba(20, 17, 13, 0.03); }

  .entry.invert .entry-title {
    font-weight: 500;
  }

  .entry-num {
    font-family: var(--sans);
    font-size: 0.66rem;
    letter-spacing: 0.18em;
    color: var(--muted);
  }

  .entry-title {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(0.95rem, 1.05vw, 1.05rem);
    line-height: 1.3;
    color: var(--ink);
    overflow-wrap: break-word;
  }

  .entry-source {
    font-family: var(--sans);
    font-size: 0.64rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    text-align: right;
    overflow-wrap: break-word;
  }

  @media (max-width: 820px) {
    .author {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .author-head { position: static; }

    .linked {
      grid-column: 1;
    }
  }

  @media (max-width: 720px) {
    .page {
      padding: 5vw 6vw 8vw;
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
      font-size: 0.6rem;
    }

    .entry-title {
      grid-column: 2;
    }
  }
</style>
