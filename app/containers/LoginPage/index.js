/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLoginPage from './selectors';
// import { selectLoginForm } from './selectors';
import messages from './messages';
import LoginForm from 'components/LoginForm';
import { login } from './actions';
import {
  getFormValues,
  isDirty,
  isPristine,
  isValid,
  isInvalid
} from 'redux-form/immutable';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LoginForm
          handleSubmit={(e) => {e.preventDefault(); this.props.login()}}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
  // LoginForm: makeSelectLoginPage
});

function mapDispatchToProps(dispatch, props) {
  return {
    dispatch: dispatch,
    login: () => {dispatch(login(props.values))}
  };
}

const connectFn = state => ({
  values: getFormValues('login')(state),
  dirty: isDirty('login')(state),
  pristine: isPristine('login')(state),
  valid: isValid('login')(state),
  invalid: isInvalid('login')(state)
})

export default connect(state => ({
  values: getFormValues('login')(state),
  dirty: isDirty('login')(state),
  pristine: isPristine('login')(state),
  valid: isValid('login')(state),
  invalid: isInvalid('login')(state)
}))(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
