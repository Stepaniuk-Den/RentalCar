import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalData: null,
    isOpen: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      document.body.classList.add('stop-scrolling');
    },
    closeModal: state => {
      state.isOpen = false;
      state.modalData = null;
      document.body.classList.remove('stop-scrolling');
    },
    addModalData: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal, addModalData } = modalSlice.actions;
