const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const RaritySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Rarity', RaritySchema);