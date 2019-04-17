import React from 'react';
import { func, object } from 'prop-types';
import { View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import SignUpForm from 'components/user/SignUpForm';
import { signUp } from 'actions/userActions';
import translate from 'utils/i18n';
import WhiteButton from 'components/common/WhiteButton';
import Separator from 'components/common/Separator';
import MainHeader from 'components/common/MainHeader';
import background from 'assets/background.png';
import styles from './styles';

const SignUpScreen = ({ signUp, navigator }) =>
  <ScrollView>
    <ImageBackground resizeMode="cover" source={background} style={styles.background}>
      <View style={styles.dataContainer}>
        <MainHeader title={translate('MAIN_SCREEN.title')} />
        <SignUpForm onSubmit={user => signUp(user.toJS())} />
        <Separator />
        <WhiteButton
          title={translate('SIGN_IN.title').toUpperCase()}
          onPress={() => navigator.pop()}
        />
      </View>
    </ImageBackground>
  </ScrollView>;

SignUpScreen.propTypes = {
  navigator: object.isRequired,
  signUp: func.isRequired,
};

SignUpScreen.navigationOptions = {
  title: 'Sign Up'
};

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(null, mapDispatch)(SignUpScreen);
