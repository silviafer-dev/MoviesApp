import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: undefined;
};

type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="detalles"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
