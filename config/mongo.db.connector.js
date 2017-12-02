const mongoose = require('mongoose');
const config = require('./env/env');

mongoose.Promise = global.Promise;

mongoose.connect(config.dbUrl);
var connection  = mongoose.connection
    .once(('open'), () => console.log('Connected to Mongo on ' + config.dbUrl))
    .on(('error'), (error) => {
        console.log('Warning: ', error.toString());
    });

module.exports = connection;