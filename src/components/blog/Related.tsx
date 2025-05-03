import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface RelatedPost {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

interface RelatedProps {
  title: string;
  posts: RelatedPost[];
}

const RelatedSection = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.text};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled.article`
  border-radius: ${props => props.theme.radii.md};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.heading};
`;

const CardExcerpt = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1rem;
`;

const ReadMore = styled(Link)`
  display: inline-block;
  color: ${props => props.theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Related: React.FC<RelatedProps> = ({ title, posts }) => {
  return (
    <RelatedSection>
      <SectionTitle>{title}</SectionTitle>
      <RelatedGrid>
        {posts.map((post, index) => (
          <RelatedCard key={index}>
            <CardImage src={post.image} alt={post.title} />
            <CardContent>
              <CardTitle>{post.title}</CardTitle>
              <CardExcerpt>{post.excerpt}</CardExcerpt>
              <ReadMore to={post.slug}>Read More</ReadMore>
            </CardContent>
          </RelatedCard>
        ))}
      </RelatedGrid>
    </RelatedSection>
  );
};

export default Related;