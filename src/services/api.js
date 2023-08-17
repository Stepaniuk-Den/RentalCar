import axios from 'axios';

const $instance = axios.create({
  baseURL: 'https://64c21d6bfa35860baea1349e.mockapi.io/',
});

export const fetchCar = async () => {
  const { data } = await $instance.get('/adverts');
  return data;
};
