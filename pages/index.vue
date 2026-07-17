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
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.to || `#${item.id}`"
          >{{ item.name }}</a
        >
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

    <main class="content" itemscope itemtype="https://schema.org/Person">
      <section id="about" class="first">
        <h2 class="hero-q reveal">
          Can you catch an AI lying by reading its
          <em>private thoughts?</em>
        </h2>
        <p
          class="bio reveal"
          style="animation-delay: 0.05s"
          itemprop="description"
        >
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
              <a href="https://mandatebench.xyz/paper">MandateBench</a>, a
              benchmark of whether AI payment agents stay inside signed spending
              mandates, as a preprint on Zenodo
              (<a href="https://doi.org/10.5281/zenodo.21411376">DOI</a>).</span
            >
          </li>
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
        <div class="sec-head">
          <p class="eyebrow">Writing</p>
          <NuxtLink class="sec-more" to="/blog">all posts →</NuxtLink>
        </div>
        <hr class="eyebrow-rule" />
        <ul class="rows">
          <li v-for="w in writing" :key="w.key">
            <div class="row-t">
              <NuxtLink v-if="w.to" :to="w.to">{{ w.title }}</NuxtLink>
              <a
                v-else
                :href="w.href"
                target="_blank"
                rel="noopener noreferrer"
                >{{ w.title }}</a
              >
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
import { posts } from "~/data/posts";

export default defineComponent({
  setup() {
    const navItems = ref([
      { name: "about", id: "about" },
      { name: "publications", id: "publications" },
      { name: "writing", id: "writing" },
      { name: "blog", to: "/blog" },
      { name: "projects", id: "projects" },
      { name: "experience", id: "experience" },
    ]);

    const contacts = ref([
      { name: "email", href: "mailto:evanseburu32@gmail.com" },
      { name: "github", href: "https://github.com/Johnnyevans32" },
      { name: "linkedin", href: "https://www.linkedin.com/in/0xjevan" },
      {
        name: "scholar",
        href: "https://scholar.google.com/citations?user=gvjnYJUAAAAJ",
      },
      { name: "orcid", href: "https://orcid.org/0009-0003-9744-7414" },
      { name: "zenodo", href: "https://doi.org/10.5281/zenodo.21209429" },
      { name: "studio", href: "https://jevan.studio" },
      { name: "cv", href: "/cv.pdf" },
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
        venuePre: "Preprint · Zenodo · 2026 · ",
        doi: {
          text: "doi:10.5281/zenodo.21411376",
          href: "https://doi.org/10.5281/zenodo.21411376",
        },
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

    const externalWriting = [
      {
        key: "finsight-ai",
        title:
          "Unlocking Financial Potential: FinSight AI's promise for empowered finance",
        href: "https://medium.com/@0xjevan/unlocking-financial-potential-finsight-ais-promises-for-empowered-finance-e0fb5ebdabcb",
        category: "decentralised finance & ai",
        year: "2024",
      },
      {
        key: "deg-x",
        title: "Deg X: bringing cross-chain DeFi interaction to users",
        href: "https://medium.com/@0xjevan/deg-x-bringing-cross-chain-defi-interaction-to-users-8a1bd37c7646",
        category: "defi",
        year: "2024",
      },
      {
        key: "change-the-world",
        title: "I'll change the world",
        href: "https://jevan.hashnode.dev/ill-change-the-world",
        category: "personal",
        year: "2022",
      },
    ];

    const internalWriting = posts.map((p) => ({
      key: p.slug,
      title: p.title,
      to: `/blog/${p.slug}`,
      category: p.category,
      year: p.date.slice(0, 4),
    }));

    const writing = ref([...internalWriting, ...externalWriting]);

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
