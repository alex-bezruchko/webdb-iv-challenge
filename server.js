const express = require('express');
const server = express();
const dishesRoutes = require('./dishes/dishesRoutes');
const recipesRoutes = require('./recipes/recipesRoutes');

server.use('/api/dishes/', dishesRoutes);
server.use('/api/recipes/', recipesRoutes);

module.exports = server;