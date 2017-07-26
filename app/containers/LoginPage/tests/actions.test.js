import {
  USER_LOGIN_REQUESTED,
  REFRESH_TOKEN_REQUESTED,
} from '../constants';

import {
  login,
  refreshToken,
} from '../actions';

describe('LoginPage actions', () => {
  describe('Login Action', () => {
    it('has a type of USER_LOGIN_REQUESTED', () => {
      const expected = {
        type: USER_LOGIN_REQUESTED,
      };
      expect(login()).toEqual(expected);
    });
  });

  describe('Refresh Token Action', () => {
    it('has a type of REFRESH_TOKEN_REQUESTED', () => {
      const expected = {
        type: REFRESH_TOKEN_REQUESTED,
      };
      expect(refreshToken()).toEqual(expected);
    });
  });
});
