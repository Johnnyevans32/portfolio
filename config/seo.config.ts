/**
 * SEO Configuration for Nuxt 3 Portfolio
 * Optimized for ranking "Evans Eburu" in search results
 */

// Base configuration
export const SITE_CONFIG = {
  // Site metadata
  hostname: "https://evanseburu.com",
  title: "Evans Eburu — Software Engineer & AI-Safety Researcher",
  description:
    "Evans Eburu is a software engineer (6+ yrs, backend & fintech) and independent AI-safety researcher. Author of DeceptionBench — a live benchmark for LLM deception, detection, and the monitorability of reasoning.",

  // SEO defaults
  seo: {
    defaultTitle: "Evans Eburu — Software Engineer & AI-Safety Researcher",
    titleTemplate: "%s | Evans Eburu",
    defaultDescription:
      "Software engineer (backend & fintech) and independent AI-safety researcher. Author of DeceptionBench — a live cross-play benchmark for LLM deception, detection, and monitorability. View research, projects, and experience.",
    keywords: [
      "Evans Eburu",
      "Evans Eburu software engineer",
      "Evans Eburu researcher",
      "Evans Eburu AI safety",
      "0xjevan",
      "DeceptionBench",
      "AI safety researcher",
      "LLM deception",
      "LLM evaluation",
      "AI safety",
      "chain-of-thought monitoring",
      "software engineer",
      "backend engineer",
      "fintech engineer",
      "Node.js developer",
      "TypeScript developer",
      "NestJS developer",
      "Web3 developer",
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
    hostname: "https://evanseburu.com",
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
    sitemap: "https://evanseburu.com/sitemap.xml",
  },
};

// Sitemap routes configuration
export const SITEMAP_ROUTES = [
  // Single-page site — only the homepage is a real, indexable URL.
  // (In-page anchors like #publications are not separate URLs.)
  {
    url: "/",
    priority: 1.0,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
];

// A sitemap may only list URLs on this domain. Social profiles belong in the
// JSON-LD `sameAs` array (already set), never in the sitemap — Google rejects
// off-domain <loc> entries as "URL not allowed."
export const EXTERNAL_URLS: {
  url: string;
  priority?: number;
  changefreq?: string;
  lastmod?: string;
}[] = [];

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
    { name: "theme-color", content: "#ffffff" },
    { name: "msapplication-TileColor", content: "#ffffff" },
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
    { property: "og:url", content: "https://evanseburu.com" },
    {
      property: "og:title",
      content: "Evans Eburu - Software Engineer & Full Stack Developer",
    },
    {
      property: "og:description",
      content:
        "Evans Eburu is a software engineer with 6+ years of experience specializing in backend development, Python, FastAPI, Node.js, Vue.js, and blockchain technologies.",
    },
    { property: "og:image", content: "https://evanseburu.com/evans.JPG" },
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
    { name: "twitter:url", content: "https://evanseburu.com" },
    { name: "twitter:title", content: "Evans Eburu - Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Software engineer with 6+ years experience in backend development, Python, Node.js, Vue.js, and blockchain technologies.",
    },
    { name: "twitter:image", content: "https://evanseburu.com/evans.JPG" },
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
    jobTitle: "Software Engineer & AI-Safety Researcher",
    description:
      "Software engineer (backend & fintech) and independent AI-safety researcher. Author of DeceptionBench, a live benchmark for LLM deception, detection, and the monitorability of reasoning.",
    url: "https://evanseburu.com",
    image: "https://evanseburu.com/evans.JPG",
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
      "https://www.linkedin.com/in/0xjevan",
      "https://x.com/0xjevan",
      "https://medium.com/@0xjevan",
      "https://deceptionbench.xyz",
      "https://doi.org/10.5281/zenodo.21209429",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Figo",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Ural Federal University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Federal University of Technology Owerri",
      },
    ],
    knowsAbout: [
      "AI Safety",
      "LLM Evaluation",
      "AI Deception",
      "Chain-of-Thought Monitoring",
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
