import React, { Component } from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";

class PrivatRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //console.log("props from pr issssss",this.props)
    //console.log("from pr",Cookies.get('token') )
    const { component: Component, ...rest } = this.props;
    const isAuthenticated = !!Cookies.get("token");
    return (
      <Route
        {...rest}
        render={props => {
          return(isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)
        }}
      />
    );
  }
}

export default PrivatRouter;
