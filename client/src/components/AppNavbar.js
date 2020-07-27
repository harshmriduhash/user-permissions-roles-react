import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    NavbarBrand
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import { NavLink } from 'react-router-dom';


export class AppNavbar extends Component {
    state = {
        isOpen: false
    };


    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>

            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>

            </Fragment>

        )
        return (
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>User Roles and Permissions Task</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);