var express = require('express');
var router = express.Router();

var yorumlarCtrl = require('../controller/yorumlarController');
router.get('/',yorumlarCtrl.index);

module.exports = router;