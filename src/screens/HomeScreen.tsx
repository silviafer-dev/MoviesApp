import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <Carousel
        width={300}
        height={420}
        data={peliculasEnCine}
        renderItem={({item}) => <MoviePoster movie={item} />}
      />
      {/*  */}
    </View>
  );
};
