import React, { Component } from "react";
import Login from "./Login";
import Layout from "../Components/Layout";
import axios from 'axios';
import Cookies from 'js-cookie'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errmsg: ""
    };
    if(Cookies.get("token")){
        props.history.push('/mainpage');
    }
  }
  handleLogin = e => {
    e.preventDefault();
    
    axios.get(`http://www.json-generator.com/api/json/get/cliWWynsBK?indent=2`)
    .then(res=>{
        console.log("frpm api",res);
        debugger;
        // if(res.data.length){
            
        //     //alert("user authenticated");
        //     Cookies.set('token',this.state.email);
        //     this.props.history.push("/homepage")
        // }else{
        //     alert("invalid user");
        // }
    }).catch(err=>{
        console.log(err);
    })

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
      <Layout>
        <Login
          email={email}
          password={password}
          errmsg={errmsg}
          handleEmail={this.handleEmail}
          handleLogin={this.handleLogin}
          handlePassword={this.handlePassword}
        />
      </Layout>
    );
  }
}

export default LoginContainer;
