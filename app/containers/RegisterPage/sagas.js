import { take, call, cancel, put, takeLatest } from 'redux-saga/effects';
import * as Api from 'utils/Api';

import { LOCATION_CHANGE } from 'react-router-redux';
import {
  REGISTER_USER_REQUESTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './constants';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

// Individual exports for testing
export function* registerUser(action) {
  console.log('register saga fired', action);
  try {
    console.log('point1', action);
    const user = yield call(Api.register, action.form);
    console.log('user', user);
    yield put({ type: REGISTER_USER_SUCCESS, user });
  } catch (e) {
    console.log('error ==', e);
    const message = 'Could not register user.';
    yield put({ type: REGISTER_USER_ERROR, error: message });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* registerUserWatcher() {
  // Watches for REGISTER_USER_REQUESTED actions and calls registerUser when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(REGISTER_USER_REQUESTED, registerUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  registerUserWatcher,
];
