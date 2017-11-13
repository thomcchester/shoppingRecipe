require('babel-register');
//Bring in external resources
var mongoose= require('mongoose')
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser')
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('../app/routes');
var _= require('underscore')
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');


//bring in internal resources
var DefaultVariables = require('./models/default');
var defaultRoute = require('./routes/default');
var index = require('./routes/index.js')
var config = require('./config')

//set app to express
var app = express();

//connect to mongoose
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

//get express running
app.set('port', process.env.PORT || 4000);
app.use(session({
    saveUninitialized: true,
    secret: 'secret',
    key: 'user',
    resave: true,
    s: false,
    cookie: {maxAge: null, secure: true}
}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//set routes
app.use("/defaults", defaultRoute);
app.use('/', index);

//get connection
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('server/views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

var server = require('http').createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
