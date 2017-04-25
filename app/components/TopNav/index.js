/**
*
* TopNav
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TopNav() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TopNav.propTypes = {

};

export default TopNav;
