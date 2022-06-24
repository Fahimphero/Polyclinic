import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap';
import logo from '../../Images/logo.png'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col text-dark">
                    <div className='d-flex align-items-center mb-3'>
                        <div style={{ width: '40px' }} >
                            <img className='img-fluid' src={logo} alt="" />

                        </div>
                        <h5 className='m-0 fw-bold'> Coochbehar polyclinic</h5>
                    </div>
                    <p>" Your Health is our Priority "
                        We are committed to providing advanced and affordable treatment to every patient.</p>
                    <p className='fs-5'>
                        <span className=''>
                            <a className='text-style text-dark' href="https://www.facebook.com/cobpoly/" target="_blank" rel='noreferrer'>  <FontAwesomeIcon className=' border border-dark rounded-circle px-2 py-2 hover-color-1' icon={faFacebook}></FontAwesomeIcon>
                            </a>

                        </span>
                        <span className=''>
                            <a className='text-style text-dark ' href="https://www.instagram.com/coochbeharpolyclinic/" target="_blank" rel='noreferrer'> <FontAwesomeIcon className='border border-dark rounded-circle px-2 py-2 hover-color-2' icon={faInstagram}></FontAwesomeIcon></a>
                        </span>

                    </p>
                </div>
                <div className="col">
                    <h5 className='fw-bold mb-4'>Our Location</h5>
                    <p className='m-0'>P.V.N.N Road, Chaltala, Near </p>
                    <p className='m-0'>SunityAcademy School</p>

                    <p className='m-0'>Coochbehar - 736101</p>

                </div>
                <div className="col">
                    <h5 className='fw-bold'>Working Time</h5>
                    <p className='mt-4 mb-0'>Mon - Tue- <span className='fw-bold'>9:00 AM - 9:00 PM</span></p>
                    <p className='m-0'>Wed - Thu - <span className='fw-bold'>9:00 AM - 9:00 PM</span></p>
                    <p className='m-0'>Fri - Sat - <span className='fw-bold'>9:00 AM - 9:00 PM</span></p>
                    <p className='m-0'>Sun - <span className='fw-bold'>Closed</span></p>
                </div>
                <div className="col">
                    <h5 className='fw-bold mb-4'>Contact Us</h5>
                    <h3 className='text-primary fw-bold'>035-822-95002</h3>
                    <p className='mb-0'>We believe that patients deserve to have timely access to healthcare and that our system should reflect this value.</p>
                    <div className='d-flex justify-content-center align-items-center fw-bold'>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        <p className='mt-4 ps-1 pb-2'>
                            <a className="text-dark text-style" href=" mailto:/support@coochbeharpolyclinic.com ">support@coochbeharpolyclinic.com
                            </a></p>
                    </div>
                </div>

            </div>
            <hr />
            <small className='pb-5'>© 2022 <span ><a className='text-style' style={{ color: 'orange' }} href="https://mediqueue.in/">Mediqueue</a></span>. All Rights Reserved</small>
        </div>
    );
};

export default Footer;