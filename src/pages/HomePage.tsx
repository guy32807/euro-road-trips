import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import SeoHead from '../components/seo/SeoHead';
import SocialShare from '../components/social/SocialShare';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import { getAffiliateLink } from '../constants/links';

const Hero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                    url('https://images.unsplash.com/photo-1520180941449-b213c86788c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 8rem 0;
  text-align: center;
  margin-bottom: 3rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const DestinationCard = styled(Link)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const DestinationImage = styled(ImageWithFallback)`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const DestinationName = styled.h3`
  padding: 1rem;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedTripsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const TripCard = styled.article`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  background-color: white;
`;

const TripImage = styled(ImageWithFallback)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TripContent = styled.div`
  padding: 1.5rem;
`;

const TripTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
`;

const TripDescription = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const TripMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`;

const TripMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const CTA = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 4rem;
`;

const CTATitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Button)`
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
`;

const TestimonialsSection = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`;

const BlogSection = styled.section`
  margin-bottom: 4rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const BlogCard = styled.article`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const BlogImage = styled(ImageWithFallback)`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
`;

const BlogMeta = styled.div`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const BlogExcerpt = styled.p`
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // Function to track affiliate clicks
  const trackAffiliateClick = (source: string) => {
    console.log(`Affiliate link clicked: ${source}`);
    // Implementation of tracking could go here
  };
  
  const currentUrl = window.location.href;
  
  return (
    <>
      {/* Page-specific SEO */}
      <SeoHead 
        title={t('meta.title')}
        description={t('meta.description')}
        image="https://images.unsplash.com/photo-1520180941449-b213c86788c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        url={currentUrl}
        locale={i18n.language}
      />
      
      <Hero>
        <Container>
          <HeroTitle>{t('hero.title')}</HeroTitle>
          <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
          <Button 
            as="a" 
            href={getAffiliateLink('uk', 'hero_button')} 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAffiliateClick('hero_button')} 
            $large
            $primary
          >
            {t('hero.cta')}
          </Button>
        </Container>
      </Hero>
      
      <Container>
        <Section>
          <SectionTitle>{t('destinations.title')}</SectionTitle>
          <DestinationsGrid>
            <DestinationCard to="/destinations/uk">
              <DestinationImage 
                src="https://images.unsplash.com/photo-1543799382-9a0208331ef7" 
                alt={t('destinations.uk')} 
              />
              <DestinationName>{t('destinations.uk')}</DestinationName>
            </DestinationCard>
            
            <DestinationCard to="/destinations/france">
              <DestinationImage 
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" 
                alt={t('destinations.france')} 
              />
              <DestinationName>{t('destinations.france')}</DestinationName>
            </DestinationCard>
            
            <DestinationCard to="/destinations/germany">
              <DestinationImage 
                src="https://images.unsplash.com/photo-1542367235-d0f3b564c16e" 
                alt={t('destinations.germany')} 
              />
              <DestinationName>{t('destinations.germany')}</DestinationName>
            </DestinationCard>
            
            <DestinationCard to="/destinations/italy">
              <DestinationImage 
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963" 
                alt={t('destinations.italy')} 
              />
              <DestinationName>{t('destinations.italy')}</DestinationName>
            </DestinationCard>
          </DestinationsGrid>
          
          <ViewAllLink to="/destinations">
            {t('destinations.viewAll')} →
          </ViewAllLink>
        </Section>
        
        <Section>
          <SectionTitle>{t('featuredTrips.title')}</SectionTitle>
          <FeaturedTripsGrid>
            <TripCard>
              <TripImage 
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" 
                alt={t('featuredTrips.ukCoastline.title')} 
              />
              <TripContent>
                <TripTitle>{t('featuredTrips.ukCoastline.title')}</TripTitle>
                <TripDescription>{t('featuredTrips.ukCoastline.description')}</TripDescription>
                <TripMeta>
                  <TripMetaItem>
                    <span>⏱️</span> {t('featuredTrips.ukCoastline.duration')}
                  </TripMetaItem>
                  <TripMetaItem>
                    <span>🛣️</span> {t('featuredTrips.ukCoastline.distance')}
                  </TripMetaItem>
                </TripMeta>
                <Button 
                  as="a" 
                  href={getAffiliateLink('uk', 'featured_uk')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAffiliateClick('featured_uk')}
                  $fullWidth
                >
                  {t('featuredTrips.viewDetails')}
                </Button>
              </TripContent>
            </TripCard>
            
            <TripCard>
              <TripImage 
                src="https://images.unsplash.com/photo-1578912996078-50528ae9866c" 
                alt={t('featuredTrips.frenchRiviera.title')} 
              />
              <TripContent>
                <TripTitle>{t('featuredTrips.frenchRiviera.title')}</TripTitle>
                <TripDescription>{t('featuredTrips.frenchRiviera.description')}</TripDescription>
                <TripMeta>
                  <TripMetaItem>
                    <span>⏱️</span> {t('featuredTrips.frenchRiviera.duration')}
                  </TripMetaItem>
                  <TripMetaItem>
                    <span>🛣️</span> {t('featuredTrips.frenchRiviera.distance')}
                  </TripMetaItem>
                </TripMeta>
                <Button 
                  as="a" 
                  href={getAffiliateLink('france', 'featured_france')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAffiliateClick('featured_france')}
                  $fullWidth
                >
                  {t('featuredTrips.viewDetails')}
                </Button>
              </TripContent>
            </TripCard>
            
            <TripCard>
              <TripImage 
                src="https://images.unsplash.com/photo-1634413100261-ac5a0c2dea8b" 
                alt={t('featuredTrips.germanicRoute.title')} 
              />
              <TripContent>
                <TripTitle>{t('featuredTrips.germanicRoute.title')}</TripTitle>
                <TripDescription>{t('featuredTrips.germanicRoute.description')}</TripDescription>
                <TripMeta>
                  <TripMetaItem>
                    <span>⏱️</span> {t('featuredTrips.germanicRoute.duration')}
                  </TripMetaItem>
                  <TripMetaItem>
                    <span>🛣️</span> {t('featuredTrips.germanicRoute.distance')}
                  </TripMetaItem>
                </TripMeta>
                <Button 
                  as="a" 
                  href={getAffiliateLink('germany', 'featured_germany')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAffiliateClick('featured_germany')}
                  $fullWidth
                >
                  {t('featuredTrips.viewDetails')}
                </Button>
              </TripContent>
            </TripCard>
          </FeaturedTripsGrid>
        </Section>
      </Container>
      
      <CTA>
        <Container>
          <CTATitle>{t('cta.title')}</CTATitle>
          <CTADescription>{t('cta.description')}</CTADescription>
          <CTAButton 
            as="a" 
            href={getAffiliateLink('uk', 'cta_button')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAffiliateClick('cta_button')} 
            $primary 
            $large
          >
            {t('cta.button')}
          </CTAButton>
        </Container>
      </CTA>
      
      <Container>
        <SocialShare 
          url={currentUrl}
          title={t('meta.title')}
          description={t('meta.description')}
          image="https://images.unsplash.com/photo-1520180941449-b213c86788c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          tags={["roadtrip", "europe", "travel", "uk"]}
        />
        
        <Section>
          <SectionTitle>{t('whyChoose.title')}</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>💰</FeatureIcon>
              <FeatureTitle>{t('whyChoose.bestPrices.title')}</FeatureTitle>
              <FeatureDescription>{t('whyChoose.bestPrices.description')}</FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🚗</FeatureIcon>
              <FeatureTitle>{t('whyChoose.wideSelection.title')}</FeatureTitle>
              <FeatureDescription>{t('whyChoose.wideSelection.description')}</FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🌍</FeatureIcon>
              <FeatureTitle>{t('whyChoose.localSupport.title')}</FeatureTitle>
              <FeatureDescription>{t('whyChoose.localSupport.description')}</FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>✏️</FeatureIcon>
              <FeatureTitle>{t('whyChoose.freeAmendments.title')}</FeatureTitle>
              <FeatureDescription>{t('whyChoose.freeAmendments.description')}</FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Section>
        
        <BlogSection>
          <SectionTitle>{t('blog.title')}</SectionTitle>
          <BlogGrid>
            <BlogCard>
              <BlogImage 
                src="https://images.unsplash.com/photo-1536599424071-0b215a388ba7" 
                alt="Road Trip Planning" 
              />
              <BlogContent>
                <BlogTitle>10 Essential Tips for Planning Your European Road Trip</BlogTitle>
                <BlogMeta>April 25, 2025</BlogMeta>
                <BlogExcerpt>
                  From choosing the right car to navigating different road rules, these tips will help you plan the perfect European adventure.
                </BlogExcerpt>
                <ReadMoreLink href="/blog/planning-tips">{t('blog.readMore')} →</ReadMoreLink>
              </BlogContent>
            </BlogCard>
            
            <BlogCard>
              <BlogImage 
                src="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e" 
                alt="Scenic Routes" 
              />
              <BlogContent>
                <BlogTitle>The Most Scenic Coastal Drives in the UK</BlogTitle>
                <BlogMeta>April 15, 2025</BlogMeta>
                <BlogExcerpt>
                  Discover breathtaking views and charming seaside towns along these stunning UK coastal routes.
                </BlogExcerpt>
                <ReadMoreLink href="/blog/uk-coastal-drives">{t('blog.readMore')} →</ReadMoreLink>
              </BlogContent>
            </BlogCard>
            
            <BlogCard>
              <BlogImage 
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e" 
                alt="Car Rental Tips" 
              />
              <BlogContent>
                <BlogTitle>How to Find the Best Car Rental Deals in Europe</BlogTitle>
                <BlogMeta>April 5, 2025</BlogMeta>
                <BlogExcerpt>
                  Expert advice on securing the best rental car for your European road trip without breaking the bank.
                </BlogExcerpt>
                <ReadMoreLink href="/blog/car-rental-deals">{t('blog.readMore')} →</ReadMoreLink>
              </BlogContent>
            </BlogCard>
          </BlogGrid>
          
          <ViewAllLink to="/blog">
            {t('blog.viewAll')} →
          </ViewAllLink>
          <Button
            as={Link}
            to="/blog/uk-road-trips"
            $outline
            $primary
          >
            {t('nav.blog')}
          </Button>
        </BlogSection>
      </Container>
    </>
  );
};

export default HomePage;