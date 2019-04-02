import { isIos } from './appConstants';

// colors
export const BLACK = '#000000';
export const WHITE = '#FFFFFF';
export const RED = '#FF0000';

// commons
export const FONT_TITLE = {
  color: BLACK,
  fontFamily: isIos ? 'Arial' : 'Lato-Bold',
  fontWeight: '500',
  fontSize: 14,
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
