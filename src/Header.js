import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './All.css';
import LoginButton from './component/LoginButton';
import LogoutButton from './component/LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
        <div className='log'>
          <LoginButton />
          <LogoutButton />
        </div>
      </Navbar>
    )
  }
}

export default Header;
