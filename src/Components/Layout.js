import React, { Component } from 'react';
import Header from '../Header'

class Layout extends Component {
    constructor(props) {
        super(props); 
        this.state = {  }
    }
    render() { 
       // console.log("from layout",this.props); 
        return ( <div>
            <Header className="header"/>
            {this.props.children}
        </div> );
    }
}
 
export default Layout;