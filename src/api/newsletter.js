import axios from 'axios';
axios.defaults.baseURL = 'https://evil-spell-95875.herokuapp.com/api';


axios.defaults.headers['Access-Control-Allow-Origin'] = "*";


export const postEmail = async (email) => {
    const responce = await axios.post('/newsletter', email);
    return await responce.data;
};
