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

useHead({
  title: "Writing — Evans Eburu",
  meta: [
    {
      name: "description",
      content:
        "Notes on AI safety, evaluation, and the systems I build, by Evans Eburu.",
    },
  ],
});
</script>
