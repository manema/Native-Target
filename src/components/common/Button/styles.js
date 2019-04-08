import { WHITE, BLACK, FONT_TITLE } from 'constants/styleConstants';

const styles = ({
  container: {
    marginVertical: 10,
    width: 130,
    height: 50,
    alignSelf: 'center'
  },
  buttonContainer: {
    paddingHorizontal: 'auto',
    width: 130,
    backgroundColor: BLACK,
    padding: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999
  },
  buttonDisable: {
    opacity: 0.7
  },
  title: {
    fontSize: FONT_TITLE.fontSize,
    color: WHITE,
    fontWeight: '600',
    letterSpacing: 1
  }
});

export default styles;
