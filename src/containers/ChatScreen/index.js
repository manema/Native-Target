import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';

// import Separator from 'components/common/Separator';
import profileIcon from 'assets/profile/profile.png';
import chatIcon from 'assets/chat/chat.png';
import background from 'assets/background.png';
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
    const { fullName, conversations, navigator } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <NavigationBar
            title={fullName}
            leftIcon={profileIcon}
            rightIcon={chatIcon}
          />
          <View style={styles.BoxsContainer}>
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
        </View>
      </ScrollView>
    );
  }
}

ChatScreen.propTypes = {
  navigator: object.isRequired,
  getConversations: func.isRequired
};

ChatScreen.navigationOptions = {
  title: 'Chat'
};

const mapState = state => ({
  conversations: obtainConversations(state),
});

const mapDispatch = ({ getConversations });

export default connect(mapState, mapDispatch)(ChatScreen);
