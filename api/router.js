const router = require('express').Router();

router.get('/recipe', (req, res, next) => {
    res.send(`
        <h3>Hello from express /api/recipe route</h3>
    `)
});

module.exports = router;
