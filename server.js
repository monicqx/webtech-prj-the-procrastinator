var express = require("express");
var bodyParser = require("body-parser");  //pull information from HTML POST
var cors = require("cors");
var models  = require('./models');

var TvShow=models.TvShow;

var app = express();    //create app with express
app.use(bodyParser.json());
app.use(cors());

// REST methods
app.use(require("./routes/tvshows.js"));
app.use(require("./routes/genres.js"));

var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));

app.use(express.static('app'));

app.listen(process.env.PORT);