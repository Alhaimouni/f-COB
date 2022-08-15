import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './All.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='x'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >Code Fellows</Navbar.Brand>
      </Navbar>
      </div>
    )
  }
}

export default Footer;
