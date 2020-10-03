import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/private-route/private-route.component';
import SiteHeader from './components/site-header/site-header.component';

import Dashboard from './pages/dashboard.page';
import Home from './pages/home.page';

import './app.scss';

export default function App() {
  return (
    <Router>
      <div className="app">
        <SiteHeader />
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
