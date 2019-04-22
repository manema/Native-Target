import api from './apiService';

class Map {
  static createTarget(target) {
    return api.post('/targets', target);
  }
}

export default Map;
