const db = {};
const addToDb = item => {
    if (item in db) {
        db[item] = db[item] + 1;
    } else {
        db[item] = 1;
    }
    console.log(db)
}
addToDb('100')
addToDb('100')