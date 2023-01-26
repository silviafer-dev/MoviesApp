import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBMoviesResponse, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([]);
  const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>(
      '/now_playing',
    );
    const resPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
    setpeliculasEnCine(respNowPlaying.data.results);
    setPeliculasPopulares(resPopular.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    // now playing
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
    peliculasPopulares,
  };
};
