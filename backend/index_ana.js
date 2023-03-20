var Datastore = require('nedb');
var db = new Datastore();
const BASE_API_URL = "/api/v1";

module.exports = (app) => {    

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
        "province": "Sevilla",
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
        "province": "Sevilla",
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

db.insert(datos);

app.get(BASE_API_URL+"/hotel-occupancy-surveys", (request,response) => {
    response.json(datos)
    console.log("New request to /hotel-occupancy-surveys");
});

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
app.get("https://sos2223-14-acv1.appspot.com/api/v1/hotel-occupancy-surveys/docs", (request,response) => {
    console.log(`REDIRECT TO /hotel-occupancy-surveys/docs`);
    response.status(301).redirect("https://documenter.getpostman.com/view/25974748/2s93K1nyei")

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

//DELETE
app.delete(BASE_API_URL +"/hotel-occupancy-surveys/:province",(request, response)=>{
    var prov = request.params.province;
    console.log(`Error deleting /hotel-occupancy-surveys/${province}`);
    db.remove({"province": prov}, {}, function (err, numRemoved){
        if(err){
            console.log(`Error deleting /hotel-occupancy-surveys/${province}: ${err}`);
            response.sendStatus(500);
        }else{
            console.log(`Province removed ${numRemoved}`);
            response.sendStatus(200);               
        }
    });
});

//DELETE ALL
app.delete(BASE_API_URL +"/hotel-occupancy-surveys",(request, response)=>{
    db.remove({}, {multi:true},function (err, dbRemoved){
        if(err){
            console.log(`Error deleting /hotel-occupancy-surveys: ${err}`);
            response.sendStatus(500);
        }else{
            if(dbRemoved==0){
                response.status(404).send("Not Found");
            }
            else{
                console.log(`Files removed ${dbRemoved}`);
                response.sendStatus(200);;
            }               
        }
    });
});


};