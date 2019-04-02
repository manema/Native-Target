import React from 'react';
import { string, func, object, bool } from 'prop-types';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { isIos } from 'constants/appConstants';

import styles from './styles';

const Button = (
  {
    onPress,
    loading = false,
    submitting = false,
    title,
    children,
    addedContainerStyle,
    addedTouchableStyle,
    addedTextStyle
  }
) =>
  <View
    style={[
      styles.container,
      addedContainerStyle,
      loading && isIos && styles.buttonDisable
    ]}
  >
    { submitting || loading ?
      <ActivityIndicator /> :
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonContainer, addedTouchableStyle]}
      >
        { title ?
          <Text style={[styles.title, addedTextStyle]}>{title}</Text> :
          children
        }
      </TouchableOpacity>
    }
  </View>;

Button.propTypes = {
  onPress: func.isRequired,
  title: string,
  addedContainerStyle: object,
  addedTouchableStyle: object,
  addedTextStyle: object,
  children: object,
  submitting: bool,
  loading: bool,
};

export default Button;
