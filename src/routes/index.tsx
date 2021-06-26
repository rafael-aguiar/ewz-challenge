import { Switch, Route, Redirect } from 'react-router-dom';
import Todos from '../pages/Todos';
import Users from '../pages/Users';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/todos" />
      <Route path="/todos" component={Todos} />
      <Route path="/users" component={Users} />
      <Route />
    </Switch>
  );
};

export default Routes;
