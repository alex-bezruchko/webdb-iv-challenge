exports.seed = function(knex, Promise) {
    return knex('recipes').truncate().insert([
      { recipe_name: 'Italian', ingredientPerRecipeId: 1, instructions: 'hahahahahahah', dish_id: 1 }, 
      { recipe_name: 'Mexican', ingredientPerRecipeId: 2, instructions: 'lololololo', dish_id: 2 }, 
      { recipe_name: 'Homestyle', ingredientPerRecipeId: 3, instructions: 'xixixixixixi', dish_id: 3 },
      { recipe_name: `Grandma's`, ingredientPerRecipeId: 2, instructions: 'jajajajajj', dish_id: 4 },
      { recipe_name: 'Asian', ingredientPerRecipeId: 1, instructions: 'gagagagag', dish_id: 2 },
      { recipe_name: 'Mediterenian', ingredientPerRecipeId: 2, instructions: 'xaxaxaxaxa', dish_id: 1 }
    ]);
};