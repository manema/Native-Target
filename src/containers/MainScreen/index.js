import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { View, Text, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { getUser } from 'selectors/sessionSelector';
import { getCurrentPosition } from 'selectors/mapSelector';
import { logout } from 'actions/userActions';
import { getPosition } from 'actions/mapActions';
import NavigationBar from 'components/common/NavigationBar';
import IconButton from 'components/common/IconButton';
import createTargetIcon from 'assets/createTarget/createTarget.png';
import CreateTargetForm from 'components/targets/CreateTargetForm';
import translate from 'utils/i18n';
import { FONT_TITLE, EASE_IN } from 'constants/styleConstants';
import styles from './styles';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class MainScreen extends Component {
  state = {
    showMenu: false
  }

  componentDidMount() {
    const { getPosition } = this.props;
    getPosition();
  }

  onShowMenu = () => {
    LayoutAnimation.configureNext(EASE_IN);
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  render() {
    const { currentPosition: { latitude, longitude, altitude, heading } } = this.props;
    const { showMenu } = this.state;
    const camera = {
      center: {
        latitude,
        longitude
      },
      pitch: 1,
      heading,
      zoom: 17,
      altitude
    };
    return (
      <View style={styles.container}>
        <NavigationBar
          title={translate('MAIN_SCREEN.pointTarget')}
        />
        <View style={[styles.map, styles.mapContainer]}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation
            initialCamera={camera}
            camera={camera}
          />
        </View>
        { showMenu ?
          <View style={styles.createFormContainer}>
            <CreateTargetForm />
          </View> :
          <View style={styles.createButtonContainer}>
            <IconButton
              icon={createTargetIcon}
              containerStyle={styles.createButton}
              onPress={this.onShowMenu}
            />
            <Text style={FONT_TITLE}>{translate('MAIN_SCREEN.newTarget')}</Text>
          </View>
        }
      </View>
    );
  }
}

MainScreen.propTypes = {
  getPosition: func.isRequired,
  currentPosition: object
};

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

const mapState = state => ({
  username: getUser(state).username,
  currentPosition: getCurrentPosition(state).currentPosition
});

const mapDispatch = { logout, getPosition };

export default connect(mapState, mapDispatch)(MainScreen);
