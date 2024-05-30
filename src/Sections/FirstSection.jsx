import React from 'react';
import imageOne from "../assets/Diseño.png"
import imageTwo from "../assets/título2.png"
import Button from '../Components/Button';

const FirstSection = () => {
    return (
        <div className='flex'>
            <div className='relative'>
                <img src={imageOne} alt="" />
                <div className='absolute top-[33%] bg-[#3E191D] right-[30%] px-5'>
                    <Button text="Para Él"/>
                </div>
            </div>
            <div className='relative'>
                <img src={imageTwo} alt="" /> 
                <div className='absolute bg-[#4E014F] top-[50%] left-[25%] px-5'>
                    <Button text="Para Ella"/>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;