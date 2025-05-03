import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import { getAffiliateLink } from '../constants/links';

const DestinationsPageWrapper = styled.div`
  padding: 3rem 0;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const PageDescription = styled.p`
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

const DestinationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const DestinationCard = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const DestinationContent = styled.div`
  padding: 1.5rem;
`;

const DestinationTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const DestinationDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const ExploreButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.default};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const destinations = [
  {
    id: 'italy',
    title: 'Italy',
    titleIt: 'Italia',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Explore the stunning landscapes of Italy, from the rolling hills of Tuscany to the dramatic Amalfi Coast.',
    descriptionIt: 'Esplora i meravigliosi paesaggi italiani, dalle dolci colline toscane alla drammatica Costiera Amalfitana.',
    affiliateParams: 'italy_destination'
  },
  {
    id: 'france',
    title: 'France',
    titleIt: 'Francia',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Discover the charm of France with its picturesque villages, stunning coastlines, and world-class cuisine.',
    descriptionIt: 'Scopri il fascino della Francia con i suoi pittoreschi villaggi, coste mozzafiato e cucina di classe mondiale.',
    affiliateParams: 'france_destination'
  },
  {
    id: 'spain',
    title: 'Spain',
    titleIt: 'Spagna',
    image: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Experience Spain\'s diverse regions, from the sun-soaked beaches of Andalusia to the vibrant streets of Barcelona.',
    descriptionIt: 'Vivi le diverse regioni della Spagna, dalle soleggiate spiagge dell\'Andalusia alle vivaci strade di Barcellona.',
    affiliateParams: 'spain_destination'
  },
  {
    id: 'germany',
    title: 'Germany',
    titleIt: 'Germania',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Drive through Germany\'s fairy-tale landscapes, historic cities, and famous auto routes like the Romantic Road.',
    descriptionIt: 'Guida attraverso i paesaggi fiabeschi della Germania, le città storiche e le famose strade come la Strada Romantica.',
    affiliateParams: 'germany_destination'
  },
  {
    id: 'uk',
    title: 'United Kingdom',
    titleIt: 'Regno Unito',
    image: 'https://images.unsplash.com/photo-1543799382-9a7218cc760d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Travel through the United Kingdom\'s diverse landscapes, from the Scottish Highlands to the Cornish coast.',
    descriptionIt: 'Viaggia attraverso i diversi paesaggi del Regno Unito, dalle Highlands scozzesi alla costa della Cornovaglia.',
    affiliateParams: 'uk_destination'
  },
  {
    id: 'portugal',
    title: 'Portugal',
    titleIt: 'Portogallo',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Discover Portugal\'s stunning coastlines, historic cities, and picturesque vineyards in the Douro Valley.',
    descriptionIt: 'Scopri le splendide coste del Portogallo, le città storiche e i pittoreschi vigneti della Valle del Douro.',
    affiliateParams: 'portugal_destination'
  }
];

const DestinationsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isItalian = i18n.language === 'it';

  return (
    <>
      <Helmet>
        <title>{isItalian ? 'Destinazioni | Pianificatore di Road Trip in Europa' : 'Destinations | European Road Trip Planner'}</title>
        <meta name="description" content={isItalian ? 'Esplora le migliori destinazioni europee per il tuo road trip con le nostre guide dettagliate e consigli di viaggio.' : 'Explore the best European destinations for your road trip with our detailed guides and travel tips.'} />
      </Helmet>
      
      <DestinationsPageWrapper>
        <Container>
          <PageTitle>{t('nav.destinations')}</PageTitle>
          <PageDescription>
            {isItalian 
              ? 'Esplora le migliori destinazioni europee per il tuo prossimo road trip. Dalle coste soleggiate del Mediterraneo ai paesaggi mozzafiato del Nord, l\'Europa offre infinite opportunità per avventure in auto.'
              : 'Explore the best European destinations for your next road trip. From sunny Mediterranean coastlines to breathtaking Northern landscapes, Europe offers endless opportunities for automotive adventures.'}
          </PageDescription>
          
          <DestinationGrid>
            {destinations.map(destination => (
              <DestinationCard key={destination.id}>
                <DestinationImage src={destination.image} alt={isItalian ? destination.titleIt : destination.title} />
                <DestinationContent>
                  <DestinationTitle>{isItalian ? destination.titleIt : destination.title}</DestinationTitle>
                  <DestinationDescription>
                    {isItalian ? destination.descriptionIt : destination.description}
                  </DestinationDescription>
                  <ExploreButton 
                    href={getAffiliateLink(destination.id, destination.affiliateParams)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {isItalian ? 'Esplora' : 'Explore'}
                  </ExploreButton>
                </DestinationContent>
              </DestinationCard>
            ))}
          </DestinationGrid>
        </Container>
      </DestinationsPageWrapper>
    </>
  );
};

export default DestinationsPage;