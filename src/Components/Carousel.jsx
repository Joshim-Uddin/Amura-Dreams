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
          600: {
            slidesPerView: 1,
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
          <div className='slide relative h-[580px]'>
          <img src={One} alt=""  className='max-h-[580px]'/>
          <div className='text-center shrink-0 absolute transition-transform ease-linear duration-300 top-0 inset-0 flex flex-col items-center justify-center gap-8 bg-black opacity-0 hover:opacity-70'>
            <h3 className='text-white text-4xl'>
            B683 
            </h3>
            <p className='text-white text-2xl px-24'>
            Extrait Marc-Antoine Barrois
            </p>
          </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide relative h-[580px]">
          <img src={Two} alt="" className='max-h-[580px]'/>
          <div className='text-center shrink-0 absolute transition-transform ease-linear duration-300 top-0 inset-0 flex flex-col items-center justify-center gap-8 bg-black opacity-0 hover:opacity-70'>
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
          <div className="slide relative h-[580px]">
          <img src={Three} alt="" className='max-h-[580px]'/>
          <div className='text-center shrink-0 absolute transition-transform ease-linear duration-300 top-0 inset-0 flex flex-col items-center justify-center gap-8 bg-black opacity-0 hover:opacity-70'>
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
          <div className="slide relative h-[580px]">
          <img src={Four} alt="" className='max-h-[580px]'/>
          <div className='text-center shrink-0 absolute transition-transform ease-linear duration-300 top-0 inset-0 flex flex-col items-center justify-center gap-8 bg-black opacity-0 hover:opacity-70'>
            <h3 className='text-white text-4xl'>
            B683 
            </h3>
            <p className='text-white text-2xl px-24 mt-8'>
            Extrait Marc-Antoine Barrois
            </p>
          </div>
          </div>
        
        </SwiperSlide>

        {/* This is just copy of upper elements */}
        <SwiperSlide>
          <div className='slide relative h-[580px]'>
          <img src={One} alt=""  className='max-h-[580px]'/>
          <div className='text-center shrink-0 absolute transition-transform ease-linear duration-300 top-0 inset-0 flex flex-col items-center justify-center gap-8 bg-black opacity-0 hover:opacity-70'>
            <h3 className='text-white text-4xl'>
            B683 
            </h3>
            <p className='text-white text-2xl px-24'>
            Extrait Marc-Antoine Barrois
            </p>
          </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide relative h-[580px]">
          <img src={Two} alt="" />
          <div className='text-center shrink-0 absolute transition-transform ease-linear duration-300 top-0 inset-0 flex flex-col items-center justify-center gap-8 bg-black opacity-0 hover:opacity-70'>
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
          <div className="slide relative h-[580px]">
          <img src={Three} alt="" />
          <div className='text-center shrink-0 absolute transition-transform ease-linear duration-300 top-0 inset-0 flex flex-col items-center justify-center gap-8 bg-black opacity-0 hover:opacity-70'>
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
          <div className="slide relative h-[580px]">
          <img src={Four} alt="" />
          <div className='text-center shrink-0 absolute transition-transform ease-linear duration-300 top-0 inset-0 flex flex-col items-center justify-center gap-8 bg-black opacity-0 hover:opacity-70'>
            <h3 className='text-white text-4xl'>
            B683 
            </h3>
            <p className='text-white text-2xl px-24 mt-8'>
            Extrait Marc-Antoine Barrois
            </p>
          </div>
          </div>
        
        </SwiperSlide>
       
        
      </Swiper>
    </>
    );
};

export default Carousel;

