import React from "react";
import "./Header.css";
import logo from "../../Pages/pic/khin.png";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand className="navbar-brand">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="nav-links justify-content-end flex-grow-1">
            <Nav.Link href="/" className="nav-link ps-3">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link ps-3">
              About
            </Nav.Link>
            <Nav.Link href="/skills" className="nav-link ps-3">
              Skills
            </Nav.Link>
            <Nav.Link href="/portfolio" className="nav-link ps-3">
              Portfolio
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link ps-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
