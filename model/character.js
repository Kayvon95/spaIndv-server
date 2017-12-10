const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.']
    },
    imagePath: {
        type: String,
        required: [true, 'An image url is required.']
    }
});

const Character = mongoose.model('character', CharacterSchema);

module.exports = Character;