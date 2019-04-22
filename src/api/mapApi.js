import api from './apiService';

class Map {
  static createTarget(target) {
    return api.post('/targets', target);
  }

  static getTargets() {
    return api.get('/targets');
  }
}

export default Map;
