import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFlaskVial, faHandHoldingMedical, faHeartCircleCheck, faHeartPulse, faHome, faInfo, faInfoCircle, faMedkit, faPills, faUserInjured, faVirusCovid, faXRay } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div style={{ marginTop: '100px', marginBottom: '100px' }} className='container'>
            <h1 className='text-center'>Services At Home</h1>
            <p className='text-center'>Being sick and weak makes it difficult for many patients, especially elder ones to visit the lab. Additionally visiting a lab also makes one dependent on others, as many times it is a bit risky for a sick person to visit alone. So to reward some comfort to our patients, we provide:</p>
            <div className='row g-3'>
                <div className="col-12 col-lg-4  rounded-3 ">
                    <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3'>
                        <h1 style={{ fontSize: '70px' }}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></h1>
                        <h4>Home Delivery of</h4>
                        <h4>medicine</h4>
                        <h1 className='fw-bolder'>FREE!</h1>
                        <p>Save your time and get medicines delivered at your doorstep with our Medicine Delivery at home Services. We assure you of round-the-clock services along with providing you auto refills as and when your medicine supply draws to a close.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-4 rounded-3 ">
                    <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3'>
                        <h1 style={{ fontSize: '70px' }}><FontAwesomeIcon icon={faMedkit}></FontAwesomeIcon></h1>
                        <h4>Blood Sample collection</h4>
                        <h4>from home</h4>
                        <h1 className='fw-bolder'>FREE!</h1>
                        <p>With our home collection service, you have the convenience of getting blood tests at home at an affordable price without compromising on your safety.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-4  rounded-3">
                    <div className='text-primary text-center pt-5 px-4 shadow-lg h-100 rounded-3'>
                        <h1 style={{ fontSize: '70px' }}><FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon></h1>
                        <h4 className='mb-5'>ECG service at home</h4>

                        <h1 className='fw-bolder'>FREE!</h1>
                        <p>Timely and precise ECG monitoring is very important for heart patients. With our ECG monitoring device, you can record medical-grade ECG anytime, anywhere.</p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-5'><strong>Note!</strong> We provide all these services only at Cooch Behar city for free!</p>
        </div>
    );
};

export default Services;