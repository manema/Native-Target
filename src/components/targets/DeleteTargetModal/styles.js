import { StyleSheet } from 'react-native';
import { BLACK, WHITE, YELLOW } from 'constants/styleConstants';

const styles = StyleSheet.create({
  contentContainer: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 10,
    paddingVertical: 10
  },
  iconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: YELLOW,
    borderRadius: 25,
    marginVertical: 10,
    justifyContent: 'center',
    width: 50,
    height: 50
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  targetName: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center'
  },
  targetIcon: {
    zIndex: 999
  },
  btnContainer: {
    height: 35,
    width: '70%'
  },
  btn: {
    alignSelf: 'center',
    flex: 1,
  },
  cancelBtn: { backgroundColor: WHITE },
  cancelBtnText: {
    color: BLACK,
    fontWeight: 'bold'
  },
  deleteBtnContainer: { backgroundColor: BLACK },
  cancelBtnContainer: {
    backgroundColor: WHITE,
    marginVertical: 2
  }
});

export default styles;
