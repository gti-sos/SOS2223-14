var express = require("express");
var bodyParser = require("body-parser");
var backend_cris = require("./backend/index_cristina");
var backend_rebeca = require("./backend/index_rebeca");
var backend_ana = require("./backend/index_ana");

var app = express();
var port = process.env.PORT || 12345;

app.use("/",express.static("./public"));

app.use(bodyParser.json());

backend_cris(app);
backend_rebeca(app);
backend_ana(app);