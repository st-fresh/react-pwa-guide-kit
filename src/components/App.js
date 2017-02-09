import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import AppShell from './AppShell';
import Main from './Main';
import Users from './Users';

export default function App() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AppShell}>
        <IndexRoute component={Main}/>
        <Route path="users" component={Users}/>
        <Route path="users/:id" component={Users}/>
      </Route>
    </Router>
  );
}