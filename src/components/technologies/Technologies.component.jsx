import React from 'react';
import './technologies.scss';

import Wordpress from './assets/wordpress-logo.png';
import Webpay from './assets/web-pay.png';
import Laravel from './assets/laravel.png';
import Magento from './assets/magento.png';
import Salesforce from './assets/sales-force.png';
import Sap from './assets/sap.png';
import Node from './assets/node.png';
import Vue from './assets/vue.png';
import Angular from './assets/angular.png';

const Technologies = () => {
    return (
        <div className="technologies">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mt-5">TECHNOLOGIES USED</h2>
                </div>
                <div className="col-6 text-left parragraph">
                    <p>Our developer team is constantly improving their skills to apply them in future projects.</p>
                    <p>Finding out the main goal of the project, help us to know which technology is better to implement, 
                        and that allows us to provide you the best solution.</p>
                </div>
                <div className="col-6 mt-5">
                    <div className="row">
                        <div className="col-11">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://wordpress.org/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Wordpress} alt="wordpress-logo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://publico.transbank.cl/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Webpay} alt="wordpress-logo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://laravel.com/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Laravel} alt="wordpress-logo"/>
                                        </a>                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://magento.com/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Magento} alt="wordpress-logo"/>
                                        </a>                                        
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://www.salesforce.com/es/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Salesforce} alt="wordpress-logo"/>
                                        </a>                                        
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://www.sap.com/index.html" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Sap} alt="wordpress-logo"/>
                                        </a>                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Node} alt="wordpress-logo"/>
                                        </a>                                        
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://vuejs.org/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Vue} alt="wordpress-logo"/>
                                        </a>                                        
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <a href="https://angular.io/" rel="noopener noreferrer" target="_blank">
                                            <img className="img-fluid img-resposive image" src={Angular} alt="wordpress-logo"/>
                                        </a>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;
