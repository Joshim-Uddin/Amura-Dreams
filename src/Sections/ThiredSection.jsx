import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Card from '../Components/Card';

const ThiredSection = () => {
    const [activeTab, setActiveTab] = useState("Alta Gama")
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth
      })
    const [num, setNum] = useState(0)
    const handleTabAcitve=(e)=>{
       const activeTab = document.querySelector(".active")
       if(activeTab){
        activeTab.classList.remove("active")
       }
       e.target.classList.add("active")
       setNum(0)
       setActiveTab(e.target.innerText)
    }
    

    
    // This is a placeholder products array which should be dynamically updated from server data
    const products = [{image: "https://i.ibb.co/tYpPHvf/purexs.png", title:"Pure XS", des:"Paco Rabanne", price:"$500", type:"Alta Gama"}, {image:"https://i.ibb.co/pZRYnbV/marly.png", title:"Layton", des:"Parfums de Marly", price:"$330", type:"Alta Gama"}, {image:"https://i.ibb.co/Ng0YgwC/roja.png", title:"Vetiver Parfum Cologne", des:"Roja Dove", price:"$260", type:"Alta Gama"},{image:"https://i.ibb.co/RcS9JV9/gio.png", title:"Acqua di Giò Parfum", des:"Giorgio Armani", price:"$540", type:"Alta Gama"},{image: "https://i.ibb.co/tYpPHvf/purexs.png", title:"Pure XS", des:"Paco Rabanne", price:"$500", type:"Alta Gama"}, {image:"https://i.ibb.co/pZRYnbV/marly.png", title:"Layton", des:"Parfums de Marly", price:"$330", type:"Diseñador"}, {image:"https://i.ibb.co/Ng0YgwC/roja.png", title:"Vetiver Parfum Cologne", des:"Roja Dove", price:"$260", type:"Diseñador"},{image: "https://i.ibb.co/tYpPHvf/purexs.png", title:"Pure XS", des:"Paco Rabanne", price:"$500", type:"Diseñador"},{image:"https://i.ibb.co/RcS9JV9/gio.png", title:"Acqua di Giò Parfum", des:"Giorgio Armani", price:"$540", type:"Diseñador"},{image:"https://i.ibb.co/RcS9JV9/gio.png", title:"Acqua di Giò Parfum", des:"Giorgio Armani", price:"$540", type:"Árabes"},{image:"https://i.ibb.co/pZRYnbV/marly.png", title:"Layton", des:"Parfums de Marly", price:"$330", type:"Árabes"}, {image: "https://i.ibb.co/tYpPHvf/purexs.png", title:"Pure XS", des:"Paco Rabanne", price:"$500", type:"Árabes"},{image:"https://i.ibb.co/Ng0YgwC/roja.png", title:"Vetiver Parfum Cologne", des:"Roja Dove", price:"$260", type:"Árabes"}]
    

    // Filter products by their type or category
    const altaGama= products.filter((product)=>product.type=="Alta Gama")
    const disenador = products.filter((product)=>product.type=="Diseñador")
    const arabes = products.filter((product)=>product.type=="Árabes")

    useEffect(()=>{
        const handleResize = () => {
            setScreenSize({
              width: window.innerWidth
            });
          };
      
          // Add event listener for window resize
          window.addEventListener('resize', handleResize);
          if(screenSize.width>600){
            document.getElementsByClassName("swiper-button-next")[1].classList.add("top")
            document.getElementsByClassName("swiper-button-prev")[1].classList.add("top")
         }else{
            document.getElementsByClassName("swiper-button-next")[1].classList.remove("top")
            document.getElementsByClassName("swiper-button-prev")[1].classList.remove("top")
         }
          // Clean up the event listener on component unmount
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },
        
     [screenSize.width])
        
    
    return (
        <div className='md:px-11 px-2'>
            <div className='room pb-20'>
            <div className='flex justify-center bg-[rgba(0,0,0,0.4)] md:gap-14 gap-2 md:py-3'>
                <div className="tab" onClick={handleTabAcitve} >Diseñador</div>
                <div className="tab md:px-16 px-2 active" onClick={handleTabAcitve}>Alta Gama</div>
                <div className="tab" onClick={handleTabAcitve}>Árabes</div>
            </div>
            <div className='h-16'></div>
            <div className='md:py-28'> 
           <div className="cards 2xl:px-28 px-12 flex shrink-0 2xl:gap-8 md:gap-4">
           <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          600: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper pt-20"
      >
        {activeTab==="Alta Gama" && altaGama.map((product, index) => <SwiperSlide key={index}><Card key={index} image={product.image} title={product.title} des={product.des} price={product.price} /></SwiperSlide>)}
        {activeTab==="Diseñador" && disenador.map((product, index) => <SwiperSlide key={index}><Card key={index} image={product.image} title={product.title} des={product.des} price={product.price} /></SwiperSlide>)}
        {activeTab==="Árabes" && arabes.map((product, index) => <SwiperSlide key={index}><Card key={index} image={product.image} title={product.title} des={product.des} price={product.price} /></SwiperSlide>)}
        
      </Swiper>
    </>      
           </div>
            </div>
        </div>
        </div>
    );
};

export default ThiredSection;




    
