var express = require("express");
var bodyParser = require("body-parser");
var backend_cris = require("./backend/index_cristina");
var backend_rebeca = require("./backend/index_rebeca");

var main_c = require("./index-CCG");

var app = express();
var port = process.env.PORT || 12345;

app.use("/",express.static("./public"));

app.use(bodyParser.json());

backend_cris(app);
backend_rebeca(app);

var main = require("./index-ACV");
var resultado_ana = main.funcional;



//CRISTINA
app.get("/CCG", (request,response) => {
    response.json(main_c.funcion_funcional("Sevilla","traveler"));
    console.log("New GET to /CCG");
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