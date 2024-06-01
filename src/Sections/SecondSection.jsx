import React from 'react';
import Carousel from '../Components/Carousel';
import ThiredSection from './ThiredSection';

const SecondSection = () => {
    return (
        <div className='idea -mt-5 md:py-36 pt-12 pb-4'>
            <h2 className='md:text-7xl text-2xl text-white uppercase text-center md:pb-32 pb-4'>Ideas para Regalar</h2>
            <Carousel />
            <h2 className='md:text-7xl text-2xl text-white capitalize text-center md:pt-32 pt-4 pb-32'>La colección de amura</h2>
        <ThiredSection />
        </div>
    );
};

export default SecondSection;