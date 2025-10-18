import { setHeader, createError } from "h3";
import {
  defaultConfig,
  generateRoutes,
  validateRoutes,
  formatSitemapDate,
  type SitemapRoute,
} from "../utils/sitemap";

/**
 * Advanced XML sitemap generator for Nuxt 3
 * Features:
 * - Proper XML formatting with xml2js
 * - Route validation
 * - Performance monitoring
 * - Error handling
 * - Caching headers
 * - SEO best practices
 */

// Simple XML builder for sitemap (no external dependencies)
function buildSitemapXML(routes: SitemapRoute[]): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    'xmlns:xhtml="http://www.w3.org/1999/xhtml" ' +
    'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 ' +
    'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';
  const urlsetClose = "</urlset>";

  const urls = routes
    .map((route) => {
      const urlParts = ["  <url>", `    <loc>${route.loc}</loc>`];

      if (route.lastmod) {
        urlParts.push(`    <lastmod>${route.lastmod}</lastmod>`);
      }

      if (route.changefreq) {
        urlParts.push(`    <changefreq>${route.changefreq}</changefreq>`);
      }

      if (route.priority !== undefined) {
        urlParts.push(`    <priority>${route.priority}</priority>`);
      }

      urlParts.push("  </url>");
      return urlParts.join("\n");
    })
    .join("\n");

  return [xmlHeader, urlsetOpen, urls, urlsetClose].join("\n");
}

/**
 * Generate dynamic routes (for future expansion)
 * This function can be extended to fetch data from CMS, database, etc.
 */
async function generateDynamicRoutes(): Promise<SitemapRoute[]> {
  // Placeholder for dynamic routes
  // Example: fetch blog posts, projects, etc. from API or database
  return [];
}

/**
 * Main sitemap handler
 */
export default defineEventHandler(async (event) => {
  const startTime = Date.now();

  try {
    // Generate all routes
    const staticRoutes = generateRoutes(defaultConfig);
    const dynamicRoutes = await generateDynamicRoutes();
    const allRoutes = [...staticRoutes, ...dynamicRoutes];

    // Validate routes
    if (!validateRoutes(allRoutes)) {
      throw new Error("Invalid routes detected in sitemap generation");
    }

    // Generate XML
    const xml = buildSitemapXML(allRoutes);

    // Set comprehensive headers
    setHeader(event, "Content-Type", "application/xml");
    setHeader(event, "Content-Length", Buffer.byteLength(xml).toString());
    setHeader(event, "Cache-Control", "public, max-age=3600, s-maxage=7200");
    setHeader(
      event,
      "ETag",
      `"${Buffer.from(xml).toString("base64").slice(0, 16)}"`
    );
    setHeader(event, "Last-Modified", new Date().toUTCString());

    // Add custom headers for monitoring
    setHeader(event, "X-Sitemap-Routes", allRoutes.length.toString());
    setHeader(
      event,
      "X-Sitemap-Generation-Time",
      `${Date.now() - startTime}ms`
    );
    setHeader(event, "X-Sitemap-Generated-At", new Date().toISOString());

    return xml;
  } catch (error) {
    console.error("Sitemap generation failed:", error);

    // Return user-friendly error XML
    const errorXML = `<?xml version="1.0" encoding="UTF-8"?>
<error>
  <message>Sitemap generation failed</message>
  <timestamp>${new Date().toISOString()}</timestamp>
  <status>500</status>
</error>`;

    setHeader(event, "Content-Type", "application/xml");
    setHeader(event, "X-Sitemap-Error", "true");
    setHeader(event, "X-Sitemap-Error-Time", `${Date.now() - startTime}ms`);

    throw createError({
      statusCode: 500,
      statusMessage: "Sitemap Generation Failed",
      data: errorXML,
    });
  }
});