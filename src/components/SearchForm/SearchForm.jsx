import { Field, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCarData } from 'redux/selectors';
import { StyledForm } from './SearchForm.styled';
import { nanoid } from '@reduxjs/toolkit';

const SearchForm = () => {
  const carData = useSelector(selectCarData);
  console.log(carData[0].make);
  const prices = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
    180, 190, 200,
  ];
  return (
    <Formik
      initialValues={{
        brand: '',
        rentalPrice: '',
        fromMileage: '',
        toMileage: '',
      }}
    >
      <StyledForm>
        <div>
          <label htmlFor="brand">
            Car brand
            <Field as="select" id="brand" name="brand">
              <option value="">Enter the text</option>
              {carData.map(car => (
                <option key={nanoid()}>{car.make}</option>
              ))}
            </Field>
          </label>
        </div>
        <div>
          <label htmlFor="rentalPrice">
            Price/ 1 hour
            <Field as="select" id="rentalPrice" name="rentalPrice">
              <option value="">Select a price ($)</option>
              {prices.map(price => (
                <option key={nanoid()}>{price}</option>
              ))}
            </Field>
          </label>
        </div>
        <button type="submit">Search</button>
      </StyledForm>
    </Formik>
  );
};

export default SearchForm;
