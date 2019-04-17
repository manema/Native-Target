import React from 'react';
import { string } from 'prop-types';
import { Text, View } from 'react-native';
import profileIcon from 'assets/profile/profile.png';
import chatIcon from 'assets/chat/chat.png';
import { FONT_TITLE } from 'constants/styleConstants';
import IconButton from '../IconButton';
import styles from './styles';

const NavigationBar = ({ title }) =>
  <View style={styles.container}>
    <View style={styles.button}>
      <IconButton
        icon={profileIcon}
      />
    </View>
    <Text style={[styles.header, FONT_TITLE]}>{title}</Text>
    <View style={styles.button}>
      <IconButton
        icon={chatIcon}
      />
    </View>
  </View>;

NavigationBar.propTypes = {
  title: string.isRequired
};

export default NavigationBar;
