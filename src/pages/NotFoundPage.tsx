import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/seo/SeoHead';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  text-align: center;
  min-height: 60vh;
`;

const NotFoundTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const NotFoundText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const HomeLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`;

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <NotFoundContainer>
      <SeoHead 
        title="404 - Page Not Found" 
        description="The page you are looking for could not be found."
      />
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
      <NotFoundText>
        Sorry, the page you're looking for doesn't exist or has been moved.
      </NotFoundText>
      <HomeLink to="/">Return to Home</HomeLink>
    </NotFoundContainer>
  );
};

export default NotFoundPage;