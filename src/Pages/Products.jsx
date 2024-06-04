import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import line from "./../assets/Line.png"
import MayLike from '../Components/MayLike';

const Products = () => {
    const [items, setItems] = useState([])
    const [singleItem, setSinglItem] = useState()
    const [image, setImage] = useState()
    const id = useParams()
    
   
    useEffect(() =>{
        fetch("/products.json")
        .then(res=>res.json())
        .then(data=>{
            setItems(data.products)
            const foundProduct = items.find(item=>item.id == id.id)
            setSinglItem(foundProduct)
            setImage(foundProduct?.image)
        })
         
    },[id.id, items])
    
    return (
        <div className='details pb-24'>
        <div className='flex md:flex-row flex-col gap-14 text-white pt-[5rem] md:pb-[9rem] md:ps-[6rem] md:pr-[8rem] px-8'>

            <div className='flex md:flex-row flex-col-reverse gap-4 max-h-[675px]'>
            <div className='flex flex-row md:flex-col md:justify-evenly'>
                {singleItem?.related_images.map((image, index)=> <div key={index}><img src={image} alt="" className='side md:w-40 md:h-40 w-20 h-20'/></div>)}
            </div>
            <img src={image} alt="" className='main max-w-[640px] max-h-[675px]'/>
            </div>
            <div className='description md:w-[50%] flex flex-col gap-6 items-start'>
            <h2 className='md:text-3xl text-xl font-bold capitalize'>{singleItem?.name}</h2>
            <p className='md:text-xl text-xs tracking-[0.4px]'>{singleItem?.description}</p>
            <p className='md:text-2xl text-lg capitalize'>{singleItem?.price}</p>
            <div>
            <select name="size" id="size" className='bg-transparent outline outline-2 outline-white md:p-5 p-2 md:text-base text-xs'>
                {singleItem?.sizes.map((size, index)=><option key={index} value={size} className='bg-blue-500 md:text-base text-xs'>{size} ML</option>)}
            </select>
            <button className='md:text-lg text-xs capitalize outline outline-2 outline-white md:py-4 py-2 md:px-12 px-4 ms-3'>Agregar al carrito</button>
            </div>
            <img src={line} alt="" className='py-5'/>
            <div>
                <h5 className='md:text-xl text-xs font-bold capitalize mb-3'>Notas principales:</h5>
                <div className='flex'>
                    {singleItem?.principles.map((principle, index)=> <img src={principle} alt="" key={index} className='w-12 h-12' />)}
                </div>
            </div>
            <div>
                <h5 className='md:text-xl text-xs font-bold capitalize mb-3'>Acordes:</h5>
                <div>
                    {singleItem?.cords.map((cord, index)=> <button key={index} className='cord md:text-xl text-xs charm capitalize py-4 px-16 outline outline-2 outline-white'>{cord}</button>)}
                </div>
            </div>
            </div>
            

        </div>
        <div>
           <MayLike />
        </div>
        
        </div>
    );
};

export default Products;