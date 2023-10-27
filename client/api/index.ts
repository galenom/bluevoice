import axios from 'axios';

export const fetchMenu = async () => {
  const { data } = await axios('http://127.0.0.1:8000/food/');
  return data;
};
