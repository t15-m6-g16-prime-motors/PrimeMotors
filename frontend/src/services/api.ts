import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-pm.onrender.com',
  timeout: 5000
});

export const apiKenzieCars = axios.create({
  baseURL: 'https://kenzie-kars.herokuapp.com',
  timeout: 10000
});
