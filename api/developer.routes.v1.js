const express = require('express');
const routes = express.Router();
const Developer = require('../model/developer');

routes.get('/info', function(req, res) {
   res.json({ 'info': 'Developerlogic will be accessed via /developers/ routes.' });
});

routes.get('/all', function (req, res, next) {
    res.contentType('application/json');
    Developer.find({})
        .then(function (developers) {
            console.log(developers);
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

routes.post('/create', function (req, res) {
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


module.exports = routes;