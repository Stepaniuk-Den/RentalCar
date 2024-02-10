import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarData, selectFavoriteCarData } from 'redux/selectors';
import { getCarsThunk } from 'redux/thunk';
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
  const dispatch = useDispatch();
  const carData = useSelector(selectCarData);
  const favoriteCarData = useSelector(selectFavoriteCarData);

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

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

  console.log(data);
  return (
    <>
      {data.map(car => {
        const address = car.address.split(',');
        return (
          <>
            <StyledCard key={car.id}>
              <StyledWrapper className="image">
                <img src={car.img} alt={car.make} />
              </StyledWrapper>
              <StyledModelData>
                <p>{car.make}</p>
                <p className="model">{car.model},</p>
                <p>{car.year}</p>
                <p className="rentalPrice">{car.rentalPrice}</p>
              </StyledModelData>
              <StyledModelDetail>
                <p>
                  {address[1]} | {address[2]} | {car.rentalCompany} | {car.type}
                  | {car.accessories[0]} | {car.functionalities[0]}
                </p>
              </StyledModelDetail>
              <button id={car.id} type="button" onClick={handleOpenModal}>
                Learn more
              </button>
              <StyledHeartWrapper id={car.id} onClick={toFavorite}>
                {!favoriteCarData.some(i => i.id === car.id) ? (
                  <StyledHeartIcon />
                ) : (
                  <StyledHeartFillIcon />
                )}
              </StyledHeartWrapper>
            </StyledCard>
          </>
        );
      })}
    </>
  );
};

export default Card;
