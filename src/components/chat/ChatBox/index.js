import React from 'react';
import { string, node, number } from 'prop-types';
import { View, Text, Image } from 'react-native';
import profilePlaceholderIcon from 'assets/profile/profilePlaceholder.png';
import styles from './styles';

const ChatBox = ({ avatar, fullName, lastMessage, topicIcon, unreadMessages }) =>
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Image
        source={avatar ? { uri: avatar } : profilePlaceholderIcon}
        style={styles.avatar}
      />
    </View>
    <View style={styles.messageContainer}>
      <Text style={[styles.text, styles.name]}>{fullName}</Text>
      <Text style={styles.text}>{lastMessage}</Text>
    </View>
    <View style={styles.iconContainer}>
      <View style={styles.unreadMessageContainer}>
        <Text style={styles.unreadMessage}>{unreadMessages}</Text>
      </View>
      <Image
        source={topicIcon}
        style={styles.icon}
      />
    </View>
  </View>;

ChatBox.propTypes = {
  avatar: node,
  fullName: string.isRequired,
  lastMessage: string,
  topicIcon: node.isRequired,
  unreadMessages: number
};

export default ChatBox;
