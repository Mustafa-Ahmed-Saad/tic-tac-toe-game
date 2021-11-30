import React, { useState } from 'react';
import { calculateWinner } from '../../helper';
import Board from './board';
import { InfoWrapper } from './GameEl';
import Moves from './moves';

const Game = () => {
  const [historyGame, setHistoryGame] = useState([Array(9).fill(null)]); // this big array that have all array niside it
  const [stepNumber, setStepNumber] = useState(0);
  // who should playing now if is x
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(historyGame[stepNumber]); // send last array or the array in this step
  const xo = xIsNext ? 'x' : 'o';

  // all functions
  // when click on ceil or square
  const handleClick = (i) => {
    const historyPoint = historyGame.slice(0, stepNumber + 1); // [array(9),array(9),array(9),array(9) ... ] copy of array you can do it using spred const historyPoint = [...historyGame]
    // get latest array -[that have latest values in all ceils]- from all array that in historyPoint
    const current = historyPoint[stepNumber]; // get last araay of historyPoint -[copy of big array that has all array inside it]-
    const squares = [...current]; // copy of latest array
    // return if win or occupied
    if (winner || squares[i]) return; // if winner => calculateWinner(latest array) if winner null or squares[i] -[this mean that the square or ceil that we click onit right now is full]- === any value -[x or o]-
    squares[i] = xo; // put -[x or o]- in the square or ceil that is clicked
    setHistoryGame([...historyPoint, squares]); // add last array to another array in big array that is this namr is HistoryGame
    setStepNumber(historyPoint.length);
    setXIsNext((prevXIsNext) => !prevXIsNext);
  };

  // jump to this move win click
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  // history and all moves
  let player = <h3>{`Next Player: ${xo}`}</h3>;
  if (winner) {
    player = <h3 style={{ fontWeight: 'bold', color: `${xo === 'x' ? 'green' : 'red'}` }}>{`Winner: ${winner}`}</h3>;
  }

  return (
    <>
      <h1>react Tic Tac Toe Game</h1>
      <Board squares={historyGame[stepNumber]} onClick={handleClick} />
      <InfoWrapper className="info-wrapper">
        <div>
          <h3>history</h3>
          <Moves historyGame={historyGame} jumpTo={jumpTo} />
        </div>
        {player}
      </InfoWrapper>
    </>
  );
};

export default Game;
