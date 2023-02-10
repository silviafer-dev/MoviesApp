import React from 'react';
import { View, Text } from 'react-native';
import { ActorDetails } from '../interfaces/actorInterface';

interface Props {
  castFull: ActorDetails;
}

export const ActorDetail = ({ castFull }: Props) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View>
        <Text
          style={{
            fontSize: 14,
            marginTop: 30,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 15,
          }}>
          {castFull.also_known_as[0]}
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 15,
          }}>
          {castFull.name}
        </Text>
        <Text style={{ marginHorizontal: 15 }}>{castFull.place_of_birth}</Text>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <Text>{castFull.birthday.split('-').reverse().join('-')}</Text>
          {castFull.deathday && (
            <Text> / {castFull.deathday.split('-').reverse().join('-')}</Text>
          )}
        </View>
      </View>
      {castFull.biography && (
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Biografía
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              marginBottom: 40,
            }}>
            {castFull.biography}
          </Text>
        </View>
      )}
    </View>
  );
};
