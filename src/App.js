import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Login from './views/pages/Login.js';
import Register from './views/pages/Register.js';
import Dashboard from './views/pages//Dashboard.js';
import UserManager from './views/pages/UserManager.js';
import CompanyManager from './views/pages/CompanyManager.js';
import ClientManager from './views/pages/ClientManager.js';
import CampaignGrouping from './views/pages/CampaignGrouping.js';
import ProductGrouping from './views/pages/ProductGrouping.js';
import Reports from './views/pages/Reports.js';
import Settings from './views/pages/Settings.js';
import UnAuthorized from './views/pages/UnAuthorized.js';
import NotFound from './views/pages/NotFound.js';

const token = localStorage.getItem("access_token");

let isExpired = false;

if (token && token !== "undefined") {
  let decodedToken = jwt.decode(token);
  let expirytime = decodedToken.exp * 1000;
  let dateNow = new Date();
  if (expirytime < dateNow.getTime()) {
    localStorage.removeItem("access_token");
    isExpired = true;
  }

  console.log("exp time", expirytime);
  console.log("current time", dateNow.getTime());
}

else {
  localStorage.removeItem("access_token");
  isExpired = true;
}

//Private Links
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      token == null || isExpired
        ? window.location.href = '/'
        : <Component {...matchProps} />
    )} />
  )
};

//Login Checker
const LoggedIn = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      token != null
        ? <Redirect to="/dashboard"/>
        : <Component {...matchProps} />
    )} />
  )
};


export default function App() {
    return (
        <BrowserRouter>
        <Switch>
          <LoggedIn path="/" exact component={Login} />
          <LoggedIn path="/login" exact component={Login} />
          <PrivateRoute path="/register" exact component={Register} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/user-manager" exact component={UserManager} />
          <PrivateRoute path="/company-manager" exact component={CompanyManager} />
          <PrivateRoute path="/client-manager" exact component={ClientManager} />
          <PrivateRoute path="/campaign-group" exact component={CampaignGrouping} />
          <PrivateRoute path="/product-group" exact component={ProductGrouping} />
          <PrivateRoute path="/reports" exact component={Reports} />
          <PrivateRoute path="/settings" exact component={Settings} />
          <Route path="/unauthorized" exact component={UnAuthorized} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }