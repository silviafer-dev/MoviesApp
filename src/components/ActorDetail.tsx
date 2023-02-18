import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActorDetails } from '../interfaces/actorInterface';
import { Biography } from './Biography';

interface Props {
  castFull: ActorDetails;
}

export const ActorDetail = ({ castFull }: Props) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View>
        <Text style={styles.alsoKnown}>{castFull.also_known_as[0]}</Text>
        <Text style={styles.name}>{castFull.name}</Text>
        <Text style={{ marginHorizontal: 15 }}>{castFull.place_of_birth}</Text>
        <View style={styles.date}>
          <Text>{castFull.birthday.split('-').reverse().join('-')}</Text>
          {castFull.deathday && (
            <Text> / {castFull.deathday.split('-').reverse().join('-')}</Text>
          )}
        </View>
      </View>
      {castFull.biography && (
        <View>
          <Text style={styles.titleText}>Biografía</Text>

          <Biography castFull={castFull} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 15,
  },
  alsoKnown: {
    fontSize: 14,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 15,
  },
  date: {
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 20,
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
