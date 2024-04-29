const Unit = require('../models/unit');
const asyncHandler = require('express-async-handler');

exports.unit_list = asyncHandler(async (req, res, next) => {
    const result = await Unit.find({})
    .sort({ name: 1 })
    .exec()
    res.send(result)
});