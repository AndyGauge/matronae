<script>
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { flat } from '$lib/outline.js';
  import { paletteFor } from '$lib/palette.js';
  import { createPager } from '$lib/gestures.js';

  let dragOffset = $state(0);
  let dragging = $derived(dragOffset !== 0);

  const stops = [-3, -2, -1, 0, 1, 2, 3];
  const gradient = `linear-gradient(to right, ${stops.map((s) => paletteFor(s).bg).join(', ')})`;

  // Force a neutral white palette on the cover so returning from a deep-red or
  // deep-blue page doesn't leave the reader "painted into" one side.
  $effect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute(
      'style',
      '--bg:#ffffff;--ink:#14110d;--muted:rgba(20,17,13,0.56);--rule:rgba(20,17,13,0.16);--accent:#6a6a6a;'
    );
  });

  function start() {
    goto(base + '/' + flat[0].num);
  }

  const pager = createPager({
    onNext: start,
    onPrev: () => {},
    setOffset: (v) => {
      dragOffset = Math.min(0, v);
    }
  });

  function key(e) {
    if (e.key === 'Enter' || e.key === 'ArrowRight' || e.key === ' ') start();
  }
</script>

<svelte:window onkeydown={key} />

<main
  class="cover"
  class:dragging
  onwheel={pager.onWheel}
  ontouchstart={pager.onTouchStart}
  ontouchmove={pager.onTouchMove}
  ontouchend={pager.onTouchEnd}
  ontouchcancel={pager.onTouchCancel}
  style:transform="translateX({dragOffset}px)"
>
  <div class="meta top">
    <span>Andrew Gauger · MMXXVI</span>
  </div>

  <img class="qr" src="{base}/qr.png" alt="QR code to Matronae" />

  <div class="title-block">
    <div class="kicker">Scripture on gender</div>
    <h1 class="vt-title">
      <span class="italic">Matronae</span>
    </h1>
    <div class="sub">Forty-one passages from the Hebrew Bible, the New Testament, and the deuterocanon,<br />arranged from the women God sent to lead to the verses used to bar women from teaching.</div>
    <div class="prompt">To find your position, see which of these you weight most.</div>

    <div class="gradient" style:background={gradient}>
      <span class="tick-left">Women lead</span>
      <span class="tick-right">Men lead</span>
    </div>
  </div>

  <div class="meta bottom">
    <button onclick={start}>Begin&nbsp;→</button>
    <a class="contents-link" href="{base}/contents">Contents</a>
    <a class="contents-link" href="{base}/authors">Authors</a>
    <span class="hint">Enter, arrow, swipe, or scroll</span>
  </div>
</main>

<style>
  .cover {
    position: relative;
    height: 100vh;
    height: 100dvh;
    padding: 5vw 7vw;
    display: grid;
    grid-template-rows: auto 1fr auto;
    transition: transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1);
    touch-action: pan-y;
    will-change: transform;
  }

  .qr {
    position: absolute;
    top: 5vw;
    right: 7vw;
    width: clamp(72px, 9vw, 120px);
    height: auto;
    display: block;
    background: #fff;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px var(--rule);
  }

  @media (max-width: 720px) {
    .qr {
      top: 4vw;
      right: 5vw;
      width: 64px;
    }
  }

  .cover.dragging { transition: none; }

  .meta {
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
  }

  .meta.bottom {
    flex-wrap: wrap;
  }

  .title-block {
    align-self: start;
    margin-top: 4vw;
    max-width: 1100px;
  }

  .kicker {
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }

  h1 {
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(5rem, 15vw, 16rem);
    line-height: 0.88;
    letter-spacing: -0.035em;
    color: var(--ink);
    display: flex;
    flex-wrap: wrap;
    gap: 0.05em 0.2em;
  }

  h1 .italic {
    font-style: italic;
    font-weight: 200;
    background: linear-gradient(to right,
      #e03040 0%,
      #f08030 16.67%,
      #e8c822 33.33%,
      #4ab040 50%,
      #3a8cd0 66.67%,
      #5a4ac0 83.33%,
      #9040c0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .sub {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1.1rem, 1.6vw, 1.5rem);
    color: var(--muted);
    margin-top: 2.5rem;
    max-width: 40ch;
    line-height: 1.35;
  }

  .prompt {
    font-family: var(--serif);
    font-weight: 400;
    font-size: clamp(1rem, 1.25vw, 1.2rem);
    color: var(--ink);
    margin-top: 1.4rem;
    max-width: 42ch;
    line-height: 1.4;
  }

  .gradient {
    position: relative;
    margin-top: 2.5rem;
    height: 12px;
    width: min(520px, 70vw);
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px var(--rule);
  }

  .tick-left, .tick-right {
    position: absolute;
    top: 18px;
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--muted);
  }

  .tick-left { left: 0; }
  .tick-right { right: 0; }

  button {
    font-family: var(--sans);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    padding: 1rem 1.6rem;
    background: var(--ink);
    color: var(--bg);
    transition: background 200ms ease;
  }

  button:hover {
    background: var(--accent);
  }

  .contents-link {
    font-family: var(--sans);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 0.3rem 0.6rem;
    border-bottom: 1px solid transparent;
    transition: color 160ms ease, border-color 160ms ease;
  }
  .contents-link:hover {
    color: var(--ink);
    border-bottom-color: var(--ink);
  }

  .hint {
    font-family: var(--sans);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }
</style>
