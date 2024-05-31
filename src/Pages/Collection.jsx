import React, { useState } from 'react';
import heroImage from "./../assets/dolce.png"
import Pagination from '../Components/Pagination';

const Collection = () => {
    const [filter, setFilter] = useState(false)
    // This array of products is used to demonstrate only this will load dynamically from server
    const products = ["/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png","/src/assets/products/4.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png","/src/assets/products/4.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/5.png","/src/assets/products/6.png","/src/assets/products/7.png","/src/assets/products/8.png","/src/assets/products/9.png","/src/assets/products/10.png","/src/assets/products/11.png","/src/assets/products/12.png","/src/assets/products/1.png", "/src/assets/products/2.png","/src/assets/products/3.png","/src/assets/products/4.png"]
    

    const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

    return (
        <div>
            <div>
                <img src={heroImage} alt="" />
            </div>
            <div className="products px-32">
                <div className='flex justify-between pt-28'>
                <div className='charm text-3xl'>
                <input type="button" value="Filtros" onClick={()=>setFilter(!filter)} /> <span>{filter?"▲":"▼"}</span>
                </div>
                <p className='charm text-3xl'>Ayudame a encontrar mi aroma ⓘ</p>
                </div>
                <div className='grid grid-cols-3 gap-x-24 gap-y-14 pt-14'>
            {currentProducts.map((product, index) => (
      <div key={index}><img src={product} alt="" /></div>
    ))}
            </div>
            <div className='pagination flex justify-center py-14'>
            <Pagination currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}/>
            </div>
            </div>
            
    
        </div>
    );
};

export default Collection;