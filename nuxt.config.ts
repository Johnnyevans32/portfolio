// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE_CONFIG, META_TAGS } from './config/seo.config'

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: SITE_CONFIG.seo.titleTemplate,
      title: SITE_CONFIG.seo.defaultTitle,
      htmlAttrs: {
        lang: SITE_CONFIG.seo.language,
      },
      meta: [
        // Default meta tags
        ...META_TAGS.default,
        
        // SEO Meta Tags
        {
          hid: "description",
          name: "description",
          content: SITE_CONFIG.seo.defaultDescription,
        },
        {
          name: "keywords",
          content: SITE_CONFIG.seo.keywords.join(', '),
        },
        { name: "author", content: SITE_CONFIG.seo.author },

        // Open Graph Meta Tags
        ...META_TAGS.openGraph,
        {
          property: "og:url",
          content: SITE_CONFIG.hostname,
        },
        {
          property: "og:title",
          content: SITE_CONFIG.seo.defaultTitle,
        },
        {
          property: "og:description",
          content: SITE_CONFIG.seo.defaultDescription,
        },

        // Twitter Card Meta Tags
        ...META_TAGS.twitter,
        {
          name: "twitter:title",
          content: SITE_CONFIG.seo.defaultTitle,
        },
        {
          name: "twitter:description",
          content: SITE_CONFIG.seo.defaultDescription,
        },

        // Canonical URL
        {
          hid: "canonical",
          property: "canonical",
          content: SITE_CONFIG.hostname,
        },

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
      script: [
        // Structured data (JSON-LD)
        {
          type: 'application/ld+json',
          children: JSON.stringify(META_TAGS.jsonLd)
        }
      ]
    },
  },

  // SEO and Performance Optimizations
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/sitemap.xml", "/robots.txt"],
    },
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
