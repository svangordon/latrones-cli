/**
*
* LoginForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';

function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nickname">User Name</label>
        <Field name="nickname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

// Decorate the form component
export default reduxForm({
  form: 'login', // a unique name for this form
  initialValues: {
    password: 'password',
    nickname: 'doggy',
  },
})(LoginForm);

// export default LoginForm;
