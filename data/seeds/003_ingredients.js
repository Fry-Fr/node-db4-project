
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'olive oil'},
        {ingredient_name: 'spaghetti'},
        {ingredient_name: 'tomatoes'},
        {ingredient_name: 'eggs'},
        {ingredient_name: 'butter'},
      ]);
    };
