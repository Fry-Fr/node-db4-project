const router = require('express').Router();
const Model = require('./model');

router.get('/recipes/:id', (req, res, next) => {
    const { id } = req.params;

    Model.getRecipeById(id)
        .then(recipe => {
            recipe
            ? res.json(recipe)
            : res.status(404).json({ message: `The ID ${id} does not exist.` })
        })
        .catch(err => next(err))
});

module.exports = router;
