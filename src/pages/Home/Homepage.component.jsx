import React from 'react';
import './home-page.scss';

import Cover from '../../components/cover/Cover.component';
import ServiceList from '../../components/service-list/ServiceList.component';
import AboutUs from '../../components/about-us/AboutUs.component';

const Home = () => {
    return (
        <div className="home-page">
            <Cover />
            <ServiceList />
            <AboutUs />
        </div>
    )
}

export default Home;
