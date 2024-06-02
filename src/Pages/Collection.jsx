import React, { useState } from 'react';
import heroImage from "./../assets/dolce.png"
import heromobile from "./../assets/dolcemobile.png"
import Pagination from '../Components/Pagination';
import { Link } from 'react-router-dom';







const Collection = () => {
    const [filter, setFilter] = useState(false)
    
    // This array of products is used to demonstrate only this will load dynamically from server
    const products = [{image:"https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"}, {image:"https://i.ibb.co/rbRw6Sv/2.png",category:"Femenino"},
    {image:"https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},
    {image:"https://i.ibb.co/cJsgjWY/Disen-o.png", category:"Maculino"},
    {image:"https://i.ibb.co/KDqhR15/5.png",category:"Femenino"},
    {image:"https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},
    {image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},
    {image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},
    {image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},
    {image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},
    {image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},
    {image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},
    {image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},
    {image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},
    {image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},
    {image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"},{image: "https://i.ibb.co/rbRw6Sv/2.png", category:"Femenino"},{image: "https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"},{image: "https://i.ibb.co/rbRw6Sv/2.png", category:"Femenino"},{image: "https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"},{image: "https://i.ibb.co/rbRw6Sv/2.png", category:"Femenino"},{image: "https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"},{image: "https://i.ibb.co/rbRw6Sv/2.png", category:"Femenino"},{image: "https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"},{image: "https://i.ibb.co/rbRw6Sv/2.png", category:"Femenino"},{image: "https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Maculino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"},{image: "https://i.ibb.co/rbRw6Sv/2.png", category:"Femenino"},{image: "https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Femenino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Femenino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Femenino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Femenino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/PQWMn9f/1.png", category:"Femenino"},{image: "https://i.ibb.co/rbRw6Sv/2.png", category:"Femenino"},{image: "https://i.ibb.co/48bDfw6/3.png", category:"Femenino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Maculino"},{image: "https://i.ibb.co/KDqhR15/5.png", category:"Maculino"},{image: "https://i.ibb.co/Z67YPQ6/6.png", category:"Maculino"},{image: "https://i.ibb.co/HTd0rhb/7.png", category:"Maculino"},{image: "https://i.ibb.co/zs6Mc54/8.png", category:"Maculino"},{image: "https://i.ibb.co/jgkbGjz/9.png", category:"Maculino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Maculino"},{image: "https://i.ibb.co/6WVRx1p/11.png", category:"Femenino"},{image: "https://i.ibb.co/BZXtG7N/12.png", category:"Femenino"},{image: "https://i.ibb.co/PQWMn9f/1.png", category:"Maculino"},{image: "https://i.ibb.co/rbRw6Sv/2.png", category:"Femenino"},{image: "https://i.ibb.co/48bDfw6/3.png", category:"Maculino"},{image: "https://i.ibb.co/yfshF5k/4.png", category:"Femenino"}]
    

    const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = filter?8:12;
  var totalPages;
  totalPages= Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  var currentProducts=(products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  ));


const handleFilter=(e)=>{
    const checked = Array.from(document.querySelectorAll("input[type=checkbox]"))
    for(let i=0; i<checked.length; i++){
        checked[i].checked = false;
    }
    e.target.checked= true;
     
    
    const filteredProducts = products.filter(product=>{
            return (product.category== `${e.target.id}`)
            })
        currentProducts=filteredProducts?.slice(
                (currentPage - 1) * productsPerPage,
                currentPage * productsPerPage
              );
        totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    

    console.log(filteredProducts, currentProducts, totalPages)

}

const handleCheck=(e) => {
    e.preventDefault();
    console.log(e.target.value)
}

    return (
        <div>
            <div>
                <img src={heroImage} alt="" className='w-full max-[600px]:hidden'/>
                <img src={heromobile} alt="" className='w-full min-[600px]:hidden'/>
            </div>
            <div className="products md:px-32 px-6">
                <div className='flex justify-between pt-28'>
                <div className='charm md:text-3xl text-[15px] cursor-pointer' onClick={()=>setFilter(!filter)}>
                <input type="button" value="Filtros"  /> <span>{filter?"▲":"▼"}</span>
                </div>
                <p className='charm md:text-3xl text-[15px]'>Ayudame a encontrar mi aroma ⓘ</p>
                </div>
                <div className={filter?"flex justify-between":""}>
                <div className={filter?'filter block z-30 md:mt-24 mt-8':'filter hidden'}>
                    <div>
                        <h3 className='md:text-4xl text-lg mb-5 capitalize'>Colecciones</h3>
                        <div className="check">
                        <input type="checkbox" name="Femenino" id="Femenino" value="Femenino" onChange={handleCheck} onClick={handleFilter}/><label htmlFor="Femenino">Femenino</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="Maculino" id="Maculino" onClick={handleFilter}/>
                        <label htmlFor="Maculino">Maculino</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="Neutral" id="Neutral" onClick={handleFilter}/>
                        <label htmlFor="Neutral">Neutral</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="Alta Gama" id="Alta Gama" onClick={handleFilter}/>
                        <label htmlFor="Alta Gama">Alta Gama</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="árabes" id="árabes" onClick={handleFilter}/>
                        <label htmlFor="árabes">árabes</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="Diseñador" id="Diseñador" onClick={handleFilter}/>
                        <label htmlFor="Diseñador">Diseñador</label>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <h3 className='md:text-4xl text-lg mb-5 capitalize'>Notas</h3>
                        <div className="check">
                        <input type="checkbox" name="frutales" id="frutales" /><label htmlFor="frutales">frutales</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="florales" id="florales" />
                        <label htmlFor="florales">florales</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="herbales" id="herbales" />
                        <label htmlFor="herbales">herbales</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="maderosas" id="maderosas" />
                        <label htmlFor="maderosas">maderosas</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="sensuales" id="sensuales" />
                        <label htmlFor="sensuales">sensuales</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="especiadas" id="especiadas" />
                        <label htmlFor="especiadas">especiadas</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="dulces" id="dulces" />
                        <label htmlFor="dulces">dulces</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="cítricas" id="cítricas" />
                        <label htmlFor="cítricas">cítricas</label>
                        </div>
                        <div className="check">
                        <input type="checkbox" name="balsamos" id="balsamos" />
                        <label htmlFor="balsamos">balsamos</label>
                        </div>
                    </div>
            </div>
                <div className={filter?'w-3/4 grid md:grid-cols-2 grid-cols-1 gap-x-24 gap-y-14 pt-14':'grid md:grid-cols-3 grid-cols-2 md:gap-x-24 gap-x-7 md:gap-y-14 gap-y-4 md:pt-14 pt-6'}>
            {currentProducts?.map((product, index) => (
      <div key={index}><Link to={`/products/${index + 1}`}> <img src={product.image} alt="" /></Link></div>
    ))}        
            </div>
            
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