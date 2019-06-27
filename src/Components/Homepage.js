import React, { Component } from 'react';
import Layout from './Layout'
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        alert("user authenticated");
    }
    render() { 
        return (
        <Layout>
            <p>
            homepage 
        </p>
        </Layout> 
        );
    }
}
 
export default Homepage;