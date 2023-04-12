import axios from 'axios';

axios.defaults.baseURL = 'https://643670653e4d2b4a12d24347.mockapi.io/api/';

export const getProducts = async () => {
  const { data } = await axios.get('/products');
  return data;
};
