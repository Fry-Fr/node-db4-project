const Model = require('./model');

module.exports = {
    validateId,
}

async function validateId(req, res, next) {
    const { id } = req.params;
    const vid = await Model.findRecipeById(id);

    if (!vid) {
        res.status(404).json({ message: `The ID ${id} does not exist.` });
        return;
    }

    next();
};
