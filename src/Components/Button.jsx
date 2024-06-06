import React from 'react';

const Button = (props) => {
    return (
        <button className='cta hover:bg-white hover:text-black hover:duration-300'>{props.text}</button>
    );
};

export default Button;
