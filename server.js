var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/env/env');
var characterRoutes_v1 = require('./api/character.routes.v1');
var developerRoutes_v1 = require('./api/developer.routes.v1');
var gameRoutes_v1 = require('./api/game.routes.v1');
var app = express();

module.exports = {};

// Set bodyparser
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.set('port', (process.env.PORT || config.env.webPort));
app.set('env', (process.env.ENV || 'development'));

// CORS headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN || 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

//set routes
app.use('/api/v1/characters', characterRoutes_v1);
app.use('/api/v1/developers', developerRoutes_v1);
app.use('/api/v1/games', gameRoutes_v1);

//set error catcher
app.use(function (err, req, res, next) {
    // console.dir(err);
    var error = {
        message: err.message,
        code: err.code,
        name: err.name,
        status: err.status
    };
    res.status(401).send(error);
});
// Catch invalid URL
app.get(['/about',  '/api/v1/about'], function(req, res) {
    res.json({'info' : 'The about page'});
});

app.use('*', function (req, res) {
    res.status(400);
    res.json({
        'error': 'URL not found. Please check your URL and try again.'
    });
});

app.listen(config.env.webPort, function () {
    console.log('De server luistert op port ' + app.get('port'));
    console.log('Zie bijvoorbeeld http://localhost:'+ app.get('port') + '/api/v1/someroutes');
});

module.exports = app;