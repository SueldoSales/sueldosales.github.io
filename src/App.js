import React from 'react';
import { Route, Switch } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Bulma from 'bulma';
import './App.css';

// Pages imports
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
}

export default App;
