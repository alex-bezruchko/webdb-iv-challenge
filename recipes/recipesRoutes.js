const express = require('express');
const recipesDb = require('./../data/helpers/recipesDb');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await recipesDb.getRecipes();
        if (recipes) {
            res.status(200).json(recipes)
        }
        else {
            res.status(404).json('Recipes are not available.')
        }

    }
    catch (e) {
        res.status(500).json(e)
    }
})

router.post('/', async (req, res) => {
    try {
        const newRecipe = req.body;
        const added = await recipesDb.insert(newRecipe);
        if (newRecipe) {
            res.status(201).json('Recipe was successfully added.')
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