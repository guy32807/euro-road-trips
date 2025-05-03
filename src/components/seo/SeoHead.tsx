import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: string;
  twitterCardType?: 'summary_large_image' | 'summary';
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleTags?: string[];
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  image = 'https://images.unsplash.com/photo-1520180941449-b213c86788c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  url = 'https://guy32807.github.io/road-trip-planner-europe/',
  type = 'website',
  locale,
  twitterCardType = 'summary_large_image',
  articlePublishedTime,
  articleModifiedTime,
  articleTags,
}) => {
  const { t, i18n } = useTranslation();
  
  // Use props or fallback to translations
  const pageTitle = title || t('meta.title');
  const pageDescription = description || t('meta.description');
  const pageKeywords = keywords || t('meta.keywords');
  
  // Determine current locale from i18n or use prop
  const pageLocale = locale || i18n.language || 'en';
  
  // Create JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': t('seo.structuredData.organizationType'),
    name: t('seo.structuredData.name'),
    description: t('seo.structuredData.description'),
    url: t('seo.structuredData.url'),
    telephone: t('seo.structuredData.telephone'),
    email: t('seo.structuredData.email'),
    sameAs: [
      'https://facebook.com/euroroadtrips',
      'https://twitter.com/euroroadtrips',
      'https://instagram.com/euroroadtrips'
    ]
  };
  
  // If it's an article, add additional structured data
  const articleStructuredData = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageTitle,
    image: image,
    datePublished: articlePublishedTime,
    dateModified: articleModifiedTime || articlePublishedTime,
    author: {
      '@type': 'Organization',
      name: t('seo.structuredData.name')
    },
    publisher: {
      '@type': 'Organization',
      name: t('seo.structuredData.name'),
      logo: {
        '@type': 'ImageObject',
        url: 'https://guy32807.github.io/road-trip-planner-europe/logo.png'
      }
    },
    description: pageDescription,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    keywords: articleTags?.join(', ')
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Language Meta Tags */}
      <html lang={pageLocale} />
      <meta property="og:locale" content={pageLocale} />
      <link rel="alternate" href={url} hrefLang="x-default" />
      <link rel="alternate" href={`${url}?lng=en`} hrefLang="en" />
      <link rel="alternate" href={`${url}?lng=fr`} hrefLang="fr" />
      <link rel="alternate" href={`${url}?lng=de`} hrefLang="de" />
      <link rel="alternate" href={`${url}?lng=es`} hrefLang="es" />

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={t('seo.structuredData.name')} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Article-specific Meta Tags */}
      {type === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {type === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {type === 'article' && articleTags && articleTags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Structured Data for Google Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Article Structured Data if applicable */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHead;