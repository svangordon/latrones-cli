/**
*
* BoardWidget
*
*/

import React from 'react';
// import styled from 'styled-components';

import GameHistory from './GameHistory';
// import GameHistory from 'react-chessdiagram/src/GameHistory';

class GameTab extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <GameHistory />
      </div>
    );
  }
}

GameTab.propTypes = {
  pgn: React.PropTypes.array,
};

export default GameTab;
