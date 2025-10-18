import { SITE_CONFIG } from '../../config/seo.config'

/**
 * Dynamic robots.txt generator for Nuxt 3
 * Generates robots.txt with proper formatting and SEO best practices
 */

export default defineEventHandler(async (event) => {
  try {
    const { robots } = SITE_CONFIG
    
    // Build robots.txt content
    const lines: string[] = []
    
    // User-agent
    lines.push(`User-agent: ${robots.userAgent}`)
    
    // Allow rules
    if (robots.allow) {
      if (Array.isArray(robots.allow)) {
        robots.allow.forEach(rule => lines.push(`Allow: ${rule}`))
      } else {
        lines.push(`Allow: ${robots.allow}`)
      }
    }
    
    // Disallow rules
    if (robots.disallow) {
      if (Array.isArray(robots.disallow)) {
        robots.disallow.forEach(rule => lines.push(`Disallow: ${rule}`))
      } else {
        lines.push(`Disallow: ${robots.disallow}`)
      }
    }
    
    // Sitemap
    if (robots.sitemap) {
      lines.push(`Sitemap: ${robots.sitemap}`)
    }
    
    // Add crawl-delay for better server performance
    lines.push('Crawl-delay: 1')
    
    // Add host directive for canonical domain
    lines.push(`Host: ${SITE_CONFIG.hostname}`)
    
    const robotsContent = lines.join('\n')
    
    // Set proper headers
    setHeader(event, 'Content-Type', 'text/plain')
    setHeader(event, 'Cache-Control', 'public, max-age=86400') // 24 hours cache
    setHeader(event, 'Content-Length', Buffer.byteLength(robotsContent).toString())
    setHeader(event, 'Last-Modified', new Date().toUTCString())
    setHeader(event, 'X-Robots-Generated', new Date().toISOString())
    
    return robotsContent
    
  } catch (error) {
    console.error('Robots.txt generation failed:', error)
    
    // Fallback robots.txt
    const fallbackContent = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Sitemap: https://0xjevans.vercel.app/sitemap.xml
Crawl-delay: 1`
    
    setHeader(event, 'Content-Type', 'text/plain')
    setHeader(event, 'Cache-Control', 'public, max-age=3600') // 1 hour cache for error case
    setHeader(event, 'X-Robots-Error', 'true')
    
    return fallbackContent
  }
})