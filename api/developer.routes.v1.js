const express = require('express');
const routes = express.Router();
const Developer = require('../model/developer');

routes.get('/info', function(req, res) {
   res.json({ 'info': 'Developerlogic will be accessed via /developers/ routes.' });
});

module.exports = routes;