import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Whiteboard from './whiteboard';
import Dashboard from './dashboard';

import Nav from '../components/nav';

function WhiteboardRedirect() {
  return (
    <Redirect to="/whiteboard/1" />
  );
}

function DashboardRedirect() {
  return (
    <Redirect to="/dashboard" />
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Nav />
      </nav>
      <Switch>
        {/* <Route exact path="/" component={DashboardRedirect} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/whiteboard/:id" component={Whiteboard} />
      </Switch>
    </Router>
  );
}

export default App;
