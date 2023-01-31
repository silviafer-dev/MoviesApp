import React from 'react';
import {View, Text} from 'react-native';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text>{movieFull.vote_average}</Text>

          <Text style={{marginLeft: 5}}>
            {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Sinopsis */}
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Sinópsis
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text>{currencyFormatter.format(movieFull.budget, {code: 'USD'})}</Text>
      </View>
      {/* Casting: */}
    </>
  );
};
