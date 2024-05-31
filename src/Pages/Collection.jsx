import React, { useState } from 'react';
import heroImage from "./../assets/dolce.png"
import Pagination from '../Components/Pagination';







const Collection = () => {
    const [filter, setFilter] = useState(false)
    // This array of products is used to demonstrate only this will load dynamically from server
    const products = ["https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/KDqhR15/5.png","https://i.ibb.co/Z67YPQ6/6.png","https://i.ibb.co/HTd0rhb/7.png","https://i.ibb.co/zs6Mc54/8.png","https://i.ibb.co/jgkbGjz/9.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/6WVRx1p/11.png","https://i.ibb.co/BZXtG7N/12.png","https://i.ibb.co/PQWMn9f/1.png", "https://i.ibb.co/rbRw6Sv/2.png","https://i.ibb.co/48bDfw6/3.png","https://i.ibb.co/yfshF5k/4.png"]
    

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
                <img src={heroImage} alt="" className='w-full'/>
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