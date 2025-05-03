import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import { getAffiliateLink } from '../constants/links';

const PageWrapper = styled.div`
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

const RoadTripsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const RoadTripCard = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const RoadTripImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  background-color: #f0f0f0; /* Light gray placeholder background */
`;

const RoadTripContent = styled.div`
  padding: 1.5rem;
`;

const RoadTripTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const RoadTripInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
  
  span {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    
    svg {
      margin-right: 0.25rem;
    }
  }
`;

const RoadTripDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ViewButton = styled.a`
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

const RentCarButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.default};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: darken(${({ theme }) => theme.colors.secondary}, 10%);
  }
`;

const roadTrips = [
  {
    id: 'italy-tuscany',
    title: 'Tuscany Grand Tour',
    titleIt: 'Grand Tour della Toscana',
    image: 'https://images.pexels.com/photos/1797113/pexels-photo-1797113.jpeg',
    duration: '7-10 days',
    durationIt: '7-10 giorni',
    distance: '500 km',
    description: 'Experience the iconic Tuscan landscape with rolling hills, cypress trees, and medieval villages.',
    descriptionIt: 'Vivi il paesaggio iconico toscano con colline ondulate, cipressi e borghi medievali.',
    blogLink: '/blog/italy-road-trips',
    affiliateParams: 'tuscany_roadtrip'
  },
  {
    id: 'italy-amalfi',
    title: 'Amalfi Coast Drive',
    titleIt: 'Tour della Costiera Amalfitana',
    image: 'https://images.pexels.com/photos/2516406/pexels-photo-2516406.jpeg',
    duration: '3-5 days',
    durationIt: '3-5 giorni',
    distance: '70 km',
    description: 'Navigate the dramatic coastal road with breathtaking views of the Mediterranean Sea.',
    descriptionIt: 'Naviga la drammatica strada costiera con viste mozzafiato sul Mar Mediterraneo.',
    blogLink: '/blog/italy-road-trips',
    affiliateParams: 'amalfi_roadtrip'
  },
  {
    id: 'uk-highlands',
    title: 'Scottish Highlands',
    titleIt: 'Highlands scozzesi',
    image: 'https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg',
    duration: '5-7 days',
    durationIt: '5-7 giorni',
    distance: '800 km',
    description: 'Discover the rugged landscapes, historic castles, and serene lochs of the Scottish Highlands.',
    descriptionIt: 'Scopri i paesaggi aspri, i castelli storici e i sereni laghi delle Highlands scozzesi.',
    blogLink: '/blog/uk-road-trips',
    affiliateParams: 'scotland_roadtrip'
  },
  {
    id: 'france-provence',
    title: 'Provence Lavender Fields',
    titleIt: 'Campi di Lavanda in Provenza',
    image: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg',
    duration: '4-6 days',
    durationIt: '4-6 giorni',
    distance: '300 km',
    description: 'Journey through the picturesque lavender fields, historic villages, and vineyards of Provence.',
    descriptionIt: 'Viaggio attraverso i pittoreschi campi di lavanda, villaggi storici e vigneti della Provenza.',
    blogLink: '/blog/france-road-trips',
    affiliateParams: 'provence_roadtrip'
  }
];

const RoadTripsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isItalian = i18n.language === 'it';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/800x500?text=Road+Trip";
  };

  return (
    <>
      <Helmet>
        <title>{isItalian ? 'Percorsi Road Trip | Pianificatore di Road Trip in Europa' : 'Road Trip Routes | European Road Trip Planner'}</title>
        <meta name="description" content={isItalian ? 'Scopri i migliori percorsi di road trip in Europa con le nostre guide dettagliate e mappe. Dalle coste italiane alle Highlands scozzesi.' : 'Discover the best road trip routes across Europe with our detailed guides and maps. From Italian coastlines to the Scottish Highlands.'} />
      </Helmet>
      
      <PageWrapper>
        <Container>
          <PageTitle>{t('nav.roadTrips')}</PageTitle>
          <PageDescription>
            {isItalian 
              ? 'Scopri i nostri percorsi di road trip curati con cura attraverso le destinazioni più belle d\'Europa. Ogni percorso include tappe consigliate, tempi di guida e attrazioni da non perdere.'
              : 'Discover our carefully curated road trip routes through Europe\'s most beautiful destinations. Each route includes recommended stops, driving times, and must-see attractions.'}
          </PageDescription>
          
          <RoadTripsGrid>
            {roadTrips.map(trip => (
              <RoadTripCard key={trip.id}>
                <RoadTripImage 
                  src={trip.image} 
                  alt={isItalian ? trip.titleIt : trip.title}
                  onError={handleImageError} 
                />
                <RoadTripContent>
                  <RoadTripTitle>{isItalian ? trip.titleIt : trip.title}</RoadTripTitle>
                  <RoadTripInfo>
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.3 15.5L11 12.5V7H12.5V11.8L17 14.3L16.3 15.5Z" fill="currentColor" />
                      </svg>
                      {isItalian ? trip.durationIt : trip.duration}
                    </span>
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                      </svg>
                      {trip.distance}
                    </span>
                  </RoadTripInfo>
                  <RoadTripDescription>
                    {isItalian ? trip.descriptionIt : trip.description}
                  </RoadTripDescription>
                  <ButtonsContainer>
                    <ViewButton href={trip.blogLink}>{isItalian ? 'Dettagli' : 'View Details'}</ViewButton>
                    <RentCarButton 
                      href={getAffiliateLink(trip.id.split('-')[0], trip.affiliateParams)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {isItalian ? 'Noleggia Auto' : 'Rent a Car'}
                    </RentCarButton>
                  </ButtonsContainer>
                </RoadTripContent>
              </RoadTripCard>
            ))}
          </RoadTripsGrid>
        </Container>
      </PageWrapper>
    </>
  );
};

export default RoadTripsPage;