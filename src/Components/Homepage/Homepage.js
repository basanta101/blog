import React, { Component } from 'react';
import Layout from '../Layout';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from './Actions'
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogData: [],
            requiredData: null,
            display: false,
        }
        //alert("user authenticated");
        //console.log("props frm constructor of homepage is", props)
    }
    componentDidMount() {
        axios.get("http://www.json-generator.com/api/json/get/ceYBAzMuuW?indent=2")
            .then(res => {
                //console.log("api from hompg",res);
                this.setState({
                    blogData: res.data
                })
            })
    }
    handleClick = (value) => {
        this.props.getData(value);
        this.setState({
            requiredData: value
        })
        this.props.history.push('/mainpage');
    }
    render() {
        return (
            <Layout>
                <div className="blog-content">
                    {this.state.blogData.length && this.state.blogData.map((item, index) => {
                        return (
                            <div className="blog-header" onClick={() => this.handleClick(item)} key={index}>{item.header}</div>
                        );
                    })}
                </div>
                {/* <Mainpage requiredData={this.state.requiredData} /> */}
            </Layout>
        );
    }
}
// const mapStateToProps = (state) => (
//     console.log("mapstate2props from homepage is",)
// );

const mapDispatchToProps = {
    getData: actions.getData
}

export default connect(undefined, mapDispatchToProps)(Homepage);

// const mapStateToProps = (state) => ({
//     requiredData: state.homepage
//     });
    