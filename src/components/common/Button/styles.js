import { StyleSheet } from 'react-native';

const styles = (width, height, color, alignSelf, textColor, fontSize, letterSpacing, marginBottom, marginTop) =>
  StyleSheet.create({
    container: {
      marginBottom,
      marginTop,
      width,
      height,
      alignSelf
    },
    buttonContainer: {
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
      fontWeight: '600',
      letterSpacing
    }
  });

export default styles;
