import { StyleSheet } from 'react-native';
import {
  WHITE,
  SCREEN_WIDTH,
  SM,
  TRANSPARENT_BLACK,
  YELLOW
} from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: TRANSPARENT_BLACK,
    flex: 1,
    flexDirection: 'row',
    height: 50,
  },
  avatarContainer: {
    height: 50,
    paddingTop: 5,
    width: '20%'
  },
  avatar: {
    alignSelf: 'center',
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  messageContainer: {
    justifyContent: 'space-evenly',
    width: '60%'
  },
  text: { fontSize: SCREEN_WIDTH <= SM ? 10 : 12 },
  name: { fontWeight: '700' },
  unreadMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: YELLOW,
    borderRadius: 10,
    height: 20,
    marginTop: 3,
    marginRight: 12,
    overflow: 'hidden',
    width: 20
  },
  unreadMessage: {
    alignSelf: 'center',
    color: WHITE,
    marginTop: 1,
    paddingLeft: 1
  },
  icon: { alignSelf: 'center' },
  iconContainer: { width: '20%' }
});

export default styles;
