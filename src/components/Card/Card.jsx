import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarData } from 'redux/selectors';
import { getCarsThunk } from 'redux/thunk';
import {
  StyledCard,
  StyledModelData,
  StyledModelDetail,
  StyledWrapper,
} from './Card.styled';

const Card = () => {
  const dispatch = useDispatch();
  const carData = useSelector(selectCarData);

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  return (
    <>
      {carData.map((car, id) => {
        const address = car.address.split(',');
        return (
          <div key={id}>
            <StyledCard>
              <StyledWrapper className="image">
                <img src={car.img} alt={car.make} />
              </StyledWrapper>
              <StyledModelData>
                {/* <p>
                  {car.make} | {car.model} |{car.year} |{car.rentalPrice}
                </p> */}
                <p>{car.make}</p>
                <p>{car.model}</p>
                <p>{car.year}</p>
                <p>{car.rentalPrice}</p>
              </StyledModelData>
              <StyledModelDetail>
                <p>
                  {address[1]} | {address[2]} | {car.rentalCompany} | {car.type}
                  | {car.accessories[0]} | {car.functionalities[0]}
                </p>
                {/* <p>{address[1]}</p>
                <p>{address[2]}</p>
                <p>{car.rentalCompany}</p>
                <p>{car.type}</p>
                <p>{car.accessories[0]}</p>
                <p>{car.functionalities[0]}</p> */}
              </StyledModelDetail>
              <button>Learn more</button>
            </StyledCard>
          </div>
        );
      })}
    </>
  );
};

export default Card;
