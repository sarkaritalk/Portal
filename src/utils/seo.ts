import { ServiceArticle } from '../types';
import { CATEGORIES } from '../data/categories';

export const BASE_SITE_NAME = 'SARKARI TALK';
export const BASE_SITE_TAGLINE = 'Government Information & Digital Services';

export function updatePageMetadata(title: string, description: string) {
  document.title = `${title} | ${BASE_SITE_NAME}`;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description.slice(0, 160));
  }
  
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', `${title} | ${BASE_SITE_NAME}`);
  }
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description.slice(0, 160));
  }
}

export function generateArticleJsonLd(article: ServiceArticle, originUrl: string) {
  const articleUrl = `${originUrl}/?article=${article.slug}`;
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.titleHi,
    'description': article.shortSummary,
    'datePublished': article.verifiedDate,
    'dateModified': article.verifiedDate,
    'inLanguage': 'hi-IN',
    'author': {
      '@type': 'Organization',
      'name': BASE_SITE_NAME,
      'url': originUrl,
    },
    'publisher': {
      '@type': 'Organization',
      'name': BASE_SITE_NAME,
      'url': originUrl,
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  const faqSchema = article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': article.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'होम',
        'item': originUrl,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': article.department,
        'item': `${originUrl}/?category=${article.categoryId}`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.titleHi,
        'item': articleUrl,
      },
    ],
  };

  return {
    articleSchema,
    faqSchema,
    breadcrumbSchema,
  };
}

export function generateSitemapXml(articles: ServiceArticle[], baseUrl: string): string {
  const now = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  // Home
  xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
  
  // Categories
  CATEGORIES.forEach(cat => {
    xml += `  <url>\n    <loc>${baseUrl}/?category=${cat.id}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });
  
  // Articles
  articles.forEach(art => {
    xml += `  <url>\n    <loc>${baseUrl}/?article=${art.slug}</loc>\n    <lastmod>${art.verifiedDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  });
  
  xml += `</urlset>`;
  return xml;
}

export function generateRobotsTxt(baseUrl: string): string {
  return `# robots.txt for Sarkari Talk
User-agent: *
Allow: /
Disallow: /?admin=true

Sitemap: ${baseUrl}/sitemap.xml
`;
}
