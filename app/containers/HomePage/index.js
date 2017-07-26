/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import {
  // makeSelectRepos,
  // makeSelectLoading,
  // makeSelectError,
  // makeSelectUser,
// } from 'containers/App/selectors';
import PlayerCard from 'components/PlayerCard';
import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import { routerActions } from 'react-router-redux';
import { UserIsAuthenticated } from 'utils/wrappers';

// import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
import Section from './Section';
import messages from './messages';
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
// import { UserAuthWrapper } from 'redux-auth-wrapper';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   // if (this.props.username && this.props.username.trim().length > 0) {
  //   //   this.props.onSubmitForm();
  //   // }
  // }

  render() {
    // const { loading, error, repos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A multiplayer game of ludus latrunculorum' },
          ]}
        />
        <div>
          <PlayerCard
            nickname={this.props.user.nickname}
            email={this.props.user.email}
          />
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  // loading: React.PropTypes.bool,
  // error: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.bool,
  // ]),
  // repos: React.PropTypes.oneOfType([
  //   React.PropTypes.array,
  //   React.PropTypes.bool,
  // ]),
  // onSubmitForm: React.PropTypes.func,
  // onChangeUsername: React.PropTypes.func,
  user: React.PropTypes.object,
  // username: React.PropTypes.string,
};

// // Left over from boilerplate; get rid of it
// export function mapDispatchToProps(dispatch) {
//   return {
//     // onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//     // onSubmitForm: (evt) => {
//     //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//     //   dispatch(loadRepos());
//     // },
//   };
// }

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
  // user: makeSelectUser(),
});

// Wrap the component to inject dispatch and state into it
export default UserIsAuthenticated(connect(mapStateToProps/* , mapDispatchToProps*/)(HomePage));
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
