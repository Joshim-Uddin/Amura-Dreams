import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
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
         
    },[items])
    
    return (
        <div className='details pb-24'>
        <div className='flex gap-14 text-white pt-[5rem] pb-[9rem] ps-[6rem] pr-[8rem]'>

            <div className='flex gap-4'>
            <div className='flex flex-col justify-evenly'>
                {singleItem?.related_images.map((image, index)=> <div key={index}><img src={image} alt="" className='w-40 h-40'/></div>)}
            </div>
            <img src={image} alt="" className='max-w-[640px] max-h-[675px]'/>
            </div>
            <div className='w-[50%] flex flex-col gap-6 items-start'>
            <h2 className='text-3xl font-bold capitalize'>{singleItem?.name}</h2>
            <p className='text-xl tracking-[0.4px]'>{singleItem?.description}</p>
            <p className='text-2xl capitalize'>{singleItem?.price}</p>
            <div>
            <select name="size" id="size" className='bg-transparent outline outline-2 outline-white p-5 text-base'>
                {singleItem?.sizes.map((size, index)=><option key={index} value={size} className='bg-blue-500 text-base'>{size} ML</option>)}
            </select>
            <button className='text-lg capitalize outline outline-2 outline-white py-4 px-12 ms-3'>Agregar al carrito</button>
            </div>
            <img src={line} alt="" className='py-5'/>
            <div>
                <h5 className='text-xl font-bold capitalize mb-3'>Notas principales:</h5>
                <div className='flex'>
                    {singleItem?.principles.map((principle, index)=> <img src={principle} alt="" key={index} />)}
                </div>
            </div>
            <div>
                <h5 className='text-xl font-bold capitalize mb-3'>Acordes:</h5>
                <div>
                    {singleItem?.cords.map((cord, index)=> <button key={index} className='text-xl charm capitalize py-4 px-16 outline outline-2 outline-white'>{cord}</button>)}
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