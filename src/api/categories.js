import axios from 'axios';
axios.defaults.baseURL = 'https://evil-spell-95875.herokuapp.com/api';


axios.defaults.headers['Access-Control-Allow-Origin'] = "*";

export const getCategories = async () => {
  const responce = await axios.get('/categories');
  const categories = await responce.data.data;
  return categories;
};

export const getCategoryById = async ({ queryKey }) => {
  console.log(queryKey);
  const [, id] = queryKey;
  const responce = await axios.get(`/categories/${id}`);
  const categories = await responce.data.data;
  return categories;
};