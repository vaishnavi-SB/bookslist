import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/icons/book-open-reader-solid.svg";

const header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} style={{ height: "30px", width: "30px" }}></img>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/books">
            <Nav.Link>Books</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/authors">
            <Nav.Link>Authors</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;
