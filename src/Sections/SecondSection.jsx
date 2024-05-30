import React from 'react';
import Carousel from '../Components/Carousel';

const SecondSection = () => {
    return (
        <div className='idea -mt-5 py-36'>
            <h2 className='text-7xl text-white uppercase text-center'>Ideas para Regalar</h2>
            <Carousel />
            <h2 className='text-7xl text-white capitalize text-center'>La colección de amura</h2>
        </div>
    );
};

export default SecondSection;