import { Navigation } from 'react-native-navigation';

import withAsyncComponents from 'components/common/withAsyncComponents';
import LoginScreen from 'containers/LoginScreen';
import SignUpScreen from 'containers/SignUpScreen';
import MainScreen from 'containers/MainScreen';
import ChatScreen from 'containers/ChatScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('reactnativebase.LoginScreen', () => withAsyncComponents(LoginScreen), store, Provider);
  Navigation.registerComponent('reactnativebase.MainScreen', () => withAsyncComponents(MainScreen), store, Provider);
  Navigation.registerComponent('reactnativebase.SignUpScreen', () => withAsyncComponents(SignUpScreen), store, Provider);
  Navigation.registerComponent('reactnativebase.ChatScreen', () => withAsyncComponents(ChatScreen), store, Provider);
};

export default registerScreens;
