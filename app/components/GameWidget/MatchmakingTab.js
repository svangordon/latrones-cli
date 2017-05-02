/**
*
* BoardWidget
*
*/

import React from 'react';
// import styled from 'styled-components';

import GameHistory from './GameHistory';
// import GameHistory from 'react-chessdiagram/src/GameHistory';

class MatchmakingTab extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <p>Matchmaking Tab!</p>
      </div>
    );
  }
}

MatchmakingTab.propTypes = {
  pgn: React.PropTypes.array,
};

export default MatchmakingTab;
