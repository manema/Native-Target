import React, { Component } from 'react';
import { func, object, array, bool } from 'prop-types';
import { View, Text, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { getUser } from 'selectors/sessionSelector';
import { getCurrentPosition, getLastClickPosition, obtainTargets, getIsOpenMenu } from 'selectors/mapSelector';
import { logout } from 'actions/userActions';
import { getPosition, setLastClickPosition, createTarget, getTargets, toggleMenu } from 'actions/mapActions';
import NavigationBar from 'components/common/NavigationBar';
import IconButton from 'components/common/IconButton';
import createTargetIcon from 'assets/createTarget/createTarget.png';
import targetIcon from 'assets/target/target.png';
import CreateTargetForm from 'components/targets/CreateTargetForm';
import translate from 'utils/i18n';
import { FONT_TITLE, EASE_IN } from 'constants/styleConstants';
import styles from './styles';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class MainScreen extends Component {
  componentDidMount() {
    const { getPosition, getTargets } = this.props;
    getPosition();
    getTargets();
  }

  render() {
    LayoutAnimation.configureNext(EASE_IN);
    const {
      currentPosition: { latitude, longitude, altitude, heading },
      lastClickPosition,
      setLastClickPosition,
      createTarget,
      toggleMenu,
      targets,
      isOpenMenu
    } = this.props;
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
            onPress={event => setLastClickPosition(event.nativeEvent.coordinate)}
            style={styles.map}
            showsUserLocation
            initialCamera={camera}
            camera={camera}
          >
            {targets.map(({ target: { lat: latitude, lng: longitude, title, id } }) =>
              <Marker
                coordinate={{ latitude, longitude }}
                image={targetIcon}
                title={title}
                key={id}
              />)}
          </MapView>
        </View>
        { isOpenMenu ?
          <View style={styles.createFormContainer}>
            <CreateTargetForm
              onSubmit={(targetInfo) => {
                const normalizedTargetInfo = targetInfo.toJS();
                return createTarget({ ...normalizedTargetInfo, ...lastClickPosition });
              }}
            />
          </View> :
          <View style={styles.createButtonContainer}>
            <IconButton
              icon={createTargetIcon}
              containerStyle={styles.createButton}
              onPress={toggleMenu}
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
  setLastClickPosition: func.isRequired,
  createTarget: func.isRequired,
  currentPosition: object,
  lastClickPosition: object,
  targets: array,
  getTargets: func.isRequired,
  isOpenMenu: bool.isRequired,
  toggleMenu: func.isRequired
};

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

const mapState = state => ({
  username: getUser(state).username,
  currentPosition: getCurrentPosition(state),
  lastClickPosition: getLastClickPosition(state),
  targets: obtainTargets(state),
  isOpenMenu: getIsOpenMenu(state)
});

const mapDispatch = ({
  logout,
  getPosition,
  createTarget,
  getTargets,
  setLastClickPosition,
  toggleMenu
});

export default connect(mapState, mapDispatch)(MainScreen);
