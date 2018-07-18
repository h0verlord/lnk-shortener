import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Signup from '../imports/ui/Signup'
import Link from '../imports/ui/Link'
import NotFound from '../imports/ui/notFound'
import Login from '../imports/ui/Login'

const history = createBrowserHistory();
const routes = (
            <Router history={history}>
                  <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/links" component={Link}/>
                        <Route path="*" component={NotFound}/>
                  </Switch>
            </Router>
)

Meteor.startup(()=>{
      ReactDOM.render(routes, document.getElementById('app'))
})