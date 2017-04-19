import { take, call, put, select } from 'redux-saga/effects';
import * as Api from 'utils/Api';

import {
  registerUserSuccess,
  registerUserError,
} from './actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

// Individual exports for testing
export function* registerUser(action) {
  console.log('register saga fired', action);
  try {
    console.log('point1', action)
    const user = yield call(Api.register, action.form);
    console.log('user', user);
    yield put({type: REGISTER_USER_SUCCESS, user: user});
  } catch (e) {
    console.log('error ==', e);
    const message = "Could not register user."
    yield put({type: REGISTER_USER_ERROR, error: message})
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];
