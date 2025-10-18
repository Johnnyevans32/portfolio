<template>
  <div class="grid">
    <!-- JSON-LD Structured Data -->
    <Head>
      <Script type="application/ld+json">
        { "@context": "https://schema.org", "@type": "Person", "name": "Evans
        Eburu", "alternateName": "0xjevan", "jobTitle": "Software Engineer",
        "description": "Software engineer with 6+ years experience specializing
        in backend development, scalable architectures, and modern web
        technologies.", "url": "https://0xjevan.vercel.app", "image":
        "https://0xjevan.vercel.app/pic.png", "email": "evanseburu32@gmail.com",
        "sameAs": [ "https://github.com/Johnnyevans32",
        "https://linkedin.com/in/0xjevan", "https://x.com/0xjevan",
        "https://medium.com/@0xjevan" ], "knowsAbout": [ "Software Engineering",
        "Backend Development", "Python", "FastAPI", "Node.js", "Vue.js",
        "Nuxt.js", "Web3", "Blockchain Development", "Database Design", "API
        Development" ], "worksFor": { "@type": "Organization", "name":
        "Talesconnect", "url": "https://www.talesconnect.io" }, "alumniOf": {
        "@type": "Organization", "name": "Federal University of Technology
        Owerri" }, "address": { "@type": "PostalAddress", "addressCountry":
        "NG", "addressRegion": "Nigeria" }, "nationality": { "@type": "Country",
        "name": "Nigeria" } }
      </Script>
    </Head>

    <nav
      :class="parentDivStyle"
      class="items-center border-b-2 border-black md:text-3xl text-lg fixed bg-[#feed01] z-20"
      role="navigation"
      aria-label="Main navigation"
    >
      <span class="col-start-2" itemprop="alternateName">0xjevan</span>

      <div class="md:col-start-5 col-start-11 h-5 justify-self-end flex gap-2">
        <a
          v-for="item in navItems"
          :key="item.id"
          class="cursor-pointer hover:border-b-2 hover:border-[#f80000]"
          @click="() => scrollToSection(item.id)"
          :href="`#${item.id}`"
          :aria-label="`Navigate to ${item.name} section`"
        >
          {{ item.name }}
        </a>
      </div>
    </nav>

    <main
      :class="parentDivStyle"
      class="min-h-screen items-center md:pt-0 pt-24 gap-4 bg-[#feed01]"
      itemscope
      itemtype="https://schema.org/Person"
    >
      <div
        class="transform translate-y-[1vh] md:col-start-2 md:col-span-2 col-start-2 col-span-10"
      >
        <img
          :src="`./pic.png`"
          class="h-[60vh]"
          alt="Evans Eburu - Software Engineer Profile Picture"
          loading="lazy"
          itemprop="image"
        />
        <h1
          class="absolute bottom-1 -right-6 text-[#f80000] md:text-9xl text-6xl"
        >
          portfolio
        </h1>
      </div>
      <div
        class="md:col-start-4 md:col-span-2 text-right col-start-2 col-span-10"
      >
        <h1 itemprop="name">Hello, I'm Evans Eburu.</h1>
        <p itemprop="description">
          i am a
          <b :style="underlineText" itemprop="jobTitle">software engineer</b>
          based on earth! focused on building applications with scalable
          architectures. proud team player focused on achieving project
          objectives with speed and accuracy.
        </p>
      </div>
    </main>

    <section
      :class="parentDivStyle"
      class="items-center py-10 text-white bg-black"
      id="summary"
      aria-labelledby="summary-heading"
    >
      <div class="md:col-start-3 md:col-span-2 col-start-2 col-span-10">
        <h2 id="summary-heading" :style="underlineText">what i do</h2>
        <p>
          as a <b :style="underlineText">software engineer</b> with over 6 years
          of experience with a focus on backend development, software
          architecture, and design, I bring a unique set of skills to any
          project. I specialize in building backend infrastructure, designing
          scalable and reliable software architectures, developing RESTful APIs,
          optimizing database systems, deploying applications to the cloud, and
          collaborating with teams to achieve project objectives. I am skilled
          in a range of programming languages and frameworks. Here is the
          overview. <br /><br />
          <b :style="underlineText">Advanced skills:</b> Python, FastAPI,
          Typescript, Javascript, Node.js, NestJs, VueJs, NuxtJS, Docker,
          MongoDB, Web3 <br /><br />

          <b :style="underlineText">Intermediate skills:</b> Java, React, SQL
          databases, Kubernetes, Golang, Smart Contracts, Web5
        </p>
      </div>
    </section>

    <section :class="parentDivStyle" id="works" aria-labelledby="works-heading">
      <div class="col-start-2 md:col-end-6 col-span-10 flex flex-col gap-4">
        <div class="flex gap-2 items-center">
          <font-awesome-icon icon="grip-lines" class="text-2xl" />
          <h2 id="works-heading">selected projects</h2>
        </div>
        <article
          v-for="project in projects"
          :key="project.title"
          class="flex justify-between items-center border-2 border-black p-4 cursor-pointer hover:bg-[#f80000] hover:text-white"
          itemscope
          itemtype="https://schema.org/SoftwareSourceCode"
        >
          <div class="flex gap-4 items-center">
            <time :datetime="project.year" itemprop="dateCreated">{{
              project.year
            }}</time>
            <div class="flex flex-col">
              <h3 itemprop="name">{{ project.title }}</h3>
              <div class="flex gap-2" itemprop="programmingLanguage">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-xs"
                  >#{{ tech }}</span
                >
              </div>
            </div>
          </div>

          <div class="flex gap-4">
            <a
              class="flex items-center gap-1"
              v-for="link in project.links"
              :key="link.link"
              :href="link.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${
                link.type === 'app' ? 'View live' : 'View code'
              } for ${project.title}`"
              itemprop="url"
            >
              <font-awesome-icon
                v-if="link.type === 'app'"
                icon="fa-solid fa-eye"
                class="text-xs"
              />
              <font-awesome-icon
                v-else
                icon="fa-solid fa-code"
                class="text-xs"
              />
              {{ link.type === "app" ? "live" : "code" }}
            </a>
          </div>
        </article>
      </div>
    </section>
    <section :class="parentDivStyle" aria-labelledby="articles-heading">
      <div class="col-start-2 md:col-end-6 col-span-10 flex flex-col gap-4">
        <div class="flex gap-2 items-center">
          <font-awesome-icon icon="grip-lines" class="text-2xl" />
          <h2 id="articles-heading">articles</h2>
        </div>
        <article
          v-for="article in articles"
          :key="article.title"
          class="flex items-center border-2 border-black p-4 cursor-pointer hover:bg-[#f80000] hover:text-white"
          itemscope
          itemtype="https://schema.org/Article"
        >
          <div class="flex gap-4 items-center w-full">
            <time
              :datetime="article.date"
              class="w-14 md:w-28"
              itemprop="datePublished"
              >{{ article.date }}</time
            >
            <div class="flex flex-col w-full">
              <h3 itemprop="headline">{{ article.title }}</h3>
              <p class="text-xs" itemprop="articleSection">
                #{{ article.category }}
              </p>
            </div>
          </div>

          <span class="flex items-center gap-1 justify-end">
            <font-awesome-icon icon="clock" class="text-xs" />
            <time
              :datetime="`PT${article.readDuration.replace(' min read', '')}M`"
              class="truncate"
              itemprop="timeRequired"
            >
              {{ article.readDuration }}
            </time>
          </span>
        </article>
      </div>
    </section>

    <section :class="parentDivStyle" aria-labelledby="work-history-heading">
      <div class="col-start-2 md:col-end-6 col-span-10 flex flex-col gap-4">
        <div class="flex gap-2 items-center">
          <font-awesome-icon icon="grip-lines" class="text-2xl" />
          <h2 id="work-history-heading">work history</h2>
        </div>
        <article
          v-for="job in jobs"
          :key="job.company"
          class="flex justify-between items-center border-2 border-black p-4 hover:bg-[#f80000] hover:text-white"
          itemscope
          itemtype="https://schema.org/OrganizationRole"
        >
          <div class="flex gap-4 items-center">
            <time
              :datetime="job.year"
              class="w-14 md:w-28"
              itemprop="startDate"
              >{{ job.year }}</time
            >
            <div class="flex flex-col">
              <h3 itemprop="roleName">{{ job.title }}</h3>
              <a
                :href="job.companySite"
                target="_blank"
                class="text-xs"
                rel="noopener noreferrer"
                itemprop="memberOf"
                itemscope
                itemtype="https://schema.org/Organization"
              >
                <span itemprop="name">{{ job.company }}</span>
                <font-awesome-icon
                  icon="arrow-right"
                  :style="{ transform: 'rotate(315deg)' }"
                  class=""
                />
                ({{ job.type }})
              </a>
            </div>
          </div>

          <div class="gap-2 md:flex hidden" itemprop="skills">
            <span
              v-for="tech in job.technologies"
              :key="tech"
              class="border-2 border-black p-1 bg-white text-black"
              >{{ tech }}</span
            >
          </div>
        </article>
      </div>
    </section>

    <footer
      :class="parentDivStyle"
      class="py-10 gap-4 rounded-t-2xl bg-black text-white"
      id="contact"
      role="contentinfo"
    >
      <h2 class="col-start-2" id="contact-heading">contacts</h2>
      <div class="col-start-2 flex flex-col gap-4">
        <a
          class="flex items-center gap-1"
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Visit my ${social.name} profile`"
          itemprop="sameAs"
        >
          <font-awesome-icon :icon="social.icon" class="text-xs" />
          {{ social.name }}
          <font-awesome-icon
            icon="arrow-right"
            :style="{ transform: 'rotate(315deg)' }"
            class="text-xs"
        /></a>
      </div>
      <div class="md:col-start-5 col-start-11 justify-self-end">
        <a
          href="https://drive.google.com/file/d/1mU3oFcp1M7Msj-RIPKST_KDVS4r_qc6j/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1"
          aria-label="Download my resume"
        >
          <font-awesome-icon icon="file" class="text-xs" />resume
          <font-awesome-icon
            icon="arrow-right"
            :style="{ transform: 'rotate(315deg)' }"
            class="text-xs"
        /></a>
      </div>

      <p
        class="col-span-12 md:col-span-6 text-center"
        itemprop="copyrightNotice"
      >
        &copy; 2024 0xjevan
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const underlineText = ref({
      "text-decoration-line": "underline",
      "text-decoration-color": "#f80000",
    });
    const scrollToSection = (id: string) => {
      const releventDiv = document.getElementById(id);
      releventDiv?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    };
    const parentDivStyle = ref("grid grid-cols-12 md:grid-cols-6 py-5");

    const navItems = ref([
      { name: "about", id: "summary" },
      { name: "works", id: "works" },
      { name: "contacts", id: "contact" },
    ]);

    const projects = ref([
      {
        title: "Goals & Actions",
        desc: "AI-powered personal and professional goals management",
        technologies: ["nextjs", "nodejs", "postgresql", "ai", "ci/cd"],
        links: [
          { type: "app", link: "https://goalsnactions.vercel.app/" },
          { type: "code", link: "https://github.com/Johnnyevans32/goals" },
        ],
        year: "2024",
      },
      {
        title: "Multicash",
        desc: "multi-currency digital wallet",
        technologies: ["nuxt3", "web5", "tbdex", "wallet"],
        links: [
          { type: "app", link: "https://multicash.vercel.app/" },
          { type: "code", link: "https://github.com/Johnnyevans32/MultiCash" },
        ],
        year: "2024",
      },
      {
        title: "Finsight AI",
        desc: "financial management dashboard",
        technologies: ["nuxt3", "web5", "ai"],
        links: [
          { type: "app", link: "https://aifinsight.vercel.app/" },
          { type: "code", link: "https://github.com/Johnnyevans32/AiFinsight" },
        ],
        year: "2024",
      },
      {
        title: "Deg X",
        desc: "decentralised wallet",
        technologies: ["python", "web3"],
        links: [
          { type: "app", link: "https://deg-x-charlie.vercel.app/" },
          { type: "code", link: "https://github.com/Johnnyevans32/deg-x-api" },
        ],
        year: "2023",
      },
      {
        title: "Pool X",
        desc: "token staking protocol",
        technologies: ["python", "web3"],
        links: [
          { type: "app", link: "https://pool-x.netlify.app/" },
          {
            type: "code",
            link: "https://github.com/Johnnyevans32/staking-erc-20",
          },
        ],
        year: "2023",
      },
    ]);

    const articles = ref([
      {
        title:
          "Unlocking Financial Potential: FinSight AI’s Promises for Empowered Finance",
        category: "Decentralised Finance & AI",
        date: "Jan 26, 2024",
        readDuration: "2 min read",
        link: "https://medium.com/@0xjevan/unlocking-financial-potential-finsight-ais-promises-for-empowered-finance-e0fb5ebdabcb",
      },
      {
        title: "Deg X bringing cross chain defi interaction to users!!!",
        category: "Defi",
        date: "Jan 17, 2024",
        readDuration: "1 min read",
        link: "https://medium.com/@0xjevan/deg-x-bringing-cross-chain-defi-interaction-to-users-8a1bd37c7646",
      },
      {
        title: "I'll change the world",
        category: "Personal",
        date: "Mar 16, 2022",
        readDuration: "1 min read",
        link: "https://jevan.hashnode.dev/ill-change-the-world",
      },
    ]);

    const jobs = ref([
      {
        title: "Senior Backend Engineer",
        company: "Autospend",
        companySite: "https://www.autospend.ai",
        technologies: [
          "Stablecoins",
          "NestJS",
          "PostgreSQL",
          "Blockchain",
          "AWS",
        ],
        year: "2025 - Present",
        type: "full time",
      },
      {
        title: "Lead Software Engineer",
        company: "Talesconnect",
        companySite: "https://www.talesconnect.io",
        technologies: [
          "Vuejs",
          "NodeJs",
          "Mongodb",
          "LMS Integration",
          "Real-time Messaging",
          "LTI",
        ],
        year: "2024 - October 2025",
        type: "full time",
      },
      {
        title: "Senior Backend Engineer",
        company: "Bento Africa",
        companySite: "https://bento.africa",
        technologies: ["payroll", "node-js", "psp integrations"],
        year: "2020 - 2024",
        type: "full time",
      },
      {
        title: "Frontend Engineer",
        company: "Dutch0x",
        companySite: "https://www.dutch0x.io/",
        technologies: ["ethereum", "web3"],
        year: "2023 - 2023",
        type: "contract",
      },
      {
        title: "Founder",
        company: "Deg X",
        companySite: "https://degx.typedream.app/",
        technologies: ["ethereum", "web3"],
        year: "2022 - 2023",
        type: "personal project",
      },
      {
        title: "Backend Engineer Intern",
        company: "HNG Internship",
        companySite: "https://internship.zuri.team/",
        technologies: ["python", "APIs"],
        year: "2020 - 2020",
        type: "internship",
      },
      {
        title: "Fullstack Engineer Intern",
        company: "Skysenx Hub",
        companySite: "https://skysenx.com/",
        technologies: ["php", "MySql"],
        year: "2019 - 2020",
        type: "internship",
      },
      {
        title: "Control Room Engineer Intern",
        company: "Federal Radio Corporation of Nigeria",
        companySite: "https://radionigeria.gov.ng/",
        technologies: [],
        year: "2018 - 2019",
        type: "internship",
      },
    ]);

    const socials = ref([
      {
        link: "https://x.com/0xjevan",
        icon: "fa-brands fa-square-x-twitter",
        name: "x",
      },
      {
        link: "https://linkedin.com/in/0xjevan",
        icon: "fa-brands fa-linkedin",
        name: "linkedin",
      },
      {
        link: "https://github.com/Johnnyevans32",
        icon: "fa-brands fa-github",
        name: "github",
      },
      {
        link: "https://medium.com/@0xjevan",
        icon: "fa-brands fa-medium",
        name: "medium",
      },
      {
        link: "mailto:evanseburu32@gmail.com",
        icon: "fa-solid fa-envelope",
        name: "email",
      },
    ]);

    return {
      underlineText,
      navItems,
      projects,
      socials,
      jobs,
      articles,
      parentDivStyle,
      scrollToSection,
    };
  },
});
</script>

<style>
body,
html {
  font-family: "PowerGroteskTrial-Light", sans-serif;
}

@font-face {
  font-family: "PowerGroteskTrial-Light";
  src: local("PowerGroteskTrial"),
    url("./assets/PowerGroteskTrial-Light.ttf") format("truetype");
}

@font-face {
  font-family: "PowerGroteskTrial-Bold";
  src: local("PowerGroteskTrial"),
    url("./assets/PowerGroteskTrial-Bold.ttf") format("truetype");
}

h1 {
  font-family: "PowerGroteskTrial-Bold", sans-serif;
  @apply md:text-7xl text-5xl;
}

h2 {
  font-size: 2rem;
  line-height: 1;
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
