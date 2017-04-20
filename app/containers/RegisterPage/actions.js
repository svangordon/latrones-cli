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

export function register(form) {
  return {
    type: REGISTER_USER_REQUESTED,
    form
  }
}

export function registerUserSuccess(user) {
  return {
    type: REGISTER_USER_SUCCESS,
    user
  }
}
export function registerUserError(error) {
  return {
    type:  REGISTER_USER_ERROR,
    error,
  }
}
