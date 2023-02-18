import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { ActorDetails } from '../interfaces/actorInterface';

export const Biography = ({ castFullB }: { castFullB: ActorDetails }) => {
  const [bioLength, setBioLength] = useState(250);

  return (
    <View>
      <Text style={styles.textBio}>
        {bioLength >= castFullB.biography.length
          ? castFullB.biography
          : castFullB.biography.slice(0, bioLength - 1) + '(…)'}
      </Text>
      {bioLength < castFullB.biography.length ? (
        <TouchableOpacity
          style={{ marginBottom: 30 }}
          onPress={() => {
            setBioLength(castFullB.biography.length);
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
