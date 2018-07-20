import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    let email = this.emailInput.value.trim();
    let password = this.passwordInput.value.trim();
  }
  render() {
    return (
      <div>
        <h1>Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
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
