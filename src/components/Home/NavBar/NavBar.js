import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'
import './NavBar.css';


const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home"><img className="logo-img" src={logo} alt=""/><span  className="blue-color">GENIUS COACHING</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ml-xs-auto">
            <Link  className="blue-color pr-5" href="#home">Home</Link>
            <Link className="blue-color pr-5" href="#link">Services</Link>
            <Link className="blue-color pr-5" to="/dashboard">Dash Board</Link>
            <Link className="blue-color pr-5" href="#link">Contact Us</Link>
            <Link className="blue-color pr-5" href="/admin">Admin</Link>
            <Link className="blue-color" to="/login"><div className="btn btn-primary">Login</div></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
