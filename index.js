var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
app.use('/components',express.static('css'));



app.set('view engine','pug');
app.set('views',path.join(__dirname,'/views'));



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/css',express.static(path.join(__dirname,'css')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.post('/iletisim',function(req,res){
    var x = req.body;
    fs.readFile('./orji/veri.json','utf8',function(err,data){
        data = JSON.parse(data);
        var a = Object.keys(data).length+1;
        data[a] = x;
        console.log(a);
        console.log(data);
        
        fs.writeFile('./orji/veri.json',JSON.stringify(data),function(err){
            console.log('bir hata var.');
        });
    });
});

/*app.get('/yorumlar',function(req,res){
    fs.readFile('./orji/veri.json','utf8',function(err,data){
        data = JSON.parse(data);
        var veri = data["mesaj"];
        for(var i in data){
            veri += i +") "+ data[i].mesaj+"\n";
        }

        //console.log(veri);
        res.sendFile(path.join(__dirname+'./views/yorumlar'));
        res.end(veri);
    });
});*/



require('./routes/routeManager')(app);

app.listen(3000,function(){
    console.log('3000 deyim...');
})
