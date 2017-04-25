import { createSelector } from 'reselect';

/**
 * Direct selector to the navbar state domain
 */
// const selectNavbarDomain = () => (state) => state.get('navbar');

/**
 * Other specific selectors
 */
// const selectUser = () => (state) => {console.log('state ==', state);state.get('global').get('user')};
const makeSelectUser = () => createSelector(
  state => state.get('global'),
  // globalState => globalState.get('user'),
  (globalState) => globalState.get('user')
  // selectUser(),
  // (substate) => {console.log('substate ==', substate);substate ? substate.toJS() : null}
);

const selectScreen = (state) => state.get('screen')
const selectWidth = (screenState) => screenState.get('width');
const makeSelectWidth = () => createSelector(
  state => state.get('screen'),
  (screenState) => screenState.get('width')
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
