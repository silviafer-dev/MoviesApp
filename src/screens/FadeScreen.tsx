import React, { useRef } from 'react';
import { View, Animated, Button } from 'react-native';

export const FadeScreen = () => {
  const opacity = useRef(new Animated.Value(0.5)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
        }}
      />

      <Button title="FadeIn" onPress={fadeIn} />
    </View>
  );
};
