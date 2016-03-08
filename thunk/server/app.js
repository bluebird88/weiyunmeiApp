var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stringUtils = require('./utils/string');
var mapCache = require('./MapCache');
var env = require('./env');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  res.STATUS = {
    SUCCESS : 0,
    FAIL : -1,
    NO_PERMISSION : -10
  };

  res.writeJson = function(status,result,message){
    this.json({
      status : status,
      result : data,
      message : message
    });
  };

  next();
});

// 权限判断
app.use(function(req,res,next){
  var requestUrl = req.originalUrl;
  if(requestUrl.indexOf('?')!=-1){
    requestUrl = requestUrl.split('?')[0];
  }
  if(requestUrl!='/login.do' || requestUrl!='/register.do'){
    var token = req.query.token;
    if(stringUtils.isBlank(token)){
      res.writeJson(res.STATUS.NO_PERMISSION,'尚未登录','无访问权限');
      return;
    }

    var userInfo = mapCache.getCache(token,env.cache.userInfo);
    if(userInfo == null || userInfo.id==null){
      res.writeJson(res.STATUS.NO_PERMISSION,'尚未登录','无访问权限');
      return;
    }

    req.userInfo = userInfo;

  }
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


module.exports = app;