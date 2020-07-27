import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export class LandingComponent extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        return (
            isAuthenticated ? (
                <div className="center">
                    {user.role === 'Admin' ?
                        <div>
                            <Button color="danger mr-1"> Red Button</Button>
                            
                            <Button color="success">Green Button</Button>
                        </div> :
                        <div>
                            <Button color="success">Green Button</Button>
                        </div>}
                </div>) : <div className="center">Login to see access buttons</div>)
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(LandingComponent);