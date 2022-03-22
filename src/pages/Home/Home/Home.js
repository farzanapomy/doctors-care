import React from 'react';
import Services from '../../PrivatePages/Services/Services';
import About from '../About/About';
import Doctors from '../Doctors/Doctors';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>

            <Slider />
            <About></About>
            <Services></Services>
            <Doctors />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;