import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        role: 'Admin',
        msg: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            //Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            }
            else {
                this.setState({ msg: null });
            }
        }
        //If authenticated close the modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }
    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const { name, email, password, role } = this.state;
        //Create a user object
        const newUser = {
            name, email, password, role
        };
        //Attempt to register
        this.props.register(newUser);
    }

    render() {
        return (
            <div>
                <NavLink href="#" onClick={this.toggle}>
                    Register
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="mb-3"
                                    onChange={this.onChange} />
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange} />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange} />
                                <Label for="role">Role</Label>
                                <Input type="select" name="role" id="role" onChange={this.onChange}>
                                    <option disabled="true" className="disabled">Select a roll</option>
                                    <option>Admin</option>
                                    <option>Customer</option>
                                </Input>
                                <Button color='dark' style={{ marginTop: '2rem' }} block>Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
//clearErrors and register can be accessed by this.props.
export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);