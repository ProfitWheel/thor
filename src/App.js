import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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

export default function App() {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/user-manager" exact component={UserManager} />
          <Route path="/company-manager" exact component={CompanyManager} />
          <Route path="/client-manager" exact component={ClientManager} />
          <Route path="/campaign-group" exact component={CampaignGrouping} />
          <Route path="/product-group" exact component={ProductGrouping} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/settings" exact component={Settings} />
          {/* <Redirect from="/" to="/auth/login" /> */}
        </Switch>
      </BrowserRouter>
    );
  }