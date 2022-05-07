import React, {useState, Component} from 'react';
import { Link } from  'react-router-dom';

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';


export default class NavbarComp extends Component {
    render() {
        return (
        
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>splendi</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"about"}>about</Nav.Link>
                            <Nav.Link as={Link} to={"tour"}>tour</Nav.Link>
                            <Nav.Link as={Link} to={"merch"}>merch</Nav.Link>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>

            </div>
        
        );
    }
}