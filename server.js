process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app     = express();

var hbs = require('hbs');

var port = process.env.PORT || 8080;

app.set('views', './app/express/views');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(express.logger());
app.use(express.static(__dirname + '/public'));

require('./app/express/routers/router')(app);

app.listen(port, function() {
  console.log('Server listening on port ' + port + ' ' + process.env.NODE_ENV);
});

module.exports = app;
