import React, { Component } from 'react';
import { string, func, object } from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { getUser } from 'selectors/sessionSelector';
import { getCurrentPosition } from 'selectors/mapSelector';
import { logout } from 'actions/userActions';
import { getPosition } from 'actions/mapActions';
import NavigationBar from 'components/common/NavigationBar';
import IconButton from 'components//common/IconButton';
import createTarget from 'assets/createTarget/createTarget.png';
import translate from 'utils/i18n';
import { FONT_TITLE } from 'constants/styleConstants';
import styles from './styles';

class MainScreen extends Component {
  componentDidMount() {
    const { getPosition } = this.props;
    getPosition();
  }

  render() {
    const { currentPosition: { latitude, longitude, altitude, heading } } = this.props;
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
          text={translate('MAIN_SCREEN.pointTarget')}
        />
        <View style={[styles.map, styles.mapContainer]}>
          <MapView
            style={styles.map}
            showsUserLocation
            initialCamera={camera}
            camera={camera}
          />
        </View>
        <View style={styles.createButtonContainer}>
          <IconButton
            icon={createTarget}
            addContainerStyle={styles.createButton}
          />
          <Text style={FONT_TITLE}>{translate('MAIN_SCREEN.newTarget')}</Text>
        </View>
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

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout()),
  getPosition: () => dispatch(getPosition())
});

export default connect(mapState, mapDispatch)(MainScreen);
