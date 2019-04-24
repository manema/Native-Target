import { Navigation } from 'react-native-navigation';

import WithApp from 'components/common/WithApp';
import LoginScreen from 'containers/LoginScreen';
import SignUpScreen from 'containers/SignUpScreen';
import MainScreen from 'containers/MainScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('reactnativebase.LoginScreen', () => WithApp(LoginScreen), store, Provider);
  Navigation.registerComponent('reactnativebase.MainScreen', () => WithApp(MainScreen), store, Provider);
  Navigation.registerComponent('reactnativebase.SignUpScreen', () => WithApp(SignUpScreen), store, Provider);
};

export default registerScreens;
