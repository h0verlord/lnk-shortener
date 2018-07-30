import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import {history} from './../routes/AppRouter'

export default class Login extends React.Component {
  componentWillMount() {
    if (Meteor.userId()) {
        history.replace('/links')
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.emailInput.value.trim();
    let password = this.passwordInput.value.trim();

    Meteor.loginWithPassword({ email }, password, err => {
        if (err) {
            this.setState({error: err.reason})
        } else {
            this.setState({error: ''})
        }
    });
  }
  render() {
    return (
      <div>
        <h1>Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input
            type="email"
            name="email"
            ref={input => {
              this.emailInput = input;
            }}
            placeholder="email@email.com"
          />
          <input
            type="password"
            name="password"
            ref={input => {
              this.passwordInput = input;
            }}
            placeholder="Password"
          />
          <button>Login</button>
        </form>
        <Link to="/signup">Create an account</Link>
      </div>
    );
  }
}
