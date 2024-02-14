import Card from 'components/Card/Card';
import Modal from 'components/Modal/Modal';
import {
  LoadButton,
  StyledCatalog,
  StyledContainer,
  StyledLink,
  StyledOops,
} from 'pages/FavoritePage/FavoritePage.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delAllCarFavorite } from 'redux/favoriteSlice';
import { selectFavoriteCarData, selectIsOpen } from 'redux/selectors';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const favoriteCarData = useSelector(selectFavoriteCarData);

  const deleteAllFavorites = () => {
    dispatch(delAllCarFavorite());
  };

  return (
    <>
      <StyledContainer>
        <StyledCatalog>
          {favoriteCarData?.map(car => (
            <Card key={car.id} data={car} />
          ))}
        </StyledCatalog>
        {favoriteCarData.length > 0 ? (
          <LoadButton onClick={deleteAllFavorites}>Delete All</LoadButton>
        ) : (
          <StyledOops>
            <StyledLink to="/catalog">Add to Favorite</StyledLink>
          </StyledOops>
        )}
      </StyledContainer>
      {isOpen && <Modal />}
    </>
  );
};

export default FavoritePage;
