import { Platform } from 'react-native';

export const GENDER = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
];

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
