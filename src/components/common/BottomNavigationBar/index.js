import React from 'react';
import { string } from 'prop-types';
import { Text, View } from 'react-native';
import profile from 'assets/profile/profile.png';
import chat from 'assets/chat/chat.png';
import { FONT_TITLE } from 'constants/styleConstants';
import IconButton from '../IconButton';
// import styles from './styles';

const BottomNavigationBar = ({ text }) =>
  <View style={styles.container}>
    <View style={styles.button}>
      <IconButton
        icon={profile}
      />
    </View>
    <Text style={[styles.header, FONT_TITLE]}>{text}</Text>
    <View style={styles.button}>
      <IconButton
        icon={chat}
      />
    </View>
  </View>;

BottomNavigationBar.propTypes = {
  text: string.isRequired
};

export default BottomNavigationBar;
