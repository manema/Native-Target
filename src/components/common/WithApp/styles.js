import { StyleSheet } from 'react-native';
import { TRANSPARENT } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: { flex: 1 },
  indicator: {
    backgroundColor: TRANSPARENT,
    opacity: 4,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
