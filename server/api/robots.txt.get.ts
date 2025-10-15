import { readFile } from 'fs/promises'
import { createError, defineEventHandler, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const robotsContent = await readFile('public/robots.txt', 'utf-8')
    
    setHeader(event, 'Content-Type', 'text/plain')
    setHeader(event, 'Cache-Control', 'public, max-age=3600')
    
    return robotsContent
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'robots.txt not found'
    })
  }
})