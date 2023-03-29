"use strict"
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var project_routes = require('./rutes/r_project');
//middleware ==> el que s'executa abans de la funcionalitat d'un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); //peticions q acceptem
    next();
});

//rutas
app.use('/', project_routes);


//exportar
module.exports = app;