import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
import {
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from 'containers/App/constants';
import {
  userLoginSuccess,
  userLoginError ,
} from 'containers/App/actions';
import {
  REFRESH_TOKEN_REQUESTED,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
} from './constants';
import * as Api from 'utils/Api';

// Individual exports for testing
export function* loginUser(action) {
  try {
    // const requestURL = `http://jsonplaceholder.typicode.com/users`;
    // console.log('point1', action)
    const user = yield call(Api.login, action.form);
    // console.log('users', user);
    yield put({type: USER_LOGIN_SUCCESS, user: user});
  } catch (e) {
    const message = "Could not log in.";
    yield put({type: USER_LOGIN_ERROR, error: message});
  }
}

export function* refreshToken(action) {
  try {
    console.log("refreshing token");
    const user = yield call(Api.refreshToken);
    console.log("got back", user);
    yield put({type: REFRESH_TOKEN_SUCCESS, user: user});
  } catch (e) {
    console.log("refreshToken catch block");
    const message="";
    yield put({type: REFRESH_TOKEN_ERROR, error: message});
  }
}

/**
 * Github repos request/response handler
 */
 function* userLoginSaga() {
   yield takeLatest(USER_LOGIN_REQUESTED, loginUser);
   yield takeLatest(REFRESH_TOKEN_REQUESTED, refreshToken);
 }

// All sagas to be loaded
export default [
  userLoginSaga,
];
