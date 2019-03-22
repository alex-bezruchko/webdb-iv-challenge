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

function insert(cohort) {
    return db('recipes').insert(cohort).then(ids => {
        return getById(ids[0])
    })
}
