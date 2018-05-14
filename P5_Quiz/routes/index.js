const express = require('express');
const Sequelize = require('sequelize');
var app = express.Router();

var sequelize = require('../models/model');

app.get('/', function (req,res,next) {
    res.render('../views/index', {title:'P5_Quiz'});
});


// renderiza vista con los nombres de los integrantes y una foto
app.get('/credits', function (req,res,next) {
    res.render('../views/credits');
});
// muestra quizzes guardados 
app.get('/quizzes', function (req,res,next) {
    sequelize.models.quiz.findAll()
        .then( quizzes => {
            res.render('quizzes',{quizzes});
    })
        .catch(error=>{
            console.log(error);
        });
});

module.exports = app;

