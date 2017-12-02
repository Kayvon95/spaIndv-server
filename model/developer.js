const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.']
    },
    employeeCount: {
        type: Number,
        required: [true, 'Enter an amount.']
    }
});

const Developer = mongoose.model('developer', DeveloperSchema);

module.exports = Developer;
