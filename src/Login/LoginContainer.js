import React, { Component } from "react";
import Login from "./Login";
import Layout from "../Components/Layout";
import axios from "axios";
import Cookies from "js-cookie";
import actions from "./Actions";
import { connect } from "react-redux";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errmsg: ""
    };
    // url:http://www.json-generator.com/api/json/get/bPnGPFblrC?indent=2

    // url:http://www.json-generator.com/api/json/get/ceYBAzMuuW?indent=2

    if (Cookies.get("token")) {
      props.history.push("/homepage");
    }
  }
  componentDidUpdate() {
    if (Cookies.get("token")) {
      this.props.history.push("/homepage");
    }
  }
  // componentDidUpdate(){
  //   console.log("from lg th props is", this.props.user.validuser)
  //   if(this.props.user.validuser){
  //     this.props.history.push('/homepage');
  //   }
  // }

  handleLogin = e => {
    e.preventDefault();
    //console.log("props fom hndle login is", this.props);
    this.props.userLogin(this.state);
  };
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  render() {
    //console.log("from login container",this.props);
    const { email, password, errmsg } = this.state;
    return (
      <div className="login-container">
        <Login
          email={email}
          password={password}
          errmsg={errmsg}
          handleEmail={this.handleEmail}
          handleLogin={this.handleLogin}
          handlePassword={this.handlePassword}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  //console.log("state from mapsttoprops is", state);
  user: state.user
});

const mapDispatchToProps = {
  userLogin: actions.userLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
