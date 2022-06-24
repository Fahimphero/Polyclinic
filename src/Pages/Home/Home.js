import React, { Component } from "react";
import image1 from '../../Images/IMG_2211.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Home.css'
import Typewriter from 'typewriter-effect';
import Timetable from "../Timetable/Timetable";
import Welcome from "../Welcome/Welcome";
import Care from "../Care/Care";
import Us from "../Us/Us";
import Specialists from "../Specialists/Specialists";
import Ratings from "../Ratings/Ratings";
import Booking from "../Booking/Booking";
import Services from "../Services/Services";
import Visitors from "../Visitors/Visitors";
import Aim from "../Aim/Aim";
import Vision from "../Vision/Vision";
import Header from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faLocationArrow, faLocationDot, faLocationPin, faLocationPinLock, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
        };
        return (
            <div className="">
                <div className='bg-primary '>
                    <div className='container d-flex justify-content-between  align-items-center text-light'>
                        <small className='my-1'><FontAwesomeIcon className='mx-1' icon={faLocationDot}></FontAwesomeIcon>P.V.N.N Road, Chaltala, Near SunityAcademy School, Coochbehar - 736101 <FontAwesomeIcon className='ms-3 me-1' icon={faPhone}></FontAwesomeIcon>
                            <a className='text-light text-style' href="tel:03582295002" >(035)-822-95002</a>
                            <FontAwesomeIcon className='ms-3 me-1' icon={faPhone}></FontAwesomeIcon><a className='text-light text-style' href="tel:7384092221" >(738)-409-2221</a></small>

                        <div className=' d-flex '>
                            <h4 className='m-0 py-2 px-3 hover-style-1'>
                                <a className='text-style text-light' href="https://www.facebook.com/cobpoly/" target="_blank" rel='noreferrer'>
                                    <FontAwesomeIcon className='' icon={faFacebook}></FontAwesomeIcon></a></h4>
                            <h4 className='py-2 px-3 m-0 hover-style-2'><a className='text-style text-light ' href="https://www.instagram.com/coochbeharpolyclinic/" target="_blank" rel='noreferrer'> <FontAwesomeIcon className='' icon={faInstagram}></FontAwesomeIcon></a></h4>
                        </div>
                        {/* <h6><FontAwesomeIcon className='mx-4' icon={faFacebook}> </FontAwesomeIcon><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></h6> */}
                    </div>
                </div>
                <Header></Header>
                <div className="">
                    <div className="background img-fluid">
                        <div style={{ paddingTop: '50px', paddingLeft: '50vw' }} className="d-flex ">
                            <div >
                                <h1 style={{ fontSize: '6vw' }} className="fw-bolder text-primary">YOUR HEALTH </h1>
                                <h1 style={{ paddingLeft: '20vw', fontSize: '6vw' }} className="fw-bolder text-primary ">IS OUR </h1>
                                <h1 style={{ paddingLeft: '14vw', fontSize: '6vw', color: 'royalblue' }} className="fw-bolder">
                                    <Typewriter
                                        options={{
                                            strings: ['PRIORITY', 'MISSION'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    /></h1>
                                <p style={{ paddingLeft: '1vw' }} className="text-dark fw-bolder shadow-lg">We are committed to providing advanced and affordable treatment to every patient.</p>
                            </div>
                        </div>
                    </div>

                    {/* </Slider> */}
                </div>
                <Timetable></Timetable>
                <Welcome></Welcome>
                <Care></Care>
                <Us></Us>
                <Specialists></Specialists>
                <Ratings></Ratings>
                <Booking></Booking>
                <Services></Services>
                <Visitors></Visitors>
                <Aim></Aim>
                <Vision></Vision>
            </div>
        );
    }
}