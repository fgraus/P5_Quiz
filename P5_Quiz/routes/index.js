const express = require('express');
const Sequelize = require('sequelize');
var app = express.Router();

var models = require('../models/model');

app.get('/', function (req,res,next) {
    res.render('../views/index', {title:'P5_Quiz'});
});


// renderiza vista con los nombres de los integrantes y una foto
app.get('/credits', function (req,res,next) {
    res.render('../views/credits');
});
// muestra quizzes guardados 
app.get('/quizzes', function (req,res,next) {
    aux = "";
    response = "";
    n = 0;
    console.log('aqui');
    models.getAll()
        .forEach(quiz => {
            aux = `Pregunta número ${quiz.id}: ${quiz.question}`;
            aux = aux.concat(aux);
            response = JSON.stringify(aux);
        });
    models.quiz.findAll()
        .each(quiz =>{

        })
        .then((response,n) => {
            response = JSON.stringify(response);
            res.send('<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '   <title>Quizzes</title>' +
                '</head>' +
                '<body>' +
                '<h1>Lista de quizzes</h1>' +
                response +
                '</body>' +
                '</html>');
    })
});

module.exports = app;

