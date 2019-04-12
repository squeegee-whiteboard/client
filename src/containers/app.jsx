import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Whiteboard from './whiteboard';
import Nav from '../components/nav';

function WhiteboardRedirect() {
  return (
    <Redirect to="/whiteboard/1" />
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Nav />
      </nav>
      <Switch>
        <Route exact path="/" component={WhiteboardRedirect} />
        <Route path="/whiteboard/:id" component={Whiteboard} />
      </Switch>
    </Router>
  );
}

export default App;
