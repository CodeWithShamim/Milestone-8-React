// use local storage to storage cart data 
const addItem = id => {
    let shoppingCart;

    // get the shopping cart 
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const Newquantity = (quantity) + 1;
        shoppingCart[id] = Newquantity;

    } else {
        shoppingCart[id] = 1;
        // console.log(shoppingCart)
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

};


// remove cart from local storage 
const removeCart = id => {
    // console.log(id)
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        }
    }

}


const getTotalPrice = (products) => {
    const sumReduce = (previousValue, currentValue) => previousValue + currentValue.price;
    const total = products.reduce(sumReduce, 0)
    return total;
};

export { addItem, getTotalPrice as getTotal, removeCart };