import React from 'react';
import banner from '../../Images/_DSC0095.JPG'
import banner1 from '../../Images/IMG_2246.jpg'
import './Us.css'

const Us = () => {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-12 col-lg-6 p-0'>
                    <img className=' img-fit' src={banner} alt="" />
                </div>
                <div className='col-12 col-lg-6 bg-primary'>

                    <div style={{ paddingTop: '150px' }} className='text-light  pe-5 ps-5'>
                        <h1 className='fw-bolder'>Why Us?</h1>
                        <p>Because every life deserves world-class care, and we are taking care of that</p>

                        <h5 className='fw-bold'>Our Impact :</h5>
                        <ul>
                            <li>Because every life deserves world-class care, and we are taking care of that</li>
                        </ul>
                        <h5 className='fw-bold'>Personalized care :</h5>
                        <ul>
                            <li>Providing personalized care for the most comfortable healthcare experience is the very culture of our clinic.</li>
                        </ul>
                        <h5 className='fw-bold'>Cutting edge Technologies :</h5>
                        <ul>
                            <li>We provide a clinic experience as per global standards using cutting-edge technologies for invasive as well as non-invasive treatments.</li>
                        </ul>
                        <h5 className='fw-bold'>Convenient Care :</h5>
                        <ul>
                            <li>Every facet of your care is coordinated, and teams of professionals collaborate to deliver the right care at the right time in the right location.</li>
                        </ul>
                        <h5 className='fw-bold'>Affordable Services :</h5>
                        <ul>
                            <li>We provide integrated healthcare services by combining medical expertise with affordability with an aim to make clinical services accessible to all the people on time</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '100px' }} className='row '>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <div className='w-75 no-wrap'>

                        <h1 className='text-start text-primary fw-bold'>Our Doctors</h1><br />
                        <p >We offer an up-to-date medical approach with 10 departments of expertise in an ethical and reliable environment with our experienced medical staff who continuously improve qualified healthcare with an uncompromising focus when it comes to proficiency and academic values.</p>
                    </div>
                </div>
                <div className='col-6'>
                    <img className='img-fluid' src={banner1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Us;