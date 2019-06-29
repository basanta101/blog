import React, { Component } from 'react';

import { Button, Modal } from 'react-bootstrap';

class ModalExample extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            header: "",
            description: "",
            imgUrl: ""
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    componentWillReceiveProps(props) {
        //console.log(props)
        this.setState({
            show: props.show
        })
    }
    handleHeader = (e) => {
        this.setState({
            header: e.target.value
        })
        //console.log("state now is", this.state)
    }
    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
        //console.log("state now is", this.state)
    }
    handleImageUrl = (e) => {
        this.setState({
            imgUrl: e.target.value
        });
        //console.log("state now is", this.state)
    }

    render() {
        //console.log("props frm child is", this.props)
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body><input
                        onChange={this.handleHeader}
                        placeholder="enter title"
                        
                        /></Modal.Body>
                    <Modal.Body><input
                        onChange={this.handleDescription}
                        placeholder="enter description" /></Modal.Body>
                    <Modal.Body><input
                        placeholder="enter image url"
                        onChange={this.handleImageUrl}
                    /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
              </Button>
                        <Button variant="primary" onClick={() => { this.props.sendData(this.state) }} >
                            Save Changes
              </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalExample;