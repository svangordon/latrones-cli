/*
 *
 * LoginPage actions
 *
 */

 import * as constants from '../../constants.js'

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function login(data) {
  console.log('login fired');
  return {
    type: constants.USER_LOGGED_IN,
    payload: data
  }
}

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  }
}
