import axios from 'axios';
import {API_KEY} from '@env';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY,
    language: 'es-ES',
  },
});

export default movieDB;
