/*
 *
 * LoginPage actions
 *
 */

import {

} from 'containers/App/constants';
// console.log('USER_LOGIN_REQUESTED', USER_LOGIN_REQUESTED)

import {
  USER_LOGIN_REQUESTED,
  REFRESH_TOKEN_REQUESTED,
} from './constants';

export function login(form) {
  return {
    type: USER_LOGIN_REQUESTED,
    form,
  };
}

export function refreshToken() {
  console.log('refreshToken action fired');
  return {
    type: REFRESH_TOKEN_REQUESTED,
  };
}

// export function logout() {
//   return {
//     type: constants.USER_LOGGED_OUT
//   }
// }
