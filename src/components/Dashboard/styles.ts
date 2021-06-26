import styled from 'styled-components';

export const DashboardContainer = styled.header`
  width: 100%;
  height: 80px;

  padding: 0 76px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #1a1a1a;
  color: #f5f5f5;

  h1 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }

  a {
    text-decoration: none;
    color: #f5f5f5;
    margin-left: 8px;
  }
`;
