import { faBed, faClinicMedical, faHeart, faHeartbeat, faHospital, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Ratings.css'

const Ratings = () => {
    return (
        <div style={{ marginTop: '100px', marginBottom: '100px' }} className='container-fluid'>
            <div className="row py-5 background-img px-5 gy-3">
                <div className="col-12 col-lg-4">
                    <div className='text-center'>
                        <h1 style={{ fontSize: '60px' }}><FontAwesomeIcon icon={faHeartbeat}></FontAwesomeIcon></h1>
                        <h1 className='fw-bold'>10,632</h1>
                        <h5>Happy Patients</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className='text-center'>
                        <h1 style={{ fontSize: '60px' }}><FontAwesomeIcon icon={faUserDoctor}></FontAwesomeIcon></h1>
                        <h1 className='fw-bold'>13</h1>
                        <h5>Qualified Doctors</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className='text-center'>
                        <h1 style={{ fontSize: '60px' }}><FontAwesomeIcon icon={faBed}></FontAwesomeIcon></h1>
                        <h1 className='fw-bold'>6</h1>
                        <h5>Clinic Rooms</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ratings;