const assert = require('assert');
const Developer = require('../model/developer');

describe('Deleting a user', () => {
   let riot;

   beforeEach((done) => {
      riot = new Developer({
          name: 'Riot',
          employeeCount: 2500
      });
      riot.save()
          .then(() => done());
   });

    it('model instance remove', (done) => {
        riot.remove()
            .then(() => Developer.findOne({ name: 'Riot' }))
            .then((developer) => {
                assert(developer === null);
                done();
            });
    });

    it('class method remove', (done) => {
        Developer.remove({ name: 'Riot' })
            .then(() => Developer.findOne({ name: 'Riot' }))
            .then((developer) => {
                assert(developer === null);
                done();
            });
    });

    it('class method findAndRemove', () => {
        Developer.findOneAndRemove({ name: 'Riot' })
            .then(() => Developer.findOne({ name: 'Riot' }))
            .then((developer) => {
                assert(developer === null);
                done();
            });
    });

    it('class method findByIdAndRemove', () => {
        Developer.findByIdAndRemove({ name: 'Riot'})
            .then(() => Developer.findOne({ name: 'Riot' }))
            .then((developer) => {
                assert(developer === null);
                done();
            });
    });
});