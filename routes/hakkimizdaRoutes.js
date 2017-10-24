var express = require('express');
var router = express.Router();

var hakkimizdaCtrl = require('../controller/hakkimizdaController');
router.get('/hakkimizda',hakkimizdaCtrl.index);

module.exports = router;