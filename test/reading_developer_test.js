const assert = require('assert');
const Developer = require('../model/developer');

describe('creating and finding a developer in the database', () => {
    //Make riot available for it-blocks
    let riot;

    beforeEach((done) => {
        riot = new Developer({
            name: 'Riot',
            employeeCount: 2500
        });
        riot.save()
            .then(() => done());
        console.log(riot);
    });

    it('finds a developer named Riot', (done) => {
        Developer.find({ name: 'Riot'})
            .then((developers) => {
                // console.log(developers[0]._id);
                // console.log(riot._id);
                assert(developers[0]._id.toString() === riot._id.toString());
                done();
            });
    });

    it('find a developer on given ID', (done) => {
       Developer.findOne({ _id: riot._id })
           .then((developer) => {
                assert(developer.name === 'Riot');
                // assert(developer.name !== 'Brood');
                done();
           });
    });
});