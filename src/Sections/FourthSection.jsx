import React from 'react';
import flora from "./../assets/folralbg.png"
import floraMobile from "./../assets/floralbgmobile.png"
import logo from "./../assets/logo.png"
import Button from '../Components/Button';
const FourthSection = () => {
    return (
        <div className='relative'>
            <img src={flora} alt="flora image" className='w-full min-h-[515px] max-[600px]:hidden'/>
            <img src={floraMobile} alt="flora image" className='w-full min-[600px]:hidden'/>
            <div className='absolute top-0 md:right-40 flex flex-col justify-center items-center md:gap-6 gap-3'>
                <img src={logo} alt="" className='md:max-w-[244px] max-w-[104px]'/>
                <h2 className='md:text-6xl text-3xl text-center text-white capitalize font-medium'>Asesoría Amura</h2>
                <p className='contact-para md:w-3/5 w-11/12'>Encontramos el perfume perfecto para vos</p>
                <div className='bg-[#3C0C0C] md:px-8'>
                <Button text="Consultar" />
                </div>
            </div>
        </div>
    );
};

export default FourthSection;