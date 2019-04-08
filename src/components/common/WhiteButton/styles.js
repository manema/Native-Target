import { WHITE, BLACK } from 'constants/styleConstants';
import isIos from 'constants/appConstants';

export const style = ({
  addedContainerStyle: {
    marginBottom: 20,
    width: '100%',
    height: isIos ? 40 : 20,
  },
  addedTouchableStyle: {
    backgroundColor: WHITE,
    width: '100%',
    height: isIos ? 40 : 20,
  },
  addedTextStyle: {
    color: BLACK,
  }
});

export default style;
