import React from 'react';
import './SingleProduct.css'

const SingleProduct=({product}) => {
    // console.log(props.product);
    const {image, description, title, price} = product;
    return (
        <div className="card-group">
            <div className="card">
                <img src={image} className="card-img-top img-fluid" id='image' alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0, 150)}</p>
                    <h4>Price:{price}</h4>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;