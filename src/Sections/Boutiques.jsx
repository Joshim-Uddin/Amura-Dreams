import React from 'react';
import lab from "./../assets/lab.png";
import momentum from "./../assets/momentum.png";
import escazu from "./../assets/escazu.png";
import labmobile from "./../assets/image12.png"

const Boutiques = () => {
    return (
        <section className='boutiques'>
            <div className='flex flex-col justify-center items-center md:gap-20 gap-12 md:pt-44 pt-8 md:pb-80 pb-4'>
                <h2 className='heading'>boutiques</h2>
                <p className='md:text-4xl leading-7 text-base font-medium text-center md:tracking-[1.75px] tracking-[0.75px] text-white capitalize'>horarios <br />lunes a viernes 9am — 7pm <br />Sábado 8am — 6pm</p>
                <p className="number md:text-4xl text-base font-medium text-center md:tracking-[10.5px] tracking-[4.5px] text-white pb-28">6107-3851</p>
            </div>
            <div className='flex justify-center items-center 2xl:px-60 px-24 gap-10 pb-5 max-[600px]:hidden'>
                <div className='relative'><img src={lab} alt="" className='h-[511px]'/><span className='text-3xl text-white font-semibold text-center capitalize absolute bottom-10 left-1/3'>Sabana Sur</span></div>
                <div className='relative'><img src={momentum} alt="" className='h-[511px]'/><span className='text-3xl text-white font-semibold text-center capitalize absolute bottom-10 left-1/3'>Momentum</span></div>
                <div className='relative'><img src={escazu} alt="" className='h-[511px]'/><span className='text-3xl text-white font-semibold text-center capitalize absolute bottom-10 left-1/3'>Escazú</span></div>
            </div>
            <div className='relative flex justify-center items-center pb-20 min-[600px]:hidden'><img src={labmobile} alt="" className='h-[285px]'/><span className='md:text-3xl text-2xl text-white font-semibold text-center capitalize absolute md:bottom-10 md:left-1/3 bottom-28'>Curridabat</span></div>
            
        </section>
    );
};

export default Boutiques;