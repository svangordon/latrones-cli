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
  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <Chessdiagram
          fen={this.props.fen}
        />
      </div>
    );
  }
}

BoardWidget.propTypes = {
  fen: React.PropTypes.string,
};

export default BoardWidget;
