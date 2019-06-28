import React, { Component } from "react";
import Layout from "./Layout";
import { connect } from "react-redux";

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    // console.log("props from mainpage is ", props);
  }

  render() {
    const self = this;
    console.log("jai sri ram", this.props);
    const x = [];
    if (this.props != null) {
      x.push(this.props.data);
    }
    //debugger;
    return (
      <Layout>
        <div >
        {x.length &&
          x.map((item, index) => {
            return (
              <div className="mainpage-content" key={index}>
                <div className="c1">{item.header}</div>
                <div className="c2">{item.description}</div>

                <div className="c3">
                  <img src={item.imgUrl} />
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  data: state.homepage
});

export default connect(mapStateToProps)(Mainpage);
