import { Dimensions, PixelRatio, Platform } from 'react-native';
import { Theme } from 'react-native-picasso/build/styles/defaultTheme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 414;

const normalize = (size: number) => {
  const newSize = size * scale;

  if (Platform.OS === 'ios')
    return Math.round(PixelRatio.roundToNearestPixel(newSize));

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const theme: Theme = {
  colors: {
    background: '#eeeeee',
    border: '#d3d3d3',
    primary: '#566ab1',
    secondary: '#dedede',
    yellow: '#FFCB79',
    cyan: '#8AC4D0',
    blue: '#457495',
    darkblue: '#29506B',
    white: '#fff',
  },
  font: {
    family: 'SofiaPro',
    weights: {
      bold: 'bold',
      extrabold: '800',
      light: '100',
      normal: 'normal',
    },
    sizes: {
      sm: normalize(12),
      md: normalize(16),
      lg: normalize(24),
      xl: normalize(32),
      xxl: normalize(40),
    },
  },
  textColors: {
    primary: '#333333',
    secondary: '#666666',
    white: '#ffffff',
  },
};
