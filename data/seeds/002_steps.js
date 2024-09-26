
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_number: 1, step_instructions: "Put a large saucepan on a medium heat", recipe_id: 1},
        {step_number: 2, step_instructions: "Add 1 tbsp olive oil", recipe_id: 1},
        {step_number: 1, step_instructions: "Beat 1 or as many as needed into approprite sized bowl", recipe_id: 2},
        {step_number: 2, step_instructions: "Pour eggs out from bowl onto hot frying pan", recipe_id: 2},
        {step_number: 3, step_instructions: "Cook until desired doneness and place on desired apparatus for consumption", recipe_id: 2},
      ]);
    };
