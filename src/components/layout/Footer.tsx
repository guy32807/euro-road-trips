import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from './Container';
import { getAffiliateLink } from '../../constants/links';

const FooterContainer = styled.footer`
  background-color: #343a40; /* Only keep this line, remove the OR comment and second declaration */
  color: ${({ theme }) => theme.colors.textLight};
  padding: 3rem 0 1.5rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: white;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const AboutText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  
  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const FooterLegal = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const LegalLink = styled(Link)`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <FooterSection>
            <SectionTitle>{t('footer.about.title')}</SectionTitle>
            <AboutText>
              {t('footer.about.description')}
            </AboutText>
            <SocialLinks>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                </svg>
              </SocialIcon>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>{t('footer.quickLinks.title')}</SectionTitle>
            <FooterLink to="/destinations">{t('footer.quickLinks.destinations')}</FooterLink>
            <ExternalLink 
              href={getAffiliateLink('uk', 'footer_car_rental')} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('footer.quickLinks.carRental')}
            </ExternalLink>
            <FooterLink to="/road-trips">{t('footer.quickLinks.routePlanner')}</FooterLink>
            <FooterLink to="/blog">{t('footer.quickLinks.travelGuides')}</FooterLink>
            <FooterLink to="/blog/travel-tips">{t('footer.quickLinks.travelTips')}</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>{t('footer.destinations.title')}</SectionTitle>
            <FooterLink to="/blog/italy-road-trips">{t('footer.destinations.italy')}</FooterLink>
            <FooterLink to="/blog/france-road-trips">{t('footer.destinations.france')}</FooterLink>
            <FooterLink to="/blog/spain-road-trips">{t('footer.destinations.spain')}</FooterLink>
            <FooterLink to="/blog/germany-road-trips">{t('footer.destinations.germany')}</FooterLink>
            <FooterLink to="/blog/uk-road-trips">{t('footer.destinations.uk')}</FooterLink>
            <FooterLink to="/blog/portugal-road-trips">{t('footer.destinations.portugal')}</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>{t('footer.contact.title')}</SectionTitle>
            <ContactItem>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
              info@europeanroadtrip.com
            </ContactItem>
            <ContactItem>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10.999H22C22 5.869 18.13 1.999 13 1.999V3.999C16.88 3.999 20 7.119 20 10.999ZM16 10.999H18C18 8.239 15.76 5.999 13 5.999V7.999C14.66 7.999 16 9.339 16 10.999ZM13 11.999C11.34 11.999 10 13.339 10 14.999C10 16.659 11.34 17.999 13 17.999C14.66 17.999 16 16.659 16 14.999C16 13.339 14.66 11.999 13 11.999ZM8.27 18.569L6.85 19.989C6.06 19.199 5.34 18.339 4.68 17.429C4.0322 16.5604 3.46546 15.6346 2.99 14.669C2.46 13.609 2.04 12.509 1.74 11.389C1.46 10.309 1.33 9.249 1.33 8.179C1.33 7.159 1.44 6.169 1.64 5.219C1.82 4.299 2.1 3.399 2.47 2.539C2.81 1.759 3.23 1.039 3.73 0.389C4.13 -0.131 4.91 -0.131 5.31 0.389L7.31 3.089C7.6 3.459 7.67 3.959 7.5 4.399C7.3 4.949 7.13 5.489 7 6.049C6.85 6.679 6.99 7.349 7.43 7.809L8.99 9.369C9.75 10.129 9.75 11.339 8.99 12.099L8.98 12.119C8.46 12.619 8.42 13.419 8.87 13.969C9.07 14.219 9.28 14.459 9.5 14.699C10.1 15.349 10.72 15.949 11.39 16.489C11.82 16.829 12.43 16.799 12.82 16.399L13.91 15.299C14.38 14.829 15.04 14.669 15.65 14.899C16.11 15.079 16.58 15.229 17.06 15.349C17.55 15.469 17.96 15.839 18.12 16.329L19.07 19.449C19.27 20.059 18.87 20.679 18.24 20.759C17.33 20.879 16.39 20.949 15.45 20.949C14.38 20.949 13.32 20.829 12.29 20.569C11.25 20.319 10.25 19.949 9.29 19.449C8.92 19.269 8.59 18.929 8.27 18.569Z" />
              </svg>
              +44 123 456 7890
            </ContactItem>
            <ContactItem>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
              </svg>
              London, United Kingdom
            </ContactItem>
          </FooterSection>
        </FooterGrid>
        
        <Divider />
        
        <BottomFooter>
          <Copyright>{t('footer.copyright')}</Copyright>
          <FooterLegal>
            <LegalLink to="/privacy-policy">{t('footer.legal.privacyPolicy')}</LegalLink>
            <LegalLink to="/terms-of-service">{t('footer.legal.termsOfService')}</LegalLink>
            <LegalLink to="/disclaimer">{t('footer.legal.disclaimer')}</LegalLink>
          </FooterLegal>
        </BottomFooter>
      </Container>
    </FooterContainer>
  );
};

export default Footer;