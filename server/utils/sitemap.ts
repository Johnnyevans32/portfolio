import { SITE_CONFIG, SITEMAP_ROUTES, EXTERNAL_URLS } from '../../config/seo.config'

// Sitemap interfaces
export interface SitemapRoute {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export interface SitemapConfig {
  hostname: string
  cacheTime: number
  defaults: {
    changefreq: string
    priority: number
    lastmod: string
  }
}

/**
 * Generate sitemap routes from configuration
 */
export function generateRoutes(config: SitemapConfig): SitemapRoute[] {
  const routes: SitemapRoute[] = []
  
  // Add static routes
  SITEMAP_ROUTES.forEach(route => {
    routes.push({
      loc: `${config.hostname}${route.url}`,
      lastmod: route.lastmod || config.defaults.lastmod,
      changefreq: route.changefreq as SitemapRoute['changefreq'],
      priority: route.priority
    })
  })
  
  // Add external URLs
  EXTERNAL_URLS.forEach(url => {
    routes.push({
      loc: url.url,
      lastmod: url.lastmod || config.defaults.lastmod,
      changefreq: url.changefreq as SitemapRoute['changefreq'],
      priority: url.priority
    })
  })
  
  return routes
}

/**
 * Validate sitemap routes
 */
export function validateRoutes(routes: SitemapRoute[]): boolean {
  return routes.every(route => {
    // Validate loc (required)
    if (!route.loc || typeof route.loc !== 'string') {
      console.error('Invalid route loc:', route)
      return false
    }
    
    // Validate URL format
    try {
      new URL(route.loc)
    } catch {
      console.error('Invalid URL format:', route.loc)
      return false
    }
    
    // Validate priority (if present)
    if (route.priority !== undefined) {
      if (typeof route.priority !== 'number' || route.priority < 0 || route.priority > 1) {
        console.error('Invalid priority:', route.priority)
        return false
      }
    }
    
    // Validate changefreq (if present)
    if (route.changefreq) {
      const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']
      if (!validFreqs.includes(route.changefreq)) {
        console.error('Invalid changefreq:', route.changefreq)
        return false
      }
    }
    
    // Validate lastmod (if present)
    if (route.lastmod) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(route.lastmod)) {
        console.error('Invalid lastmod format:', route.lastmod)
        return false
      }
    }
    
    return true
  })
}

/**
 * Format date for sitemap (YYYY-MM-DD)
 */
export function formatSitemapDate(date: Date | string): string {
  if (typeof date === 'string') {
    return date.split('T')[0]
  }
  return date.toISOString().split('T')[0]
}

/**
 * Escape XML special characters
 */
export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Default sitemap configuration from centralized config
 */
export const defaultConfig: SitemapConfig = SITE_CONFIG.sitemap