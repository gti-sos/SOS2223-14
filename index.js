var main_c = require("./index-CCG");

var main = require("./samples/ACV");
var resultado_ana = main.funcional;

var express = require("express");
var cool = require("cool-ascii-faces");

var bodyParser = require("body-parser");
//var backend = require("./backend");

var app = express();
var port = process.env.PORT || 12345;

//app.use("/",express.static("./public"));

app.use(bodyParser.json());

//backend(app);

app.get("/cool", (request,response) => {
    response.send(cool());
    console.log("New request");
});

//Ejercicio
app.get("/CCG", (request,response) => {
    response.json(main_cris.funcion_funcional("Sevilla","traveler"));
    console.log("New GET to /CCG");
});

app.get("/CCG/datos", (request,response) => {
    response.json(main_cris.datos);
    console.log("New GET to /CCG/datos");
});


app.post("/CCG/datos", (request,response) => {
    var newFile = request.body;
    console.log(`newFile = ${JSON.stringify(newFile,null,2)}`);
    main_cris.datos.push(newFile);   
    console.log("New POST to /CCG/datos");


    response.sendStatus(201);
});

/*----------------------------------- REBECA ------------------------------------------*/

var main = require("./index-RSB");
var datos_rebeca = main.datos;
var media_rebeca = main.media;

app.get("/samples/RSB", (request,response) => {
    response.json(media_rebeca);
    console.log("New GET to /samples/RSB");
});


app.post("/samples/RSB", (request,response) => {
    var newFile = request.body;
    console.log(`newFile = <${newFile}>`);
    console.log("New POST to /samples/RSB");
    response.sendStatus(201);
});

app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys", (request,response) => {
    response.json(datos_rebeca);
    console.log("New GET to /andalusia-tourism-situation-surveys");
});

app.post(BASE_API_URL+"/andalusia-tourism-situation-surveys", (request,response) => {
    var newFile = request.body;
    console.log(`newFile = <${newFile}>`);
    console.log("New POST to /andalusia-tourism-situation-surveys");
    response.sendStatus(201);
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
