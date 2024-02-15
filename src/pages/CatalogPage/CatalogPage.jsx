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
  selectFilteredCars,
  selectIsLoading,
  selectIsOpen,
} from 'redux/selectors';
import { getCarsPerPageThunk, getCarsThunk } from 'redux/thunk';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';

let page = 1;

const CatalogPage = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsOpen);
  const carData = useSelector(selectCarData);
  const carPerPageData = useSelector(selectCarPerPageData);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (carData.length > 0) return;
    dispatch(getCarsThunk());
  }, [dispatch, carData]);

  useEffect(() => {
    if (carPerPageData.length > 0) return;
    dispatch(getCarsPerPageThunk(page));
  }, [dispatch, carPerPageData]);

  const handleClick = () => {
    page += 1;
    dispatch(getCarsPerPageThunk(page));
  };

  useEffect(() => {
    const scrollToBottom = () => {
      const pages = window.innerHeight;
      if (page === 1) return;
      window.scrollTo({
        top: pages * page,
        behavior: 'smooth',
      });
    };
    scrollToBottom();
  }, [carPerPageData.length]);

  return (
    <>
      <StyledContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <SearchForm />
            <StyledCatalog>
              {filteredCars
                ? filteredCars.map(car => <Card data={car} key={car.id} />)
                : carPerPageData?.length &&
                  carPerPageData.map(car => <Card data={car} key={car.id} />)}
            </StyledCatalog>
            {carPerPageData?.length < carData?.length && (
              <LoadButton onClick={handleClick}>Load more</LoadButton>
            )}
          </>
        )}
        {isOpen && <Modal />}
      </StyledContainer>
    </>
  );
};

export default CatalogPage;
