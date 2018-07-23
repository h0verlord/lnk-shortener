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
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/links" component={Link} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

const unauthenticatedPages = ['/', '/signup']
const authenticatedPages = ['/links']

Tracker.autorun(()=>{

    const isAuthenticated = !!Meteor.userId();
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    console.log('pathname: ', history.location.pathname);

    if (isUnauthenticatedPage && isAuthenticated) {
      history.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
      history.push('/');
    }

    console.log('isAuthenticated', isAuthenticated)
})
