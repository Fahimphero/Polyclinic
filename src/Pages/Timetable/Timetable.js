import React from 'react';
import './Timetable.css'

const Timetable = () => {
    return (
        <div style={{ marginBottom: '100px' }} className='container'>
            <div style={{ marginTop: '-100px', marginRight: '6vw', marginLeft: '6vw' }} className='row text-light ' id='time-table'>
                <div className='col-6 col-lg-3 px-3 pt-4 pb-0 background1 rounded-3'>
                    <h3>Excellence</h3>
                    <hr />
                    <p>We support the best standard of care, personal and professional growth</p>
                </div>
                <div className='col-6 col-lg-3 pt-4 pb-0  background2 rounded-3'>
                    <h3>Dignity</h3>
                    <hr />
                    <p>For us, patients come first. We honour and respect every person we encounter as a valued part of the human family.</p>
                </div>
                <div className='col-6 col-lg-3 pt-4 pb-0  background3 rounded-3'>
                    <h3>Well being</h3>
                    <hr />
                    <p>We promote the full integration of our patient’s physical and mental health in order to enable them to participate in their own health improvement</p>
                </div>
                <div className='col-6 col-lg-3 pt-4 pb-0  background4 rounded-3'>
                    <h3>Time Table</h3>
                    <hr />
                    <table class="text-light table table-striped-columns">
                        <tbody>
                            <tr>
                                <td>Mon – Tue</td>
                                <td>-</td>
                                <td class="text-right">9:00 AM - 9:00 PM</td>
                            </tr>
                            <tr>
                                <td>Wed - Thu</td>
                                <td>-</td>
                                <td class="text-right">9:00 AM - 9:00 PM</td>
                            </tr>
                            <tr>
                                <td>Fri - Sat</td>
                                <td>-</td>
                                <td class="text-right">9:00 AM - 9:00 PM</td>
                            </tr>
                            <tr class="last-tr">
                                <td>Sun</td>
                                <td>-</td>
                                <td class="text-right">CLOSED</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Timetable;