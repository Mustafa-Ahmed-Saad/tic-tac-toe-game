import React from 'react';
import { ButtonSquareStyled } from './SquareEl';

const Square = ({ value, onClick }) => {
  const styleClasses = value ? `squares ${value}` : `squares`;

  return (
    <ButtonSquareStyled className={styleClasses} onClick={onClick}>
      {value}
    </ButtonSquareStyled>
  );
};

export default Square;
