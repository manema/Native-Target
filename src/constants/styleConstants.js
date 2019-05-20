import { Dimensions, LayoutAnimation } from 'react-native';
import { isIos } from './appConstants';

// breakpoints
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SM = 360;

// colors
export const BLACK = '#000000';
export const TRANSPARENT_BLACK = '#00000050';
export const WHITE = '#FFFFFF';
export const RED = '#D0011B';
export const TRANSPARENT = 'rgba(52, 52, 52, 0.8)';
export const YELLOW = '#F0C738';

// commons
export const FONT_TITLE = {
  color: BLACK,
  fontFamily: isIos ? 'Arial' : 'Lato-Bold',
  fontWeight: '500',
  fontSize: SCREEN_WIDTH <= SM ? 12 : 14,
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

// animations
export const EASE_IN = LayoutAnimation.create(200, LayoutAnimation.Types.easeIn, LayoutAnimation.Properties.scaleXY);
