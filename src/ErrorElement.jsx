import React from 'react';
import error from "./../src/assets/404.png"

const ErrorElement = () => {
    return (
        <div className='max-h-screen ps-8'>
            <img src={error} alt="" className='max-h-screen w-full' />
        </div>
    );
};

export default ErrorElement;