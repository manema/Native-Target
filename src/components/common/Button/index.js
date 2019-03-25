import React, { Component } from 'react';
import { string, func, number, object, bool, oneOfType } from 'prop-types';
import { TouchableHighlight, View, Text, Platform } from 'react-native';

import stylesProps from './styles';
import { WHITE, BLACK, FONT_TITLE } from '../../../constants/styleConstants';

class Button extends Component {
  constructor() {
    super();

    this.state = {
      isDisabled: false,
      timeoutId: undefined
    };

    this.onPress = this.onPress.bind(this);
  }

  componentWillUnmount() {
    const { timeoutId } = this.state;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  onPress() {
    const { isDisabled } = this.state;
    const { onPress, disable } = this.props;
    if (!isDisabled && !disable) {
      this.setState({ isDisabled: true });
      const timeoutId = setTimeout(() => {
        this.setState({ isDisabled: false });
      }, 1000);
      this.setState({ timeoutId }, onPress);
    }
  }

  render() {
    const {
      alignSelf = 'center',
      title,
      children,
      styleProps,
      height = 50,
      width = 130,
      color = BLACK,
      textColor = WHITE,
      fontSize = FONT_TITLE.fontSize,
      letterSpacing = 1,
      marginBottom = 'auto',
      marginTop = 'auto',
      disable = false
    } = this.props;

    const styles = stylesProps(width, height, color, alignSelf, textColor, fontSize, letterSpacing, marginBottom, marginTop);

    return (
      <View
        style={[
          styles.container,
          styleProps && styleProps.container,
          disable && Platform.OS === 'ios' && styles.buttonDisable
        ]}
      >
        <TouchableHighlight
          onPress={this.onPress}
          style={[styles.buttonContainer, styleProps && styleProps.buttonContainer]}
        >
          { title ?
            <Text style={styles.title}>{title}</Text> :
            children
          }
        </TouchableHighlight>
      </View>
    );
  }
}

Button.propTypes = {
  onPress: func.isRequired,
  title: string,
  alignSelf: string,
  styleProps: object,
  height: number,
  width: number,
  children: object,
  color: string,
  textColor: string,
  fontSize: number,
  letterSpacing: string,
  disable: bool,
  marginBottom: number,
  marginTop: oneOfType([string, number])
};

export default Button;
