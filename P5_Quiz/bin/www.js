var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var http = require('http');

var routes = require('../routes/index');
var app = express();

app.set('views', path.join(__dirname,'../views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());

app.use('/', routes);

app.use(function (req,res,next) {
   var err = new Error('Not a route');
   err.status = 404;
   next(err);
});

app.use(function (err,req,res,next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    /// Si no se ha definido el código de repsuesta se envía 500
    res.status(err.status || 500);
    res.render('../views/error');
});

var port = '3000';
app.set('port', port);

var server = http.createServer(app);

server.listen(port);

