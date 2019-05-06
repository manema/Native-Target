import api from './apiService';

class Chat {
  static getConversations() {
    return api.get('/match_conversations');
  }
}

export default Chat;
