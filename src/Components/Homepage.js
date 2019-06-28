import React, { Component } from 'react';
import Layout from './Layout';
import axios from 'axios';
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        //alert("user authenticated");
    }
    componentWillMount(){
        alert("Welcome");
    }
    componentDidMount(){
        axios.get("http://www.json-generator.com/api/json/get/ceYBAzMuuW?indent=2")
          .then(res=>{
              console.log(res);
          })
    }
    
    render() { 
        return (
        <Layout>
            <p>
               homepage 
            </p>
            <img src="https://i.ibb.co/yNFPkP3/IWE1v-Um-XUzzy-Rj-PKxspiqv-Ykg-Ili-Xj-F0-DHxjc-Tt-K.jpg"  border="0"/>
        </Layout> 
        );
    }
}
 
export default Homepage;