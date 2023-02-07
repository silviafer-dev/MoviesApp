import React, { createContext, useState } from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); //definir tipo

export const GradientProvider = ({ children }: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'red',
    secondary: 'blue',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const setMainColors = (color: ImageColors) => {
    setColors(color);
  };
  const setPrevMainColors = (color: ImageColors) => {
    setPrevColors(color);
  };

  return (
    <GradientContext.Provider
      value={{ colors, prevColors, setMainColors, setPrevMainColors }}>
      {children}
    </GradientContext.Provider>
  );
};
