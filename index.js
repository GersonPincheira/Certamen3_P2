var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

app.get('/', function (req, res) {
  res.send('MULTIMEDIOS!');
});

mongoose.connect('mongodb://localhost/series', function(err, res) {
  if(err) throw err;
  console.log('Conectados a la DB');
});

//Importamos los modelos y controladores
var models = require('./models/serie')(app, mongoose);
var serieController = require('./controllers/series');

app.use(router);

var api = express.Router();

api.route('/series')
  .get(serieController.add)
  .get(serieController.findAll);

app.use('/series', api);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});