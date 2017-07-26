/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  // USER_LOGIN_REQUESTED,
  // USER_LOGIN_SUCCESS,
  // USER_LOGIN_FAILURE,
} from './constants';

const initialState = fromJS({});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default loginPageReducer;
