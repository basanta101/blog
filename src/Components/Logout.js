import React, { Component } from 'react';
import Cookies from 'js-cookie'


class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        Cookies.remove("token");
        props.history.push('/');
       // alert("user succesfully logged out");
    }
    render() { 
        return (true );
    }
}
 
export default Logout;