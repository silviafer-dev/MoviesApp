import React from 'react';
import {View, Text} from 'react-native';
import {Movie} from 'src/interfaces/movieInterface';
import {FlatList} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: 250}}>
      <Text>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
