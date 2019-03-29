import { WHITE, BLACK, FONT_TITLE } from 'constants/styleConstants';

const styles = (
  width = 130,
  height = 50,
  color = BLACK,
  alignSelf = 'center',
  textColor = WHITE,
  fontSize = FONT_TITLE.fontSize,
  letterSpacing = 1,
  marginBottom = 'auto',
  marginTop = 'auto',
  paddingHorizontal = 'auto',
  fontWeight = '600'
) => {
  return ({
    container: {
      marginBottom,
      marginTop,
      width,
      height,
      alignSelf
    },
    buttonContainer: {
      paddingHorizontal,
      width,
      backgroundColor: color,
      padding: 10,
      height,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999
    },
    buttonDisable: {
      opacity: 0.7
    },
    title: {
      fontSize,
      color: textColor,
      fontWeight,
      letterSpacing
    }
  });
};

export default styles;
