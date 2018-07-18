import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Signup from '../imports/ui/Signup'
import Link from '../imports/ui/Link'

const history = createBrowserHistory();
const routes = (
            <Router history={history}>
                  <Switch>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/links" component={Link}/>
                  </Switch>
            </Router>
)

Meteor.startup(()=>{
      ReactDOM.render(routes, document.getElementById('app'))
})