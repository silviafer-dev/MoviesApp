import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY,
    language: 'es-ES',
  },
});
