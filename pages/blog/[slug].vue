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

    <template v-else>
      <header class="post-head">
        <h1 class="post-title">Not found</h1>
      </header>
      <p class="prose">
        That post doesn't exist.
        <NuxtLink to="/blog">Back to writing</NuxtLink>.
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { posts } from "~/data/posts";

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

useHead(() => ({
  title: post.value ? `${post.value.title} — Evans Eburu` : "Not found",
  meta: post.value
    ? [{ name: "description", content: post.value.excerpt }]
    : [],
}));
</script>
