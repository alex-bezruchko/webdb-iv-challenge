
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
        table.increments();
        table.string('recipe_name').notNullable().unique();
        table.string('instructions').notNullable();
        table    
         .integer('ingredientPerRecipeId')
             .references('id')
             .inTable('ingredientsPerRecipe')
             .onDelete('CASCADE')
             .onUpdate('CASCADE')
        table    
            .integer('dish_id')
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
  };
  