export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Francesco Borrelli',
    jobTitle: 'Web/Graphic Designer & Frontend Developer',
    url: siteUrl,
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Portfolio — Francesco Borrelli',
    url: siteUrl,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}