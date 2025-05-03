import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const LanguageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  padding: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;

const LanguageDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 150px;
  z-index: 10;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const LanguageOption = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  background: ${({ $isActive, theme }) => ($isActive ? theme.colors.backgroundAlt : 'none')};
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  console.log('Current language:', i18n.language);
  console.log('Supported languages:', i18n.options.supportedLngs);
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    closeDropdown();
  };
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  return (
    <LanguageWrapper>
      <LanguageButton onClick={toggleDropdown} aria-expanded={isOpen} aria-label={t('header.languageSelector')}>
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
      </LanguageButton>
      
      <LanguageDropdown $isOpen={isOpen}>
        {languages.map(language => (
          <LanguageOption
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            $isActive={i18n.language === language.code}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </LanguageOption>
        ))}
      </LanguageDropdown>
    </LanguageWrapper>
  );
};

export default LanguageSelector;