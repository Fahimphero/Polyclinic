import React, { useEffect, useRef } from 'react';
import videoClip from '../../Images/coochbehar-polyclinic-video.mp4'

const Aim = () => {
    const vidRef = useRef();

    useEffect(() => { vidRef.current.play(); }, []);
    return (
        <div style={{ marginTop: ' 100px', marginBottom: ' 100px' }} className='conatiner '>
            <div className="row ">
                <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center px-5">
                    <div className='w-75'>
                        <h1 className='text-primary fw-bold'>Our Aim</h1>
                        <p>Maintain and manage a general medical clinic to adequately treat and manage general medical conditions in an environment where medical facilities are poor and inadequate.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div >
                        <video className='w-75'
                            src={videoClip}
                            ref={vidRef}
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