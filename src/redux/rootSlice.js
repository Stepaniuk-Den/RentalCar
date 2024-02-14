import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const initialState = {
  isLoading: false,
  error: null,
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  extraReducers: builder =>
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      ),
});

export const rootReducer = rootSlice.reducer;
