export default defineEventHandler(async (event) => {
  // Add static routes
  const routes = [
    {
      loc: 'https://0xjevan.vercel.app/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: 'https://0xjevan.vercel.app/#summary',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://0xjevan.vercel.app/#works',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: 'https://0xjevan.vercel.app/#contact',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
  ]

  // Add project URLs
  const projects = [
    {
      title: 'Goals & Actions',
      url: 'https://goalsnactions.vercel.app/',
    },
    {
      title: 'Multicash',
      url: 'https://multicash.vercel.app/',
    },
    {
      title: 'Finsight AI',
      url: 'https://aifinsight.vercel.app/',
    },
    {
      title: 'Deg X',
      url: 'https://deg-x-charlie.vercel.app/',
    },
    {
      title: 'Pool X',
      url: 'https://pool-x.netlify.app/',
    },
  ]

  projects.forEach(project => {
    routes.push({
      loc: project.url,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6,
    })
  })

  // Add social profiles
  const socials = [
    'https://github.com/Johnnyevans32',
    'https://linkedin.com/in/0xjevan',
    'https://x.com/0xjevan',
    'https://medium.com/@0xjevan',
  ]

  socials.forEach(social => {
    routes.push({
      loc: social,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.5,
    })
  })

  // Set proper content type for XML
  setHeader(event, 'Content-Type', 'application/xml')
  
  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return xml
})