var express = require("express");
var cool = require("cool-ascii-faces");
var app = express();
var port = process.env.PORT || 12345;
var bodyParser = require("body-parser");
var main_c = require("./index-CCG");
var main_r = require("./index-RSB");
const BASE_API_URL = "/api/v1";

app.use(bodyParser.json());

var backend_cris = require("./backend/index_cristina");
var backend_rebeca = require("./backend/index_rebeca");
var main = require("./index-ACV");
var resultado_ana = main.funcional;

backend_cris(app);
backend_rebeca(app);

app.get("/cool", (request,response) => {
    response.send(cool());
    console.log("New request");
});

//CRISTINA
app.get("/CCG", (request,response) => {
    response.json(main_c.funcion_funcional("Sevilla","traveler"));
    console.log("New GET to /CCG");
});

/*----------------------------------- REBECA ------------------------------------------*/

app.get(BASE_API_URL+"/samples/RSB", (request,response) => {
    response.json(main_r.media);
    console.log("New GET to /samples/RSB");
});

//Ana
app.get("/samples/ACV", (request,response) => {
    response.json(resultado_ana);
    console.log("New GET to /samples/ACV");
});

app.post("/samples/ACV", (request,response) => {
    var newFile = request.body;
    console.log(`newFile = <${newFile}>`);
    console.log("New POST to /samples/ACV");
    response.sendStatus(201);
});

app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});

app.use(bodyParser.json());
/*var backend_ana = require("./backend/index_ana");

backend_ana(app);

app.post(BASE_API_URL+"/hotel-occupancy-surveys", (request,response) => {
    var newFile = request.body;        
    console.log(`newFile = <${newFile}>`);
    console.log("New POST to /hotel-occupancy-surveys")
    response.sendStatus(201);
});*/