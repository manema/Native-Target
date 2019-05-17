import React, { Component } from 'react';
import { func, object, array } from 'prop-types';
import { View, Text, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { getUser } from 'selectors/sessionSelector';
import { getCurrentPosition, getLastClickPosition, obtainTargets } from 'selectors/mapSelector';
import { logout } from 'actions/userActions';
import { getPosition, setLastClickPosition, createTarget, getTargets, deleteTarget } from 'actions/mapActions';
import NavigationBar from 'components/common/NavigationBar';
import IconButton from 'components/common/IconButton';
import DeleteTargetModal from 'components/targets/DeleteTargetModal';
import createTargetIcon from 'assets/createTarget/createTarget.png';
import targetIcon from 'assets/target/target.png';
import profileIcon from 'assets/profile/profile.png';
import chatIcon from 'assets/chat/chat.png';
import CreateTargetForm from 'components/targets/CreateTargetForm';
import translate from 'utils/i18n';
import { FONT_TITLE, EASE_IN } from 'constants/styleConstants';
import styles from './styles';

console.disableYellowBox = true;

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class MainScreen extends Component {
  state = {
    isOpenMenu: false,
    isSelectedTarget: false,
    isOpenDeleteModal: false,
    currentTargetId: 0,
    currentTargetTitle: 'none'
  }

  componentDidMount() {
    const { getPosition, getTargets } = this.props;
    getPosition();
    getTargets();
  }

  onSubmit = async (targetInfo) => {
    const { createTarget, lastClickPosition } = this.props;
    const normalizedTargetInfo = targetInfo.toJS();
    await createTarget({ ...normalizedTargetInfo, ...lastClickPosition });
    this.toggleMenu();
  }

  onPressTarget = (id) => {
    const { isOpenMenu } = this.state;
    const { targets } = this.props;
    const currentTargetTitle = targets.filter(({ target: { id: currentTarget } }) => currentTarget === id);
    this.setState({
      isSelectedTarget: true,
      currentTargetTitle: currentTargetTitle[0].target.title,
      currentTargetId: id
    });
    !isOpenMenu && this.toggleMenu();
  }

  toggleDeleteTargetMenu = () => this.setState(prevState => ({ isOpenDeleteModal: !prevState.isOpenDeleteModal }));

  onPressCreateTarget = () => this.setState({ isSelectedTarget: false, isOpenMenu: true });

  onCloseCreateTargetMenu = () => this.setState({ isOpenMenu: false, isSelectedTarget: false });

  toggleMenu = () => this.setState(prevState => ({ isOpenMenu: !prevState.isOpenMenu }));

  onPressDeleteTarget = async () => {
    const { deleteTarget } = this.props;
    const { currentTargetId } = this.state;
    if (deleteTarget(currentTargetId)) {
      this.toggleDeleteTargetMenu();
      this.toggleMenu();
    }
  }

  render() {
    LayoutAnimation.configureNext(EASE_IN);
    const {
      currentPosition: { latitude, longitude, altitude, heading },
      targets,
      navigator,
      setLastClickPosition,
    } = this.props;
    const {
      isOpenMenu,
      isSelectedTarget,
      isOpenDeleteModal,
      currentTargetTitle
    } = this.state;
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
        <DeleteTargetModal
          visible={isOpenDeleteModal}
          targetName={currentTargetTitle}
          onPressDelete={this.onPressDeleteTarget}
          onPressCancel={this.toggleDeleteTargetMenu}
        />
        <NavigationBar
          title={translate('MAIN_SCREEN.pointTarget')}
          leftIcon={profileIcon}
          rightIcon={chatIcon}
          onPressRightButton={() => navigator.push({
            screen: 'reactnativebase.ChatScreen'
          })}
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
                onPress={() => this.onPressTarget(id)}
                key={id}
                identifier={id.toString()}
              />)
            }
          </MapView>
        </View>
        {isOpenMenu ?
          <View style={styles.createFormContainer}>
            <CreateTargetForm
              onSubmit={this.onSubmit}
              isSelectedTarget={isSelectedTarget}
              onClose={this.onCloseCreateTargetMenu}
              onPressDelete={this.toggleDeleteTargetMenu}
            />
          </View> :
          <View style={styles.createButtonContainer}>
            <IconButton
              icon={createTargetIcon}
              containerStyle={styles.createButton}
              onPress={this.onPressCreateTarget}
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
  deleteTarget: func.isRequired,
  currentPosition: object,
  lastClickPosition: object,
  targets: array,
  getTargets: func.isRequired,
  navigator: object.isRequired
};

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

const mapState = state => ({
  username: getUser(state).username,
  currentPosition: getCurrentPosition(state),
  lastClickPosition: getLastClickPosition(state),
  targets: obtainTargets(state)
});

const mapDispatch = ({
  logout,
  getPosition,
  createTarget,
  getTargets,
  setLastClickPosition,
  deleteTarget
});

export default connect(mapState, mapDispatch)(MainScreen);
