import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { Cast } from '../interfaces/creditsInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate.dispatch(CommonActions.navigate('ActorScreen', actor))
      }>
      <View style={styles.container}>
        <View>
          {actor.profile_path && (
            <Image
              source={{ uri }}
              style={{ width: 50, height: 50, borderRadius: 10 }}
            />
          )}
        </View>
        <View style={styles.actorInfo}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
            {actor.name}
          </Text>
          <Text style={{ fontSize: 16, opacity: 0.7, color: 'black' }}>
            {actor.character}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 3,
  },
});
