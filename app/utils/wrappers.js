import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.get("global").get("user"),
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  authenticatingSelector: state => state.get("global").get("loading")
})
