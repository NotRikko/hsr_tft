const Rarity = require('../models/rarity');
const asyncHandler = require('express-async-handler');

exports.rarity_list = asyncHandler(async (req, res, next) => {
    const result = await Rarity.find({})
    .sort({ name: 1 })
    .exec()
    res.send(result)
});