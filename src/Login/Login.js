import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <form onSubmit={this.props.handleLogin}>
                <input  value={this.props.email} onChange={this.props.handleEmail} />
                <input  value={this.props.password} onChange={this.props.handlePassword}/>
                <button >Login</button>
                <button>sign-up</button>
            </form>
        </div> );
    }
}
 
export default Login;