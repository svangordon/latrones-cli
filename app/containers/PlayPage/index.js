/*
 *
 * PlayPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
// import Chessdiagram from 'react-chessdiagram';

import BoardWidget from 'components/BoardWidget';
import GameWidget from 'components/GameWidget';
import SocialWidget from 'components/SocialWidget';

import { matchmakingRequested, gamesListRequested } from './actions';
import { makeSelectOpenGames, makeSelectPlayPage } from './selectors';
// import messages from './messages';

export class PlayPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.poller = setInterval(this.props.requestGamesList.bind(this), 500);
  }

  componentWillUnmount() {
    clearInterval(this.poller);
  }

  activeGamePoller() {
    if (this.props.PlayPage.activeGame) {
      this.poller = setTimeout(this.activeGamePoller.bind(this));
      this.props.getActiveGame();
    }
  }

  render() {
    return (
      <div>
        <BoardWidget game={this.props.PlayPage.activeGame} />
        <GameWidget
          requestMatchmaking={this.props.requestMatchmaking}
          games={this.props.PlayPage.games}
          game={this.props.PlayPage.activeGame}
        />
        <SocialWidget />
      </div>
    );
  }
}

PlayPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  getActiveGame: PropTypes.func,
  requestMatchmaking: PropTypes.func.isRequired,
  requestGamesList: PropTypes.func,
  PlayPage: {
    games: PropTypes.array,
    activeGame: PropTypes.object,
  },
};

const mapStateToProps = createStructuredSelector({
  PlayPage: makeSelectPlayPage(),
  openGames: makeSelectOpenGames(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    requestMatchmaking: (options) => {
      console.log('prop fired');
      dispatch(matchmakingRequested(options));
    },
    requestGamesList: () => { dispatch(gamesListRequested()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
