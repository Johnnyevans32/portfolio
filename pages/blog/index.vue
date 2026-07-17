<template>
  <div class="blogwrap">
    <NuxtLink class="blog-back" to="/">← evans eburu</NuxtLink>

    <header class="blog-masthead">
      <h1>Writing</h1>
      <p>Notes on AI safety, evaluation, and the systems I build.</p>
    </header>

    <ul class="rows">
      <li v-for="p in sorted" :key="p.slug">
        <div class="row-t">
          <NuxtLink :to="`/blog/${p.slug}`">{{ p.title }}</NuxtLink>
          <div class="row-sub">{{ p.category }}</div>
        </div>
        <div class="row-meta">{{ fmt(p.date) }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { posts } from "~/data/posts";
import { SITE_CONFIG } from "~/config/seo.config";

const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function fmt(d: string): string {
  const [y, m] = d.split("-");
  return m ? `${MONTHS[parseInt(m, 10) - 1]} ${y}` : y;
}

const url = `${SITE_CONFIG.hostname}/blog`;
const title = "Writing · Evans Eburu";
const description =
  "Notes on AI safety, evaluation, and the systems I build, by Evans Eburu.";

useHead({
  title,
  link: [{ rel: "canonical", href: url }],
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ],
});
</script>
