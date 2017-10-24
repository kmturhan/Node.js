var routeiletisim =require('./iletisimRoutes');
var routeHome = require('./homeRoutes');
var routeHakkimizda = require('./hakkimizdaRoutes');
var routeYorumlar = require('./yorumlarRoutes');

module.exports = function(app){
    app.use('/',routeHome);
    app.use('/iletisim',routeiletisim);
    app.use('/hakkimizda',routeHakkimizda);
    app.use('/yorumlar',routeYorumlar);
}