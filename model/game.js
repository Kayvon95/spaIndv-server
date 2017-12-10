const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.']
    },
    yearOfRelease: {
        type: Number,
        required: [true, 'Enter year of release.'],
        min: [1972, 'No game is older than Pong.']
    },
    genre: {
        type: String,
        required: [ true, 'Enter a genre']
    },
    imagePath: {
        type: String
    },
    websiteUrl: {
        type: String
    },
    characters: [{
        type: Schema.Types.ObjectId,
        ref: 'character'
    }]
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game;