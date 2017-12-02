const assert = require('assert');
const Developer = require('../model/developer');

describe('creating a developer record', () => {
   it('saves a developer', (done) => {
       const dev = new Developer({
           name: 'Riot',
           employeeCount: 2500
       });
       dev.save()
           .then(() => {
            assert(!dev.isNew);
            done();
           });
       console.log(dev);
    });
});