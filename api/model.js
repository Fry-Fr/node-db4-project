const db = require('../data/db-config');

module.exports = {
    getRecipeById,
}

async function getRecipeById(recipe_id) {
    const [recipe] = await db('recipes').where({ 'recipes.recipe_id': recipe_id });
    const steps = await db('steps')
    .orderBy('steps.step_number', 'asc')
    .where({ 'steps.recipe_id': recipe_id });
    const ingredients = await db('ingredients').where({ "ingredients.recipe_id": recipe_id });
    
    return {
        "recipe_id": recipe.recipe_id,
        "recipe_name": recipe.recipe_name,
        "steps": steps.map(step => {
            return {
                'step_id': step.step_id,
                'step_number': step.step_number,
                'step_instructions': step.step_instructions,
                'ingredients': ingredients.filter(i => {
                    if (step.step_id === i.step_id) {
                        return {
                            'ingredient_id': i.id ,
                            'ingredient_name': i.ingredient_name,
                            'quantity': i.quantity,
                        }
                    }
                }),
            }
        })
    };
};
