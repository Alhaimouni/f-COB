import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import CardHolder from './CardHolder';
class Profile extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    if (isAuthenticated) {
        return (<CardHolder/>);
    }else {
        return (<p>Login please</p>);
    }
  }
}

export default withAuth0(Profile);