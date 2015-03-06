process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app     = express();
var morgan  = require('morgan');

var hbs = require('hbs');

var port = process.env.PORT || 8080;

app.set('views', './app/express/views');
app.set('view engine', 'html');
app.set('view options', { layout: 'layout.html' });
app.engine('html', hbs.__express);

app.use(express.static(__dirname + '/public'));

app.use(morgan('combined'));

require('./app/express/routers/router')(app);

app.listen(port, function() {
  console.log('Server listening on port ' + port + ' ' + process.env.NODE_ENV);
});

module.exports = app;
