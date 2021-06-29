import styled from "styled-components";

export const UsersContainer = styled.div`
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

export const UserCard = styled.div`
  background: #242424;
  border-radius: 5px;
  height: 320px;
  max-width: 22%;
  padding: 32px;
  margin: 0 25px 25px 0;

  display: flex;
  flex: 1 1 22%;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  font-size: 14px;
  text-align: center;

  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    .image {
      background: #c4c4c4;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 25px;
    }
  }

  div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    strong {
      font-weight: 500;
    }
  }

  button {
    margin-top: 24px;
    background: #3d6cb9;
    color: #fff;
    height: 32px;
    height: 47px;
    border-radius: 5px;
    border: none;

    @media (max-width: 1200px) {
      padding: 8px 0;
    }
  }

  @media (max-width: 1200px) {
    height: 200px;
    max-width: 45%;
    flex-basis: 45%;
    margin: 10px auto;
    flex-wrap: nowrap;
  }

  @media (max-width: 800px) {
    height: 200px;
    max-width: 100%;
    flex-basis: 100%;
  }
`;
