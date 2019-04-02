import React from 'react';
import { string, number } from 'prop-types';
import { View } from 'react-native';
import propStyle from './styles';

const Separator = ({
  alignSelf = 'center',
  borderBottomColor = 'black',
  borderBottomWidth = 1,
  marginVertical = 20,
  width = 150,
}) => {
  const style = propStyle(alignSelf, borderBottomColor, borderBottomWidth, marginVertical, width);
  return (
    <View
      style={style.separator}
    />);
};

Separator.propTypes = {
  alignSelf: string,
  width: number,
  borderBottomColor: string,
  borderBottomWidth: number,
  marginVertical: number
};

export default Separator;
