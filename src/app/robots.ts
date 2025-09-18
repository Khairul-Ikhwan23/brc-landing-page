export default function robots() {
  const baseUrl = 'https://bruneiredcrescent.com'
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
