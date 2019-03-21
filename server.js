const express = require('express');
const server = express();
const dishesRoutes = require('./dishes/dishesRoutes');
const recipesRoutes = require('./recipes/recipesRoutes');
const ingredientsRoutes = require('./ingredients/ingredientsRoutes');

server.use('/api/dishes/', dishesRoutes);
server.use('/api/ingredients/', ingredientsRoutes);
server.use('/api/recipes/', recipesRoutes);

module.exports = server;