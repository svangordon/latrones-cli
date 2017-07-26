/*
 *
 * Navbar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import Drawer from 'material-ui/Drawer';
// import AppBar from 'material-ui/AppBar';

import SideNav from 'components/SideNav';
import TopNav from 'components/TopNav';

import { makeSelectWidth, makeSelectUser } from './selectors';
// import messages from './messages';

export class Navbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      collapseDrawer: false,
    };
    this.handleCollapseDrawer = this.handleCollapseDrawer.bind(this);

    this.expandedSideNavWidth = 140;
    this.collapsedSideNavWidth = 50;
    this.allowedRoutes = ['/', '/play'];
    // const MenuItems = [
    //   {
    //     primaryText: 'Latr',
    //   },
    //   {
    //     primaryText: 'Home',
    //   },
    //   {
    //     primaryText: 'Play',
    //   },
    // ];
  }

  handleCollapseDrawer() {
    this.setState({ collapseDrawer: !this.state.collapseDrawer });
  }

  render() {
    if (!this.allowedRoutes.includes(this.props.location) || !this.props.user) {
      return null;
    }
    if (this.props.width >= 960) {
      const expanded = this.props.width >= 1280 && !this.state.collapseDrawer;
      return (
        <SideNav
          avatar={this.props.user.avatar}
          expanded={expanded}
          handleCollapse={this.handleCollapseDrawer}
        />
      );
    }
    return <TopNav />;
  }
}

Navbar.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  location: React.PropTypes.string,
  user: React.PropTypes.shape({
    avatar: PropTypes.string,
    id: React.PropTypes.number,
  }),
  width: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  // Navbar: makeSelectNavbar(),
  user: makeSelectUser(),
  width: makeSelectWidth(),
  // route: makeSelectRoute(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
