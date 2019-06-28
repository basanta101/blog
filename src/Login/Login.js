import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login-content">
        <form onSubmit={this.props.handleLogin}>
          <div>Username</div>
          <div>
            <input className="input" value={this.props.email} onChange={this.props.handleEmail} />
          </div>
          <div>Password</div>
          <div>
            <input
               className="input"
              value={this.props.password}
              onChange={this.props.handlePassword}
            />
          </div>
          <div>
            <button className="btn">Login</button>
          </div>
          {/* <div>
            <button>sign-up</button>
          </div> */}
        </form>
      </div>
    );
  }
}

export default Login;
