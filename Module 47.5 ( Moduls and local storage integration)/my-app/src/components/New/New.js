import React from 'react';

const New=(props) => {
    const {name, id, price} = props.item
    // console.log(name);
    return (
        <div style={{border: '2px solid blue', borderRadius: '20px' , margin: '10px', backgroundColor: 'gainsboro'}}>
           <h2>Name: {name}</h2>
           <h4>Price: {price}</h4>
           <p>ID: {id}</p>
        </div>
    );
};

export default New;