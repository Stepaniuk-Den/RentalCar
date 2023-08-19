// year: 0,
// make: null,
// model: null,
// type: null,
// img: null,
// description: null,
// fuelConsumption: null,
// engineSize: null,
// accessories: [],
// functionalities: [],
// rentalPrice: null,
// rentalCompany: null,
// address: null,
// rentalConditions: null,
// mileage: 0,

export const selectCarData = state => state.cars.carData;
export const selectCarPerPageData = state => state.cars.carPerPage;
export const selectFavoriteCarData = state => state.favorite.carsFavorite;
export const selectModalData = state => state.modal.modalData;
export const selectIsOpen = state => state.modal.isOpen;
