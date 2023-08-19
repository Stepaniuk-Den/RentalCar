import Card from 'components/Card/Card';
import React from 'react';
import {
  LoadButton,
  StyledCatalog,
  StyledContainer,
} from './CatalogPage.styled';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import { selectIsOpen } from 'redux/selectors';

const CatalogPage = () => {
  const isOpen = useSelector(selectIsOpen);

  return (
    <>
      <StyledContainer>
        <StyledCatalog>
          <Card />
        </StyledCatalog>
        <LoadButton>Load more</LoadButton>
      </StyledContainer>
      {isOpen ? <Modal /> : null}
    </>
  );
};

export default CatalogPage;
