const Origin = require('../models/origin');
const asyncHandler = require('express-async-handler');

exports.origin_list = asyncHandler(async (req, res, next) => {
    const result = await Origin.find({})
    .sort({ name: 1 })
    .exec()
    res.send(result)
});