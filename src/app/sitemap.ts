export default async function sitemap() {
  const baseUrl = 'https://bruneiredcrescent.com'
  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/history/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/donate/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
