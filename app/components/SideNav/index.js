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
import SvgIcon from 'material-ui/SvgIcon';
import { Link } from 'react-router';

import A from 'components/A';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SideNav({expanded, avatar}) {
  const width = expanded ? 140 : 50;
  // TODO: At some point, style these elements using styled-components
  const avatarStyles = {
    borderRadius: 0,
    left: expanded ? 16 : 4,
    top: 0,
  };
  const listItemStyles = {
    marginTop: 5
  };
  const listItems = {
    props: {
      size: 40,
    },
    nodes: [
      {
        desc: "siteHeader",
        text: "Latrones",
        link: null
      },
      {
        desc: "home",
        avatar: avatar,
        text: "Home",
        link: "/" // TODO: make this '/home', and have that route show "/"
      },
      {
        desc: "play",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
        text: "Play",
        link: "/play"
      }

    ]
  };
  return (
    <Drawer open={true} width={width}>
      <List>
        {listItems.nodes.map(node => (
          <ListItem
            key={node.desc}
            primaryText={expanded ? node.text : null}
            containerElement={node.link ? <Link to={node.link} /> : 'span'}
            leftAvatar={node.avatar ?
              <Avatar size={40} src={node.avatar} style={avatarStyles} /> : null
            }
          />
                                      )
                            )
        }
      </List>
    </Drawer>
  );
}

SideNav.propTypes = {
  avatar: React.PropTypes.string,
};

export default SideNav;
