import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from 'react-router-dom';

import SearchPage from './SearchPage';
import AboutPage from './AboutPage';

const App = () => (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/">ホテル検索</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {/* Routerの中のSwitchで囲まれた部分が切り替わるview */}
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
