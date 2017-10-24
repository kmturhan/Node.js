var express = require('express');
var router = express.Router();

var iletisimCtrl = require('../controller/iletisimController');
router.get('/',iletisimCtrl.index);
router.post('/',iletisimCtrl.indexPost);
module.exports = router;
