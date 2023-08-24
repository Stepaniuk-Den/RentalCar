import { Form, Formik } from 'formik';
import React from 'react';

const SearchForm = () => {
  return (
    <Formik>
      <Form>
        <label htmlFor="brand">Car brand</label>
      </Form>
    </Formik>
  );
};

export default SearchForm;
