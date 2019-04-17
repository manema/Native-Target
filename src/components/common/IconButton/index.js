import React from 'react';
import { number, object } from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const IconButton = ({ icon, iconStyle, containerStyle }) =>
  <TouchableOpacity
    style={[styles.container, containerStyle]}
  >
    <Image
      source={icon}
      style={[iconStyle, styles.icon]}
    />
  </TouchableOpacity>;

IconButton.propTypes = {
  icon: number.isRequired,
  iconStyle: object,
  containerStyle: object
};

export default IconButton;
