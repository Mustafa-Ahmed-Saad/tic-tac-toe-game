import React from 'react';
import Square from './square';
import { BoardStyled } from './BoardEl';

const Board = ({ squares, onClick }) => {
  return (
    <BoardStyled className="board">
      {squares.map((singleSquare, i) => (
        <Square key={i} value={singleSquare} onClick={() => onClick(i)} />
      ))}
    </BoardStyled>
  );
};

export default Board;
