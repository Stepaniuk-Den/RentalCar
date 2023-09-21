import Card from 'components/Card/Card';
import React, { useEffect } from 'react';
import {
  LoadButton,
  StyledCatalog,
  StyledContainer,
} from './CatalogPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import {
  selectCarData,
  selectCarPerPageData,
  selectIsOpen,
} from 'redux/selectors';
import { getCarsPerPageThunk } from 'redux/thunk';
import SearchForm from 'components/SearchForm/SearchForm';

let page = 1;
const CatalogPage = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const carData = useSelector(selectCarData);
  const carPerPageData = useSelector(selectCarPerPageData);

  useEffect(() => {
    if (carPerPageData.length > 0) return;
    dispatch(getCarsPerPageThunk(page));
  }, [dispatch, carPerPageData]);

  const handleClick = () => {
    page += 1;
    dispatch(getCarsPerPageThunk(page));
  };
  return (
    <>
      <StyledContainer>
        <SearchForm />
        <StyledCatalog>
          <Card data={carPerPageData} />
        </StyledCatalog>
        {carPerPageData?.length < carData?.length ? (
          <LoadButton onClick={handleClick}>Load more</LoadButton>
        ) : (
          <></>
        )}
      </StyledContainer>
      {isOpen ? <Modal /> : null}
    </>
  );
};

export default CatalogPage;
