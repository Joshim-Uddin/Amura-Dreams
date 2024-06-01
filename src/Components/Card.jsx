import React from 'react';

const Card = (props) => {
    
    return (
        <div className="card relative">
            <img src={props.image} alt="" className='max-h-[417px] 2xl:max-w-[365px] md:max-w-[290px] ' />
            <div className="card-body ps-3 py-2 absolute -bottom-8 bg-[rgba(0,0,0,0.48)] left-0 right-0 w-full text-white">
                <h3 className="title">{props.title}</h3>
                <p className='description charm'>{props.des}</p>
                <p className="price">{props.price}</p>
            </div>
            </div>
    );
};

export default Card;