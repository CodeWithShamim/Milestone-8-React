import React from 'react';
import {addItem, removeCart} from '../../utilities/storage';

const New=(props) => {
    const {name, id, price,} = props.item
    // console.log(name);

    const addToCart=(id)=>{
        addItem(id)
      };
      
    //   const addToCartWithP = () => addToCart(id)
      const removeFromCart = () => {
          removeCart(id);
      };
     


    return (
        <div style={{border: '2px solid blue', borderRadius: '20px' , margin: '10px', backgroundColor: 'gainsboro', padding: '10px'}}>
           <h2>Name: {name}</h2>
           <h4>Price: {price}</h4>
           <p>ID: {id}</p>
           {/* <button onClick={addToCartWithP }>Add To Cart</button> */}
           <button onClick={() => addToCart(id) }>Add To Cart</button>
           <button onClick={id=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default New;