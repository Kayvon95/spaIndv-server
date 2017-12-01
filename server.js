var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/env/env');
var app = express();

module.exports = {};

// Set bodyparser
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Catch invalid URL
app.get('/about', function(req, res) {
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