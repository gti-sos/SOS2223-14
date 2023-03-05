var main = require("./samples/CCG");
var array_listas_cristina = main.getAll;
var resultado_cristina = main.funcional;

var express = require("express");
var cool = require("cool-ascii-faces");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 12345;

app.use(bodyParser.json());

const BASE_API_URL = "/api/v1";

app.get("/cool", (request,response) => {
    response.send(cool());
    console.log("New request");
});

//Ejercicio
app.get(BASE_API_URL+"/samples/CCG", (request,response) => {
    response.json(resultado_cristina);
    console.log("New GET to /samples/CCG");
});


app.post(BASE_API_URL+"/samples/CCG", (request,response) => {
    var newFile = request.body;


    console.log(`newFile = <${newFile}>`);
   
    console.log("New POST to /samples/CCG");


    response.sendStatus(201);
});

app.get(BASE_API_URL+"/samples/CCG/array", (request,response) => {
    response.json(array_listas_cristina);
    console.log("New GET to /samples/CCG/array");
});


app.post(BASE_API_URL+"/samples/CCG/array", (request,response) => {
    var newLine = request.body;


    console.log(`newLine = <${newLine}>`);
   
    console.log("New POST to /samples/CCG/array");


    response.sendStatus(201);
});

app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});
