import styled from 'styled-components';

export const ButtonSquareStyled = styled.button`
  &.squares {
    background-color: #272727;
    border: none;
    font-size: 5rem;
    cursor: pointer;
    outline: none;
  }

  &.x {
    color: red;
  }

  &.o {
    color: green;
  }
`;
