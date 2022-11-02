import axios from 'axios';
axios.defaults.baseURL = 'https://evil-spell-95875.herokuapp.com/api';


axios.defaults.headers['Access-Control-Allow-Origin'] = "*";

export const postOrder = async (body) => {
    const responce = await axios.post('/order', body);
    return await responce.data;
};