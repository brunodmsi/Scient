import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Home from '~/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/" exact component={Home} isPrivate />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}
