const express = require('express');
const routes = express.Router();
const Developer = require('../model/developer');

routes.get('/developers/info', function(req, res) {
   res.json({ 'info': 'Developerlogic will be accessed via /developer/ routes.' });
});
module.exports = routes;