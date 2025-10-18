/**
 * SEO Configuration for Nuxt 3 Portfolio
 * Centralized configuration for sitemap, robots.txt, meta tags, and SEO best practices
 */

// Base configuration
export const SITE_CONFIG = {
  // Site metadata
  hostname: 'https://0xjevans.vercel.app',
  title: 'Jevan - Full Stack Developer',
  description: 'Portfolio of Jevan, a full stack developer specializing in web applications, blockchain, and AI solutions.',
  
  // SEO defaults
  seo: {
    defaultTitle: 'Jevan - Full Stack Developer',
    titleTemplate: '%s | Jevan',
    defaultDescription: 'Portfolio of Jevan, a full stack developer specializing in web applications, blockchain, and AI solutions.',
    keywords: ['full stack developer', 'web development', 'blockchain', 'AI', 'portfolio', 'Jevan'],
    author: 'Jevan',
    language: 'en',
    locale: 'en_US',
    type: 'website',
    siteName: 'Jevan Portfolio',
    twitter: {
      card: 'summary_large_image',
      site: '@0xjevan',
      creator: '@0xjevan'
    },
    og: {
      type: 'website',
      siteName: 'Jevan Portfolio',
      locale: 'en_US'
    }
  },
  
  // Sitemap configuration
  sitemap: {
    hostname: 'https://0xjevans.vercel.app',
    cacheTime: 1000 * 60 * 60, // 1 hour
    defaults: {
      changefreq: 'weekly',
      priority: 0.5,
      lastmod: new Date().toISOString().split('T')[0]
    },
    exclude: [
      '/admin/**',
      '/private/**',
      '/api/**',
      '/_nuxt/**',
      '/__nuxt_error/**'
    ]
  },
  
  // Robots.txt configuration
  robots: {
    userAgent: '*',
    allow: '/',
    disallow: [
      '/admin/',
      '/private/',
      '/api/',
      '/_nuxt/',
      '/__nuxt_error/'
    ],
    sitemap: 'https://0xjevans.vercel.app/sitemap.xml'
  }
}

// Sitemap routes configuration
export const SITEMAP_ROUTES = [
  // Main pages
  {
    url: '/',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '#summary',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '#works',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    url: '#contact',
    priority: 0.7,
    changefreq: 'monthly'
  }
]

// External URLs for sitemap
export const EXTERNAL_URLS = [
  // Projects
  { url: 'https://goalsnactions.vercel.app/', priority: 0.8, changefreq: 'monthly', lastmod: '2024-01-15' },
  { url: 'https://multicash.vercel.app/', priority: 0.7, changefreq: 'monthly', lastmod: '2024-01-20' },
  { url: 'https://aifinsight.vercel.app/', priority: 0.7, changefreq: 'monthly', lastmod: '2024-01-25' },
  { url: 'https://deg-x-charlie.vercel.app/', priority: 0.6, changefreq: 'monthly', lastmod: '2024-02-01' },
  { url: 'https://pool-x.netlify.app/', priority: 0.6, changefreq: 'monthly', lastmod: '2024-02-05' },
  
  // Social profiles
  { url: 'https://github.com/Johnnyevans32', priority: 0.5, changefreq: 'weekly' },
  { url: 'https://linkedin.com/in/0xjevan', priority: 0.5, changefreq: 'weekly' },
  { url: 'https://x.com/0xjevan', priority: 0.5, changefreq: 'weekly' },
  { url: 'https://medium.com/@0xjevan', priority: 0.5, changefreq: 'weekly' }
]

// Meta tags configuration
export const META_TAGS = {
  // Default meta tags
  default: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'bingbot', content: 'index, follow' },
    { name: 'theme-color', content: '#000000' },
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'msapplication-TileImage', content: '/mstile-144x144.png' }
  ],
  
  // Open Graph meta tags
  openGraph: [
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Jevan Portfolio' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:url', content: 'https://0xjevans.vercel.app' },
    { property: 'og:title', content: 'Jevan - Full Stack Developer' },
    { property: 'og:description', content: 'Portfolio of Jevan, a full stack developer specializing in web applications, blockchain, and AI solutions.' },
    { property: 'og:image', content: 'https://0xjevans.vercel.app/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Jevan Portfolio' }
  ],
  
  // Twitter meta tags
  twitter: [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@0xjevan' },
    { name: 'twitter:creator', content: '@0xjevan' },
    { name: 'twitter:url', content: 'https://0xjevans.vercel.app' },
    { name: 'twitter:title', content: 'Jevan - Full Stack Developer' },
    { name: 'twitter:description', content: 'Portfolio of Jevan, a full stack developer specializing in web applications, blockchain, and AI solutions.' },
    { name: 'twitter:image', content: 'https://0xjevans.vercel.app/twitter-image.png' },
    { name: 'twitter:image:alt', content: 'Jevan Portfolio' }
  ],
  
  // Structured data (JSON-LD)
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jevan',
    jobTitle: 'Full Stack Developer',
    description: 'Full stack developer specializing in web applications, blockchain, and AI solutions',
    url: 'https://0xjevans.vercel.app',
    sameAs: [
      'https://github.com/Johnnyevans32',
      'https://linkedin.com/in/0xjevan',
      'https://x.com/0xjevan',
      'https://medium.com/@0xjevan'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    knowsAbout: ['Web Development', 'Blockchain', 'AI', 'Full Stack Development']
  }
}

// Export all configurations
export default {
  SITE_CONFIG,
  SITEMAP_ROUTES,
  EXTERNAL_URLS,
  META_TAGS
}