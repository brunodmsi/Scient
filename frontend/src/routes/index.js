import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import Questionary from '~/pages/Questionary';
import Register1 from '~/pages/Register/FirstStep';
import Register2 from '~/pages/Register/SecondStep';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/register" component={Register1} />
      <Route path="/register/2" component={Register2} />

      <Route path="/" exact component={Questionary} isPrivate />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}
