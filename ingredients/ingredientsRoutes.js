const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json('Ingredients routes')
    }
    catch (e) {
        res.status(500).json('Ingredients are not available.')
    }
})

module.exports = router;