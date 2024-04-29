const Class = require('../models/class');
const asyncHandler = require('express-async-handler');

exports.class_list = asyncHandler(async (req, res, next) => {
    const result = await Class.find({})
    .sort({ name: 1 })
    .exec()
    res.send(result)
});