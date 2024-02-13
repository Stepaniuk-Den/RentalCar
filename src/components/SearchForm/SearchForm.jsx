import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarData, selectFilteredCars } from 'redux/selectors';

import { searchCars, searchCarsClear } from 'redux/carSlice';
import {
  StyledBrandContainer,
  StyledLabel,
  StyledForm,
  StyledPriceContainer,
  StyledBtnSubmit,
  StyledRangeContainer,
  StyledRangeLabel,
  StyledInputLeft,
  StyledInputRight,
  styledSelectBrand,
  styledSelectPrice,
} from './SearchForm.styled';

import {
  handlerSubmitSearch,
  makerSelectOptions,
} from 'components/helpers/helpers';
import Select from 'react-select';

const SearchForm = () => {
  const dispatch = useDispatch();
  const carData = useSelector(selectCarData);
  const filteredCars = useSelector(selectFilteredCars);

  const options = makerSelectOptions(carData);

  const handleClearFilter = () => {
    dispatch(searchCarsClear());
  };

  const formik = useFormik({
    initialValues: {
      make: '',
      price: '',
      fromMileage: '',
      toMileage: '',
    },
    onSubmit: value => {
      dispatch(searchCars(handlerSubmitSearch(value, carData)));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledBrandContainer>
        <StyledLabel>
          <span>Car brand</span>
          <Select
            // classNames="select-brand"
            type="text"
            name={formik.values.label}
            value={formik.values.label}
            options={options.uniqBrandOptions}
            styles={styledSelectBrand}
            placeholder="Enter the text"
            onChange={({ value }) => formik.setFieldValue('make', value)}
            onBlur={formik.handleBlur}
          />
        </StyledLabel>
      </StyledBrandContainer>
      <StyledPriceContainer>
        <StyledLabel>
          <span>Price/ 1 hour</span>
          <Select
            type="number"
            name={formik.values.label}
            value={formik.values.value}
            options={options.uniqPriceOptions}
            styles={styledSelectPrice}
            placeholder="To $ "
            onChange={({ value }) => formik.setFieldValue('price', value)}
            onBlur={formik.handleBlur}
          />
        </StyledLabel>
      </StyledPriceContainer>
      <StyledRangeContainer>
        <StyledRangeLabel>
          <span>Car mileage / km</span>
          <div>
            <StyledInputLeft
              onChange={formik.handleChange}
              values={formik.values.fromMileage}
              type="number"
              name="fromMileage"
              placeholder="from"
              autoComplete="off"
              min="1"
            />
            <StyledInputRight
              onChange={formik.handleChange}
              values={formik.values.toMileage}
              type="number"
              name="toMileage"
              placeholder="to"
              autoComplete="off"
              min="1"
            />
          </div>
        </StyledRangeLabel>
      </StyledRangeContainer>
      <StyledBtnSubmit type="submit">Search</StyledBtnSubmit>
      {filteredCars?.length > 0 && (
        <StyledBtnSubmit type="button" onClick={handleClearFilter}>
          Clear
        </StyledBtnSubmit>
      )}
    </StyledForm>
  );
};

export default SearchForm;
