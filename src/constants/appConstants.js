import { Platform } from 'react-native';

export const GENDER = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
];

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const topics = [
  { label: 'Christmas', value: 1 },
  { label: 'PokemonGo', value: 2 },
  { label: 'Football', value: 3 },
  { label: 'Travel', value: 4 },
  { label: 'Politics', value: 5 },
  { label: 'Art', value: 6 }
];
