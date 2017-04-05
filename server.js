var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers'));
app.use(express.static('client/build'));


var server = app.listen(3000, function(){
  console.log('BucketList app running on port' + this.address().port);
});
