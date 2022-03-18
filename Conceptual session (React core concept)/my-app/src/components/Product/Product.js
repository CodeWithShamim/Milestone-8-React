import React, {useEffect, useState} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product=() => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    }
    ,[]);
    // console.log(products);
    return (
        <div className='container mt-4 text-primary text-uppercase'>
            <h1>All Product</h1>
            <div className='row'>
                <div className="col-md-6">
                    {products.map((product, index)=><SingleProduct key={index} product={product}></SingleProduct>)} 
                </div>
            </div>

        </div>
    );
};

export default Product;