import { Field, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarData, selectFilteredCars } from 'redux/selectors';

import { nanoid } from '@reduxjs/toolkit';
import { searchCars } from 'redux/carSlice';
import {
  StyledBrandContainer,
  StyledLabel,
  StyledField,
  StyledForm,
} from './SearchForm.styled';

import PropTypes from 'prop-types';

const SearchForm = () => {
  const dispatch = useDispatch();
  const carData = useSelector(selectCarData);
  const filteredCars = useSelector(selectFilteredCars);
  // console.log(carData[0].make);
  const prices = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
    180, 190, 200,
  ];
  const handlerOnSubmit = values => {
    // function capitalizeString(str) {
    //   return str.charAt(0).toUpperCase() + str.slice(1);
    // }

    // const capitalizedModel = capitalizeString(values.brand);
    const capitalizedModel = values.brand;
    const carPrice = `$${values.rentalPrice}`;

    const filteredCars = capitalizedModel
      ? carData.filter(car => car.make === capitalizedModel)
      : carData.filter(car => car.rentalPrice === carPrice);

    if (!filteredCars?.length > 0) {
      // notifyCarSearchError();
      return;
    } else {
      dispatch(searchCars(filteredCars));
      // notifyCarSearch(filteredCars?.length);
    }
    // resetForm()
  };
  return (
    <Formik
      initialValues={{
        brand: '',
        rentalPrice: '',
        fromMileage: '',
        toMileage: '',
      }}
      onSubmit={values => {
        handlerOnSubmit(values);
        console.log(values);
      }}
    >
      {formik => (
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledBrandContainer>
            <StyledLabel htmlFor="brand">
              <span>Car brand</span>
              <StyledField as="select" id="brand" name="brand">
                <option value="">Enter the text</option>
                {carData.map(car => (
                  <option key={nanoid()}>{car.make}</option>
                ))}
              </StyledField>
            </StyledLabel>
          </StyledBrandContainer>
          <div>
            <StyledLabel htmlFor="rentalPrice">
              <span>Price/ 1 hour</span>
              <StyledField as="select" id="rentalPrice" name="rentalPrice">
                <option value="">Select a price ($)</option>
                {prices.map(price => (
                  <option key={nanoid()}>{price}</option>
                ))}
              </StyledField>
            </StyledLabel>
          </div>
          <div>
            <label>
              Car mileage / km
              <div>
                <input
                  onChange={formik.handleChange}
                  values={formik.values.fromMileage}
                  type="number"
                  name="fromMileage"
                  placeholder="from"
                />
                <input
                  onChange={formik.handleChange}
                  values={formik.values.toMileage}
                  type="number"
                  name="toMileage"
                  placeholder="to"
                />
              </div>
            </label>
          </div>
          <button type="submit">Search</button>
        </StyledForm>
      )}
    </Formik>
  );
};

SearchForm.propTypes = {
  filteredCarList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      year: PropTypes.number,
      make: PropTypes.string,
      model: PropTypes.string,
      type: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
      fuelConsumption: PropTypes.string,
      engineSize: PropTypes.string,
      accessories: PropTypes.arrayOf(PropTypes.string),
      functionalities: PropTypes.arrayOf(PropTypes.string),
      rentalPrice: PropTypes.string,
      rentalCompany: PropTypes.string,
      address: PropTypes.string,
      rentalConditions: PropTypes.string,
      mileage: PropTypes.number,
    })
  ),
};

export default SearchForm;
