import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Whiteboard from './whiteboard';
import Dashboard from './dashboard';
import Account from './account';
import Login from './login';
import Signup from './signup';
import Nav from '../components/nav';
import Errorpage from './errorpage';
import { PrivateRoute, NoLoginRoute } from '../components/redirect_routes';

function App() {
  return (
    <Router>
      <Route path={['/whiteboard/:id', '/dashboard', '/account']} component={Nav} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <NoLoginRoute path="/login" component={Login} />
        <NoLoginRoute path="/signup" component={Signup} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/whiteboard/:id" component={Whiteboard} />
        <Route component={Errorpage} />
      </Switch>
    </Router>
  );
}

export default App;
