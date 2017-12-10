const express = require('express');
const routes = express.Router();
const Developer = require('../model/developer');
const Game = require('../model/game');

routes.get('/info', function(req, res) {
   res.json({ 'info': 'Developerlogic will be accessed via /developers/ routes.' });
});

routes.get(['/all', ''], function (req, res, next) {
    res.contentType('application/json');
    Developer.find({})
        .then(function (developers) {
            // console.log(developers);
            res.status(200).json(developers);
        })
        .catch(next);
        // .catch((error) => {
        //     res.status(400).json(error);
        // });
});


routes.get('/:id', function (req, res) {
    res.contentType('application/json');
    Developer.findOne({"_id": req.params.id})
        .then(function (developers) {
            console.log(developers);
            res.status(200).json(developers);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

routes.post('/', function (req, res) {
    res.contentType('application/json');
    const developerProps = req.body;

    Developer.create(developerProps)
        .then(developer => {
            developer.save();
            res.send(developer)
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});


routes.put('/:id', function (req, res, next) {
    res.contentType('application/json');

    const developerId = req.params.id;
    const developerProps = req.body;

    Developer.findOneAndUpdate({_id: developerId}, developerProps)
        .then(() => Developer.findById({_id: developerId}))
        .then(developer => res.send(developer))
        .catch(next);
});

routes.delete('/:id', function (req, res, next) {
   const developerId = req.params.id;
   Developer.findByIdAndRemove({ _id: developerId })
       .then(developer => res.status(204).send(developer))
       .catch(next);
});
//Edit game on dev
routes.put('/game/:id', function (req, res, next) {
    // Get devId from params
    const developerId = req.params.id;
    // get game attrs from body
    const gameBody = req.body;
    // make new Game from values in body
    const newGame = new Game({ name: gameBody.name, yearOfRelease: gameBody.yearOfRelease, genre: gameBody.genre, characters: gameBody.characters});

    // Find dev based on given ID
    Developer.findOne({'_id': developerId })
        .then((developer) => {
        // Push new game to dev.gamesArray
        developer.games.push(newGame);

        Promise.all([newGame.save(), developer.save()])
            .then(() => {
            res.send(developer);
            })
        });
});

// Add existing game to developer
routes.put('/:devId/addExist/:gameId', function (req, res) {
   const developerId = req.params.devId;
   const gameId = req.params.gameId;

   const queriedGame = Game.findOne({'_id': gameId});
   const addedGame = new Game(queriedGame);

   Developer.findOne({'_id': developerId})
       .then((developer) => {
        developer.games.push(queriedGame);
        Promise.all([developer.save()])
           .then(() => {
               res.send(developer);
               })
       });
});

module.exports = routes;