import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';

export class CardHolder extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default  withAuth0(CardHolder);
