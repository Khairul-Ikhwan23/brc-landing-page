import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // 1 day

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bruneiredcrescent.com'
  const now = new Date()
  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/history/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/donate/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
