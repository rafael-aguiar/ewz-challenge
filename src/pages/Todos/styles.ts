import styled from "styled-components";

type CardProps = {
  completed: boolean;
};

export const TodosContainer = styled.div`
  max-width: 100%;
  padding: 96px 76px;

  h1 {
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 800px) {
      font-size: 36px;
      text-align: center;
    }
  }

  main {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;

    justify-content: flex-start;

    @media (max-width: 800px) {
      align-items: center;
      justify-content: center;
    }
  }
`;

export const TodoCard = styled.div<CardProps>`
  background: #242424;
  border-radius: 5px;
  height: 200px;
  max-width: 22%;
  padding: 20px;
  margin: 0 25px 25px 0;

  display: flex;
  flex: 1 0 22%;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;

  font-size: 16px;

  strong {
    font-weight: 500;
  }

  span:first-of-type {
    &::before {
      content: "";

      display: block;
      position: relative;

      height: 5px;
      width: 50px;
      background: #${(props) => (props.completed ? "17b978" : "3D6CB9")};
      border-radius: 10px;

      margin-bottom: 12px;

      @media (max-width: 1200px) {
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 1200px) {
    height: 200px;
    max-width: 25%;
    flex-basis: 25%;
    margin: 10px auto;
  }

  @media (max-width: 1200px) {
    height: 200px;
    max-width: 100%;
    flex-basis: 100%;
  }
`;
