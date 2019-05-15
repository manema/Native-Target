import { StyleSheet } from 'react-native';
import { WHITE, TRANSPARENT } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: TRANSPARENT,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    width: '70%',
    height: '45%',
    backgroundColor: WHITE
  }
});

export default styles;
