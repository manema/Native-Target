import { StyleSheet } from 'react-native';
import { WHITE, BLACK } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  text: {
    textAlign: 'center'
  },
  inputContainer: {
    borderColor: BLACK,
    height: 40
  },
  input: {
    borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    backgroundColor: WHITE,
    paddingLeft: 15,
    paddingRight: 15,
  }
});

export default styles;
