import React, { Component } from 'react';
import Layout from './Layout'

class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Layout>
            <p>
            Mainpage 
        </p> 
        </Layout>);
    }
}
 
export default Mainpage;