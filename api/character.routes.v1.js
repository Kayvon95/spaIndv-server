const express = require('express');
const routes = express.Router();
const Character = require('../model/character');

routes.get('/info', function(req, res) {
    res.json({ 'info': 'Characterlogic will be accessed via /characters/ routes.' });
});

module.exports = routes;