
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_number: 1, step_instuctions: "Put a large saucepan on a medium heat", recipe_id: 1},
        {step_number: 2, step_instuctions: "Add 1 tbsp olive oil", recipe_id: 1},
      ]);
    };
