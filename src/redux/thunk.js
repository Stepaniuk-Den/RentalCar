import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCar } from 'services/api';

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
