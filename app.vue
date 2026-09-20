<template>
  <NuxtPage />
  <AmbientVacation />
</template>

<style>
:root {
  --paper: #f4ecdc;
  --paper-2: #faf4e7;
  --ink: #2e241a;
  --soft: #71624d;
  --faint: #a7977e;
  --rule: #e3d6bd;
  --accent: #b5491d;
  --accent-2: #a34a68;
  --serif: "Newsreader", "Iowan Old Style", "Palatino Linotype", Palatino,
    "Book Antiqua", Georgia, "Times New Roman", serif;
  --mono: "IBM Plex Mono", "SF Mono", "JetBrains Mono", ui-monospace, Menlo,
    Consolas, monospace;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--paper);
}

body,
html {
  margin: 0;
  color: var(--ink);
  font-family: var(--serif);
}

body {
  background: transparent;
  font-size: 18px;
  line-height: 1.62;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* ambient haze — a low warm sun that barely moves, like late afternoon */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(62% 46% at 82% -8%, rgba(214, 118, 58, 0.2), transparent 70%),
    radial-gradient(48% 40% at 6% 110%, rgba(163, 74, 104, 0.13), transparent 70%),
    linear-gradient(180deg, rgba(255, 248, 236, 0), rgba(233, 200, 155, 0.16));
  animation: skydrift 42s ease-in-out infinite alternate;
}
@keyframes skydrift {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(-1.4%, 1.1%, 0) scale(1.045);
  }
}

/* film grain — the whole site is a slightly overexposed photograph */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9300;
  pointer-events: none;
  opacity: 0.055;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
}

::selection {
  background: rgba(181, 73, 29, 0.2);
}

.page {
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 28px;
  display: grid;
  grid-template-columns: 244px 1fr;
  gap: 68px;
  align-items: start;
}

/* identity rail */
.rail {
  position: sticky;
  top: 0;
  padding: 58px 0 40px;
}
.rail .portrait {
  width: 94px;
  height: 94px;
  object-fit: cover;
  object-position: center center;
  display: block;
  margin-bottom: 22px;
  /* a found polaroid, slightly crooked */
  background: var(--paper-2);
  border: 4px solid var(--paper-2);
  outline: 1px solid var(--rule);
  box-shadow: 0 12px 26px -10px rgba(46, 36, 26, 0.35);
  transform: rotate(-2.2deg);
  filter: sepia(0.42) saturate(0.8) contrast(1.02);
  transition: filter 0.6s ease, transform 0.6s ease, box-shadow 0.6s ease;
}
.rail .portrait:hover {
  filter: sepia(0) saturate(1);
  transform: rotate(0deg) scale(1.03);
  box-shadow: 0 18px 34px -12px rgba(46, 36, 26, 0.42);
}
.rail .name {
  font-size: 27px;
  line-height: 1.12;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0;
  text-wrap: balance;
}
.rail .name::after {
  content: "";
  display: block;
  width: 34px;
  height: 2px;
  background: var(--accent);
  margin-top: 14px;
}
.rail .role {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--soft);
  margin-top: 16px;
  line-height: 1.7;
}
.rail .thesis {
  font-style: italic;
  font-size: 15px;
  color: var(--soft);
  margin-top: 16px;
  line-height: 1.45;
}
nav.rnav {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
nav.rnav a {
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  color: var(--ink);
  text-decoration: none;
  padding: 3px 0;
  width: max-content;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}
nav.rnav a:hover,
nav.rnav a:focus-visible {
  color: var(--accent);
  border-color: var(--accent);
  outline: none;
}
.rail .contacts {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
}
.rail .contacts a {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.03em;
  color: var(--soft);
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 1px;
  transition: color 0.2s, border-color 0.2s;
}
.rail .contacts a:hover,
.rail .contacts a:focus-visible {
  color: var(--accent);
  border-color: var(--accent);
  outline: none;
}

/* content */
.content {
  padding: 58px 0 90px;
  max-width: 660px;
}
.hero-q {
  font-size: 33px;
  line-height: 1.24;
  font-weight: 600;
  letter-spacing: -0.015em;
  margin: 0 0 26px;
  text-wrap: balance;
}
.hero-q em {
  font-style: italic;
  color: var(--accent);
}
.bio {
  font-size: 18px;
  color: #3a3128;
  margin: 0;
}
.bio a {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.5px;
}
.bio a:hover {
  color: var(--accent);
}

/* featured research */
.feature {
  margin-top: 28px;
  border: 1px solid var(--rule);
  background: var(--paper-2);
  box-shadow: 0 16px 38px -22px rgba(46, 36, 26, 0.35);
  padding: 20px 22px;
}
.feature-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 9px;
}
.feature-title {
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  text-decoration: none;
  display: inline-block;
}
.feature-title:hover {
  color: var(--accent);
}
.feature-thesis {
  font-size: 16px;
  color: #37302a;
  margin: 8px 0 16px;
  line-height: 1.45;
}
.feature-thesis em {
  font-style: italic;
  color: var(--accent);
}
.feature-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 30px;
  padding: 13px 0;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.fstat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.fnum {
  font-family: var(--mono);
  font-size: 17px;
  font-weight: 500;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.flab {
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--faint);
}
.feature-links {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.feature-links a {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  border: 1px solid var(--rule);
  padding: 5px 11px;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.feature-links a:hover,
.feature-links a:focus-visible {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
  outline: none;
}

section {
  margin-top: 56px;
  scroll-margin-top: 24px;
}
section.first {
  margin-top: 0;
}
.eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 4px;
}
.eyebrow-rule {
  border: none;
  border-top: 1px solid var(--rule);
  margin: 0 0 22px;
}

/* recent feed */
ul.feed {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 13px;
}
ul.feed li {
  display: grid;
  grid-template-columns: 62px 1fr;
  gap: 16px;
  align-items: baseline;
}
ul.feed .yr {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--faint);
  font-variant-numeric: tabular-nums;
}
ul.feed .ev {
  font-size: 16.5px;
  color: #37302a;
  line-height: 1.5;
}
ul.feed .ev a {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--accent);
}
ul.feed .ev a:hover {
  color: var(--accent);
}

/* publications */
ol.pubs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.pub {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 8px;
}
.pub-idx {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--faint);
  padding-top: 4px;
  font-variant-numeric: tabular-nums;
}
.pub-title {
  font-size: 19px;
  font-weight: 600;
  line-height: 1.32;
  color: var(--ink);
  text-decoration: none;
  letter-spacing: -0.005em;
}
.pub-title:hover {
  color: var(--accent);
}
.pub-authors {
  font-size: 15.5px;
  color: var(--soft);
  margin-top: 3px;
}
.pub-authors .you {
  color: var(--ink);
  font-weight: 600;
}
.pub-venue {
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.02em;
  color: var(--faint);
  margin-top: 5px;
}
.pub-venue a {
  color: var(--faint);
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
}
.pub-venue a:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.pub-links {
  margin-top: 9px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.pub-links a {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  border: 1px solid var(--rule);
  padding: 4px 9px;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.pub-links a:hover,
.pub-links a:focus-visible {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
  outline: none;
}

/* row lists */
ul.rows {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
ul.rows li {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px 20px;
  align-items: baseline;
  padding: 14px 0;
  border-top: 1px solid var(--rule);
}
ul.rows li:first-child {
  border-top: none;
}
.row-t {
  font-size: 17px;
  line-height: 1.35;
  color: var(--ink);
}
.row-t a {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, color 0.2s;
}
.row-t a:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.row-sub {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.02em;
  color: var(--faint);
  margin-top: 3px;
}
.row-meta {
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--soft);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  text-align: right;
}
.row-meta .now {
  color: var(--accent);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
}
.tags span {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.03em;
  color: var(--faint);
}
.tags span::before {
  content: "#";
  color: var(--rule);
}

/* section header with trailing link (e.g. "Writing … all posts") */
.sec-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}
.sec-head .eyebrow {
  margin-bottom: 4px;
}
.sec-more {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  color: var(--soft);
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
  transition: color 0.2s, border-color 0.2s;
}
.sec-more:hover,
.sec-more:focus-visible {
  color: var(--accent);
  border-color: var(--accent);
  outline: none;
}

footer.foot {
  margin-top: 72px;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.03em;
  color: var(--faint);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

/* blog */
.blogwrap {
  max-width: 680px;
  margin: 0 auto;
  padding: 58px 28px 96px;
}
.blog-back {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  color: var(--soft);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}
.blog-back:hover,
.blog-back:focus-visible {
  color: var(--accent);
  border-color: var(--accent);
  outline: none;
}
.blog-masthead {
  margin: 30px 0 34px;
}
.blog-masthead h1 {
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.015em;
  margin: 0;
}
.blog-masthead h1::after {
  content: "";
  display: block;
  width: 34px;
  height: 2px;
  background: var(--accent);
  margin-top: 14px;
}
.blog-masthead p {
  font-style: italic;
  font-size: 15.5px;
  color: var(--soft);
  margin: 14px 0 0;
}
.post-head {
  margin: 30px 0 26px;
}
.post-meta {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 10px;
}
.post-title {
  font-size: 34px;
  line-height: 1.18;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
  text-wrap: balance;
}
.prose {
  font-size: 18.5px;
  line-height: 1.68;
  color: #342c24;
}
.prose p {
  margin: 0 0 20px;
}
.prose h2 {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 36px 0 12px;
}
.prose em {
  font-style: italic;
  color: var(--accent);
}
.prose a {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.5px;
}
.prose a:hover {
  color: var(--accent);
}
.prose blockquote {
  margin: 24px 0;
  padding: 2px 0 2px 20px;
  border-left: 2px solid var(--accent);
  color: var(--soft);
  font-style: italic;
}
.prose code {
  font-family: var(--mono);
  font-size: 0.86em;
  background: #ece1cb;
  padding: 1px 5px;
}
.post-foot {
  margin-top: 46px;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
}

/* motion — slow, like waking up without an alarm */
.reveal {
  animation: rise 1.1s cubic-bezier(0.22, 0.61, 0.2, 1) both;
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(16px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    animation: none;
  }
  body::before {
    animation: none;
  }
  html {
    scroll-behavior: auto;
  }
}

@media (max-width: 860px) {
  .page {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .rail {
    position: static;
    padding: 44px 0 8px;
  }
  nav.rnav {
    flex-flow: row wrap;
    gap: 6px 16px;
    margin-top: 22px;
  }
  .content {
    padding-top: 30px;
    max-width: 100%;
  }
  .hero-q {
    font-size: 27px;
  }
  .post-title {
    font-size: 28px;
  }
  body {
    font-size: 17px;
  }
}
</style>
