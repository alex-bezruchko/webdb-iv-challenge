const db = require('../dbConfig');

module.exports = {
    getDishes,
    getById,
    insert
}

function getDishes() {
    return db('dishes')
}
function getById(id) {
    return db('dishes').where({id}).first();
}

function insert(dish) {
    return db('dishes').insert(dish).then(ids => {
        return getById(ids[0])
    })
}
