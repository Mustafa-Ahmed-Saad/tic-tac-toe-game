import styled from 'styled-components';

export const InfoWrapper = styled.div`
  .x {
    color: red;
  }
  .o {
    color: green;
  }

  &.info-wrapper {
    display: flex;
    justify-content: space-between;

    button {
      background: #272727;
      color: white;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0.5rem;
      margin: 0.5rem 1rem;
    }
  }
`;
