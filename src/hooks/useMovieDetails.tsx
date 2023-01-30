/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';

interface movieDetails {
  isLoading: boolean;
  movieFull: MovieFull;
  cast: any[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<movieDetails>();

  const getMovieDetails = async () => {
    const resp = await movieDB.get<MovieFull>(`/${movieId}`);
    console.log(resp.data.overview);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return state;
};
