import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    zIndex: 999
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: BLACK,
    height: 40,
    zIndex: 999
  },
  label: {
    alignSelf: 'center'
  },
  input: {
    height: 40,
    width: '100%',
    zIndex: 999
  }
});

export default styles;
