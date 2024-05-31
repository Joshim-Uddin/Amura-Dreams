import React, { useState } from 'react';
import Card from '../Components/Card';
import leftArrow from "./../assets/left-arrow.png";
import rightArrow from "./../assets/right-arrow.png";

const ThiredSection = () => {
    const [activeTab, setActiveTab] = useState("Alta Gama")
    const [num, setNum] = useState(0)

    const handleTabAcitve=(e)=>{
       const activeTab = document.querySelector(".active")
       if(activeTab){
        activeTab.classList.remove("active")
       }
       e.target.classList.add("active")
       setActiveTab(e.target.innerText)
    }
    
    // This is a placeholder products array which should be dynamically updated from server data
    const products = [{image: "/src/assets/purexs.png", title:"Pure XS", des:"Paco Rabanne", price:"$500", type:"Alta Gama"}, {image:"/src/assets/marly.png", title:"Layton", des:"Parfums de Marly", price:"$330", type:"Alta Gama"}, {image:"/src/assets/roja.png", title:"Vetiver Parfum Cologne", des:"Roja Dove", price:"$260", type:"Alta Gama"},{image:"/src/assets/gio.png", title:"Acqua di Giò Parfum", des:"Giorgio Armani", price:"$540", type:"Alta Gama"},{image: "/src/assets/purexs.png", title:"Pure XS", des:"Paco Rabanne", price:"$500", type:"Alta Gama"}, {image:"/src/assets/marly.png", title:"Layton", des:"Parfums de Marly", price:"$330", type:"Diseñador"}, {image:"/src/assets/roja.png", title:"Vetiver Parfum Cologne", des:"Roja Dove", price:"$260", type:"Diseñador"},{image: "/src/assets/purexs.png", title:"Pure XS", des:"Paco Rabanne", price:"$500", type:"Diseñador"},{image:"/src/assets/gio.png", title:"Acqua di Giò Parfum", des:"Giorgio Armani", price:"$540", type:"Diseñador"},{image:"/src/assets/gio.png", title:"Acqua di Giò Parfum", des:"Giorgio Armani", price:"$540", type:"Árabes"},{image:"/src/assets/marly.png", title:"Layton", des:"Parfums de Marly", price:"$330", type:"Árabes"}, {image: "/src/assets/purexs.png", title:"Pure XS", des:"Paco Rabanne", price:"$500", type:"Árabes"},{image:"/src/assets/roja.png", title:"Vetiver Parfum Cologne", des:"Roja Dove", price:"$260", type:"Árabes"}]
    

    // Filter products by their type or category
    const altaGama= products.filter((product)=>product.type=="Alta Gama")
    const disenador = products.filter((product)=>product.type=="Diseñador")
    const arabes = products.filter((product)=>product.type=="Árabes")

    return (
        <div className='px-11'>
            <div className='room pb-20'>
            <div className='flex justify-center bg-[rgba(0,0,0,0.4)] gap-14 py-3'>
                <div className="tab" onClick={handleTabAcitve} >Diseñador</div>
                <div className="tab px-16 active" onClick={handleTabAcitve}>Alta Gama</div>
                <div className="tab" onClick={handleTabAcitve}>Árabes</div>
            </div>
            <div className='h-16'></div>
            <div className='py-28'> 
            <div className='flex justify-between px-11 pb-16'>
          <button onClick={()=>setNum(num - 1)} disabled={(4+num) <=4 ?true:false}><img src={leftArrow} alt="" /></button>
          <button onClick={()=>setNum(num + 1)} disabled={(activeTab=== "Alta Gama" && altaGama.length<= (4+num))|| (activeTab=== "Diseñador" && disenador.length<= (4+num)) || (activeTab=== "Árabes" && arabes.length<= (4+num)) ?true:false}> <img src={rightArrow} alt="" /></button>
          </div>
           <div className="cards px-28 flex gap-8">
          
           {/* Products for Alta Gama Tab */}
            {activeTab==="Alta Gama" && altaGama.slice(num, (4 + num)).map((product, index) =><Card key={index} image={product.image} title={product.title} des={product.des} price={product.price} />)}
            
            {/* Products for Disenador Tab */}
            {activeTab==="Diseñador" && disenador.slice(num, (4+num)).map((product, index) =><Card key={index} image={product.image} title={product.title} des={product.des} price={product.price} />)}
            
            {/* Products for Arabes Tab */}
            {activeTab==="Árabes" && arabes.slice(num, (4 + num)).map((product, index) =><Card key={index} image={product.image} title={product.title} des={product.des} price={product.price} />)}
           
           
           </div>
            </div>
        </div>
        </div>
    );
};

export default ThiredSection;