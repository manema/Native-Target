import React, { Component } from 'react';
import { bool, number, string, func } from 'prop-types';
import Toast from 'react-native-easy-toast';

const defaultDuration = 2000;

class CustomToast extends Component {
  constructor(props) {
    super(props);
    this.toasteRef = React.createRef();
  }

  componentDidMount() {
    const {
      duration,
      display,
      message,
      callbackOnFinish
    } = this.props;
    display && this.toasteRef.current.show(message, duration || defaultDuration, callbackOnFinish);
  }

  render() { return (<Toast ref={this.toasteRef} />); }
}

CustomToast.propTypes = {
  duration: number,
  display: bool,
  message: string,
  callbackOnFinish: func
};

export default CustomToast;
