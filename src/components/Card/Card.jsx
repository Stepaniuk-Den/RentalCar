import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarData } from 'redux/selectors';
import { getCarsThunk } from 'redux/thunk';
import {
  StyledCard,
  StyledHeartIcon,
  StyledHeartWrapper,
  StyledModelData,
  StyledModelDetail,
  StyledWrapper,
} from './Card.styled';
import { addModalData, openModal } from 'redux/modalSlice';

const Card = () => {
  const dispatch = useDispatch();
  const carData = useSelector(selectCarData);

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
    // dispatch(toggleFavorite(carFavorite));
  };
  return (
    <>
      {carData.map(car => {
        const address = car.address.split(',');
        return (
          <div key={car.id}>
            <StyledCard>
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
              <StyledHeartWrapper>
                <StyledHeartIcon />
              </StyledHeartWrapper>
            </StyledCard>
          </div>
        );
      })}
    </>
  );
};

export default Card;
