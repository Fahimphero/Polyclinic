import React from 'react';
import { Container, Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap';
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';
import doctor from '../../Images/default.png'
import Ratings from '../Ratings/Ratings';
import './Doctors.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faLocationArrow, faLocationDot, faLocationPin, faLocationPinLock, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

const Doctors = () => {
    return (
        <div>
            <div className='bg-primary '>
                <div className='container d-flex justify-content-between  align-items-center text-light'>
                    <small className='my-1'><FontAwesomeIcon className='mx-4' icon={faLocationDot}></FontAwesomeIcon>P.V.N.N Road, Chaltala, Near SunityAcademy School, Coochbehar - 736101 <FontAwesomeIcon className='ms-3' icon={faPhone}></FontAwesomeIcon>
                        <a className='text-light text-style' href="tel:03582295002" >(035)-822-95002</a>
                        <FontAwesomeIcon className='ms-3' icon={faPhone}></FontAwesomeIcon><a className='text-light text-style' href="tel:7384092221" >(738)-409-2221</a></small>
                    <div className=' d-flex '>
                        <h4 className='m-0 py-2 px-3 hover-style-1'><FontAwesomeIcon className='' icon={faFacebook}></FontAwesomeIcon></h4>
                        <h4 className='py-2 px-3 m-0 hover-style-2'><FontAwesomeIcon className='' icon={faInstagram}></FontAwesomeIcon></h4>
                    </div>
                    {/* <h6><FontAwesomeIcon className='mx-4' icon={faFacebook}> </FontAwesomeIcon><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></h6> */}
                </div>
            </div>
            <Navbar sticky="top" bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
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
                            <Nav.Link as={Link} className='mx-2 text-dark' to='/'><span className='hover-style'>Home</span></Nav.Link>


                        </Nav>

                        <Button className='mx-2' variant="outline-primary">Make an Appoinment</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className=''>
                <div className='bg-primary'>
                    <div className='container'>
                        <div className='text-light py-5'>
                            <h6><Link className='me-2 text-light' to='/'><span >Home</span></Link> {'>>'} <span className='ms-2'>Meet The Doctors</span></h6>
                            <h3 className='fw-bold'>Meet The Doctors</h3>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container '>
                {/* <h1 className='text-primary text-center fw-bold mb-5'>Medical Specialists</h1> */}
                <div className='row g-3 mt-5'>
                    <div className="col-12 col-lg-4  rounded-3 ">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Soumen Chakraborty</h5>
                            <p className='text-primary'>General Surgeon</p>
                            <p >Dr. Soumen Chakraborty is an established and reputed General Surgeon. He is practicing for the last 15 years and He has succeeded to heal more than 108000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 rounded-3 ">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Atanu Majumdar</h5>
                            <p className='text-primary'>Neuropsychiatrist</p>
                            <p >Dr. Atanu Majumdar is an established and reputed Neuropsychiatrist. He is practicing for the last 13 years and He has succeeded to heal more than 120000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4  rounded-3">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Atanu Majumdar</h5>
                            <p className='text-primary'>Neuropsychiatrist</p>
                            <p >Dr. Atanu Majumdar is an established and reputed Neuropsychiatrist. He is practicing for the last 13 years and He has succeeded to heal more than 120000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4  rounded-3 ">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Soumen Chakraborty</h5>
                            <p className='text-primary'>General Surgeon</p>
                            <p >Dr. Soumen Chakraborty is an established and reputed General Surgeon. He is practicing for the last 15 years and He has succeeded to heal more than 108000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 rounded-3 ">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Atanu Majumdar</h5>
                            <p className='text-primary'>Neuropsychiatrist</p>
                            <p >Dr. Atanu Majumdar is an established and reputed Neuropsychiatrist. He is practicing for the last 13 years and He has succeeded to heal more than 120000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4  rounded-3">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Atanu Majumdar</h5>
                            <p className='text-primary'>Neuropsychiatrist</p>
                            <p >Dr. Atanu Majumdar is an established and reputed Neuropsychiatrist. He is practicing for the last 13 years and He has succeeded to heal more than 120000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4  rounded-3 ">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Soumen Chakraborty</h5>
                            <p className='text-primary'>General Surgeon</p>
                            <p >Dr. Soumen Chakraborty is an established and reputed General Surgeon. He is practicing for the last 15 years and He has succeeded to heal more than 108000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 rounded-3 ">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Atanu Majumdar</h5>
                            <p className='text-primary'>Neuropsychiatrist</p>
                            <p >Dr. Atanu Majumdar is an established and reputed Neuropsychiatrist. He is practicing for the last 13 years and He has succeeded to heal more than 120000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4  rounded-3">
                        <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3 hover'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Atanu Majumdar</h5>
                            <p className='text-primary'>Neuropsychiatrist</p>
                            <p >Dr. Atanu Majumdar is an established and reputed Neuropsychiatrist. He is practicing for the last 13 years and He has succeeded to heal more than 120000+ patients till now.</p>
                            <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Book Appointment</button></p>
                        </div>
                    </div>
                </div>

                {/* <p className='text-center text-light mt-4'><button className='btn btn-primary px-4'>Meet All Doctors</button></p> */}
            </div>
            <Ratings></Ratings>
        </div>
    );
};

export default Doctors;