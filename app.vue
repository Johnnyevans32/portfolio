<template>
  <NuxtPage />
</template>

<style>
:root {
  --paper: #f6f6f3;
  --ink: #16181c;
  --soft: #57595f;
  --faint: #8a8c90;
  --rule: #e1e1da;
  --accent: #9e2b1b;
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
}

body,
html {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--serif);
}

body {
  font-size: 18px;
  line-height: 1.62;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
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
  border: 1px solid var(--rule);
  display: block;
  margin-bottom: 22px;
  filter: grayscale(1) contrast(1.03);
  transition: filter 0.45s ease;
}
.rail .portrait:hover {
  filter: grayscale(0) contrast(1);
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
  transition: color 0.15s, border-color 0.15s;
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
  transition: color 0.15s, border-color 0.15s;
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
  color: #24262b;
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
  background: #fcfcfa;
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
  color: #26282d;
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
  transition: background 0.15s, color 0.15s, border-color 0.15s;
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
  color: #26282d;
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
  transition: background 0.15s, border-color 0.15s, color 0.15s;
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
  transition: border-color 0.15s, color 0.15s;
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
  transition: color 0.15s, border-color 0.15s;
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
  transition: color 0.15s, border-color 0.15s;
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
  color: #212329;
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
  background: #eeeee9;
  padding: 1px 5px;
}
.post-foot {
  margin-top: 46px;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
}

/* motion */
.reveal {
  animation: rise 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(9px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
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
