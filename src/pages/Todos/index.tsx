import React from 'react';

import Dashboard from '../../components/Dashboard';

import { TodosContainer } from './styles';

const Todo: React.FC = () => {
  return (
    <>
      <Dashboard />
      <TodosContainer>
        <h1>Todos</h1>
      </TodosContainer>
    </>
  );
};

export default Todo;
