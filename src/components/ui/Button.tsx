import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  $primary?: boolean;
  $secondary?: boolean;
  $outline?: boolean;
  $large?: boolean;
  $small?: boolean;
  $fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  as?: any;
  to?: string;
  href?: string;
  target?: string;        // Add target prop for external links
  rel?: string;           // Add rel prop for security with external links
  onClick?: () => void;
  children: React.ReactNode;
  [key: string]: any;     // Allow any other props to pass through
}

const ButtonStyles = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.$large ? '0.75rem 1.5rem' : props.$small ? '0.4rem 0.8rem' : '0.5rem 1rem'};
  font-size: ${props => props.$large ? '1.125rem' : props.$small ? '0.875rem' : '1rem'};
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.15s ease-in-out;
  text-decoration: none;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  
  /* Primary Button */
  ${props => props.$primary && css`
    background-color: ${props.theme.colors.primary};
    color: white;
    border-color: ${props.theme.colors.primary};
    
    &:hover, &:focus {
      background-color: ${props.theme.colors.primaryDark};
      border-color: ${props.theme.colors.primaryDark};
      text-decoration: none;
    }
  `}
  
  /* Secondary Button */
  ${props => props.$secondary && css`
    background-color: ${props.theme.colors.secondary};
    color: white;
    border-color: ${props.theme.colors.secondary};
    
    &:hover, &:focus {
      background-color: darken(${props.theme.colors.secondary}, 10%);
      border-color: darken(${props.theme.colors.secondary}, 10%);
      text-decoration: none;
    }
  `}
  
  /* Outline Button */
  ${props => props.$outline && css`
    background-color: transparent;
    color: ${props.$primary ? props.theme.colors.primary : props.$secondary ? props.theme.colors.secondary : props.theme.colors.text};
    border-color: ${props.$primary ? props.theme.colors.primary : props.$secondary ? props.theme.colors.secondary : props.theme.colors.border};
    
    &:hover, &:focus {
      background-color: ${props.$primary ? props.theme.colors.primaryLight : props.$secondary ? 'rgba(243, 156, 18, 0.1)' : props.theme.colors.backgroundAlt};
      text-decoration: none;
    }
  `}
  
  /* Disabled State */
  ${props => props.disabled && css`
    opacity: 0.65;
    pointer-events: none;
  `}
`;

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyles}
`;

const Button: React.FC<ButtonProps> = ({ 
  children, 
  type = 'button',
  ...props 
}) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;