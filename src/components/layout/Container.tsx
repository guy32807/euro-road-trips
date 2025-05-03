import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space.md};
  width: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.space.sm};
  }
`;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;