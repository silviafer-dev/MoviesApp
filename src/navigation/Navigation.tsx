import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
import { ActorScreen } from '../screens/ActorScreen';
import { Cast } from '../interfaces/creditsInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  ActorScreen: Cast;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: {
        //   backgroundColor: 'white',
        // },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ActorScreen" component={ActorScreen} />
    </Stack.Navigator>
  );
};
