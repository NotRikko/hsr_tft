var express = require('express');
var router = express.Router();
const unit_controller = require('../controllers/unit_controller');
const rarity_controller = require('../controllers/rarity_controller')
const origin_controller = require('../controllers/origin_controller')
const class_controller = require('../controllers/class_controller')

router.get('/', unit_controller.unit_list);
router.get('/rarities', rarity_controller.rarity_list);
router.get('/origins', origin_controller.origin_list);
router.get('/classes', class_controller.class_list);

module.exports = router;
