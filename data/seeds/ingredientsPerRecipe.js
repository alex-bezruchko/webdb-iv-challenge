exports.seed = function(knex, Promise) {
    return knex('ingredientsPerRecipe').truncate().insert([
      { recipe_id: 1, ingredient_id: 1, qty: 1 }, 
      { recipe_id: 2, ingredient_id: 2, qty: 2 }, 
      { recipe_id: 3, ingredient_id: 3, qty: 3 },
      { recipe_id: 4, ingredient_id: 2, qty: 4 },
      { recipe_id: 1, ingredient_id: 1, qty: 2 },
      { recipe_id: 2, ingredient_id: 2, qty: 1 }
    ]);
};