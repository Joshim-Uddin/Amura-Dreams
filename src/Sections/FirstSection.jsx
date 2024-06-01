import React from 'react';
import imageOne from "../assets/Diseño.png"
import imageTwo from "../assets/título2.png"
import Button from '../Components/Button';

const FirstSection = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            <div className='relative'>
                <img src={imageOne} alt="" />
                <div className='absolute md:top-[33%] top-[25%] bg-[#3E191D] md:right-[30%] right-[5%] md:px-5 px-0'>
                    <Button text="Para Él"/>
                </div>
            </div>
            <div className='relative'>
                <img src={imageTwo} alt="" /> 
                <div className='absolute bg-[#4E014F] md:top-[50%] top-[40%] md:left-[25%] left-[5%] md:px-5 px-0'>
                    <Button text="Para Ella"/>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;