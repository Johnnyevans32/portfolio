// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - Evans Eburu | Software Engineer",
      title: "Evans Eburu | Software Engineer Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Evans Eburu is a software engineer with 6+ years experience specializing in backend development, scalable architectures, and modern web technologies. Based in Nigeria, building innovative solutions.",
        },
        { name: "format-detection", content: "telephone=no" },

        // SEO Meta Tags
        {
          name: "keywords",
          content:
            "Evans Eburu, software engineer, backend developer, fullstack developer, Python, FastAPI, Node.js, Vue.js, Nuxt.js, web3, blockchain developer, Nigeria, 0xjevan",
        },
        { name: "author", content: "Evans Eburu" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "bingbot", content: "index, follow" },

        // Open Graph Meta Tags
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Evans Eburu | Software Engineer Portfolio",
        },
        {
          property: "og:description",
          content:
            "Software engineer with 6+ years experience specializing in backend development, scalable architectures, and modern web technologies.",
        },
        { property: "og:url", content: "https://0xjevan.vercel.app" },
        { property: "og:site_name", content: "Evans Eburu Portfolio" },
        { property: "og:locale", content: "en_US" },
        { property: "og:image", content: "https://0xjevan.vercel.app/pic.png" },
        {
          property: "og:image:alt",
          content: "Evans Eburu - Software Engineer",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },

        // Twitter Card Meta Tags
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Evans Eburu | Software Engineer Portfolio",
        },
        {
          name: "twitter:description",
          content:
            "Software engineer with 6+ years experience specializing in backend development, scalable architectures, and modern web technologies.",
        },
        {
          name: "twitter:image",
          content: "https://0xjevan.vercel.app/pic.png",
        },
        {
          name: "twitter:image:alt",
          content: "Evans Eburu - Software Engineer",
        },
        { name: "twitter:site", content: "@0xjevan" },
        { name: "twitter:creator", content: "@0xjevan" },

        // Canonical URL
        {
          hid: "canonical",
          property: "canonical",
          content: "https://0xjevan.vercel.app",
        },

        // Additional SEO
        { name: "revisit-after", content: "7 days" },
        { name: "distribution", content: "global" },
        { name: "rating", content: "general" },
        { name: "theme-color", content: "#feed01" },
        { name: "msapplication-TileColor", content: "#feed01" },
        { name: "msapplication-TileImage", content: "/favicon.ico" },

        // Google Search Console Verification (replace with your actual verification code)
        {
          name: "google-site-verification",
          content: "YOUR_GOOGLE_VERIFICATION_CODE",
        },
        { name: "msvalidate.01", content: "YOUR_BING_VERIFICATION_CODE" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.ico" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },

  // SEO and Performance Optimizations
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
  
  // Route rules to serve static files properly
  routeRules: {
    "/robots.txt": { prerender: true, headers: { "Content-Type": "text/plain" } },
    "/sitemap.xml": { prerender: true, headers: { "Content-Type": "application/xml" } },
    "/site.webmanifest": { prerender: true, headers: { "Content-Type": "application/json" } },
    "/favicon.ico": { prerender: true, headers: { "Content-Type": "image/x-icon" } },
    "/pic.png": { prerender: true, headers: { "Content-Type": "image/png" } },
  },

  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: { transpile: ["@fortawesome/vue-fontawesome"] },
});
