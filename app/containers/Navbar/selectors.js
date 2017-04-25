import { createSelector } from 'reselect';

/**
 * Direct selector to the navbar state domain
 */
// const selectNavbarDomain = () => (state) => state.get('navbar');

/**
 * Other specific selectors
 */
const selectUser = () => (state) => state.get('global').get('user');
const makeSelectUser = () => createSelector(
  selectUser(),
  (substate) => substate ? substate.toJS() : null
);

const selectWidth = (state) => state.get('screen').get('width');
const makeSelectWidth = () => createSelector(
  selectWidth(),
  (substate) => substate.toJS()
);

/**
 * Default selector used by Navbar
 */

const makeSelectNavbar = () => createSelector(
  selectNavbarDomain(),
  (substate) => substate ? substate.toJS() : null
);

export default makeSelectNavbar;
export {
  selectNavbarDomain,
  selectUser,
  makeSelectUser,
  makeSelectWidth,
};
