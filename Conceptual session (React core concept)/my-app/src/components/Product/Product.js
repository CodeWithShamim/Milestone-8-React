import React, {useEffect, useState} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Product.css'

const Product=() => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    }
    ,[products]);
    // console.log(products);
    return (
        <div className='container mt-4 text-primary text-uppercase'>
            <h1>All Product</h1>
            <div className='row my-5 g-5'>    
                {products.map((product, index)=><SingleProduct key={index} product={product}></SingleProduct>)} 
            </div>

        </div>
    );
};

export default Product;