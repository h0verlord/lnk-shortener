import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Signup from "../ui/Signup";
import Link from "../ui/Link";
import NotFound from "../ui/notFound";
import Login from "../ui/Login";

export const history = createHistory();
export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Login} exact={true} />
      <Route path="/signup" component={Signup} />
      <Route path="/links" component={Link} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
