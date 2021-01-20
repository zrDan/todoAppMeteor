import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthPage } from "./page/Auth";
import { SignIn } from "./page/SignIn";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route exact path="/SignIn" component={SignIn} />
    </Switch>
  </Router>
);
