/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  REFRESH_TOKEN_REQUESTED,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from 'containers/LoginPage/constants';

import {
    REGISTER_USER_REQUESTED,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from 'containers/RegisterPage/constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  user: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_REQUESTED:
      return state
        .set('loading', true)
        .set('error', false)
        .set('user', null); // Ought to be unnecessary
    case REGISTER_USER_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.user);
    case REGISTER_USER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case REFRESH_TOKEN_REQUESTED:
      return state
        .set('loading', true)
        .set('error', false);
    case REFRESH_TOKEN_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.user);
    case REFRESH_TOKEN_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case USER_LOGIN_REQUESTED:
      return state
        .set('loading', true)
        .set('error', false);
        // .set('user', null) // not sure if we want to do this?
    case USER_LOGIN_SUCCESS:
      console.log('user loging success fired');
      return state
        .set('user', action.user)
        .set('loading', false);
    case USER_LOGIN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
