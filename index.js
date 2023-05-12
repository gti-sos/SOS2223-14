import express from "express";
import request from "request";
import cors from "cors";

import  { loadBackend_cris_v2 } from "./backend/v2/index_cristina.js";
import  { loadBackend_rebeca } from "./backend/v2/index_rebeca.js";
import  { loadBackend_ana } from "./backend/v2/index_ana.js";
import { handler } from "./frontend/build/handler.js";

var app = express();
app.use(cors());

var port = process.env.PORT || 12345;

app.use(express.json());
app.use(express.static("./public"));

// Proxy Cristina

var paths = "/agr";
var apiServerHost = "https://sos2223-12.ew.r.appspot.com/api/v2/agroclimatic";

app.use(paths, function(req,res){
    var url = apiServerHost + req.url;
    req.pipe(request(url)).pipe(res);
});

// Proxy Rebeca

var paths_r = "/bicycle";
var apiServerHost_r = "https://sos2223-17.appspot.com/api/v2/andalusian-bicycle-plans";

app.use(paths_r, function(req,res){
    var url = apiServerHost_r + req.url;
    req.pipe(request(url)).pipe(res);
});


app.get("/", (request,response) => {
    response.sendFile("/public/index.html");
});


loadBackend_cris_v2(app);
loadBackend_rebeca(app);
loadBackend_ana(app);

app.use(handler);

app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});