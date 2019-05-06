import React, { Component } from 'react';
import { func, object, array } from 'prop-types';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import profileIcon from 'assets/profile/profile.png';
import mapIcon from 'assets/map/map.png';
import NavigationBar from 'components/common/NavigationBar';
import ChatBox from 'components/chat/ChatBox';
import { obtainConversations } from 'selectors/chatSelector';
import { getConversations } from 'actions/chatActions';
import styles from './styles';

class ChatScreen extends Component {
  componentDidMount() {
    const { getConversations } = this.props;
    getConversations();
  }

  render() {
    const { conversations, navigator } = this.props;
    return (
      <View style={styles.container}>
        <NavigationBar
          title="Chat"
          leftIcon={profileIcon}
          rightIcon={mapIcon}
          containerStyle={styles.navigationBarBorder}
          onPressRightButton={() => navigator.push({
            screen: 'reactnativebase.MainScreen'
          })}
        />
        <ScrollView>
          <View style={styles.boxsContainer}>
            {conversations.map(({
              user: { id, fullName, avatar: { smallThumbUrl } },
              topicIcon,
              lastMessage,
              unreadMessages
            }) =>
              <ChatBox
                key={id}
                avatar={smallThumbUrl}
                fullName={fullName}
                topicIcon={topicIcon}
                lastMessage={lastMessage}
                unreadMessages={unreadMessages}
              />)
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

ChatScreen.propTypes = {
  navigator: object.isRequired,
  getConversations: func.isRequired,
  conversations: array.isRequired
};

ChatScreen.navigationOptions = {
  title: 'Chat'
};

const mapState = state => ({
  conversations: obtainConversations(state),
});

const mapDispatch = ({ getConversations });

export default connect(mapState, mapDispatch)(ChatScreen);
