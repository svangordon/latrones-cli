import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';

// This has been unplugged, and replaced with a container of the same type
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      collapseDrawer: false,
    };
    this.handleCollapseDrawer = this.handleCollapseDrawer.bind(this);

    this.expandedSideNavWidth = 140;
    this.collapsedSideNavWidth = 50;
  }

  handleCollapseDrawer() {
    this.setState({ collapseDrawer: !this.state.collapseDrawer });
  }

  renderSideNav() {
    return (
      <Drawer open>
        { ['first', 'second', 'third'].map((item, i) => (<div key={i}>{item}</div>))}
      </Drawer>
    );
  }

  renderTopNav() {
    return (
      <AppBar />
    );
  }

  render() {
    console.log('header props', this.props);
    if (this.props.width >= 960) {
      return this.renderSideNav();
    }
    return this.renderTopNav();

    // return (
    //   <div>
    //     <Drawer open={true}>
    //     </Drawer>
    //   </div>
    // );
  }
}

Header.propTypes = {
  width: React.PropTypes.number,
};
/* Use for reference and then delete 4/25
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Drawer open={true} />
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}
*/

export default Header;
