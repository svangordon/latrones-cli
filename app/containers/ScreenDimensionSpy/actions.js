/*
 *
 * ScreenDimensionSpy actions
 *
 */

import {
  SET_SCREEN_DIMENSIONS,
} from './constants';

export function setScreenDimensions({height, width}) {
  console.log("setting screen dom to ", height, width);
  return {
    type: SET_SCREEN_DIMENSIONS,
    height,
    width
  };
}
