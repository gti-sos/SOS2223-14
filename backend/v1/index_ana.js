import Datastore from 'nedb';
var db = new Datastore();
const BASE_API_URL = "/api/v1";

function loadBackend_ana(app) {    

var datos = [
    {
        "province": "Almería",
        "year": 2021,
        "average_employment": 1.848,
        "estimated_average_open_establishment": 138,
        "estimated_average_place": 18.924,
        "estimated_room": 7.487,
        "occupancy_rate_by_place": 43,
        "occupancy_rate_by_weekend_place": 49,
        "room_occupancy_rate": 52
    },
    {
        "province": "Cádiz",
        "year": 2021,
        "average_employment": 4.112,
        "estimated_average_open_establishment": 351,
        "estimated_average_place": 30.156,
        "estimated_room": 13.874,
        "occupancy_rate_by_place": 48,
        "occupancy_rate_by_weekend_place": 56, 
        "room_occupancy_rate": 55
    },
    {
        "province": "Córdoba",
        "year": 2021,
        "average_employment": 828,
        "estimated_average_open_establishment": 148,
        "estimated_average_place": 8.784,
        "estimated_room": 4.438,
        "occupancy_rate_by_place": 33,
        "occupancy_rate_by_weekend_place": 42,
        "room_occupancy_rate": 40
    },
    {
        "province": "Granada",
        "year": 2021,
        "average_employment": 1.948,
        "estimated_average_open_establishment": 278,
        "estimated_average_place": 21.678,
        "estimated_room": 10.340,
        "occupancy_rate_by_place": 37,
        "occupancy_rate_by_weekend_place": 47,
        "room_occupancy_rate": 43
    },
    {
        "province": "Huelva",
        "year": 2021,
        "average_employment": 1.846,
        "estimated_average_open_establishment": 110,
        "estimated_average_place": 12.693,
        "estimated_room": 5.689,
        "occupancy_rate_by_place": 53,
        "occupancy_rate_by_weekend_place": 61,
        "room_occupancy_rate": 57
    },
    {
        "province": "Jaén",
        "year": 2021,
        "average_employment": 755,
        "estimated_average_open_establishment": 142,
        "estimated_average_place": 7.039,
        "estimated_room": 3.627,
        "occupancy_rate_by_place": 27,
        "occupancy_rate_by_weekend_place": 35,
        "room_occupancy_rate": 31
    },
    {
        "province": "Málaga",
        "year": 2021,
        "average_employment": 8548,
        "estimated_average_open_establishment": 401,
        "estimated_average_place": 59.870,
        "estimated_room": 27.065,
        "occupancy_rate_by_place": 48,
        "occupancy_rate_by_weekend_place": 54,
        "room_occupancy_rate": 54
    },
    {
        "province": "Sevilla",
        "year": 2021,
        "average_employment": 2.441,
        "estimated_average_open_establishment": 250,
        "estimated_average_place": 23.494,
        "estimated_room": 11.694,
        "occupancy_rate_by_place": 40,
        "occupancy_rate_by_weekend_place": 50,
        "room_occupancy_rate": 46
    },
    {
        "province": "Almería",
        "year": 2022,
        "average_employment": 2.968,
        "estimated_average_open_establishment": 179,
        "estimated_average_place": 25.974,
        "estimated_room": 10.190,
        "occupancy_rate_by_place": 47,
        "occupancy_rate_by_weekend_place": 54,
        "room_occupancy_rate": 59
    },
    {
        "province": "Cádiz",
        "year": 2022,
        "average_employment": 5.896,
        "estimated_average_open_establishment": 408,
        "estimated_average_place": 38.916,
        "estimated_room": 17.735,
        "occupancy_rate_by_place": 53,
        "occupancy_rate_by_weekend_place": 61,
        "room_occupancy_rate": 61
    },
    {
        "province": "Córdoba",
        "year": 2022,
        "average_employment": 1.209,
        "estimated_average_open_establishment": 183,
        "estimated_average_place": 10.936,
        "estimated_room": 5.509,
        "occupancy_rate_by_place": 44,
        "occupancy_rate_by_weekend_place": 55,
        "room_occupancy_rate": 51
    },
    {
        "province": "Granada",
        "year": 2022,
        "average_employment": 3.178,
        "estimated_average_open_establishment": 361,
        "estimated_average_place": 29.478,
        "estimated_room": 14.080,
        "occupancy_rate_by_place": 47,
        "occupancy_rate_by_weekend_place": 58,
        "room_occupancy_rate": 53
    },
    {
        "province": "Huelva",
        "year": 2022,
        "average_employment": 2.720,
        "estimated_average_open_establishment": 136,
        "estimated_average_place": 18.341,
        "estimated_room": 8.055,
        "occupancy_rate_by_place": 53,
        "occupancy_rate_by_weekend_place": 62,
        "room_occupancy_rate": 58
    },
    {
        "province": "Jaén",
        "year": 2022,
        "average_employment": 926,
        "estimated_average_open_establishment": 161,
        "estimated_average_place": 8.016,
        "estimated_room": 4.040,
        "occupancy_rate_by_place": 33,
        "occupancy_rate_by_weekend_place": 45,
        "room_occupancy_rate": 39
    },
    {
        "province": "Málaga",
        "year": 2022,
        "average_employment": 13.875,
        "estimated_average_open_establishment": 548,
        "estimated_average_place": 84.299,
        "estimated_room": 38.044,
        "occupancy_rate_by_place": 61,
        "occupancy_rate_by_weekend_place": 66,
        "room_occupancy_rate": 71
    },
    {
        "province": "Sevilla",
        "year": 2022,
        "average_employment": 4.203,
        "estimated_average_open_establishment": 365,
        "estimated_average_place": 32.045,
        "estimated_room": 16.057,
        "occupancy_rate_by_place": 56,
        "occupancy_rate_by_weekend_place": 65,
        "room_occupancy_rate": 63
    }
];

//db.insert(datos);

//loadInitialData
app.get(BASE_API_URL+"/hotel-occupancy-surveys/loadInitialData", (request,response) => {
    console.log("New GET to /hotel-occupancy-surveys/loadInitialData");
    db.find({}, function(err,data){
        if(err){
            console.log(`Error geting /hotel-occupancy-surveys/loadInitialData: ${err}`);
            response.sendStatus(500);
        }
        else{
            if(data.length==0){
                console.log(`data inserted: ${datos.length}`);  
                db.insert(datos); 
                response.json(datos.map((d)=>{
                    delete d._id;
                    return d;
                }));    
            }
            else{
                 console.log(`Data is already inserted: ${data.length}`);
                 response.status(200).send("Data is already inserted");          
            }
        }
    });
});

//GET DOCS
app.get(BASE_API_URL+"/hotel-occupancy-surveys/docs", (request,response) => {
    response.redirect("https://documenter.getpostman.com/view/25974748/2s93K1nyei");
});

//POST
app.post(BASE_API_URL+"/hotel-occupancy-surveys", (request,response) => {
    var newFile = request.body;
    console.log("new request new POST request /hotel-occupancy-surveys");
    if(!newFile.province || !newFile.year || !newFile.average_employment || !newFile.estimated_average_open_establishment || !newFile.estimated_average_place || !newFile.estimated_room || !newFile.occupancy_rate_by_place || !newFile.occupancy_rate_by_weekend_place || !newFile.room_occupancy_rate){
        console.log(`No se han recibido los campos esperados:`);
        response.status(400).send("Bad Request");
    }else{
        db.find({province: newFile.province, year:newFile.year}, function(err, data){
            if(err){
                console.log(`Error posting /hotel-occupancy-surveys: ${err}`);
                response.sendStatus(500);
            }
            else{
                if(data.length!=0){
                    response.status(409).send("This resource already exists");
                }
                else{
                    db.insert(newFile, function(err, data){
                        if(err){
                            console.log(`Error posting /hotel-occupancy-surveys: ${err}`);
                            response.sendStatus(500);
                        }
                        else{
//                            datos.push(newFile);
                            console.log(`newFile = ${JSON.stringify(newFile,null,2)}`);
                            console.log("New POST to /hotel-occupancy-surveys");
                            response.status(201).send("Created");
                        }
                    });
                }
            }
        });
        
    }        
});

//GET
app.get(BASE_API_URL+"/hotel-occupancy-surveys", (request,response) => {
    console.log("New GET to /hotel-occupancy-surveys");
    var province = request.query.province;
    var year = request.query.year;
    var average_employment = request.query.average_employment;
    var estimated_average_open_establishment = request.query.estimated_average_open_establishment;
    var estimated_average_place = request.query.estimated_average_place;
    var estimated_room = request.query.estimated_room;
    var occupancy_rate_by_place = request.query.occupancy_rate_by_place;
    var occupancy_rate_by_weekend_place = request.query.occupancy_rate_by_weekend_place;
    var room_occupancy_rate = request.query.room_occupancy_rate;
    var from = request.query.from;
    var to = request.query.to;

    // Query
    for(var i = 0; i<Object.keys(request.query).length;i++){
        var element = Object.keys(request.query)[i];
        if(element != "year" 
        && element != "from"
        && element != "to"
        && element != "province"
        && element != "limit" 
        && element != "offset" 
        && element != "average_employment" 
        && element != "estimated_average_open_establishment"
        && element != "estimated_average_place"
        && element != "estimated_room" 
        && element != "occupancy_rate_by_place"
        && element != "occupancy_rate_by_weekend_place"
        && element != "room_occupancy_rate"){
            console.log(`No se han recibido los campos esperados:`);
            response.status(400).send("Bad Request");
        }
    }

    // "from" tiene que ser menor o igual a "to"
    if(from>to){
        console.log(`No se han recibido los campos esperados:`);
        response.status(400).send("Bad Request");
    }else{

    db.find({},function(err, filteredList){
        if(err){
            console.log(`Error geting /hotel-occupancy-surveys: ${err}`);
            response.sendStatus(500);
        }
        
        if (filteredList.length==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }

        // Búsqueda por provincia
        if (province != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.province == province);
            });
            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // Búsqueda por año
        if (year != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.year == year);

            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // Búsqueda por average_employment
        if (average_employment != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.average_employment == average_employment);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // Búsqueda por estimated_average_open_establishment
        if (estimated_average_open_establishment != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.estimated_average_open_establishment == estimated_average_open_establishment);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // Búsqueda por estimated_average_place
        if (estimated_average_place != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.estimated_average_place == estimated_average_place);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // Búsqueda por estimated_room
        if (estimated_room != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.estimated_room == estimated_room);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // Búsqueda por occupancy_rate_by_place
        if (occupancy_rate_by_place != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.occupancy_rate_by_place == occupancy_rate_by_place);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // Búsqueda por occupancy_rate_by_weekend_place
        if (occupancy_rate_by_weekend_place != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.occupancy_rate_by_weekend_place == occupancy_rate_by_weekend_place);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // Búsqueda por room_occupancy_rate
        if (room_occupancy_rate != null){
            var filteredList = filteredList.filter((reg)=>
            {
                return (reg.room_occupancy_rate == room_occupancy_rate);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }
        }
        // "from"/"to"
        if(from != null && to != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.year >= from && reg.year <=to);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }    
        }
        // Resultado
        if(request.query.limit != undefined || request.query.offset != undefined){
            filteredList = paginacion(request,filteredList);
        }
        filteredList.forEach((element)=>{
            delete element._id;
        });
        if(request.query.fields!=null){
            //¿Los campos son correctos?
            var fieldsList = request.query.fields.split(",");
            for(var i = 0; i<fieldsList.length;i++){
                var element = fieldsList[i];
                if(element != "province"
                && element != "year"
                && element != "average_employment"
                && element != "estimated_average_open_establishment"
                && element != "estimated_average_place"
                && element != "estimated_room"
                && element != "occupancy_rate_by_place" 
                && element != "room_occupancy_rate"){
                    console.log(`No se han recibido los campos esperados:`);
                    response.status(400).send("Bad Request");
                }
            }
        }
        if(filteredList.length>1){
            response.send(JSON.stringify(filteredList,null,2));
            console.log(`Datos devueltos: ${filteredList.length}`);
        }
        else{
            if(filteredList.length!=0){
                console.log(`data returned ${filteredList.length}`);
                delete filteredList[0]._id;
                response.json(filteredList[0]);
            }
        }}
    )};
});





app.get(BASE_API_URL+"/hotel-occupancy-surveys/:province/:year", (request,response) => {
    var año = parseInt(request.params.year);
    var ciudad = request.params.province;
    console.log(`New GET to /hotel-occupancy-surveys/${ciudad}/${año}`);
    db.find({province : ciudad, year : año}).exec((err, data) =>{
        if(err){
            console.log(`Error geting /hotel-occupancy-surveys/${ciudad}/${año}: ${err}`);
            response.sendStatus(500);
        }else{
            if(data.length!=0){
                console.log(`data returned ${data.length}`);
                response.json(data.map((d)=>{
                    delete d._id;
                    return d;
                })); 
            }
            else{
                console.log(`Data not found /hotel-occupancy-surveys/${province}/${year}: ${err}`);
                response.status(404).send("Data not found");
            }
        }
    });
});

//Paginación
app.get(BASE_API_URL+"/hotel-occupancy-surveys/:province", (request,response) => {
    var ciudad = request.params.province;
    console.log(`New GET to /hotel-occupancy-surveys/${ciudad}`);
    db.find({province : ciudad}).skip(0).limit(datos.length).exec((err, data) =>{
        if(err){
            console.log(`Error geting /hotel-occupancy-surveys/${ciudad}: ${err}`);
            response.sendStatus(500);
        }else{
            if(data.length!= 0){
                console.log(`data returned ${data.length}`);
                response.json(data.map((d)=>{
                    delete d._id;
                    return d;
                }));
            }
             else{
                console.log(`Data not found /hotel-occupancy-surveys/${ciudad}: ${err}`);
                response.status(404).send("Data not found");
             }        
        }
    });
});

app.post(BASE_API_URL+"/hotel-occupancy-surveys/:province",(request,response)=>{
    response.sendStatus(405, "Method not allowed");
});

app.post(BASE_API_URL+"/hotel-occupancy-surveys/:province/:year",(request,response)=>{
    response.sendStatus(405, "Method not allowed");
});

app.put(BASE_API_URL + "/hotel-occupancy-surveys",(request,response)=>{
    response.sendStatus(405, "Method not allowed");
});

app.put(BASE_API_URL + "/hotel-occupancy-surveys/:province",(request,response)=>{
    response.sendStatus(405, "Method not allowed");
});

//PUT
app.put(BASE_API_URL+"/hotel-occupancy-surveys/:province/:year", (request,response) => {
    var newFile = request.body;
    var ciudad = request.params.province;
    var anyo = parseInt(request.params.year);
    if(!newFile.province || !newFile.year || !newFile.average_employment || !newFile.estimated_average_open_establishment || !newFile.estimated_average_place || !newFile.estimated_room || !newFile.occupancy_rate_by_place || !newFile.occupancy_rate_by_weekend_place || !newFile.room_occupancy_rate){
        console.log(`No se han recibido los campos esperados:`);
        response.status(400).send("Bad Request");
    }else{
        db.update({$and: [{province:ciudad}, {year:anyo}]}, {$set: newFile},function(err, data){
            if(err){
                console.log(`Error put /hotel-occupancy-surveys/${ciudad}/${anyo}: ${err}`);
                response.sendStatus(500);
            }
            else{
                console.log(`Numero de documentos actualizados: ${data}`);
                response.sendStatus(200);  
                }
        });
    }
});

app.delete(BASE_API_URL +"/hotel-occupancy-surveys/:province",(request, response)=>{
    var ciudad = request.params.province;
    console.log(`New DELETE to /hotel-occupancy-surveys/${ciudad}`);
    db.remove({province:ciudad},{multi:true},function (err, numRemoved){
        if(err){
            console.log(`Error deleting /hotel-occupancy-surveys/${ciudad}: ${err}`);
            response.sendStatus(500);
        }else{
            if(numRemoved==0){
                response.status(404).send("Not Found");
            }
            else{
                console.log(`Files removed ${numRemoved}`);
                response.sendStatus(200);
            }              
        }
    });
});

app.delete(BASE_API_URL +"/hotel-occupancy-surveys/:province/:year",(request, response)=>{
    var ciudad = request.params.province;
    var año = parseInt(request.params.year);

    console.log(`New DELETE to //hotel-occupancy-surveys/${ciudad}/${año}`);

    db.remove({province:ciudad, year:año},{multi:true},function (err, dbRemoved){
        if(err){
            console.log(`Error deleting /hotel-occupancy-surveys/${ciudad}/${año}: ${err}`);
            response.sendStatus(500);
        }else{
            if(dbRemoved==0){
                response.status(404).send("Not Found");
            }
            else{
                console.log(`Files removed ${dbRemoved}`);
                response.sendStatus(200);
            }               
        }
    });
});

//DELETE ALL
app.delete(BASE_API_URL +"/hotel-occupancy-surveys",(request, response)=>{
    db.remove({}, {multi:true},function (err, numRemoved){
        if(err){
            console.log(`Error deleting /hotel-occupancy-surveys/${ciudad}: ${err}`);
            response.sendStatus(500);
        }else{
            if(numRemoved==0){
                response.status(404).send("Not Found");
            }
            else{
                console.log(`Files removed ${numRemoved}`);
                response.sendStatus(200);
            }               
        }
    });
});

function paginacion(req, lista){
    var res = [];
    const limit = req.query.limit;
    const offset = req.query.offset;

    if(limit < 1 || offset < 0 || offset > lista.length){
        res.push("Error en 'limit' y 'offset'");
        return res;
    }
    res = lista.slice(offset,parseInt(limit)+parseInt(offset));
    return res;
};
};

export {loadBackend_ana};
