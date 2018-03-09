import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
// import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  // When using Router instead of BrowserRouter, we can provide our own history value
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact />
        {/* <Route path="/help" component={HelpPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
