import React, { Component } from 'react';
import Layout from './Layout'

class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log("props from mainpage is ", props);
    }

    render() { 
        const self = this;
        //debugger;
        return ( <Layout>
            <p>
            Mainpage 
        </p> 
        </Layout>);
    }
}
 
export default Mainpage;