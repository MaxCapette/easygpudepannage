import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://easygpu.fr'
  const lastModified = new Date()
  
  // Pages principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    }
  ]
  
  // Sections de la page d'accueil (traités comme des "pages" virtuelles pour le SEO)
  const sections = [
    {
      path: '#services',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      path: '#websites',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '#about',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      path: '#testimonials',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      path: '#contact',
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ].map(section => ({
    url: `${baseUrl}${section.path}`,
    lastModified,
    changeFrequency: section.changeFrequency,
    priority: section.priority,
  }))
  
  // Construire le sitemap complet
  return [...mainPages, ...sections]
} 