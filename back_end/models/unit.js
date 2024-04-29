const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unitSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    origin: {
        type: Schema.Types.ObjectId,
        ref: 'Origin',
        required: true,
    },
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
    rarity: {
        type: Schema.Types.ObjectId,
        ref: 'Rarity',
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Unit', unitSchema);