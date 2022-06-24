import { faFlaskVial, faHandHoldingMedical, faHeartCircleCheck, faHeartPulse, faInfo, faInfoCircle, faPills, faVirusCovid, faXRay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Slider from "react-slick";
import banner from '../../Images/polyclinic 1.jpg'
import './Care.css'

export default class Care extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 3,
            // autoplay: true,
            speed: 3000,
            // autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="custom-bg container-fluid" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
                <div className="container">
                    <div>
                        <div className="mx-4">
                            <h2 className='text-primary fw-bold text-center'>Total Health Care Solutions</h2>
                            <p style={{ color: '#888' }}>we have fine-tuned our model of care to ensure the best possible outcome and experience of care for our patients. Our beginning-to-end care cycle helps the patients to enjoy their journey to better health. We offer a state-of-the-art laboratory for on-site testing as well as comprehensive services including:</p>
                        </div>
                        <div className="mt-5">

                            <Slider {...settings}>
                                <div className="text-center">
                                    <div className="m-2  bg-light">
                                        <div style={{ height: '470px' }} className="shadow p-5 rounded-3">
                                            <div>
                                                <h1><FontAwesomeIcon className="bg-primary rounded-circle text-white p-3" icon={faPills}></FontAwesomeIcon></h1>
                                            </div>
                                            <h5 className="text-primary fw-bold">PHARMACY SERVICES</h5>
                                            <p style={{ color: '#888' }}>
                                                All types of prescribed medicines are available in our
                                                clinic, at an affordable price.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="m-2  bg-light">
                                        <div style={{ height: '470px' }} className="shadow p-5 rounded-3">
                                            <div>   <h1 className="text-center text-primary"><FontAwesomeIcon className="bg-primary rounded-circle text-white p-3" icon={faXRay}></FontAwesomeIcon></h1></div>
                                            <h5 className="text-primary fw-bold">X-RAY DIAGNOSTIC</h5>
                                            <p style={{ color: '#888' }}>
                                                We provide you with a complete range of advanced,
                                                high-quality diagnostic imaging tests and image-guided
                                                treatments in a caring, safe and efficient environment. Any
                                                kind of Digital X-Ray is available in our clinic.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="m-2  bg-light">
                                        <div style={{ height: '470px' }} className="shadow p-5 rounded-3">
                                            <div>
                                                <h1 className="text-center text-primary"><FontAwesomeIcon className="bg-primary rounded-circle text-white p-3" icon={faFlaskVial}></FontAwesomeIcon></h1>
                                            </div>
                                            <h5 className="text-primary fw-bold">LABORATORY TEST</h5>
                                            <p style={{ color: '#888' }}>
                                                We offer a full range of in-house laboratory services
                                                including blood tests and urine tests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="m-2  bg-light">
                                        <div style={{ height: '470px' }} className="shadow p-5 rounded-3">
                                            <div>
                                                <h1 className="text-center text-primary"><FontAwesomeIcon className="bg-primary rounded-circle text-white p-3" icon={faHeartPulse}></FontAwesomeIcon></h1>
                                            </div>
                                            <h5 className="text-primary fw-bold">
                                                ECG
                                            </h5>
                                            <p style={{ color: '#888' }}>

                                                With our ECG monitoring device, you can record medical-grade
                                                ECG anytime from home.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="m-2  bg-light">
                                        <div style={{ height: '470px' }} className="shadow p-5 rounded-3">
                                            <div>
                                                <h1 className="text-center text-primary"><FontAwesomeIcon className="bg-primary rounded-circle text-white p-3" icon={faHeartCircleCheck}></FontAwesomeIcon></h1>
                                            </div>
                                            <h5 className="text-primary fw-bold">BLOOD PRESSURE CHECKUP</h5>
                                            <p style={{ color: '#888' }}>
                                                We provide blood pressure checks with great care and at a
                                                reasonable cost.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="m-2  bg-light">
                                        <div style={{ height: '470px' }} className="shadow p-5 rounded-3">
                                            <div>
                                                <h1 className="text-center text-primary"><FontAwesomeIcon className="bg-primary rounded-circle text-white p-3" icon={faVirusCovid}></FontAwesomeIcon></h1>
                                            </div>
                                            <h5 className="text-primary fw-bold">COVID19-TEST</h5>
                                            <p style={{ color: '#888' }}>
                                                RTPCR testing facility is available in our chamber.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center ">
                                    <div className="m-2  bg-light">
                                        <div style={{ height: '470px' }} className="shadow p-5 rounded-3">
                                            <div>
                                                <h1 className=" text-primary"><FontAwesomeIcon className="bg-primary rounded-circle text-white p-3" icon={faHandHoldingMedical}></FontAwesomeIcon></h1>
                                            </div>
                                            <h5 className="text-primary fw-bold">PHYSIOTHERAPY</h5>
                                            <p style={{ color: '#888' }}>
                                                Our physiotherapy packages are designed to develop and
                                                maintain optimum movement/function and provide relief from
                                                pain.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div >
                    </div>
                </div>
            </div >
        );
    };

}