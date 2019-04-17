import { Dimensions } from 'react-native';
import { isIos } from './appConstants';

// breakpoints
export const screenWidth = Dimensions.get('window').width;
export const SM = 360;

// colors
export const BLACK = '#000000';
export const WHITE = '#FFFFFF';
export const RED = '#FF0000';

// commons
export const FONT_TITLE = {
  color: BLACK,
  fontFamily: isIos ? 'Arial' : 'Lato-Bold',
  fontWeight: '500',
  fontSize: screenWidth <= SM ? 12 : 14,
  letterSpacing: 1
};

export const FONT_ERROR = {
  color: RED
};

export const BLACK_BUTTON = {
  textAlign: 'center',
  backgroundColor: BLACK,
  color: WHITE,
};
