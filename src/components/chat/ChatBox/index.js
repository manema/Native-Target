import React from 'react';
import { string, node, number } from 'prop-types';
import { View, Text, Image } from 'react-native';

const ChatBox = ({ avatar, fullName, lastMessage, topicIcon, unreadMessages}) =>
  <View>
    <Image source={avatar} />
    <View>
      <Text>{fullName}</Text>
      <Text>{lastMessage}</Text>
    </View>
    <Image source={topicIcon} />
  </View>;

ChatBox.propTypes = {
  avatar: node,
  fullName: string.isRequired,
  lastMessage: string,
  topicIcon: node.isRequired,
  unreadMessages: number
};

export default ChatBox;
