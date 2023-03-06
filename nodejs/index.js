var main = require("./samples/CCG");
var array_listas_cristina = main.getAll;
var resultado_cristina = main.funcional;

var main = require("./samples/RSB");
var resultado_rebeca = main.funcional;

var main = require("./samples/ACV");
var resultado_ana = main.funcional;

var express = require("express");
var cool = require("cool-ascii-faces");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 12345;

app.use(bodyParser.json());

app.get("/cool", (request,response) => {
    response.send(cool());
    console.log("New request");
});

//Ejercicio
app.get("/samples/CCG", (request,response) => {
    response.json(resultado_cristina);
    console.log("New GET to /samples/CCG");
});


app.post("/samples/CCG", (request,response) => {
    var newFile = request.body;


    console.log(`newFile = <${newFile}>`);
   
    console.log("New POST to /samples/CCG");


    response.sendStatus(201);
});

app.get("/samples/CCG/array", (request,response) => {
    response.json(array_listas_cristina);
    console.log("New GET to /samples/CCG/array");
});


app.post("/samples/CCG/array", (request,response) => {
    var newLine = request.body;


    console.log(`newLine = <${newLine}>`);
   
    console.log("New POST to /samples/CCG/array");


    response.sendStatus(201);
});

app.get("/samples/RSB", (request,response) => {
    response.json(resultado_rebeca);
    console.log("New GET to /samples/RSB");
});


app.post("/samples/RSB", (request,response) => {
    var newFile = request.body;
    console.log(`newFile = <${newFile}>`);
    console.log("New POST to /samples/RSB");
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