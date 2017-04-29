/**
*
* SideNav
*
*/

import React from 'react';
// import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function SideNav({expanded, avatar}) {
  const width = expanded ? 140 : 50;
  console.log("avatar src ==", avatar);
  const avatarStyles = {
    borderRadius: 0,
    left: expanded ? 16 : 4,
  }
  return (
    <Drawer open={true} width={width}>
      <List>
        <ListItem
          primaryText={expanded ? "Latrones" : "L"}
        />
        <ListItem
          primaryText={expanded ? "Home" : null}
          leftAvatar={<Avatar size={40} src={avatar} style={avatarStyles}/>}
        />
      </List>
    </Drawer>
  );
}

SideNav.propTypes = {
  avatar: React.PropTypes.string,
};

export default SideNav;
