import React from 'react';
import art from "../assets/artOne.png"
import video from "../assets/amura.mp4"
import mobile from "../assets/mobile.mov"
import Button from './Button';

const Hero = () => {
    return (
        <div className='relative'>
            <video loop autoPlay src={video} className='max-[600px]:hidden'></video>
            <video loop autoPlay src={mobile} className='min-[600px]:hidden'></video>
            <div className='absolute top-[25%] left-0 right-0 '>
            <img src={art} alt=""  className='md:w-2/5 w-4/5 mx-auto'/>
            <div className='flex flex-col items-center mt-8'>
            <h3 className='capitalize font-medium md:text-[70px] text-[25px] md:text-black text-white'>Amura dreams</h3>
            <h6 className='capitalize md:text-[60px] text-[20px] font-light text-center md:text-black text-white'>el hogar de aromas extraordinarios</h6>
            
            </div>
            <div className='flex items-center justify-center md:gap-5 gap-1 md:w-full w-[90%] mx-auto max-h-16 mt-14'>
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="9" viewBox="0 0 300 9" fill="none">
  <path d="M287.831 8.49887L0 4.43395L287.831 0.369038L300 4.43395L287.831 8.49887Z" fill="#4E014F"/>
</svg>
            <div className='bg-[#4E014F]'>
            <Button text="Ir a la tienda"/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="9" viewBox="0 0 300 9" fill="none">
  <path d="M12.1693 8.49887L300 4.43395L12.1693 0.369038L0 4.43395L12.1693 8.49887Z" fill="#4E014F"/>
</svg>
            </div>
            </div>
        </div>
    );
};

export default Hero;