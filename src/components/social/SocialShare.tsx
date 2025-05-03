import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
}

const ShareContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShareTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }
`;

const FacebookButton = styled(ShareButton)`
  background-color: #3b5998;
`;

const TwitterButton = styled(ShareButton)`
  background-color: #1da1f2;
`;

const PinterestButton = styled(ShareButton)`
  background-color: #e60023;
`;

const WhatsAppButton = styled(ShareButton)`
  background-color: #25d366;
`;

const EmailButton = styled(ShareButton)`
  background-color: #7d7d7d;
`;

const SocialShare: React.FC<SocialShareProps> = ({
  url,
  title,
  description = '',
  image = '',
  tags = []
}) => {
  const { t } = useTranslation();
  
  // Encode parameters
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedImage = encodeURIComponent(image);
  const encodedTags = tags.map(tag => encodeURIComponent(tag)).join(',');
  
  // Generate share URLs
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  const emailUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`;
  
  return (
    <ShareContainer>
      <ShareTitle>{t('share.title')}</ShareTitle>
      <ShareButtons>
        <FacebookButton 
          href={facebookUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={t('share.facebook')}
        >
          <span>Facebook</span>
        </FacebookButton>
        
        <TwitterButton 
          href={twitterUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={t('share.twitter')}
        >
          <span>Twitter</span>
        </TwitterButton>
        
        <PinterestButton 
          href={pinterestUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={t('share.pinterest')}
        >
          <span>Pinterest</span>
        </PinterestButton>
        
        <WhatsAppButton 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Share on WhatsApp"
        >
          <span>WhatsApp</span>
        </WhatsAppButton>
        
        <EmailButton 
          href={emailUrl} 
          aria-label="Share via Email"
        >
          <span>Email</span>
        </EmailButton>
      </ShareButtons>
    </ShareContainer>
  );
};

export default SocialShare;