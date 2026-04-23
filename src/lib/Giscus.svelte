<script>
  import { onMount, onDestroy } from 'svelte';
  import { base } from '$app/paths';

  // ── giscus configuration ─────────────────────────────────────────────
  // These four values come from https://giscus.app after:
  //   1. Creating (or choosing) a public GitHub repo to hold comments
  //   2. Enabling Discussions on it
  //   3. Installing the giscus app on it (https://github.com/apps/giscus)
  //   4. Entering the repo on giscus.app and copying the generated config
  //
  // TODO: replace these four placeholders with the real values.
  const REPO = 'AndyGauge/matronae';
  const REPO_ID = 'R_kgDOSKrvCw';
  const CATEGORY = 'General';
  const CATEGORY_ID = 'DIC_kwDOSKrvC84C7h9F';
  // ─────────────────────────────────────────────────────────────────────

  let { term } = $props();

  let containerEl = $state();
  let currentTerm = $state(null);

  function mount(t) {
    if (!containerEl) return;
    containerEl.innerHTML = '';
    const themeUrl = `${window.location.origin}${base}/giscus.css`;
    const s = document.createElement('script');
    s.src = 'https://giscus.app/client.js';
    s.setAttribute('data-repo', REPO);
    s.setAttribute('data-repo-id', REPO_ID);
    s.setAttribute('data-category', CATEGORY);
    s.setAttribute('data-category-id', CATEGORY_ID);
    s.setAttribute('data-mapping', 'specific');
    s.setAttribute('data-term', t);
    s.setAttribute('data-strict', '1');
    s.setAttribute('data-reactions-enabled', '1');
    s.setAttribute('data-emit-metadata', '0');
    s.setAttribute('data-input-position', 'top');
    s.setAttribute('data-theme', themeUrl);
    s.setAttribute('data-lang', 'en');
    s.setAttribute('data-loading', 'lazy');
    s.crossOrigin = 'anonymous';
    s.async = true;
    containerEl.appendChild(s);
  }

  onMount(() => {
    currentTerm = term;
    mount(term);
  });

  $effect(() => {
    if (term !== currentTerm && containerEl) {
      currentTerm = term;
      mount(term);
    }
  });

  onDestroy(() => {
    if (containerEl) containerEl.innerHTML = '';
  });
</script>

<aside class="giscus-wrap">
  <div class="giscus-label">Responses</div>
  <div class="giscus-frame" bind:this={containerEl}></div>
</aside>

<style>
  .giscus-wrap {
    grid-column: 2;
    max-width: 60ch;
    margin-top: 2.4rem;
    padding-top: 1.2rem;
    padding-left: 1.3rem;
    border-top: 1px solid var(--ink, #14110d);
  }
  .giscus-label {
    font-family: var(--sans, 'Inter', sans-serif);
    font-size: 0.62rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--ink, #14110d);
    margin-bottom: 1rem;
  }
  .giscus-frame :global(.giscus) {
    width: 100%;
  }
  .giscus-frame :global(.giscus-frame) {
    width: 100%;
  }
  @media (max-width: 720px) {
    .giscus-wrap {
      grid-column: 1;
      max-width: none;
      padding-left: 1rem;
    }
  }
</style>
