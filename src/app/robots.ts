import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // 1 day

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://bruneiredcrescent.com'
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
