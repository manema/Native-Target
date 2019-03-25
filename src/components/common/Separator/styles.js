import { StyleSheet } from 'react-native';

export const style = (alignSelf, borderBottomColor, borderBottomWidth, marginVertical,
  width) =>
  StyleSheet.create({
    separator: {
      alignSelf,
      borderBottomColor,
      borderBottomWidth,
      marginVertical,
      width
    }
  });

export default style;
