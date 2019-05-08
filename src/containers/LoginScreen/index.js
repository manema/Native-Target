import React from 'react';
import { func, object } from 'prop-types';
import { View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from 'components/user/LoginForm';
import { login } from 'actions/userActions';
import translate from 'utils/i18n';
import Separator from 'components/common/Separator';
import MainHeader from 'components/common/MainHeader';
import background from 'assets/background.png';
import WhiteButton from 'components/common/WhiteButton';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import styles from './styles';

const LoginScreen = ({ login, navigator }) => (
  <ScrollView>
    <ImageBackground resizeMode="cover" source={background} style={styles.background}>
      <View style={styles.container}>
        <MainHeader title={translate('MAIN_SCREEN.title')} />
        <LoginForm onSubmit={user => login(user.toJS())} />
        <WhiteButton
          title={translate('SIGN_UP.forgottenPassword')}
          onPress={() => {}}
        />
        <WhiteButton
          title={translate('SIGN_UP.facebook')}
          onPress={() => {}}
        />
        <Separator />
        <WhiteButton
          title={translate('SIGN_UP.title').toUpperCase()}
          onPress={() => navigator.push({
            screen: 'reactnativebase.SignUpScreen'
          })}
        />
        <View>
          <LoginButton
            readPermissions={["public_profile"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                  console.log('login is cancelled.');
                } else {
                  console.log('aaa');
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data.accessToken.toString());
                    }
                  );
                }
              }
            }
            onLogoutFinished={() => console.log('logout.')} 
          />
        </View>
      </View>
    </ImageBackground>
  </ScrollView>
);

LoginScreen.propTypes = {
  login: func.isRequired,
  navigator: object.isRequired
};

LoginScreen.navigationOptions = {
  title: 'Log In'
};

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatch)(LoginScreen);
