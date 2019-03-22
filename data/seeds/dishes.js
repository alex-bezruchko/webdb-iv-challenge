exports.seed = function(knex, Promise) {
    return knex('dishes').truncate().insert([
      { dish_name: 'Tacos' }, 
      { dish_name: 'Pizza' }, 
      { dish_name: 'Parmagan' },
      { dish_name: 'Kebabs' },
      { dish_name: 'Sushi' },
      { dish_name: 'Deep Fried Stuff' },
    ]);
};