import { useState, useEffect } from 'react';

import Dashboard from '../../components/Dashboard';

import { TodosContainer, TodoCard } from './styles';

import api from '../../services/api';

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface IUser {
  id: number;
  name: string;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[] | null>(null);
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    api.get('/todos').then(response => setTodos(response.data));
    api.get('/users').then(response => setUsers(response.data));
  }, []);

  return (
    <>
      <Dashboard />
      <TodosContainer>
        <h1>Todos os todos</h1>
        <main>
          {todos &&
            users &&
            todos.slice(0, 15).map(todo => (
              <TodoCard key={todo.id}>
                <span>
                  <strong>Título:</strong> {todo.title}
                </span>
                <span>
                  <strong>Responsável:</strong> {users[todo.userId].name}
                </span>
              </TodoCard>
            ))}
        </main>
      </TodosContainer>
    </>
  );
};

export default Todo;
