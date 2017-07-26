/*
 *
 * RegisterPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  // REGISTER_USER_REQUESTED,
  // REGISTER_USER_SUCCESS,
  // REGISTER_USER_ERROR,
} from './constants';

const initialState = fromJS({});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default registerPageReducer;
