import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Department from "./components/Department";
import Employee from "./components/Employee";
import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp";

import ForgotPasswordReset from "./components/PassReset/ForgotPasswordReset";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          React routing project
        </h3>
        <h5 className="m-3 d-flex justify-content-center">
          Employee Managment Portal
        </h5>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
          <Route path="/register" component={SignUp} />
          <Route path="/resetpass" component={ForgotPasswordReset} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
