import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Products = () => {
    const [items, setItems] = useState([])
    const id = useParams()
    // const items = useLoaderData()
    console.log(id.id)
    useEffect(() =>{
        fetch("/products.json")
        .then(res=>res.json())
        .then(data=>setItems(data.products))
    }, [])
    const singleItem =items.find(item=> {
        console.log(item?.id== id.id)
        return item.id== id.id
    })
    console.log(singleItem, id)
    return (
        <div className='flex gap-4'>
            <img src={singleItem?.image} alt="" />
            <div>
            <h2>{singleItem?.name}</h2>
            <p>{singleItem?.description}</p>
            </div>

        </div>
    );
};

export default Products;