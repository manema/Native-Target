import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/styleConstants';

const styles = StyleSheet.create({
  backgroundStyle: { flex: 1 },
  dataContainer: {
    alignSelf: 'center',
    flex: 1,
    width: '55%',
  },
  welcome: {
    color: BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: '25%',
    marginBottom: '20%',
    textAlign: 'center',
  },
});

export default styles;
