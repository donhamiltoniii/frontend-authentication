import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Context } from './contexts/auth0.context';

import SiteHeader from './components/site-header/site-header.component';
import Dashboard from './pages/dashboard.page';
import Home from './pages/home.page';

import './app.scss';

export default function App() {
  const auth0 = React.useContext(Auth0Context);

  return (
    <Router>
      <div className="app">
        <SiteHeader />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
