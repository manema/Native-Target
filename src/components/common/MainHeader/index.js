import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import translate from 'utils/i18n';
import styles from './styles';

const MainHeader = ({ text }) =>
  <Text style={styles.header}>
    {translate(text)}
  </Text>;

const { string } = PropTypes;

MainHeader.propTypes = {
  text: string.isRequired
};

export default MainHeader;
