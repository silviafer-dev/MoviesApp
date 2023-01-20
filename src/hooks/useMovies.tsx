import {getRandomValues} from 'crypto';
import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setpeliculasEnCine(resp.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    // now playing
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
  };
};
