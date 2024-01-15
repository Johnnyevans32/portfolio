<template>
  <div class="grid gap-10">
    <div>
      <div class="grid grid-cols-6 items-center py-4">
        <span class="col-start-2">0xjevan</span>

        <div class="col-start-5 col-end-6 justify-self-end flex gap-2">
          <span
            v-for="item in navItems"
            :key="item.id"
            @click="() => scrollToSection(item.id)"
          >
            {{ item.name }}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-6 min-h-screen items-center" id="home">
        <div class="transform translate-y-[1vh] col-start-2 col-span-2">
          <img src="./pic.png" class="h-[60vh]" alt="dp" />
          <h1 class="absolute bottom-1 right-24 text-[#f80000] text-5xl">
            portfolio
          </h1>
        </div>
        <div class="col-start-4 col-span-2 text-right">
          <h1>Hello, I'm Evans Eburu.</h1>
          <p>
            i am a <b :style="underlineText">software engineer</b> based on
            earth! focused on building applications with scalable architectures.
            proud team player focused on achieving project objectives with speed
            and accuracy.
          </p>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-6 items-center py-10 text-white bg-black"
      id="work"
    >
      <div class="col-start-3 col-span-2">
        <h1 :style="underlineText">what i do</h1>
        <p>
          as a <b :style="underlineText">software engineer</b> with a focus on
          backend development, software architecture, and design, I bring a
          unique set of skills to any project. I specialize in building backend
          infrastructure, designing scalable and reliable software
          architectures, developing RESTful APIs, optimizing database systems,
          deploying applications to the cloud, and collaborating with teams to
          achieve project objectives. I am skilled in a range of programming
          languages and frameworks, including Python, Java, Node.js, SQL, and
          NoSQL databases.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-6">
      <div class="col-start-2 col-end-6 flex flex-col gap-4">
        <div class="flex gap-2 items-center">
          <font-awesome-icon icon="grip-lines" class="text-2xl" />
          <h2>selected projects</h2>
        </div>
        <div
          v-for="project in projects"
          :key="project.title"
          class="flex justify-between items-center border-2 border-black p-4 cursor-pointer"
        >
          <div class="flex gap-4 items-center">
            <p>{{ project.year }}</p>
            <div class="flex flex-col">
              <p>{{ project.title }}</p>
              <div class="flex gap-2">
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
        </div>
      </div>
    </div>

    <div class="grid grid-cols-6">
      <div class="col-start-2 col-end-6 flex flex-col gap-4">
        <div class="flex gap-2 items-center">
          <font-awesome-icon icon="grip-lines" class="text-2xl" />
          <h2>work history</h2>
        </div>
        <div
          v-for="job in jobs"
          :key="job.company"
          class="flex justify-between items-center border-2 border-black p-4"
        >
          <div class="flex gap-4 items-center">
            <p class="w-24">{{ job.year }}</p>
            <div class="flex flex-col">
              <p>{{ job.title }}</p>
              <a :href="job.companySite" target="_blank" class="text-xs">
                {{ job.company }}</a
              >
            </div>
          </div>

          <div class="flex gap-2">
            <span
              v-for="tech in job.technologies"
              :key="tech"
              class="border-2 border-black p-1"
              >{{ tech }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-6 py-10 gap-4 rounded-t-2xl bg-black text-white"
      id="contact"
    >
      <h1 class="col-start-2">contacts</h1>
      <div class="col-start-2 flex flex-col gap-4">
        <a
          class="flex items-center gap-1"
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
        >
          <font-awesome-icon :icon="social.icon" class="text-xs" />
          {{ social.name }}
          <font-awesome-icon icon="link" class="text-xs" />
        </a>
      </div>
      <div class="col-start-5 col-end-6 justify-self-end">
        <a
          href="https://t.ly/MqlDf"
          target="_blank"
          class="flex items-center gap-1"
        >
          <font-awesome-icon icon="file" class="text-xs" />resume
          <font-awesome-icon icon="link" class="text-xs"
        /></a>
      </div>

      <p class="col-span-6 text-center">&copy; 2024 0xjevan</p>
    </div>
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
      releventDiv?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = ref([
      { name: "about me", id: "home" },
      { name: "what i do", id: "work" },
      { name: "contact me", id: "contact" },
    ]);

    const projects = ref([
      {
        title: "AiFinSight",
        desc: "decentralised wallet",
        technologies: ["nuxt3", "web5", "gpt"],
        links: [{ type: "app", link: "https://aifinsight.vercel.app/" }],
        year: "2024",
      },
      {
        title: "Deg X",
        desc: "decentralised wallet",
        technologies: ["python", "web3"],
        links: [{ type: "app", link: "https://deg-x-charlie.vercel.app/" }],
        year: "2023",
      },
      {
        title: "Pool X",
        desc: "token staking protocol",
        technologies: ["python", "web3"],
        links: [{ type: "app", link: "https://pool-x.netlify.app/" }],
        year: "2023",
      },
    ]);

    const jobs = ref([
      {
        title: "Senior Backend Engineer",
        company: "Bento Africa",
        companySite: "",
        technologies: ["payroll", "node-js"],
        year: "2020-Present",
      },
      {
        title: "Frontend Engineer",
        company: "Dutch0x",
        companySite: "",
        technologies: ["ethereum", "web3"],
        year: "2023-2023",
      },
      {
        title: "Founder",
        company: "Deg X",
        companySite: "",
        technologies: ["ethereum", "web3"],
        year: "2022-2023",
      },
      {
        title: "Backend Engineer Intern",
        company: "HNG Internship",
        companySite: "",
        technologies: ["python", "APIs"],
        year: "2020-2020",
      },
      {
        title: "Fullstack Engineer Intern",
        company: "Skysenx Hub",
        companySite: "",
        technologies: ["php", "MySql"],
        year: "2019-2020",
      },
      {
        title: "Control Room Engineer Intern",
        company: "Federal Radio Corporation of Nigeria",
        companySite: "",
        technologies: [],
        year: "2018-2019",
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
  font-size: 3rem;
  line-height: 1;
}

h2 {
  font-size: 2rem;
  line-height: 1;
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (max-width: 820px) {
}
</style>
