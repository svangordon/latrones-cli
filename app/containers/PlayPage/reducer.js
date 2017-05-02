/*
 *
 * PlayPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_ACTIVE_GAME,
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  activeGame: null,
});

function playPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_GAME:
      return state
        .set('activeGame', action.activeGame)
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default playPageReducer;
