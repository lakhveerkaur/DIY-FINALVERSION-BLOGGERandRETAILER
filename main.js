import React from 'react';
import ReactDOM from 'react-dom';

import App from './client/components/App.jsx';
import Login from './client/components/Login.jsx';
import RegisterForm from './client/components/RegisterForm.jsx';
import LogoutConfirmation from './client/components/LogoutConfirmation.jsx';
import VerifyRegistration from './client/components/VerifyRegistration.jsx';
import RegisterRetailer from './client/components/RegisterRetailer.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import RetailerPage from './client/components/retailerPage.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path={"/"} component={Login}/>
    <Route path={"/bloggerPage"} component={App}/>
    <Route path={"/Logout"} component={LogoutConfirmation}/>
    <Route path={"/register"} component={RegisterForm} />
    <Route path={"/registerRetailer"} component={RegisterRetailer} />
    <Route path={"/verify"} component={VerifyRegistration} />
    <Route path={"/retailer"} component={RetailerPage} />


  </Router>
  , document.getElementById('app'));
