var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var view = require('./routes/view');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', view);
app.use('/api', api);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log("neweeeeeeeeeeeeeeerrrr",err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contactApp123',{useNewUrlParser:true}).then((res)=>{
if(res){
    console.log("connted to db");
    
}else{
    console.log("not connected to db")
}
// insert query

// var document = {name:"kumar", title:"login"};
// collection.insert(document, {w: 1}, function(err, records){
//   console.log("Record added as "+records[0]._id);
// });


});

app.listen(5000);
module.exports ={app};
