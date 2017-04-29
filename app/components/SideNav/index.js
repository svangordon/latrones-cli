/**
*
* SideNav
*
*/

import React from 'react';
// import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SideNav({expanded}) {
  const width = expanded ? 140 : 50;

  return (
    <Drawer open={true} width={width}>
      { ["first", "second", "third"].map((item, i) => (<div key={i}>{item}</div>))}
    </Drawer>
    // <div>
    //   <FormattedMessage {...messages.header} />
    // </div>
  );
}

SideNav.propTypes = {

};

export default SideNav;
