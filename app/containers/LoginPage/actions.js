/*
 *
 * LoginPage actions
 *
 */

import {
  USER_LOGIN_REQUESTED
} from 'containers/App/constants';
// console.log('USER_LOGIN_REQUESTED', USER_LOGIN_REQUESTED)

import {
  DEFAULT_ACTION,
  REFRESH_TOKEN_REQUESTED
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function login(form) {
  return {
    type: USER_LOGIN_REQUESTED,
    form
  }
}

export function refreshToken() {
  console.log('refreshToken action fired');
  return {
    type: REFRESH_TOKEN_REQUESTED
  }
}

// export function logout() {
//   return {
//     type: constants.USER_LOGGED_OUT
//   }
// }
