import React from 'react';

const Button = (props) => {
    return (
        <button className='cta'>{props.text}</button>
    );
};

export default Button;