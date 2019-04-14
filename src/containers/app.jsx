import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Whiteboard from './whiteboard';
import Dashboard from './dashboard';
import Login from './login';
import Signup from './signup';

import Nav from '../components/nav';

function App() {
  return (
    <Router>
      <Route path={['/whiteboard/:id', '/dashboard']} component={Nav} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/whiteboard/:id" component={Whiteboard} />
      </Switch>
    </Router>
  );
}

export default App;
