import React from "react";
import { Accounts } from "meteor/accounts-base";
import { timingSafeEqual } from "crypto";
import {Link} from 'react-router-dom'


export default class Signup extends React.Component {
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

    Accounts.createUser({ email, password }, err => {
        console.log('Signup callback', err)
    });
    // this.setState({
    //   error: "something went wrongs"
    // });
  }
  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="email"
            name="email"
            ref={(input) => {this.emailInput = input}}
            placeholder="email@email.com"
          />
          <input
            type="password"
            name="password"
            ref={ (input) => {this.passwordInput = input}}
            placeholder="Password"
          />
          <button>Create Account</button>
        </form>
        <Link to='/'>Already have an account?</Link>
      </div>
    );
  }
}
