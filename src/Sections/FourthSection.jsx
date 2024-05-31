import React from 'react';
import flora from "./../assets/folralbg.png"
import logo from "./../assets/logo.png"
import Button from '../Components/Button';
const FourthSection = () => {
    return (
        <div className='relative'>
            <img src={flora} alt="flora image" className='w-full min-h-[515px]'/>
            <div className='absolute top-0 right-40 flex flex-col justify-center items-center gap-6'>
                <img src={logo} alt="" className='max-w-[244px]'/>
                <h2 className='text-6xl text-center text-white capitalize font-medium'>Asesoría Amura</h2>
                <p className='contact-para w-3/5'>Encontramos el perfume perfecto para vos</p>
                <div className='bg-[#3C0C0C] px-8'>
                <Button text="Consultar" />
                </div>
            </div>
        </div>
    );
};

export default FourthSection;