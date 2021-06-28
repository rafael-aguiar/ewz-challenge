import styled from 'styled-components';

export const TodosContainer = styled.div`
  max-width: 100%;
  padding: 96px 76px;

  h1 {
    font-size: 24px;
    font-weight: 500;
  }

  main {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;

    justify-content: flex-start;
  }
`;

export const TodoCard = styled.div`
  background: #242424;
  border-radius: 5px;
  height: 100px;
  max-width: 20%;
  padding: 20px;
  margin: 0 25px 25px 0;

  display: flex;
  flex: 1 1 20%;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;

  font-size: 16px;

  strong {
    font-weight: 500;
  }

  span:first-of-type {
    &::before {
      content: '';

      display: block;
      position: relative;

      height: 5px;
      width: 50px;
      background: #17b978;
      border-radius: 10px;

      margin-bottom: 12px;
    }
  }
`;
