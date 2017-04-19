/*
 *
 * RegisterPage actions
 *
 */

import {
  DEFAULT_ACTION,
  REGISTER_USER_REQUESTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
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

export function userLoginSuccess(user) {
  return {
    type: USER_LOGIN_SUCCESS,
    user
  }
}
export function userLoginError(error) {
  return {
    type:  USER_LOGIN_ERROR,
    error,
  }
}
