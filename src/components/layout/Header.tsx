import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { getAffiliateLink } from '../../constants/links';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

// Add the missing NavItem component
const NavItem = styled.div`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LanguageSelector = styled.div`
  position: relative;
  margin-left: 1rem;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LanguageDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  min-width: 120px;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const LanguageOption = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' }
  ];
  
  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Euro Road Trips</Logo>
        <NavLinks>
          <NavLink to="/">{t('nav.home')}</NavLink>
          <NavItem>
            <NavLink to="/destinations">{t('nav.destinations')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/road-trips">{t('nav.roadTrips')}</NavLink>
          </NavItem>
          <NavLink to="/blog">{t('nav.blog')}</NavLink>
          <Button 
            as="a" 
            href={getAffiliateLink('uk', 'nav_button')} 
            target="_blank" 
            rel="noopener noreferrer" 
            $primary
          >
            {t('nav.carRental')}
          </Button>
          
          <LanguageSelector>
            <LanguageButton onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}>
              {t('nav.language')} ▼
            </LanguageButton>
            <LanguageDropdown $isOpen={isLanguageDropdownOpen}>
              {languages.map((lang) => (
                <LanguageOption 
                  key={lang.code} 
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </LanguageOption>
              ))}
            </LanguageDropdown>
          </LanguageSelector>
        </NavLinks>
        <MobileMenu>
          {/* Mobile menu implementation */}
          <Button $small>Menu</Button>
        </MobileMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;