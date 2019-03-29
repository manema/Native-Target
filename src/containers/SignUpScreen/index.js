import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import SignUpForm from 'components/user/SignUpForm';
import { signUp } from 'actions/userActions';
import translate from 'utils/i18n';
import WhiteButton from 'components/common/WhiteButton';
import Separator from 'components/common/Separator';
import MainHeader from 'components/common/MainHeader';
import background from 'assets/background.png';
import { isIos } from 'constants/appConstants';
import styles from './styles';

const SignUpScreen = ({ signUp, navigator }) =>
  <ScrollView>
    <ImageBackground resizeMode="cover" source={background} style={{ flex: 1 }}>
      <View style={styles.dataContainer}>
        <MainHeader text={translate('MAIN_SCREEN.title')} />
        <SignUpForm onSubmit={user => signUp(user.toJS())} />
        <Separator />
        <WhiteButton
          height={isIos ? 40 : 20}
          marginBottom={20}
          title={translate('SIGN_IN.title').toUpperCase()}
          onPress={() => navigator.pop()}
        />
      </View>
    </ImageBackground>
  </ScrollView>;

const { func, object } = PropTypes;

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
