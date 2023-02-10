/* eslint-disable react-hooks/exhaustive-deps */
import { castMovieDB } from '../api/movieDB';
import React, { useState } from 'react';
import { ActorDetails } from '../interfaces/actorInterface';
import { useEffect } from 'react';

interface castDetails {
  isLoading: boolean;
  castFull?: ActorDetails;
}

export const useCastDetails = (actorId: number) => {
  const [stateActor, setStateActor] = useState<castDetails>({
    isLoading: true,
    castFull: undefined,
  });

  const getActorDetail = async () => {
    const resp = await castMovieDB.get<ActorDetails>(`/${actorId}`);

    setStateActor({
      isLoading: false,
      castFull: resp.data,
    });
  };

  useEffect(() => {
    getActorDetail();
  }, []);

  return {
    ...stateActor,
  };
};
