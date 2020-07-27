import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class LandingComponent extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        return (
            isAuthenticated ? (
                <div className="center">{user.name} kindly go to home page route to see accessible buttons</div>) : <div className="center">Login to see access buttons</div>)
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(LandingComponent);