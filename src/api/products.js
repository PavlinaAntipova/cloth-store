import axios from 'axios';
axios.defaults.baseURL = 'https://evil-spell-95875.herokuapp.com/api';


axios.defaults.headers['Access-Control-Allow-Origin'] = "*";

export const getProducts = async ({ queryKey }) => {
    const [, { title, value }] = queryKey;
  const responce = await axios.get(`/products?${title}=${value}`);
  const products = await responce.data.data;
  return products;
};

export const getProductsByCategory = async ({ queryKey }) => {
    const [, { parentCategory, currentCategory, subcategory }] = queryKey;
  const responce = await axios.get(`/products?parentCategory=${parentCategory}&currentCategory=${currentCategory}&s=${subcategory}`);
  const products = await responce.data.data;
  return products;
};