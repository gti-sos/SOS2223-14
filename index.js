var express = require("express");
var bodyParser = require("body-parser");
var backend_cris = require("./backend/index_cristina");
var backend_rebeca = require("./backend/index_rebeca");

var app = express();
var port = process.env.PORT || 12345;

app.use("/",express.static("./public"));

app.use(bodyParser.json());

backend_cris(app);
backend_rebeca(app);
backend_ana(app);

var main = require("./index-ACV");
var resultado_ana = main.funcional;

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