import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { ActorDetails } from '../interfaces/actorInterface';

export const Biography = ({ castFull }: { castFull: ActorDetails }) => {
  const [bioLength, setBioLength] = useState(250);

  return (
    <View>
      <Text style={styles.textBio}>
        {bioLength >= castFull.biography.length
          ? castFull.biography
          : castFull.biography.slice(0, bioLength) + '(…)'}
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

const styles = StyleSheet.create({
  textBio: {
    color: 'black',
    fontSize: 16,
  },
});
