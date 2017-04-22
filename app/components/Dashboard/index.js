/**
*
* Dashboard
*
* A summary of a user's recent activity
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Gravatar from 'react-gravatar';
import messages from './messages';
import md5 from 'md5';

function Dashboard({email, nickname}) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Gravatar
        email={email ? md5(email) : md5(nickname)}
      />
    </div>
  );
}

Dashboard.propTypes = {
  nickname: React.PropTypes.string,
  email: React.PropTypes.string,
};

export default Dashboard;
