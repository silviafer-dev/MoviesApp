// @ts-ignore
import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY,
    language: 'es-ES',
  },
});

export const castMovieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/person/',
  params: {
    api_key: API_KEY,
    language: 'es-ES',
  },
});
