import React from 'react';
import './about-us.scss';

const AboutUs = () => {
    return (
        <div className="about-us mt-5">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center font-weight-bold title">ABOUT US</h3>
                </div>
                <div className="col-6 mx-auto text-center parragraph">
                    <p>We are a passionate team and delighted with Web Development & Design.</p>
                    <p>In constant search for new and better Websites, Apps, and Platforms in order to 
                        give our clients the latest trending in Software Development.</p>
                    <p>Being creative and professional plus all our experience and knowledge is the 
                    combination that allows us to deliver big digital projects as you are looking for.</p>
                </div>
                <div className="col-12">
                    <div className="d-flex">
                        <button className="btn font-weight-bold mx-auto mt-5">CHECK OUR PLANS</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default AboutUs;