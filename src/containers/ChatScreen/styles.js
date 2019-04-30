import { StyleSheet } from 'react-native';
import { TRANSPARENT_BLACK } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boxsContainer: {
    height: '90%'
  },
  navigationBarBorder: {
    borderBottomWidth: 1,
    borderColor: TRANSPARENT_BLACK
  }
});

export default styles;
