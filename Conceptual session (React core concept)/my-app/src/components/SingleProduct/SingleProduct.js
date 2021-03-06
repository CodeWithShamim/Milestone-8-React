import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'



const SingleProduct=({product,addToCart}) => {
    // console.log(addToCart);

    // console.log(props.product);
    const {image,title}=product;
    return (
        <div data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="1500" className="card-group col-12 col-md-6 col-lg-4">
            <div className="card">
                <img src={image} className="card-img-top img-fluid" id='image' alt="..." />
                <div className="card-body">
                    <h5 className="card-title h-50">{title}</h5>
                    <div className='d-flex justify-content-around my-4'>
                        <button onClick={addToCart} className='btn btn-primary fw-bold'>Add To Cart</button>
                        <button className='btn btn-danger fw-bold'>Delete</button>
                        {/* <button className='btn btn-info fw-bold'>Details</button> */}
                        <ReactModal product={product}></ReactModal>
                        

                    </div>
                    {/* <p className="card-text">{description.slice(0, 150)}</p>
                    <h4>Price:{price}</h4> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;