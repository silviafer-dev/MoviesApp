import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ActorDetails } from '../interfaces/actorInterface';

interface Props {
  castFull: ActorDetails;
}

export const ActorDetail = ({ castFull }: Props) => {
  const [bioLength, setBioLength] = useState(250);

  const Biography = ({ castFullB }: { castFullB: ActorDetails }) => {
    return (
      <View>
        <Text style={styles.textBio}>
          {bioLength >= castFullB.biography.length
            ? castFullB.biography
            : castFullB.biography.slice(0, bioLength - 1) + '(…)'}
        </Text>
        {bioLength < castFull.biography.length ? (
          <TouchableOpacity
            style={{ marginBottom: 30 }}
            onPress={() => {
              setBioLength(castFull.biography.length);
            }}>
            <Text style={{ ...styles.textBio, fontWeight: 'bold' }}>
              ...Ver más
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ marginBottom: 30 }}
            onPress={() => {
              setBioLength(250);
            }}>
            <Text
              style={{
                ...styles.textBio,
                fontWeight: 'bold',
              }}>
              ...Ver menos
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

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

          <Biography castFullB={castFull} />
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
  textBio: {
    color: 'black',
    fontSize: 16,
  },
});
