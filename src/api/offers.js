
import axios from 'axios';
axios.defaults.baseURL = 'https://evil-spell-95875.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:8000/api';

axios.defaults.headers['Access-Control-Allow-Origin'] = "*";

export const getOffers = async () => {
  const responce = await axios.get('/offers');
  const offers = await responce.data.data;
  return offers;
};

