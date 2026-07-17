<template>
  <div class="blogwrap">
    <NuxtLink class="blog-back" to="/blog">← writing</NuxtLink>

    <template v-if="post">
      <header class="post-head">
        <p class="post-meta">{{ fmt(post.date) }} · {{ post.category }}</p>
        <h1 class="post-title">{{ post.title }}</h1>
      </header>

      <article class="prose" v-html="post.body"></article>

      <div class="post-foot">
        <NuxtLink class="blog-back" to="/blog">← all posts</NuxtLink>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { posts } from "~/data/posts";
import { SITE_CONFIG } from "~/config/seo.config";

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const post = computed(() => posts.find((p) => p.slug === slug.value));

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

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

const p = post.value!;
const url = `${SITE_CONFIG.hostname}/blog/${p.slug}`;
const title = `${p.title} · Evans Eburu`;
const published = `${p.date}-01`;

useHead({
  title,
  link: [{ rel: "canonical", href: url }],
  meta: [
    { name: "description", content: p.excerpt },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: p.excerpt },
    { property: "og:url", content: url },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: p.excerpt },
    { property: "article:published_time", content: published },
    { property: "article:author", content: "Evans Eburu" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.title,
        description: p.excerpt,
        datePublished: published,
        author: {
          "@type": "Person",
          name: "Evans Eburu",
          url: SITE_CONFIG.hostname,
        },
        publisher: { "@type": "Person", name: "Evans Eburu" },
        mainEntityOfPage: url,
        url,
        image: `${SITE_CONFIG.hostname}/evans.JPG`,
      }),
    },
  ],
});
</script>
