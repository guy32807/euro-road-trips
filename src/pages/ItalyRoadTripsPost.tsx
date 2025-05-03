import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import { getEnglishContent } from './italy-road-trip/EnglishContent';
import { getFrenchContent } from './italy-road-trip/FrenchContent';
import { getGermanContent } from './italy-road-trip/GermanContent';
import { getSpanishContent } from './italy-road-trip/SpanishContent';
import { getItalianContent } from './italy-road-trip/ItalianContent';
import Related from '../components/blog/Related';

// Fix for the date-related issue - add this helper function
const formatPublishDate = (dateString: string) => {
  try {
    // Check if the date string is valid
    const date = new Date(dateString);
    // Test if the date is valid before trying to format it
    if (isNaN(date.getTime())) {
      // Return a fallback formatted date if invalid
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch (error) {
    console.error("Error formatting date:", error);
    // Return current date as fallback
    return new Date().toISOString();
  }
};

const ItalyRoadTripsPost: React.FC = () => {
  const { i18n } = useTranslation();
  
  // Get content based on current language
  const getContent = () => {
    switch(i18n.language) {
      case 'fr':
        return getFrenchContent();
      case 'de':
        return getGermanContent();
      case 'es':
        return getSpanishContent();
      case 'it':
        return getItalianContent();
      default:
        return getEnglishContent();
    }
  };
  
  const content = getContent();
  
  // Fix - use the helper function for formatting dates
  const publishDate = formatPublishDate(content.publishDate);
  
  return (
    <>
      <Helmet>
        <title>{content.title} | European Road Trip Planner</title>
        <meta name="description" content={content.excerpt} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.excerpt} />
        <meta property="og:image" content={content.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:author" content={content.author} />
        <meta property="article:tag" content={content.tags.join(', ')} />
      </Helmet>
      
      <Container>
        <Article>
          <header>
            <Title>{content.title}</Title>
            <MetaInfo>
              <span>{content.publishDate}</span> • 
              <span>{content.readTime}</span> • 
              <span>{content.author}</span>
            </MetaInfo>
            
            <FeaturedImage 
              src={content.featuredImage} 
              alt={content.title}
              fallbackSrc="/images/italy-road-trip-fallback.jpg"
            />
          </header>
          
          <BlogContent dangerouslySetInnerHTML={{ __html: content.content }} />
          
          <AuthorBio>
            <AuthorImage 
              src={content.authorImage} 
              alt={content.author} 
              fallbackSrc="/images/author-placeholder.jpg"
            />
            <div>
              <h3>{content.author}</h3>
              <p>{content.authorBio}</p>
            </div>
          </AuthorBio>
          
          <Related 
            title="You might also like"
            posts={content.relatedPosts}
          />
        </Article>
      </Container>
    </>
  );
};

// Rest of the styled components remain unchanged
const Article = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const MetaInfo = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeaturedImage = styled(ImageWithFallback)`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const BlogContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  
  h2 {
    font-size: 1.75rem;
    margin: 2.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  h4 {
    font-size: 1.25rem;
    margin: 1.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
  }
  
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textLight};
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

const AuthorBio = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 8px;
`;

const AuthorImage = styled(ImageWithFallback)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

export default ItalyRoadTripsPost;