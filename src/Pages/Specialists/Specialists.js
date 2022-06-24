import React from 'react';
import doctor from '../../Images/default.png'
import { Link } from 'react-router-dom';
import './Specialists.css'

const Specialists = () => {
    return (
        <div style={{ marginTop: '200px' }} className='container '>
            <h1 className='text-primary text-center fw-bold mb-5'>Medical Specialists</h1>
            <div className="row gy-3">
                <div className="col-12 col-lg-3 ">
                    <img className='img-fluid ' src={doctor} alt="" />
                    <div className='text-center display-btn'>
                        <button className='btn border border-dark btn-hover'>Book Appointment</button>
                    </div>
                    <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Soumen Chakraborty</h5>
                    <p className='text-primary'>General Surgeon</p>
                    <p >Dr. Soumen Chakraborty is an established and reputed General Surgeon. He is practicing for the last 15 years and He has succeeded to heal more than 108000+ patients till now.</p>
                </div>
                <div className="col-12 col-lg-3">
                    <img className='img-fluid' src={doctor} alt="" />
                    <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Atanu Majumdar</h5>
                    <p className='text-primary'>Neuropsychiatrist</p>
                    <p >Dr. Atanu Majumdar is an established and reputed Neuropsychiatrist. He is practicing for the last 13 years and He has succeeded to heal more than 120000+ patients till now.</p>
                </div>
                <div className="col-12 col-lg-3">
                    <img className='img-fluid' src={doctor} alt="" />
                    <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Amlan Bhadra</h5>
                    <p className='text-primary'>Orthopedic Surgeon</p>
                    <p >Dr. Amlan Bhadra is an established and reputed Orthopedic Surgeon. He is practicing for the last 11 years and He has succeeded to heal more than 100000+ patients till now.</p>
                </div>
                <div className="col-12 col-lg-3">
                    <img className='img-fluid' src={doctor} alt="" />
                    <h5 className='mt-3 mb-0 text-primary fw-bold'>Dr. Alok Santra</h5>
                    <p className='text-primary'>Obstetricians & Gynecologist</p>
                    <p>Dr. Alok Santra is an established and reputed Obstetricians and Gynecologist. He is practicing for the last 8 years and He has succeeded to heal more than 75000+ patients till now.</p>
                </div>
            </div>
            <p className='text-center mt-4'><button className='btn btn-primary px-4'><Link className='text-decoration' to='/all-doctors'><span className='text-light'>Meet All Doctors</span></Link></button></p>
        </div>
    );
};

export default Specialists;