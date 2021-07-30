
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name')
        .notNullable()
        .unique();
      tbl.decimal('quantity');
      tbl.integer('recipe_id')
        .unsigned()
        .references('recipes.recipe_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('step_id')
        .unsigned()
        .references('steps.step_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
