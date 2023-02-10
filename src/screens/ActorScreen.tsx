import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ActorDetail } from '../components/ActorDetail';
import { RootStackParams } from '../navigation/Navigation';
import { useCastDetails } from '../hooks/useCastDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'ActorScreen'> {}

export const ActorScreen = ({ route, navigation }: Props) => {
  const actor = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  const { isLoading, castFull } = useCastDetails(actor.id);

  return (
    <ScrollView style={{ backgroundColor: '#f2e2d2' }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.posterImage} />
      </View>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
        <ActorDetail castFull={castFull!} />
      )}
      <View style={styles.backBottom}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="#5e5e5e" size={60} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.32,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  backBottom: {
    position: 'absolute',
    top: 30,
    left: 5,
  },
});
