import React from 'react';
import './services.scss';

import ServiceList from '../../components/service-list/ServiceList.component';

const Servicespage = () => {
    return (
        <div className="services-page">
            <div className="row">
                <div className="col-12 cover">
                    <div className="d-flex">
                        <button className="btn font-weight-bold ml-auto btn-services">CHECK OUR PLANS</button>
                    </div>
                </div>
                <ServiceList />
            </div>
        </div>
    )
}

export default Servicespage;
