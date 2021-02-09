import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from 'react-router-dom';
import routes from './config';

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/courses" />
          </Route>
          {routes.map((route, i) => (
            <Route path={route.path} render={() => <route.component />} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
