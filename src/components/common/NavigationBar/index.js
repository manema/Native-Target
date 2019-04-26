import React from 'react';
import { string, node, func } from 'prop-types';
import { Text, View } from 'react-native';
import { FONT_TITLE } from 'constants/styleConstants';
import IconButton from '../IconButton';
import styles from './styles';

const NavigationBar =
  ({
    title,
    leftIcon,
    rightIcon,
    onPressLeftButton,
    onPressRightButton
  }) =>
    <View style={styles.container}>
      <View style={styles.button}>
        <IconButton
          icon={leftIcon}
          onPress={onPressLeftButton}
        />
      </View>
      <Text style={[styles.header, FONT_TITLE]}>{title}</Text>
      <View style={styles.button}>
        <IconButton
          icon={rightIcon}
          onPress={onPressRightButton}
        />
      </View>
    </View>;

NavigationBar.propTypes = {
  title: string.isRequired,
  leftIcon: node,
  rightIcon: node,
  onPressLeftButton: func.isRequired,
  onPressRightButton: func.isRequired
};

export default NavigationBar;
