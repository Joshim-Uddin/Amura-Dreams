import React from 'react';
import lab from "./../assets/lab.png";
import momentum from "./../assets/momentum.png";
import escazu from "./../assets/escazu.png";

const Boutiques = () => {
    return (
        <section className='boutiques'>
            <div className='flex flex-col justify-center items-center gap-20 pt-44 pb-80'>
                <h2 className='heading'>boutiques</h2>
                <p className='text-4xl font-medium text-center tracking-[1.75px] text-white capitalize'>horarios <br />lunes a viernes 9am — 7pm <br />Sábado 8am — 6pm</p>
                <p className="number text-4xl font-medium text-center tracking-[10.5px] text-white pb-28">6107-3851</p>
            </div>
            <div className='flex justify-center items-center px-60 gap-10 pb-5'>
                <div className='relative'><img src={lab} alt="" className='h-[511px]'/><span className='text-3xl text-white font-semibold text-center capitalize absolute bottom-10 left-1/3'>Sabana Sur</span></div>
                <div className='relative'><img src={momentum} alt="" className='h-[511px]'/><span className='text-3xl text-white font-semibold text-center capitalize absolute bottom-10 left-1/3'>Momentum</span></div>
                <div className='relative'><img src={escazu} alt="" className='h-[511px]'/><span className='text-3xl text-white font-semibold text-center capitalize absolute bottom-10 left-1/3'>Escazú</span></div>
            </div>
            
        </section>
    );
};

export default Boutiques;