import React from 'react';

const Moves = ({ historyGame, jumpTo }) =>
  historyGame.map((_step, move) => {
    const destination = move ? `go to move #${move}` : 'go to start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{destination}</button>
      </li>
    );
  });
export default Moves;
