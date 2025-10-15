import { readFile } from 'fs/promises'
import { createError, defineEventHandler, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const sitemapContent = await readFile('public/sitemap.xml', 'utf-8')
    
    setHeader(event, 'Content-Type', 'application/xml')
    setHeader(event, 'Cache-Control', 'public, max-age=3600')
    
    return sitemapContent
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'sitemap.xml not found'
    })
  }
})