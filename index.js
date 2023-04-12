import express from "express";
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

app.get("/#/info", (request,response) => {
    response.sendFile("/public/index.html");
});


loadBackend_cris_v2(app);
loadBackend_rebeca(app);
loadBackend_ana(app);

app.use(handler);

app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});