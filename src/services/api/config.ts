import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://challange.goomer.com.br',
});
