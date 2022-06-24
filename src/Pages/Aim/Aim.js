import React, { useEffect, useRef } from 'react';
import videoClip from '../../Images/coochbehar-polyclinic-video.mp4'

const Aim = () => {
    // const vidRef = useRef();

    // useEffect(() => { vidRef.current.play(); }, []);
    return (
        <div className='container'>
            <div className='row g-3'>
                <div className="col-12 col-lg-6 d-flex  align-items-center justify-content-center">
                    <div className='w-75'>
                        <h1 className='text-primary fw-bold'>Our Aim</h1>
                        <p>Maintain and manage a general medical clinic to adequately treat and manage general medical conditions in an environment where medical facilities are poor and inadequate.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex  align-items-center justify-content-center">
                    <div className='w-75'>
                        <video className='img-fluid'
                            src={videoClip}
                            // ref={vidRef}
                            muted
                            autoPlay
                            loop
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Aim;