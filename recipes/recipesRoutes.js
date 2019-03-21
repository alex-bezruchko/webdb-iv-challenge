const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json('Recipes routes')
    }
    catch (e) {
        res.status(500).json('Recipes are not available.')
    }
})

module.exports = router;