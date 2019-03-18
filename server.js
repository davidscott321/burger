var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var router = require('./controllers/burgers_controller.js');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', router);

app.listen(PORT,function() 
{
  console.log("App listening on PORT " + PORT);
});