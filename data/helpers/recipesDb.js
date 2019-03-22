const db = require('../dbConfig');

module.exports = {
    getRecipes,
    getById,
    insert
}

function getRecipes() {
    return db('recipes')
}
function getById(id) {
    return db('recipes').where({id}).first();
}

function insert(recipe) {
    return db('recipes').insert(recipe).then(ids => {
        return getById(ids[0])
    })
}
