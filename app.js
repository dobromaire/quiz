var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var partials = require('express-partials');

var methodOverride = require('method-override');
var session = require("express-session");

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(partials());

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser('Quiz 2015'));
app.use(session());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    // guardar path en session.redir para despues de login/logout
    if (!req.path.match(/\/login|\/logout/)) {
        req.session.redir = req.path;
    }
 
    // hacer visible req.session en las vistas
    res.locals.session = req.session;
    next();
});

// añadimos middleware para guardar la hora de la transaccion en variables de sesion

app.use(function(req,res,next) {

    if (req.session.user) // la sesion esta loginada, si no lo está no hay que hacer nada
    {
     
        if (!req.session.transTime) {req.session.transTime = new Date();} // guardamos el momento de la transaccion}

        var _ahora = new Date(); // miramos la fecha actual del sistema
        var _diferencia = _ahora - new Date(req.session.transTime);
        // sacamos la diferencia en milisegundos de la transaccion actual a la hora de la ultima transaccion

        var _minutosDiferencia = Math.floor(((_diferencia / 1000) / 60));
        // pasamos la diferencia a minutos

        if (_minutosDiferencia>=1)
        {
            
            delete req.session.user;
            delete req.session.transTime;
            res.locals.session = req.session;
            
        }
        else {req.session.transTime=new Date();} // si han pasado menos de dos minutos guardamos el momento de la transaccion

    }
    else delete req.session.transTime; // por si acaso

    next();

});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            errors: []
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        errors: []
    });
});


module.exports = app;
