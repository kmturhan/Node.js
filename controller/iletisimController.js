var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');


module.exports.index = function(req,res){
    res.render('iletisim',{title:'İletişim',message:'Bize yazın'});
}

module.exports.indexPost = function(req,res){
    var x = req.body;
    res.render('iletisim');
    console.log(x);
    
}
