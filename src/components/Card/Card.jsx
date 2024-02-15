import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarData, selectFavoriteCarData } from 'redux/selectors';
import {
  StyledCard,
  StyledHeartFillIcon,
  StyledHeartIcon,
  StyledHeartWrapper,
  StyledModelData,
  StyledModelDetail,
  StyledWrapper,
} from './Card.styled';
import { addModalData, openModal } from 'redux/modalSlice';
import { addCarFavorite, delCarFavorite } from 'redux/favoriteSlice';

const Card = ({ data }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    accessories,
    functionalities,
  } = data;

  const dispatch = useDispatch();
  const carData = useSelector(selectCarData);
  const favoriteCarData = useSelector(selectFavoriteCarData);

  const handleOpenModal = evt => {
    const carModal = carData.find(
      car => car.id === Number(evt.currentTarget.id)
    );
    dispatch(openModal());
    dispatch(addModalData(carModal));
  };

  const toFavorite = evt => {
    const carFavorite = carData.find(
      car => car.id === Number(evt.currentTarget.id)
    );
    const favoriteCar = favoriteCarData.find(
      car => car.id === Number(evt.currentTarget.id)
    );

    if (favoriteCar) {
      const filtered = favoriteCarData?.filter(
        car => car.id !== Number(evt.currentTarget.id)
      );

      dispatch(delCarFavorite(filtered));
    } else {
      dispatch(addCarFavorite(carFavorite));
    }
  };

  const newAddress = address.split(',');
  return (
    <>
      <StyledCard>
        <StyledWrapper className="image" id={id} onClick={toFavorite}>
          <img src={img} alt={make} loading="lazy" />
        </StyledWrapper>
        <StyledModelData>
          <p>{make}</p>
          <p className="model">{model},</p>
          <p>{year}</p>
          <p className="rentalPrice">{rentalPrice}</p>
        </StyledModelData>
        <StyledModelDetail>
          <p>
            {newAddress[1]} | {newAddress[2]} | {rentalCompany} | {type}|{' '}
            {accessories[0]} | {functionalities[0]}
          </p>
        </StyledModelDetail>
        <button id={id} type="button" onClick={handleOpenModal}>
          Learn more
        </button>
        <StyledHeartWrapper id={id} onClick={toFavorite}>
          {!favoriteCarData.some(i => i.id === id) ? (
            <StyledHeartIcon />
          ) : (
            <StyledHeartFillIcon />
          )}
        </StyledHeartWrapper>
      </StyledCard>
    </>
  );
};

export default Card;
