import React from 'react';
import company from '../../Images/mediqueue.png'
import googleplay from '../../Images/en_badge_web_generic.png'

const Booking = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <img className='img-fluid' src={company} alt="" />
                </div>

                <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-around">
                    <div className='ps-5'> <h1 className='text-primary fw-bold'>Say Hi to our New Digital</h1>
                        <h1 className='text-primary fw-bold'>Assistant</h1><br />
                        <p><span className='text-primary'> {'>>'} </span> Book online Appointments from Home</p>
                        <p><span className='text-primary'> {'>>'} </span>Get information regarding Doctor’s timing schedule</p>
                        <p><span className='text-primary'> {'>>'} </span>Track your position in the queue at any time from anywhere.</p>
                        <p><span className='text-primary'> {'>>'} </span>Get a guide to reach our Chamber.</p>
                        <p><span className='text-primary'> {'>>'} </span>All patient’s Data are stored digitally and securely</p>
                        <p><span className='text-primary'> {'>>'} </span>We provide all these facilities through mediqueue. Get the app on the play store.</p>
                        <a target='_blank' rel='noreferrer' href='https://play.google.com/store/apps/details?id=in.reactova.mediqueue&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' alt> <img className='w-25' src={googleplay} alt="" /></a></div>
                </div>

            </div>

        </div >
    );
};

export default Booking;