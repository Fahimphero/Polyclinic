import React from 'react';
import { Container, Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap';
import logo from '../../Images/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (


        <Navbar sticky="top" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Coochbehar polyclinic
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='mx-2 text-dark' href="/"><span className='hover-style'>Home</span></Nav.Link>
                        <Nav.Link className='mx-2 text-dark' href="#about"><span className='hover-style'>About</span></Nav.Link>
                        <Nav.Link className='mx-2 text-dark' href="#time-table"><span className='hover-style'>Timetable</span></Nav.Link>
                        <Nav.Link as={Link} className='mx-2 text-dark' to="/all-doctors"><span className='hover-style'>Our Doctors</span></Nav.Link>

                    </Nav>

                    <Button className='mx-2' variant="outline-primary">Make an Appoinment</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;