import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.get("global").get("user"),
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  authenticatingSelector: state => state.get("global").get("loading")
});

export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.get("global"),
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  // Want to redirect the user when they are done loading and authenticated
  predicate: global => {
      return global.get("user") === null && global.get("loading") === false;
  },
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/foo',
  allowRedirectBack: false
})
