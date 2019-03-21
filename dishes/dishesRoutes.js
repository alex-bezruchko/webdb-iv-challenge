const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json('Dishes routes')
    }
    catch (e) {
        res.status(500).json('Dishes are not available.')
    }
})

module.exports = router;