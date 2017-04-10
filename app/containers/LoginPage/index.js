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
import {
  makeSelectUser,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
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
          handleSubmit={(e) => {e.preventDefault(); this.props.login(new FormData(e.target))}}
        />
        {this.props.error ? <p>{this.props.error}</p> : null}
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
  user: makeSelectUser(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  // LoginForm: makeSelectLoginPage
});

function mapDispatchToProps(dispatch, props) {
  return {
    dispatch: dispatch,
    login: (form) => {dispatch(login(form))}
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
