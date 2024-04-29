var express = require('express');
var router = express.Router();
const unit_controller = require('../controllers/unit_controller');
const rarity_controller = require('../controllers/rarity_controller')

router.get('/', unit_controller.unit_list);
router.get('/rarities', rarity_controller.rarity_list);

module.exports = router;
