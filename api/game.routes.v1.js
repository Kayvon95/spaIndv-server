const express = require('express');
const routes = express.Router();
const Game = require('../model/game');

routes.get('/info', function(req, res) {
    res.json({ 'info': 'Gamelogic will be accessed via /games/ routes.' });
});

module.exports = routes;