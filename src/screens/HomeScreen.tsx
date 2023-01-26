import React from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            style={{width: windowWidth, justifyContent: 'center'}}
            mode="parallax"
            pagingEnabled={false}
            // and that superfast scroll stops on multiples of windowSize
            windowSize={2}
            // the snap helps to stop exactly in 1 item, no in the middle of two or so
            snapEnabled
            width={300}
            height={420}
            modeConfig={{
              // How the "main" item will look
              parallaxScrollingScale: 0.9,
              // How separate the adjacent items will be
              parallaxScrollingOffset: 50,
              // How big the adjacent items will look compared to the "main" item
              parallaxAdjacentItemScale: 0.75,
            }}
            data={peliculasEnCine}
            renderItem={({item}) => <MoviePoster movie={item} />}
          />
        </View>

        <HorizontalSlider title={'En cines'} movies={peliculasEnCine} />
        <HorizontalSlider title={'Top'} movies={peliculasEnCine} />
      </View>
    </ScrollView>
  );
};
