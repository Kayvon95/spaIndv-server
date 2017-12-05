const mongoose = require('mongoose');
const config = require('./env/env');

const init = () => {
mongoose.Promise = global.Promise;

mongoose.connect(config.dbUrl);
mongoose.connection
    .once(('open'), () => console.log('Connected to Mongo on ' + config.dbUrl))
    .on(('error'), (error) => {
        console.log('Warning: ', error.toString());
    });
};


module.exports = init;