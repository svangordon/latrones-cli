/*
 *
 * PlayPage actions
 *
 */

import {
  DEFAULT_ACTION,
  MATCHMAKING_REQUESTED,
  MATCHMAKING_SUCCESS,
  MATCHMAKING_ERROR
} from './constants';

export function matchmakingRequested(options) {
  console.log("matchmakingRequested");
  return {
    type: MATCHMAKING_REQUESTED,
    options
  }
}

export function matchmakingSuccess(game) {
  return {
    type: MATCHMAKING_SUCCESS,
    game
  }
}

export function matchmakingError(error) {
  return {
    type: MATCHMAKING_ERROR,
    error
  }
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
