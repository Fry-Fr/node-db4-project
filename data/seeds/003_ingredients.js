
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'olive oil', recipe_id: 1, step_id: 2},
        {ingredient_name: 'spaghetti', recipe_id: 1, step_id: 2},
        {ingredient_name: 'tomatoes', recipe_id: 1, step_id: 2},
        {ingredient_name: 'eggs', recipe_id: 2, step_id: 3},
        {ingredient_name: 'butter', recipe_id: 2, step_id: 5},
      ]);
    };
