import React from 'react';
import './cover.scss';

const Cover = () => {
    return (
        <div className="cover">
            <div className="row">
                <div className="col-8 mx-auto">
                    <h3 className="text-center font-weight-bold mb-5">OUR MAIN GOLA IS MAKE YOU DIFFERENT:</h3>
                    <h1 className="text-center font-weight-bold">WE CREATE DIGITAL PLATFORMS WITH UNIQUE EXPERIENCE...</h1>
                    <div className="d-flex">
                        <button className="btn font-weight-bold mx-auto mt-5">CHECK OUR PLANS</button>
                    </div>
                </div>
            </div>
            <div className="down-arrow">
                <span className="down-arrow-item">&#42780;</span>
            </div>
        </div>
    )
}

export default Cover;