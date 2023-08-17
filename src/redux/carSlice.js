import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk } from './thunk';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carData: [],
  },
  extraReducers: builder => {
    builder.addCase(getCarsThunk.fulfilled, (state, action) => {
      state.carData = action.payload;
    });
  },
});

export const carReducer = carSlice.reducer;
