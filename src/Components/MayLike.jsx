import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';



// import required modules
import { FreeMode } from 'swiper/modules';

const products = [{image:"https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"}, {image:"https://i.ibb.co/rbRw6Sv/2.png",category:"Femenino"},
    {image:"https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},
    {image:"https://i.ibb.co/KDqhR15/5.png",category:"Femenino"},
    {image:"https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},
    {image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},
    {image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},
    {image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},
    {image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},
    {image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},
    {image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},
    {image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},
    {image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},
    {image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},
    {image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"}]

const MayLike = () => {
    return (
        <>
             <h2 className='text-white text-center text-[2.5rem] py-28 capitalize charm'>También te puede interesar</h2>
             <Swiper
        slidesPerView={5.5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
       {
        products.map((product, index)=><SwiperSlide key={index}>
        <img src={product.image} alt="" className='max-h-[469px] max-w-[374px]'/>
    </SwiperSlide>)
       }
        
      </Swiper>
        </>
    );
};

export default MayLike;
