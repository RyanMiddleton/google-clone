import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowseRouter as Router, Switch, Route } from
"react-router-dom";
import { format } from 'path';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/search">
          <h1>This is the search page</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
     
  );
}

export default App;
