import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Events from './Events/Events';
import Future from './Future/Future';
import Gallary from './Gallary/Gallary';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Services></Services>
           <Events></Events>
           <Future></Future>
           <Gallary></Gallary>
        </>
    );
};

export default Home;