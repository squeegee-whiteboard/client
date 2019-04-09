import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Whiteboard from './whiteboard';

function WhiteboardRedirect() {
  return (
    <Redirect to="/whiteboard/1" />
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>Squeegee</h1>
      </nav>
      <Switch>
        <Route exact path="/" component={WhiteboardRedirect} />
        <Route path="/whiteboard/:id" component={Whiteboard} />
      </Switch>
    </Router>
  );
}

export default App;
