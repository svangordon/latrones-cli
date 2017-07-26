/**
*
* BoardWidget
*
*/

import React from 'react';
// import styled from 'styled-components';

import Chessdiagram from 'react-chessdiagram';
// import GameHistory from 'react-chessdiagram/src/GameHistory';

class BoardWidget extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderEmptyBoard() {
    return (
      <div style={{ display: 'inline-block' }}>
        <Chessdiagram
          ranks={8}
          files={8}
        />
      </div>
    );
  }

  render() {
    return !this.props.game ? this.renderEmptyBoard() : (
      <div style={{ display: 'inline-block' }}>
        <Chessdiagram
          fen={this.props.game ? this.props.game.initial_fen : ''}
          ranks={this.props.game.ranks}
          files={this.props.game.files}
        />
      </div>
    );
  }
}

BoardWidget.propTypes = {
  game: React.PropTypes.object,
};

export default BoardWidget;
