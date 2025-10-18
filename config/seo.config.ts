/**
 * SEO Configuration for Nuxt 3 Portfolio
 * Optimized for ranking "Evans Eburu" in search results
 */

// Base configuration
export const SITE_CONFIG = {
  // Site metadata
  hostname: "https://0xjevan.vercel.app",
  title: "Evans Eburu - Software Engineer & Full Stack Developer",
  description:
    "Evans Eburu is a software engineer with 6+ years of experience specializing in backend development, Python, FastAPI, Node.js, Vue.js, Web3, and blockchain technologies. Based in Lagos, Nigeria.",

  // SEO defaults
  seo: {
    defaultTitle:
      "Evans Eburu - Software Engineer | Backend & Full Stack Developer",
    titleTemplate: "%s | Evans Eburu",
    defaultDescription:
      "Evans Eburu is a software engineer with 6+ years of experience specializing in backend development, Python, FastAPI, Node.js, Vue.js, Web3, and blockchain technologies. View portfolio, projects, and technical articles.",
    keywords: [
      "Evans Eburu",
      "Evans Eburu software engineer",
      "Evans Eburu developer",
      "Evans Eburu Nigeria",
      "Evans Eburu Lagos",
      "0xjevan",
      "software engineer Nigeria",
      "backend developer",
      "full stack developer",
      "Python developer",
      "FastAPI developer",
      "Node.js developer",
      "Vue.js developer",
      "blockchain developer",
      "Web3 developer",
      "software engineer Lagos",
      "Nigerian software engineer",
      "backend engineer Nigeria",
    ],
    author: "Evans Eburu",
    language: "en",
    locale: "en_US",
    type: "website",
    siteName: "Evans Eburu Portfolio",
    twitter: {
      card: "summary_large_image",
      site: "@0xjevan",
      creator: "@0xjevan",
    },
    og: {
      type: "website",
      siteName: "Evans Eburu - Software Engineer Portfolio",
      locale: "en_US",
    },
  },

  // Sitemap configuration
  sitemap: {
    hostname: "https://0xjevan.vercel.app",
    cacheTime: 1000 * 60 * 60, // 1 hour
    defaults: {
      changefreq: "weekly",
      priority: 0.5,
      lastmod: new Date().toISOString().split("T")[0],
    },
    exclude: [
      "/admin/**",
      "/private/**",
      "/api/**",
      "/_nuxt/**",
      "/__nuxt_error/**",
    ],
  },

  // Robots.txt configuration
  robots: {
    userAgent: "*",
    allow: "/",
    disallow: ["/admin/", "/private/", "/api/", "/_nuxt/", "/__nuxt_error/"],
    sitemap: "https://0xjevan.vercel.app/sitemap.xml",
  },
};

// Sitemap routes configuration
export const SITEMAP_ROUTES = [
  // Main pages
  {
    url: "/",
    priority: 1.0,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "#summary",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    url: "#works",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    url: "#contact",
    priority: 0.7,
    changefreq: "monthly",
  },
];

// External URLs for sitemap (optional - don't include these if they're not your pages)
export const EXTERNAL_URLS = [
  // Social profiles - these help establish your identity
  {
    url: "https://github.com/Johnnyevans32",
    priority: 0.5,
    changefreq: "weekly",
  },
  {
    url: "https://linkedin.com/in/0xjevan",
    priority: 0.5,
    changefreq: "weekly",
  },
  { url: "https://x.com/0xjevan", priority: 0.5, changefreq: "weekly" },
  { url: "https://medium.com/@0xjevan", priority: 0.5, changefreq: "weekly" },
];

// Meta tags configuration
export const META_TAGS = {
  // Default meta tags
  default: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { name: "googlebot", content: "index, follow" },
    { name: "bingbot", content: "index, follow" },
    { name: "theme-color", content: "#feed01" },
    { name: "msapplication-TileColor", content: "#feed01" },
    { name: "geo.region", content: "NG-LA" },
    { name: "geo.placename", content: "Lagos" },
    { name: "geo.position", content: "6.5244;3.3792" },
    { name: "ICBM", content: "6.5244, 3.3792" },
  ],

  // Open Graph meta tags
  openGraph: [
    { property: "og:type", content: "profile" },
    { property: "og:site_name", content: "Evans Eburu Portfolio" },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: "https://0xjevan.vercel.app" },
    {
      property: "og:title",
      content: "Evans Eburu - Software Engineer & Full Stack Developer",
    },
    {
      property: "og:description",
      content:
        "Evans Eburu is a software engineer with 6+ years of experience specializing in backend development, Python, FastAPI, Node.js, Vue.js, and blockchain technologies.",
    },
    { property: "og:image", content: "https://0xjevan.vercel.app/pic.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Evans Eburu - Software Engineer" },
    { property: "profile:first_name", content: "Evans" },
    { property: "profile:last_name", content: "Eburu" },
    { property: "profile:username", content: "0xjevan" },
  ],

  // Twitter meta tags
  twitter: [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@0xjevan" },
    { name: "twitter:creator", content: "@0xjevan" },
    { name: "twitter:url", content: "https://0xjevan.vercel.app" },
    { name: "twitter:title", content: "Evans Eburu - Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Software engineer with 6+ years experience in backend development, Python, Node.js, Vue.js, and blockchain technologies.",
    },
    { name: "twitter:image", content: "https://0xjevan.vercel.app/pic.png" },
    {
      name: "twitter:image:alt",
      content: "Evans Eburu - Software Engineer Portfolio",
    },
  ],

  // Structured data (JSON-LD)
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Evans Eburu",
    alternateName: ["0xjevan", "Jevan"],
    givenName: "Evans",
    familyName: "Eburu",
    jobTitle: "Software Engineer",
    description:
      "Software engineer with 6+ years of experience specializing in backend development, Python, FastAPI, Node.js, Vue.js, NuxtJS, Web3, and blockchain technologies.",
    url: "https://0xjevan.vercel.app",
    image: "https://0xjevan.vercel.app/pic.png",
    email: "evanseburu32@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    nationality: {
      "@type": "Country",
      name: "Nigeria",
    },
    sameAs: [
      "https://github.com/Johnnyevans32",
      "https://linkedin.com/in/0xjevan",
      "https://x.com/0xjevan",
      "https://medium.com/@0xjevan",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Autospend",
      url: "https://www.autospend.ai",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Federal University of Technology Owerri",
    },
    knowsAbout: [
      "Software Engineering",
      "Backend Development",
      "Full Stack Development",
      "Python",
      "FastAPI",
      "Node.js",
      "NestJS",
      "Vue.js",
      "Nuxt.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Web3",
      "Blockchain Development",
      "Smart Contracts",
      "RESTful APIs",
      "Database Design",
      "Cloud Computing",
      "AWS",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationalCategory: "15-1252.00",
      skills:
        "Python, FastAPI, Node.js, Vue.js, MongoDB, PostgreSQL, Docker, Web3",
    },
  },
};

// Export all configurations
export default {
  SITE_CONFIG,
  SITEMAP_ROUTES,
  EXTERNAL_URLS,
  META_TAGS,
};
