import React from "react";
import { Accounts } from "meteor/accounts-base";
import { timingSafeEqual } from "crypto";
import { Link } from "react-router-dom";
import { history } from "./../routes/AppRouter";

export default class Signup extends React.Component {
  componentWillMount() {
    if (Meteor.userId()) {
      history.replace("/links");
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

    if (password.length < 9) {
        return this.setState({error: 'Password must be at least 9 characters long'})
    }

    Accounts.createUser({ email, password }, err => {
        if (err) {
            this.setState({error: err.reason})
        } else {
            this.setState({error: ''})
        }
    })
  }
  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>

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
          <button>Create Account</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
