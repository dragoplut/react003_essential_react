import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import AccountPage from '../../pages/account/page';
import LoginPage from '../../pages/login/page';
import HomePage from '../../pages/home/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="home" component={HomePage} />
    <Route path="account" component={AccountPage} />
  </Route>
);
