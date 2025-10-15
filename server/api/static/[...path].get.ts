import { readFile } from 'fs/promises'
import { createError, defineEventHandler, getRouterParam, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, 'path')
  
  if (!path) {
    throw createError({
      statusCode: 404,
      statusMessage: 'File not found'
    })
  }

  // Define content types for different file extensions
  const contentTypes = {
    'txt': 'text/plain',
    'xml': 'application/xml',
    'json': 'application/json',
    'ico': 'image/x-icon',
    'png': 'image/png',
    'webmanifest': 'application/json'
  }

  const ext = path.split('.').pop()?.toLowerCase() || ''
  const contentType = contentTypes[ext as keyof typeof contentTypes] || 'text/plain'

  try {
    // Try to read the file from public directory
    const file = await readFile(`public/${path}`)
    
    setHeader(event, 'Content-Type', contentType)
    setHeader(event, 'Cache-Control', 'public, max-age=3600')
    
    return file
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'File not found'
    })
  }
})