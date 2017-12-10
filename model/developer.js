const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.']
    },
    yearFounded: {
      type: Number
    },
    hqCity: {
        type: String,
    },
    hqCountry: {
        type: String,
        required: [true, 'Enter a country.']
    },
    employeeCount: {
        type: Number,
        required: [true, 'Enter an amount.']
    },
    websiteUrl: {
        type: String,
        required: [true, 'Submit developer website URL.']
    },
    imagePath: {
        type: String
    },
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'game'
        }]
});

const Developer = mongoose.model('developer', DeveloperSchema);

module.exports = Developer;
