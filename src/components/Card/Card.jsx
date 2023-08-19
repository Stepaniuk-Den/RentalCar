import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarData,
  selectCarPerPageData,
  selectFavoriteCarData,
} from 'redux/selectors';
import { getCarsThunk } from 'redux/thunk';
import {
  StyledCard,
  // StyledHeartFillIcon,
  // StyledHeartIcon,
  StyledHeartWrapper,
  StyledModelData,
  StyledModelDetail,
  StyledWrapper,
} from './Card.styled';
import { addModalData, openModal } from 'redux/modalSlice';
import { addCarFavorite, delCarFavorite } from 'redux/favoriteSlice';

const Card = () => {
  const dispatch = useDispatch();
  const carData = useSelector(selectCarData);
  const carPerPageData = useSelector(selectCarPerPageData);
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

    console.log(carFavorite);
    console.log(favoriteCar);

    if (favoriteCar) {
      const filtered = favoriteCarData?.filter(
        // car => car.id !== favoriteCar.id
        car => car.id !== evt.currentTarget.id
      );
      dispatch(delCarFavorite(filtered));
    } else {
      dispatch(addCarFavorite(carFavorite));
    }
  };
  return (
    <>
      {carPerPageData.map(car => {
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
              <StyledHeartWrapper id={car.id} onClick={toFavorite}>
                {/* {!favoriteCarData.car.id ? (
                  <StyledHeartIcon />
                ) : (
                  <StyledHeartFillIcon />
                )} */}
              </StyledHeartWrapper>
            </StyledCard>
          </div>
        );
      })}
    </>
  );
};

export default Card;
