import React from 'react';
import { number, object, func } from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const IconButton = ({ icon, iconStyle, containerStyle, onPress }) =>
  <TouchableOpacity
    style={[styles.container, containerStyle]}
    onPress={onPress}
  >
    <Image
      source={icon}
      style={[iconStyle, styles.icon]}
    />
  </TouchableOpacity>;

IconButton.propTypes = {
  icon: number.isRequired,
  iconStyle: object,
  containerStyle: object,
  onPress: func.isRequired
};

export default IconButton;
