const express = require('express');
const routes = express.Router();
const Game = require('../model/game');

routes.get('/info', function(req, res) {
    res.json({ 'info': 'Gamelogic will be accessed via /games/ routes.' });
});

routes.get(['/all', ''], function (req, res, next) {
    res.contentType('application/json');
    Game.find({})
        .then(function (games) {
            // console.log(developers);
            res.status(200).json(games);
        })
        .catch(next);
    // .catch((error) => {
    //     res.status(400).json(error);
    // });
});

routes.post('/', function (req, res) {
    res.contentType('application/json');
    const gameProps = req.body;

    Game.create(gameProps)
        .then(game => {
            game.save();
            res.send(game)
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = routes;