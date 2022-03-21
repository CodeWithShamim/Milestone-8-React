// use local storage to storage cart data 
const addItem = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const Newquantity = parseInt(quantity) + 1;
        localStorage.setItem(id, +Newquantity);
    } else {
        localStorage.setItem(id, 1);
    }
};

export { addItem };