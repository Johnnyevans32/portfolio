<template>
  <div class="page">
    <aside class="rail">
      <img
        class="portrait"
        :src="'/evans.JPG'"
        alt="Evans Eburu"
        width="94"
        height="94"
      />
      <h1 class="name">Evans Eburu</h1>
      <div class="role" itemprop="jobTitle">
        Software Engineer<br />AI-Safety Researcher
      </div>
      <p class="thesis">
        Measuring deception, detection, and the monitorability of machine
        reasoning.
      </p>
      <nav class="rnav" aria-label="Sections">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`">{{
          item.name
        }}</a>
      </nav>
      <div class="contacts">
        <a
          v-for="c in contacts"
          :key="c.name"
          :href="c.href"
          target="_blank"
          rel="noopener noreferrer"
          itemprop="sameAs"
          >{{ c.name }}</a
        >
      </div>
    </aside>

    <main
      class="content"
      itemscope
      itemtype="https://schema.org/Person"
    >
      <section id="about" class="first">
        <h2 class="hero-q reveal">
          Can you catch an AI lying by reading its
          <em>private thoughts?</em>
        </h2>
        <p class="bio reveal" style="animation-delay: 0.05s" itemprop="description">
          I'm a backend and fintech engineer with six years building
          reliability-critical systems — payment rails, cross-border
          settlement, agentic trading. Alongside that, I do independent research
          on AI safety: how large language models deceive, how well deception
          can be detected, and whether a model's private reasoning can be
          monitored to catch it. I released this as
          <a href="https://deceptionbench.xyz">DeceptionBench</a>, a live
          cross-play benchmark over six frontier models. Currently an MSc
          student in Applied IT at Ural Federal University.
        </p>

        <div class="feature reveal" style="animation-delay: 0.08s">
          <div class="feature-label">Featured research</div>
          <a class="feature-title" href="https://deceptionbench.xyz/paper"
            >DeceptionBench — “Among LLMs”</a
          >
          <p class="feature-thesis">
            A monitor reading <em>only</em> a model's private reasoning catches
            the liar — across six frontier models, in a live cross-play
            benchmark.
          </p>
          <div class="feature-stats">
            <div class="fstat">
              <span class="fnum">ρ = 0.89</span>
              <span class="flab">deception ↔ detection</span>
            </div>
            <div class="fstat">
              <span class="fnum">AUROC 1.00</span>
              <span class="flab">monitor accuracy</span>
            </div>
            <div class="fstat">
              <span class="fnum">96%</span>
              <span class="flab">intent leaks in reasoning</span>
            </div>
          </div>
          <div class="feature-links">
            <a href="https://doi.org/10.5281/zenodo.21209429">Preprint (DOI)</a>
            <a href="https://deceptionbench.xyz">Live demo</a>
            <a href="https://deceptionbench.xyz/paper">Read</a>
          </div>
        </div>
      </section>

      <section id="recent" class="reveal" style="animation-delay: 0.1s">
        <p class="eyebrow">Recent</p>
        <hr class="eyebrow-rule" />
        <ul class="feed">
          <li>
            <span class="yr">2026</span>
            <span class="ev"
              >Released
              <a href="https://deceptionbench.xyz/paper">DeceptionBench</a>, a
              cross-play benchmark for LLM deception &amp; monitorability, as a
              preprint on Zenodo.</span
            >
          </li>
          <li>
            <span class="yr">2026</span>
            <span class="ev"
              >Joined <strong>Figo</strong> as founding engineer — core backend
              for a cross-border neobank.</span
            >
          </li>
          <li>
            <span class="yr">2025</span>
            <span class="ev"
              >Began MSc in Applied IT at
              <strong>Ural Federal University</strong>.</span
            >
          </li>
        </ul>
      </section>

      <section id="publications" class="reveal">
        <p class="eyebrow">Publications</p>
        <hr class="eyebrow-rule" />
        <ol class="pubs">
          <li
            v-for="pub in publications"
            :key="pub.idx"
            class="pub"
            itemscope
            itemtype="https://schema.org/ScholarlyArticle"
          >
            <span class="pub-idx">{{ pub.idx }}</span>
            <div>
              <a class="pub-title" :href="pub.titleHref" itemprop="name">{{
                pub.title
              }}</a>
              <div class="pub-authors">
                <span class="you">{{ pub.authorsYou }}</span
                >{{ pub.authorsRest }}
              </div>
              <div class="pub-venue">
                {{ pub.venuePre
                }}<a v-if="pub.doi" :href="pub.doi.href">{{ pub.doi.text }}</a>
              </div>
              <div class="pub-links">
                <a
                  v-for="l in pub.links"
                  :key="l.href"
                  :href="l.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ l.label }}</a
                >
              </div>
            </div>
          </li>
        </ol>
      </section>

      <section id="writing" class="reveal">
        <p class="eyebrow">Writing</p>
        <hr class="eyebrow-rule" />
        <ul class="rows">
          <li v-for="w in writing" :key="w.href">
            <div class="row-t">
              <a :href="w.href" target="_blank" rel="noopener noreferrer">{{
                w.title
              }}</a>
              <div class="row-sub">{{ w.category }}</div>
            </div>
            <div class="row-meta">{{ w.year }}</div>
          </li>
        </ul>
      </section>

      <section id="projects" class="reveal">
        <p class="eyebrow">Selected projects</p>
        <hr class="eyebrow-rule" />
        <ul class="rows">
          <li v-for="p in projects" :key="p.title">
            <div class="row-t">
              <a :href="p.href" target="_blank" rel="noopener noreferrer">{{
                p.title
              }}</a
              >{{ p.desc }}
              <div class="tags">
                <span v-for="t in p.tags" :key="t">{{ t }}</span>
              </div>
            </div>
            <div class="row-meta">{{ p.year }}</div>
          </li>
        </ul>
      </section>

      <section id="experience" class="reveal">
        <p class="eyebrow">Experience</p>
        <hr class="eyebrow-rule" />
        <ul class="rows">
          <li v-for="job in jobs" :key="job.company">
            <div class="row-t">
              {{ job.title }} — <strong>{{ job.company }}</strong>
              <div class="row-sub">{{ job.sub }}</div>
            </div>
            <div class="row-meta">
              {{ job.year }}<span v-if="job.current" class="now"> now</span>
            </div>
          </li>
        </ul>
      </section>

      <footer class="foot">
        <span>&copy; 2026 Evans Eburu</span>
        <span>Available worldwide · remote</span>
      </footer>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const navItems = ref([
      { name: "about", id: "about" },
      { name: "publications", id: "publications" },
      { name: "writing", id: "writing" },
      { name: "projects", id: "projects" },
      { name: "experience", id: "experience" },
    ]);

    const contacts = ref([
      { name: "email", href: "mailto:evanseburu32@gmail.com" },
      { name: "github", href: "https://github.com/Johnnyevans32" },
      { name: "linkedin", href: "https://www.linkedin.com/in/0xjevan" },
      { name: "scholar", href: "https://scholar.google.com/citations?user=gvjnYJUAAAAJ" },
      { name: "zenodo", href: "https://doi.org/10.5281/zenodo.21209429" },
      { name: "studio", href: "https://jevan.studio" },
      {
        name: "cv",
        href: "/cv.pdf",
      },
    ]);

    const publications = ref([
      {
        idx: "[1]",
        title:
          "Among LLMs: A Cross-Play Benchmark for Deception, Detection, and the Monitorability of Reasoning",
        titleHref: "https://deceptionbench.xyz/paper",
        authorsYou: "Evans Eburu",
        authorsRest: "",
        venuePre: "Preprint · Zenodo · 2026 · ",
        doi: {
          text: "doi:10.5281/zenodo.21209429",
          href: "https://doi.org/10.5281/zenodo.21209429",
        },
        links: [
          { label: "PDF", href: "https://deceptionbench.xyz/among-llms.pdf" },
          { label: "Live demo", href: "https://deceptionbench.xyz" },
          { label: "Read online", href: "https://deceptionbench.xyz/paper" },
        ],
      },
      {
        idx: "[2]",
        title:
          "MandateBench: Mandate Faithfulness and Pre-Signature Monitorability for Agentic-Payment LLMs",
        titleHref: "https://mandatebench.xyz/paper",
        authorsYou: "Evans Eburu",
        authorsRest: "",
        venuePre: "Preprint · 2026",
        doi: null,
        links: [
          { label: "PDF", href: "https://mandatebench.xyz/mandatebench.pdf" },
          { label: "Live demo", href: "https://mandatebench.xyz" },
          { label: "Read online", href: "https://mandatebench.xyz/paper" },
        ],
      },
      {
        idx: "[3]",
        title:
          "Discrete Event Simulation of a Municipal Meat Production System: Bottleneck Analysis and Optimization",
        titleHref:
          "http://www.rypravlenie.ru/wp-content/uploads/2026/01/05-Eburu_Balungu.pdf",
        authorsYou: "Evans Eburu",
        authorsRest: ", Daniel M. Balungu",
        venuePre:
          "Sustainable Innovative Development: Design & Management · 2026 · RSCI (eLIBRARY.ru)",
        doi: null,
        links: [
          {
            label: "PDF",
            href: "http://www.rypravlenie.ru/wp-content/uploads/2026/01/05-Eburu_Balungu.pdf",
          },
        ],
      },
    ]);

    const writing = ref([
      {
        title:
          "Unlocking Financial Potential: FinSight AI's promise for empowered finance",
        href: "https://medium.com/@0xjevan/unlocking-financial-potential-finsight-ais-promises-for-empowered-finance-e0fb5ebdabcb",
        category: "decentralised finance & ai",
        year: "2024",
      },
      {
        title: "Deg X: bringing cross-chain DeFi interaction to users",
        href: "https://medium.com/@0xjevan/deg-x-bringing-cross-chain-defi-interaction-to-users-8a1bd37c7646",
        category: "defi",
        year: "2024",
      },
      {
        title: "I'll change the world",
        href: "https://jevan.hashnode.dev/ill-change-the-world",
        category: "personal",
        year: "2022",
      },
    ]);

    const projects = ref([
      {
        title: "Multicash",
        href: "https://multicash.vercel.app/",
        desc: " — multi-currency wallet on tbDEX",
        tags: ["nuxt", "web5", "tbdex"],
        year: "2024",
      },
      {
        title: "Deg X",
        href: "https://deg-x-charlie.vercel.app/",
        desc: " — cross-chain non-custodial DeFi wallet",
        tags: ["web3", "python", "multi-chain"],
        year: "2023",
      },
    ]);

    const jobs = ref([
      {
        title: "Founding Engineer",
        company: "Figo",
        sub: "cross-border neobank · stablecoin rails, card issuing",
        year: "2026 — ",
        current: true,
      },
      {
        title: "Founder / Lead Engineer",
        company: "Jevan Studio",
        sub: "product & engineering",
        year: "2026 — ",
        current: true,
      },
      {
        title: "Founding Engineer",
        company: "Autospend",
        sub: "stablecoin infra · agentic trading system",
        year: "2025 — ",
        current: true,
      },
      {
        title: "Senior Backend Engineer",
        company: "Bento",
        sub: "Nigeria's leading payroll platform",
        year: "2020 — 2024",
        current: false,
      },
    ]);

    return {
      navItems,
      contacts,
      publications,
      writing,
      projects,
      jobs,
    };
  },
});
</script>

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
  body {
    font-size: 17px;
  }
}
</style>
