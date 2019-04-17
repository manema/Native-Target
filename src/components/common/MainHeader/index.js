import React from 'react';
import { string } from 'prop-types';
import { Text } from 'react-native';
import translate from 'utils/i18n';
import styles from './styles';

const MainHeader = ({ title }) =>
  <Text style={styles.header}>
    {translate(title)}
  </Text>;

MainHeader.propTypes = {
  title: string.isRequired
};

export default MainHeader;
