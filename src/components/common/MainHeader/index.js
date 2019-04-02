import React from 'react';
import { string } from 'prop-types';
import { Text } from 'react-native';
import translate from 'utils/i18n';
import styles from './styles';

const MainHeader = ({ text }) =>
  <Text style={styles.header}>
    {translate(text)}
  </Text>;

MainHeader.propTypes = {
  text: string.isRequired
};

export default MainHeader;
