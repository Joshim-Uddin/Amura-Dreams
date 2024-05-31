import React from 'react';
import brand from "./../assets/brand.png"
import fb from "./../assets/icons/fb.png"
import insta from "./../assets/icons/insta.png"
import whatsapp from "./../assets/icons/whatsapp.png"
import copyrights from "./../assets/copyrights.png"

const Footer = () => {
    return (
        <footer className='footer'>
           <div className='flex justify-around px-28 py-12'>
           <div className='flex gap-16'>
                <div className='text-lg'>
                <h5 className='mb-6'>AROMAS</h5> 
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">AMBAR</a></li>
                    <li><a href="#">FRESCO</a></li>
                    <li><a href="#">AHUMADO</a></li>
                    <li><a href="#">FLORAL</a></li>
                    <li><a href="#">GOURMET</a></li>
                    <li><a href="#">ORIENTAL</a></li>
                </ul>
                </div>
                <div className='text-lg'>
                <h5 className='mb-6'>COLECCIONES</h5> 
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">ÁRABES</a></li>
                    <li><a href="#">ALTA GAMA</a></li>
                    <li><a href="#">DISEÑADOR</a></li>
                </ul>
                </div>
                
            </div>
                <img src={brand} alt="" className='max-h-[208px]'/>
            <div className='flex flex-col items-end gap-5'>
                <div className='social flex'>
                    <img src={fb} alt="" className='w-12 h-12'/>
                    <img src={insta} alt="" className='w-12 h-12'/>
                    <img src={whatsapp} alt="" className='w-12 h-12'/>
                </div>
                <p className='text-xl'>oficentro ejecutivola sabana</p>
                <p className='text-right text-xl'>horarios:<br />lunes a viernes 9am — 7pm <br />Sábado 8am — 6pm</p>
                <p className='tracking-[6px] text-xl'>6107-3851</p>
            </div>
           </div>
           <div className='bg-[#151515] flex justify-center'>
            <img src={copyrights} alt="" />
           </div>
        </footer>
    );
};

export default Footer;