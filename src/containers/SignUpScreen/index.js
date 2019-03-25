import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ImageBackground, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { getSessionState } from 'selectors/sessionSelector';

import SignUpForm from 'components/user/SignUpForm';
import { signUp } from 'actions/userActions';
import translate from 'utils/i18n';
import Button from '../../components/common/Button';
import Separator from '../../components/common/Separator';
import background from '../../images/background.png';
import { WHITE, BLACK } from '../../constants/styleConstants';
import styles from './styles';

const SignUpScreen = ({ signUp, navigator, authenticated }) => {
  if (authenticated) navigator.push({ screen: 'reactnativebase.MainScreen' });
  return (
    <ScrollView>
      <ImageBackground resizeMode="cover" source={background} style={{ flex: 1 }}>
        <View style={styles.dataContainer}>
          <Text style={styles.welcome}>
            {translate('TARGET MVD')}
          </Text>
          <SignUpForm onSubmit={user => signUp(user.toJS())} />
          <Separator />
          <Button
            color={WHITE}
            height={Platform.OS === 'ios' ? 40 : 20}
            marginBottom={20}
            textColor={BLACK}
            title={translate('SIGN_IN.title').toUpperCase()}
            onPress={() => navigator.pop()}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const { func, object, bool } = PropTypes;

SignUpScreen.propTypes = {
  navigator: object.isRequired,
  signUp: func.isRequired,
  authenticated: bool
};

SignUpScreen.navigationOptions = {
  title: 'Sign Up'
};

const mapState = state => ({
  authenticated: getSessionState(state),
});

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(mapState, mapDispatch)(SignUpScreen);
