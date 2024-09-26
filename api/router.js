const router = require('express').Router();
const Model = require('./model');
const {validateId} = require('./middleware');

router.get('/recipes/:id', validateId, (req, res, next) => {
    const { id } = req.params;

    Model.getRecipeById(id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => next(err))
});

module.exports = router;
