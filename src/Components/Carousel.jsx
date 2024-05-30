import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import One from "../assets/barrois.png";
import Two from "../assets/barrois1.png";
import Three from "../assets/barrois2.png";
import Four from "../assets/elegy.png";

const Carousel = () => {
    return (
        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slide relative'>
          <img src={One} alt=""  />
          <div className='overlay text-center shrink-0 absolute top-0 right-0 left-0 h-full w-full flex flex-col items-center justify-center'>
            <h3 className='text-white text-4xl'>
            B683 
            </h3>
            <p className='text-white text-2xl px-24 mt-8'>
            Extrait Marc-Antoine Barrois
            </p>
          </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide relative">
          <img src={Two} alt="" />
          <div className='overlay text-center shrink-0 absolute top-0 right-0 left-0 h-full w-full flex flex-col items-center justify-center'>
            <h3 className='text-white text-4xl'>
            B683 
            </h3>
            <p className='text-white text-2xl px-24 mt-8'>
            Extrait Marc-Antoine Barrois
            </p>
          </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
          <img src={Three} alt="" />
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
          <img src={Four} alt="" />
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <img src={One} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={One} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Carousel;

