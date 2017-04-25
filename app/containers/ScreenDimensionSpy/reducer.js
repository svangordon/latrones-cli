/*
 *
 * ScreenDimensionSpy reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_SCREEN_DIMENSIONS,
} from './constants';

const initialState = fromJS({
  height: null,
  width: null,
});

function screenDimensionSpyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCREEN_DIMENSIONS:
      return state
        .set('height', action.height)
        .set('width', action.width);
    default:
      return state;
  }
}

export default screenDimensionSpyReducer;
