import React from 'react';
import './home-page.scss';

import Cover from '../../components/cover/Cover.component';
import ServiceList from '../../components/service-list/ServiceList.component';
import AboutUs from '../../components/about-us/AboutUs.component';
import Technologies from '../../components/technologies/Technologies.component';

const Home = () => {
    return (
        <div className="home-page">
            <Cover />
            <ServiceList />
            <AboutUs />
            <Technologies />
        </div>
    )
}

export default Home;
