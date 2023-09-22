import { createSlice } from '@reduxjs/toolkit';
import { getCarsPerPageThunk, getCarsThunk } from './thunk';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carData: [],
    carPerPage: [],
  },
  reducers: {
    searchCars: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.carData = action.payload;
      })
      .addCase(getCarsPerPageThunk.fulfilled, (state, action) => {
        state.carPerPage = [...state.carPerPage, ...action.payload];
      });
  },
});

export const carReducer = carSlice.reducer;
export const { searchCars } = carSlice.actions;
