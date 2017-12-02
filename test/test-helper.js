const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/developers_test');
mongoose.connection
    .once('open', () => console.log('Connected to developers_test database.'))
    .on('error', (error) => {
        console.warn('Warning', error)
    });

beforeEach ((done) => {
   mongoose.connection.collections.developers.drop(() => {
       // Ready for next test
       done();
   });
});

// before((done) => {
//     mongoose.connect('mongodb://localhost/developers_test');
//     mongoose.connection
//         .once('open', () => { done(); })
//         .on('error', (error) => {
//         console.warn('Warning', error);
//     });
// });
//
// beforeEach((done) => {
//     const { developers } = mongoose.connection.collections;
//     developers.drop(() => {
//         done();
//     });
// });
