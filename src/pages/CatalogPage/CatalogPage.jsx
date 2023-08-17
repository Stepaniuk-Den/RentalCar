import Card from 'components/Card/Card';
import React from 'react';
import { StyledCatalog, StyledContainer } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    // <StyledContainer>
    <StyledCatalog>
      <Card />
      <button>Load more</button>
    </StyledCatalog>
    // </StyledContainer>
  );
};

export default CatalogPage;
