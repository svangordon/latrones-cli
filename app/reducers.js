/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { reducer as formReducer } from 'redux-form';
import screenReducer from 'containers/ScreenDimensionSpy/reducer';
// import { SET_SCREEN_DIMENSIONS } from 'containers/ScreenDimensionSpy/constants';

// import { USER_LOGGED_IN, USER_LOGGED_OUT } from './constants.js';

// /* User Reducer
//  * Responsible for tracking user login
//  */
//  const userReducer = (state = {}, { type, payload }) => {
//    if (type === USER_LOGGED_IN) {
//      console.log('hitting logged in route', 'state', state, 'payload', payload);
//      return payload
//    }
//    if (type === USER_LOGGED_OUT) {
//      return {}
//    }
//    return state
//  }

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    language: languageProviderReducer,
    form: formReducer,
    screen: screenReducer,
    // user: userReducer,
    ...asyncReducers,
  });
}
