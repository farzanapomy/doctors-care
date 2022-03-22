import React from 'react';
import Services from '../../PrivatePages/Services/Services';
import Doctors from '../Doctors/Doctors';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>

            <Slider />
            <Doctors />
            <Services />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;