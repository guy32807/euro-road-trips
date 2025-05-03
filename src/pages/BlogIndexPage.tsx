import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/seo/SeoHead';
import ImageWithFallback from '../components/ui/ImageWithFallback';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BlogDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const BlogCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const BlogCardImage = styled(ImageWithFallback)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogCardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const BlogCardTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const BlogCardExcerpt = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const BlogCardMeta = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  justify-content: space-between;
`;

// Dynamically get blog post data based on language
const getBlogPosts = (language: string) => {
  const ukRoadTrips = {
    title: {
      en: "The 5 Most Beautiful Road Trips in the UK for an Unforgettable Holiday",
      fr: "Les 5 Plus Beaux Road Trips au Royaume-Uni pour des Vacances Inoubliables",
      de: "Die 5 schönsten Roadtrips in Großbritannien für einen unvergesslichen Urlaub",
      es: "Los 5 Road Trips Más Hermosos en el Reino Unido para unas Vacaciones Inolvidables"
    },
    excerpt: {
      en: "Discover the most picturesque road trip routes across the United Kingdom, from the cliffs of Cornwall to the Scottish Highlands.",
      fr: "Découvrez les itinéraires de road trip les plus pittoresques du Royaume-Uni, des falaises de Cornouailles aux Highlands écossais.",
      de: "Entdecken Sie die malerischsten Roadtrip-Routen in Großbritannien, von den Klippen von Cornwall bis zum schottischen Hochland.",
      es: "Descubra las rutas de road trip más pintorescas del Reino Unido, desde los acantilados de Cornualles hasta las Tierras Altas de Escocia."
    },
    date: {
      en: "May 3, 2025",
      fr: "3 mai 2025",
      de: "3. Mai 2025",
      es: "3 de mayo de 2025"
    },
    image: "https://images.unsplash.com/photo-1526285849634-bcc215f909f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    slug: "/blog/uk-road-trips"
  };
  
  const italyRoadTrips = {
    title: {
      en: "Exploring Italy by Car: The Ultimate Road Trip Guide",
      fr: "Explorer l'Italie en Voiture: Le Guide Ultime du Road Trip",
      de: "Italien mit dem Auto erkunden: Der ultimative Roadtrip-Führer",
      es: "Explorando Italia en Coche: La Guía Definitiva para un Road Trip"
    },
    excerpt: {
      en: "From the Amalfi Coast to Tuscany's rolling hills, discover Italy's most scenic drives and hidden gems.",
      fr: "De la côte amalfitaine aux collines toscanes, découvrez les routes les plus pittoresques d'Italie et ses joyaux cachés.",
      de: "Von der Amalfiküste bis zu den sanften Hügeln der Toskana, entdecken Sie Italiens schönste Straßen und versteckte Schätze.",
      es: "Desde la Costa Amalfitana hasta las ondulantes colinas de la Toscana, descubra las rutas más pintorescas de Italia y sus joyas escondidas."
    },
    date: {
      en: "April 20, 2025",
      fr: "20 avril 2025",
      de: "20. April 2025",
      es: "20 de abril de 2025"
    },
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    slug: "/blog/italy-road-trips"
  };
  
  const frenchRiviera = {
    title: {
      en: "The Ultimate French Riviera Road Trip: Luxury and Landscapes",
      fr: "Le Road Trip Ultime sur la Côte d'Azur: Luxe et Paysages",
      de: "Der ultimative Roadtrip an der französischen Riviera: Luxus und Landschaften",
      es: "El Road Trip Definitivo por la Riviera Francesa: Lujo y Paisajes"
    },
    excerpt: {
      en: "Drive through glamorous coastal towns, stunning Mediterranean vistas, and charming Provençal villages.",
      fr: "Conduisez à travers des villes côtières glamour, des vues méditerranéennes époustouflantes et de charmants villages provençaux.",
      de: "Fahren Sie durch glamouröse Küstenstädte, atemberaubende Mittelmeerausblicke und charmante provenzalische Dörfer.",
      es: "Conduzca por pueblos costeros glamorosos, impresionantes vistas mediterráneas y encantadores pueblos provenzales."
    },
    date: {
      en: "March 15, 2025",
      fr: "15 mars 2025",
      de: "15. März 2025",
      es: "15 de marzo de 2025"
    },
    image: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    slug: "/blog/french-riviera-road-trip"
  };
  
  return [ukRoadTrips, italyRoadTrips, frenchRiviera];
};

const BlogIndexPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const blogPosts = getBlogPosts(lang);
  
  return (
    <BlogContainer>
      <SeoHead
        title={`Road Trip Blog - European Travel Guides & Tips`}
        description={`Discover the best European road trip routes, rental car tips, and travel guides for exploring the UK, France, Italy, Germany, and beyond.`}
        url={window.location.href}
      />
      
      <BlogHeader>
        <BlogTitle>{t('blog.title')}</BlogTitle>
        <BlogDescription>
          Discover inspiring road trip itineraries, insider tips for car rental, and travel guides for exploring Europe by road.
        </BlogDescription>
      </BlogHeader>
      
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} to={post.slug}>
            <BlogCardImage 
              src={post.image} 
              alt={post.title[lang as keyof typeof post.title] || post.title.en} 
            />
            <BlogCardContent>
              <BlogCardTitle>
                {post.title[lang as keyof typeof post.title] || post.title.en}
              </BlogCardTitle>
              <BlogCardExcerpt>
                {post.excerpt[lang as keyof typeof post.excerpt] || post.excerpt.en}
              </BlogCardExcerpt>
              <BlogCardMeta>
                <span>📅 {post.date[lang as keyof typeof post.date] || post.date.en}</span>
                <span>{t('blog.readMore')} →</span>
              </BlogCardMeta>
            </BlogCardContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogIndexPage;