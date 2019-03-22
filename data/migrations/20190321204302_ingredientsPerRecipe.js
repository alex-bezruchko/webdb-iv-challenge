
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredientsPerRecipe', table => {
        table.increments();
        table.float('QTY');
        table
            .integer('ingredient_id')
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table
            .integer('recipe_id')
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredientsPerRecipe').dropTableIfExists('recipes')
};
