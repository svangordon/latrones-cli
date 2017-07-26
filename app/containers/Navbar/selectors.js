import { createSelector } from 'reselect';

/**
 * Direct selector to the navbar state domain
 */
// const selectNavbarDomain = () => (state) => state.get('navbar');

/**
 * Other specific selectors
 */
const makeSelectUser = () => createSelector(
  (state) => state.get('global'),
  (globalState) => globalState.get('user')
);

// const selectScreen = (state) => state.get('screen')
// const selectWidth = (screenState) => screenState.get('width');
const makeSelectWidth = () => createSelector(
  (state) => state.get('screen'),
  (screenState) => screenState.get('width')
);

const makeSelectRoute = () => createSelector(
  (state) => state.get('route'),
  (routeState) => routeState
);
/**
 * Default selector used by Navbar
 */

const makeSelectNavbar = () => createSelector(
  // selectNavbarDomain(),
  (substate) => substate ? substate.toJS() : null
);

// export default makeSelectNavbar;
export {
  // selectNavbarDomain,
  // selectUser,
  makeSelectNavbar,
  makeSelectUser,
  makeSelectWidth,
  makeSelectRoute,
};
