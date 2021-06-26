import React from 'react';
import { Link } from 'react-router-dom';

import { DashboardContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <h1>TodosTest</h1>

      <nav>
        <Link to="/todos"> todos </Link>
        <Link to="/users"> usuários </Link>
      </nav>
    </DashboardContainer>
  );
};

export default Dashboard;
