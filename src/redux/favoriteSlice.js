import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carsFavorite: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addCarFavorite: (state, action) => {
      state.carsFavorite.push(action.payload);
    },
    delCarFavorite: (state, action) => {
      state.carsFavorite = action.payload;
    },
    delAllCarFavorite: state => {
      state.carsFavorite = [];
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addCarFavorite, delCarFavorite, delAllCarFavorite } =
  favoriteSlice.actions;
