import React from 'react';

const Card = (props) => {
    
    return (
        <div className="card relative 2xl:min-h-[417px] 2xl:min-w-[365px] md:min-w-[290px] md:min-h-[320px]">
            <img src={props.image} alt="" className='2xl:min-h-[417px] 2xl:min-w-[365px] md:min-w-[290px] md:min-h-[320px]' />
            <div className="card-body px-3 py-2 absolute bottom-0 bg-[rgba(0,0,0,0.48)] left-0 right-0 text-white z-30">
                <h3 className="title">{props.title}</h3>
                <p className='description charm'>{props.des}</p>
                <p className="price">{props.price}</p>
            </div>
            </div>
    );
};

export default Card;