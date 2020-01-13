import React from 'react';
import './service.scss';

const Service = ({ image, title }) => {

    return (
        <div className="service">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">                            
                            <div className="card-body">
                                <img className="img-fluid img-responsive image mx-auto d-block" src={image} alt="Servicio-corporativo"/>
                            </div>
                            <div className="card-title">
                                <h4 className="text-center mt-3">{title}</h4>
                            </div>
                            <div className="right-arrow">
                                <span className="right-arrow-item">	&#10095;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;
