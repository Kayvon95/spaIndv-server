const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
   name: {
       type: String,
       required: [true, 'A name is required.']
   },
   location: {
     country: {
         type: String
     },
     city: {
         type: String
     }
   },
   employeeCount: {
       type: Number
   }
});

const Developer = mongoose.model('developer', DeveloperSchema);

module.exports = Developer;