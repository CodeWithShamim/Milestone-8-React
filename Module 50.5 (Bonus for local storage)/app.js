const db = {};
const addToDb = item => {
    if (item in db) {
        db[item] = db[item] + 1;
    } else {
        db[item] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(db));
    console.log(db)
}
addToDb('100');
addToDb('100');
addToDb('100');
addToDb('101');