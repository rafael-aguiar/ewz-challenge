import React from 'react';
import { Link } from 'react-router-dom';

import { DashboardContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <h1>EZW APP</h1>

      <Link to="/todos" />
      <Link to="/users" />

      <button></button>
    </DashboardContainer>
  );
};

export default Dashboard;
