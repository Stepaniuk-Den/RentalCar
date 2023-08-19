import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCar, fetchCarPerPage } from 'services/api';

export const getCarsThunk = createAsyncThunk(
  'adverts/getCarsThunk',
  async (_, thunkAPI) => {
    try {
      return await fetchCar();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getCarsPerPageThunk = createAsyncThunk(
  'adverts/getCarsPerPageThunk',
  async (page, thunkAPI) => {
    try {
      return await fetchCarPerPage(page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
