import React, { Component } from 'react';
import { bool, number, string, func } from 'prop-types';
import Toast from 'react-native-easy-toast';

const defaultDuration = 2000;

class CustomToast extends Component {
  constructor(props) {
    super(props);
    this.toastRef = React.createRef();
  }

  componentDidMount() {
    const {
      duration,
      display,
      message,
      callbackOnFinish
    } = this.props;
    display && this.toastRef.current.show(message, duration, callbackOnFinish);
  }

  render() { return (<Toast ref={this.toastRef} />); }
}

CustomToast.propTypes = {
  duration: number,
  display: bool,
  message: string,
  callbackOnFinish: func
};

CustomToast.defaultProps = {
  duration: defaultDuration
};

export default CustomToast;
