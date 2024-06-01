import React from 'react';
import brand from "./../assets/brand.png"
import fb from "./../assets/icons/fb.png"
import insta from "./../assets/icons/insta.png"
import whatsapp from "./../assets/icons/whatsapp.png"
import copyrights from "./../assets/copyrights.png"

const Footer = () => {
    return (
        <footer className='footer'>
           <div className='footerItems md:px-28 px-4 md:py-12 py-4'>
           <div className='menus flex items-center justify-center md:gap-16 gap-8 md:mt-0 mt-14'>
                <div className='md:text-lg text-[10px]'>
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
                <div className='md:text-lg text-[10px]'>
                <h5 className='mb-6'>COLECCIONES</h5> 
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">ÁRABES</a></li>
                    <li><a href="#">ALTA GAMA</a></li>
                    <li><a href="#">DISEÑADOR</a></li>
                </ul>
                </div>
                <div className='md:text-lg text-[10px]'>
                <h5 className='mb-6'>SERVICIOS</h5> 
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">ENTREGAS</a></li>
                    <li><a href="#">DEVOLUCIONES Y</a></li>
                    <li><a href="#">CAMBIOS</a></li>
                    <li><a href="#">POLÍTICA DE PRIVACIDAD</a></li>
                </ul>
                </div>
                
            </div>
                <div className='brand flex justify-center'>
                <img src={brand} alt="" className='max-h-[208px]'/>
                </div>
            <div className='contact flex flex-col md:items-end items-center gap-5'>
                <div className='flex md:mb-0 mb-28'>
                    <img src={fb} alt="" className='w-12 h-12'/>
                    <img src={insta} alt="" className='w-12 h-12'/>
                    <img src={whatsapp} alt="" className='w-12 h-12'/>
                </div>
                <p className='md:text-xl text-xs'>oficentro ejecutivola sabana</p>
                <p className='md:text-right text-center md:text-xl text-xs'>horarios:<br />lunes a viernes 9am — 7pm <br />Sábado 8am — 6pm</p>
                <p className='tracking-[6px] md:text-xl text-xs'>6107-3851</p>
            </div>
           </div>
           <div className='bg-[#151515] flex justify-center'>
            <img src={copyrights} alt="" />
           </div>
        </footer>
    );
};

export default Footer;