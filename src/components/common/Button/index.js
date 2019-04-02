import React from 'react';
import { string, func, number, object, bool, oneOfType } from 'prop-types';
import { TouchableHighlight, View, Text, ActivityIndicator } from 'react-native';
import { isIos } from 'constants/appConstants';

import stylesProps from './styles';

const Button = (
  {
    onPress,
    loading = false,
    submitting = false,
    alignSelf,
    title,
    children,
    styleProps,
    height,
    width,
    color,
    textColor,
    fontSize,
    letterSpacing,
    marginBottom,
    marginTop
  }
) => {
  const styles = stylesProps(width, height, color, alignSelf, textColor, fontSize, letterSpacing, marginBottom, marginTop);
  return (
    <View
      style={[
        styles.container,
        styleProps && styleProps.container,
        loading && isIos && styles.buttonDisable
      ]}
    >
      {submitting || loading ?
        <ActivityIndicator /> :
        <TouchableHighlight
          onPress={onPress}
          style={[styles.buttonContainer, styleProps && styleProps.buttonContainer]}
        >
          {title ?
            <Text style={styles.title}>{title}</Text> :
            children
          }
        </TouchableHighlight>
      }
    </View>
  );
};

Button.propTypes = {
  onPress: func.isRequired,
  title: string,
  alignSelf: string,
  styleProps: object,
  height: number,
  width: number,
  children: object,
  color: string,
  textColor: string,
  fontSize: number,
  letterSpacing: string,
  marginBottom: number,
  marginTop: oneOfType([string, number]),
  submitting: bool,
  loading: bool
};

export default Button;
