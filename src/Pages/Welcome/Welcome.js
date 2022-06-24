import { faFlaskVial, faHandHoldingMedical, faHeartCircleCheck, faHeartPulse, faInfo, faInfoCircle, faPills, faVirusCovid, faXRay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Slider from "react-slick";
import banner from '../../Images/polyclinic 1.jpg'
import './Welcome.css'

export default class Welcome extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        };
        return (
            <div className='container' id="about">
                <div className='row gy-3'>
                    <div className='col-12 col-lg-6'>
                        <img className='img-fluid' src={banner} alt="" />
                    </div>
                    <div className='col-12 col-lg-6 d-flex align-items-center'>
                        <div className='d-flex flex-column justify-content-center align-items-center px-5'>
                            <h4 className='text-primary'>Welcome To</h4>
                            <h1 className='text-primary fw-bold'>CoochBehar Polyclinic</h1>
                            <p>Over the years we have grown to offer a comprehensive range of top-quality healthcare services across the region and we are popular for our quality care and emergency services.
                                Being one of the leading healthcare practice center in Cooch Behar, we offer our patients several alternative highly-effective methods of treatment specifically designed to meet their individual needs.</p>
                        </div>
                    </div>
                </div>

            </div >
        );
    };
}
