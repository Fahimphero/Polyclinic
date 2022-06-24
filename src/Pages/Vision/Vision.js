import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../Images/polyclinic 1.jpg'
import './Vision.css'


const Vision = () => {
    return (
        <div style={{ marginTop: '200px' }} className='container-fluid background-img-style'>
            <div className="row gy-3">

                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <div style={{ marginTop: '-100px' }} className='w-50'>
                        <img className='img-fluid' src={banner} alt="" />
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                    <div className='w-75'>
                        <h1>Vision</h1>
                        <p>To improve the lives of our patients through our services to help them become more knowledgeable and responsible for their own health. We are advocates for our patients.</p>
                        <button className='btn btn-inherit border border-light btn-hover mb-4'><Link className='text-light text-style' to='/all-doctors'>View Our Doctors</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;