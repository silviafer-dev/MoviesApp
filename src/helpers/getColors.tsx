import ImageColors from 'react-native-image-colors';

export const getImageColor = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});

  let primary;
  let secondary;
  switch (colors.platform) {
    case 'android':
      // android colors properties
      primary = colors.dominant;
      secondary = colors.average;
      break;
    case 'ios':
      // iOS colors properties
      primary = colors.primary;
      secondary = colors.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }
  return [primary, secondary];
};
