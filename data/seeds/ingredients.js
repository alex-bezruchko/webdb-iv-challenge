exports.seed = function(knex, Promise) {
    return knex('ingredients').truncate().insert([
      { ingredient_name: 'Pepper' }, 
      { ingredient_name: 'Tomato' }, 
      { ingredient_name: 'Salt' },
      { ingredient_name: 'Flour' },
      { ingredient_name: 'Olives' },
      { ingredient_name: 'Beef' },
      { ingredient_name: 'Eggplant' },
      { ingredient_name: 'Chicken' },
      { ingredient_name: 'Onion' }
    ]);
};