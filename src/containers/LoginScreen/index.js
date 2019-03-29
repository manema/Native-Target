import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from 'components/user/LoginForm';
import { login } from 'actions/userActions';
import translate from 'utils/i18n';
import Separator from 'components/common/Separator';
import { BLACK, WHITE } from 'constants/styleConstants';
import { isIos } from 'constants/appConstants';
import MainHeader from 'components/common/MainHeader';
import background from 'assets/background.png';
import Button from 'components/common/Button';
import WhiteButton from 'components//common/WhiteButton';
import styles from './styles';

const LoginScreen = ({ login, navigator }) => (
  <ScrollView>
    <ImageBackground resizeMode="cover" source={background} style={{ flex: 1 }}>
      <View style={styles.container}>
        <MainHeader text={translate('MAIN_SCREEN.title')} />
        <LoginForm onSubmit={user => login(user.toJS())} />
        <WhiteButton
          title={translate('SIGN_UP.forgottenPassword')}
          onPress={() => {}}
          marginTop={3}
          marginBottom={3}
          paddingHorizontal={0}
          fontSize={isIos ? 10 : 14}
          fontWeight={isIos ? '700' : '600'}
        />
        <WhiteButton
          title={translate('SIGN_UP.facebook')}
          onPress={() => {}}
          marginTop={3}
          marginBottom={15}
          fontSize={isIos ? 10 : 14}
          fontWeight={isIos ? '900' : '600'}
          paddingHorizontal={0}
        />
        <Separator />
        <Button
          title={translate('SIGN_UP.title').toUpperCase()}
          onPress={() => navigator.push({
            screen: 'reactnativebase.SignUpScreen'
          })}
          color={WHITE}
          textColor={BLACK}
          height={isIos ? 40 : 20}
          marginBottom={20}
          marginTop={1}
        />
      </View>
    </ImageBackground>
  </ScrollView>
);

const { func, object } = PropTypes;

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
