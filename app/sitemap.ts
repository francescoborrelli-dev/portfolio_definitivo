import { allProjects } from 'contentlayer/generated'

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Static pages
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/skills-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ]

  // Project pages
  const projectPages = allProjects
    .filter(project => process.env.NODE_ENV === 'development' || !project.draft)
    .map((project) => ({
      url: `${siteUrl}${project.url}`,
      lastModified: new Date(project.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [...staticPages, ...projectPages]
}