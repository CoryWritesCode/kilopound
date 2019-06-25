// Global Style Constants

import { Dimensions } from 'react-native';

export const DIMENSIONS = {
  MAX_HEIGHT: Dimensions.get('screen').height,
  MAX_WIDTH: Dimensions.get('screen').width,
  FONT_SCALE: Dimensions.get('screen').fontScale,
  SCALE: Dimensions.get('screen').scale
};

export const COLORS = {
  BGCOLOR: '#2D2F32',
  SEC_BGCOLOR: '#27292C',
  FONT_COLOR: '#EEEEEE',
  PRIMARY: '#00C9FF',
  SECONDARY: '#6A6C6E',
  INACTIVE_BTN_COLOR: '#66666A',
};
