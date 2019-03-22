const express = require('express');
const dishesDb = require('./../data/helpers/dishesDb');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const dishes = await dishesDb.getDishes();
        if (dishes) {
            res.status(200).json(dishes)
        }
        else {
            res.status(404).json('Dishes are not available.')
        }

    }
    catch (e) {
        res.status(500).json(e)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const dish = await dishesDb.getById(id);
        if (dish) {
            res.status(200).json(dish)
        }
        else {
            res.status(404).json('Dishes are not available.')
        }

    }
    catch (e) {
        res.status(500).json(e)
    }
})

router.post('/', async (req, res) => {
    try {
        const newDish = req.body;
        const added = await dishesDb.insert(newDish);
        if (newDish) {
            res.status(201).json('Dish was successfully added.')
        }
        else {
            res.status(404).json('All fields are required')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})
module.exports = router;