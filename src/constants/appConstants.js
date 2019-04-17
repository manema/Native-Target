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

// export const animationConfigs = new Map([
//   [AnimationType.spring, {
//     duration: 300,
//     update: {
//       type: LayoutAnimation.Types.spring,
//       springDamping: 0.5
//     },
//   }],
//   [AnimationType.linear, {
//     duration: 300,
//     create: {
//       initialVelocity: 1000,
//       property: LayoutAnimation.Properties.opacity,
//       type: LayoutAnimation.Types.linear
//     },
//     update: {
//       type: LayoutAnimation.Types.linear
//     }
//   }],
//   [AnimationType.ease, {
//     duration: 800,
//     update: {
//       type: LayoutAnimation.Types.easeInEaseOut
//     }
//   }],
//   [AnimationType.keyboard, {
//     duration: 10000, // Doesn't matter
//     update: {
//       type: LayoutAnimation.Types.keyboard
//     }
//   }],
//   [AnimationType.scaleLinear, {
//     duration: 600,
//     update: {
//       type: LayoutAnimation.Types.linear,
//       property: LayoutAnimation.Properties.scaleXY
//     }
//   }],
//   [AnimationType.scaleSpring, {
//     duration: 600,
//     update: {
//       type: LayoutAnimation.Types.spring,
//       property: LayoutAnimation.Properties.scaleXY,
//       springDamping: 0.6
//     }
//   }],
//   [AnimationType.fade, {
//     duration: 600,
//     update: {
//       type: LayoutAnimation.Types.linear,
//       property: LayoutAnimation.Properties.opacity
//     }
//   }]
// ]);
