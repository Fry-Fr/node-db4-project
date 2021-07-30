
exports.up = function(knex) {
  return knex.schema.createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.integer('step_number')
        .notNullable();
      tbl.string('step_instuctions')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .references('recipes.recipe_id')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
