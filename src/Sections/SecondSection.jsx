import React from 'react';
import Carousel from '../Components/Carousel';
import ThiredSection from './ThiredSection';

const SecondSection = () => {
    return (
        <div className='idea -mt-5 py-36'>
            <h2 className='text-7xl text-white uppercase text-center pb-32'>Ideas para Regalar</h2>
            <Carousel />
            <h2 className='text-7xl text-white capitalize text-center pt-32 pb-32'>La colección de amura</h2>
        <ThiredSection />
        </div>
    );
};

export default SecondSection;