import React from 'react';
import './service-list.scss';

import Corporativo from './assets/corporativo.svg';
import Responsive from './assets/responsive-design.svg';
import Ecommerce from './assets/e-commerce.svg';
import MobileApp from './assets/mobile-app.svg';
import Intranet from './assets/intranet.svg';
import Integrations from './assets/integrations.svg';
import Design from './assets/design.svg';
import WebDevelopment from './assets/web-development.svg';

import Service from '../service/Service.component';


const ServiceList = () => {
    return (
        <div className="service-list">
            <div className="row mx-auto">
                <div className="col-12 mx-auto">
                    <h2 className="text-center mt-5 mb-5">SERVICES</h2>
                </div>
                <div className="col-3">
                    <Service image={Corporativo} title={"CORPORATIVE"} />
                </div>
                <div className="col-3">
                    <Service image={Responsive} title={"RESPONSIVE"} />
                </div>
                <div className="col-3">
                    <Service image={Ecommerce} title={"E-COMMERCE"} />
                </div>
                <div className="col-3">
                    <Service image={MobileApp} title={"MOBILE APPS"} />
                </div>
                <div className="col-3 mt-5">
                    <Service image={Intranet} title={"INTRANET"} />
                </div>
                <div className="col-3 mt-5">
                    <Service image={Integrations} title={"INTEGRATIONS"} />
                </div>
                <div className="col-3 mt-5">
                    <Service image={Design} title={"DESIGN"} />
                </div>
                <div className="col-3 mt-5">
                    <Service image={WebDevelopment} title={"WEB DEVELOPMENT"} />
                </div>
            </div>
        </div>
    )
}

export default ServiceList;
