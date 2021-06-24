import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Todo from '../pages/Todo';
import Users from '../pages/Users';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/users" component={Users} />
      <Route />
    </Switch>
  );
};

export default Routes;
