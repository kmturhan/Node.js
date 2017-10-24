var express = require('express');
var app = express();

module.exports.index = function(req,res){
    res.render('hakkimizda',{title:'Hakkimizda',message:'Bize yazın'});
}