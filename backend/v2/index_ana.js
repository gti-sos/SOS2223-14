import Datastore from 'nedb';
var db = new Datastore();
//const BASE_API_URL_V1 = "/api/v1";
const BASE_API_URL = "/api/v2";

function loadBackend_ana(app) {    

var datos = [
    {
        "province": "Almería",
        "year": 2021,
        "average_employment": 1848,
        "estimated_average_open_establishment": 138,
        "estimated_average_place": 18924,
        "estimated_room": 7487,
        "occupancy_rate_by_place": 43,
        "occupancy_rate_by_weekend_place": 49,
        "room_occupancy_rate": 52
    },
    {
        "province": "Cádiz",
        "year": 2021,
        "average_employment": 4112,
        "estimated_average_open_establishment": 351,
        "estimated_average_place": 30156,
        "estimated_room": 13874,
        "occupancy_rate_by_place": 48,
        "occupancy_rate_by_weekend_place": 56, 
        "room_occupancy_rate": 55
    },
    {
        "province": "Córdoba",
        "year": 2021,
        "average_employment": 828,
        "estimated_average_open_establishment": 148,
        "estimated_average_place": 8784,
        "estimated_room": 4438,
        "occupancy_rate_by_place": 33,
        "occupancy_rate_by_weekend_place": 42,
        "room_occupancy_rate": 40
    },
    {
        "province": "Granada",
        "year": 2021,
        "average_employment": 1948,
        "estimated_average_open_establishment": 278,
        "estimated_average_place": 21678,
        "estimated_room": 10340,
        "occupancy_rate_by_place": 37,
        "occupancy_rate_by_weekend_place": 47,
        "room_occupancy_rate": 43
    },
    {
        "province": "Huelva",
        "year": 2021,
        "average_employment": 1846,
        "estimated_average_open_establishment": 110,
        "estimated_average_place": 12693,
        "estimated_room": 5689,
        "occupancy_rate_by_place": 53,
        "occupancy_rate_by_weekend_place": 61,
        "room_occupancy_rate": 57
    },
    {
        "province": "Jaén",
        "year": 2021,
        "average_employment": 755,
        "estimated_average_open_establishment": 142,
        "estimated_average_place": 7039,
        "estimated_room": 3627,
        "occupancy_rate_by_place": 27,
        "occupancy_rate_by_weekend_place": 35,
        "room_occupancy_rate": 31
    },
    {
        "province": "Málaga",
        "year": 2021,
        "average_employment": 8548,
        "estimated_average_open_establishment": 401,
        "estimated_average_place": 59870,
        "estimated_room": 27065,
        "occupancy_rate_by_place": 48,
        "occupancy_rate_by_weekend_place": 54,
        "room_occupancy_rate": 54
    },
    {
        "province": "Sevilla",
        "year": 2021,
        "average_employment": 2441,
        "estimated_average_open_establishment": 250,
        "estimated_average_place": 23494,
        "estimated_room": 11694,
        "occupancy_rate_by_place": 40,
        "occupancy_rate_by_weekend_place": 50,
        "room_occupancy_rate": 46
    },
    {
        "province": "Almería",
        "year": 2022,
        "average_employment": 2968,
        "estimated_average_open_establishment": 179,
        "estimated_average_place": 25974,
        "estimated_room": 10190,
        "occupancy_rate_by_place": 47,
        "occupancy_rate_by_weekend_place": 54,
        "room_occupancy_rate": 59
    },
    {
        "province": "Cádiz",
        "year": 2022,
        "average_employment": 5896,
        "estimated_average_open_establishment": 408,
        "estimated_average_place": 38916,
        "estimated_room": 17735,
        "occupancy_rate_by_place": 53,
        "occupancy_rate_by_weekend_place": 61,
        "room_occupancy_rate": 61
    },
    {
        "province": "Córdoba",
        "year": 2022,
        "average_employment": 1209,
        "estimated_average_open_establishment": 183,
        "estimated_average_place": 10936,
        "estimated_room": 5509,
        "occupancy_rate_by_place": 44,
        "occupancy_rate_by_weekend_place": 55,
        "room_occupancy_rate": 51
    },
    {
        "province": "Granada",
        "year": 2022,
        "average_employment": 3178,
        "estimated_average_open_establishment": 361,
        "estimated_average_place": 29478,
        "estimated_room": 14080,
        "occupancy_rate_by_place": 47,
        "occupancy_rate_by_weekend_place": 58,
        "room_occupancy_rate": 53
    },
    {
        "province": "Huelva",
        "year": 2022,
        "average_employment": 2720,
        "estimated_average_open_establishment": 136,
        "estimated_average_place": 18341,
        "estimated_room": 8055,
        "occupancy_rate_by_place": 53,
        "occupancy_rate_by_weekend_place": 62,
        "room_occupancy_rate": 58
    },
    {
        "province": "Jaén",
        "year": 2022,
        "average_employment": 926,
        "estimated_average_open_establishment": 161,
        "estimated_average_place": 8016,
        "estimated_room": 4040,
        "occupancy_rate_by_place": 33,
        "occupancy_rate_by_weekend_place": 45,
        "room_occupancy_rate": 39
    },
    {
        "province": "Málaga",
        "year": 2022,
        "average_employment": 13875,
        "estimated_average_open_establishment": 548,
        "estimated_average_place": 84299,
        "estimated_room": 38044,
        "occupancy_rate_by_place": 61,
        "occupancy_rate_by_weekend_place": 66,
        "room_occupancy_rate": 71
    },
    {
        "province": "Sevilla",
        "year": 2022,
        "average_employment": 4203,
        "estimated_average_open_establishment": 365,
        "estimated_average_place": 32045,
        "estimated_room": 16057,
        "occupancy_rate_by_place": 56,
        "occupancy_rate_by_weekend_place": 65,
        "room_occupancy_rate": 63
    }
];

db.insert(datos);

app.get(BASE_API_URL+"/hotel-occupancy-surveys/docs", (request,response) => {
    response.redirect("https://documenter.getpostman.com/view/25974748/2s93Xwzj4Q");
});

//loadInitialData
app.get(BASE_API_URL+"/hotel-occupancy-surveys/loadInitialData", (request,response) => {
    console.log("New GET to /hotel-occupancy-surveys/loadInitialData");
    db.find({}, function(err,data){
        if(err){
            console.log(`Error geting /hotel-occupancy-surveys/loadInitialData: ${err}`);
            response.sendStatus(500);
        }else{
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


app.get(BASE_API_URL+"/hotel-occupancy-surveys/data", (request, response)=>{
    console.log(`New GET to /hotel-occupancy-surveys/data`);
    let array = new Array();
    db.find({}, function(err,data){
        if(err){
            console.log(`Error geting /hotel-occupancy-surveys/data: ${err}`);
            response.sendStatus(500);
        } else {
            if(data.length==0){
                db.insert(datos);
            } 
            for(let i=0; i<data.length; i++){
                let dato = [];
                dato.push(data[i]["province"], data[i]["year"], data[i]["average_employment"], data[i]["estimated_average_place"], data[i]["estimated_room"]);
                array.push(dato);
            }
            response.send(JSON.stringify(array, null, 2));
        }
    })
});
/*
app.get(BASE_API_URL+"/hotel-occupancy-surveys/data", (request, response)=>{
    console.log(`New GET to /hotel-occupancy-surveys/data`);
    function getRandomInt(min, max){
        return Math.floor(Math.random()*(max-min)+min);
    }
    function v(){return getRandomInt(1,100)};
    var data = new Array();
    for(var i=0;i<10;i++)
        data.push(v())
    response.json(data);
});
*/

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

//GET
app.get(BASE_API_URL+"/hotel-occupancy-surveys", (request,response) => {
    console.log("New GET to /hotel-occupancy-surveys");
    var province = request.query.province;
    var year = request.query.year;

    var above_average_employment = request.query.above_average_employment;
    var above_open_establishment = request.query.above_open_establishment;
    var above_average_place = request.query.above_average_place;
    var above_estimated_room = request.query.above_estimated_room;
    var above_occupancy_by_place = request.query.above_occupancy_by_place;
    var above_occupancy_by_weekend_place = request.query.above_occupancy_by_weekend_place;
    var above_room_occupancy_rate = request.query.above_room_occupancy_rate;
   
    var below_employment = request.query.below_employment;

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
        && element != "above_average_employment" 
        && element != "above_open_establishment"
        && element != "above_average_place"
        && element != "above_estimated_room"      
        && element != "above_occupancy_by_place"      
        && element != "above_occupancy_by_weekend_place"      
        && element != "above_room_occupancy_rate"
        && element != "below_employment"            
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

    // "from" tiene que ser menor o igual a "to", etc
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
        // Búsqueda por anyo
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
                return (reg.estimated_room >= estimated_room);
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

        // Apartado para above_average_employment
        if(above_average_employment != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.average_employment >= above_average_employment);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }    
        }

        // Apartado para above_open_establishment
        if(above_open_establishment != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.estimated_average_open_establishment >= above_open_establishment);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }    
        }

        // Apartado para above_average_place
        if(above_average_place != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.estimated_average_place >= above_average_place);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }    
        }

            // Apartado para above_estimated_room
            if(above_estimated_room != null){
                filteredList = filteredList.filter((reg)=>
                {
                    return (reg.estimated_room >= above_estimated_room);
                });
        
                if (filteredList==0){
                    console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                    response.status(404).send("Data not found");
                }    
            }

        // Apartado para above_occupancy_by_place
        if(above_occupancy_by_place != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.occupancy_rate_by_place >= above_occupancy_by_place);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }    
        }
        
        // Apartado para above_occupancy_by_weekend_place
        if(above_occupancy_by_weekend_place != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.occupancy_rate_by_weekend_place >= above_occupancy_by_weekend_place);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }    
        }
        
        // Apartado para above_room_occupancy_rate
        if(above_room_occupancy_rate != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.room_occupancy_rate >= above_room_occupancy_rate);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }    
        }

        // Apartado para below_employment
        
        if(below_employment != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.average_employment <= below_employment);
            });

            if (filteredList==0){
                console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                response.status(404).send("Data not found");
            }    
        }

        // Apartado para above_average_employment y below_employment
        
        if(above_average_employment != null && below_employment != null){
            filteredList = filteredList.filter((reg)=>
            {
                return (reg.average_employment >= above_average_employment && reg.average_employment <=below_employment);
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

app.get(BASE_API_URL+"/hotel-occupancy-surveys/:province",(request, response)=>{
    var ciudad =request.params.province;
    var from = request.query.from;
    var to = request.query.to;

    console.log(`New GET to /hotel-occupancy-surveys/${ciudad}`);

    //Query
    for(var i = 0; i<Object.keys(request.query).length;i++){
        var element = Object.keys(request.query)[i];
        if(element != "from" && element != "to"){
            console.log(`No se han recibido los campos esperados:`);
            response.status(400).send("Bad Request");
        }
    }

    //¿from es mas pequeño o igual a to?
    if(from>to){
        console.log(`No se han recibido los campos esperados:`);
        response.status(400).send("Bad Request");
    }

    db.find({province:ciudad}, function(err,filteredList){
        
        if(err){
            console.log(`Error geting /hotel-occupancy-surveys: ${err}`);
            response.sendStatus(500);
        }
        else{
            if(filteredList.length==0){
                console.log(`Data not found /hotel-occupancy-surveys/${ciudad}: ${err}`);
                response.status(404).send("Data not found");
            }
            else{
                filteredList = filteredList.filter((reg)=> {
                    return (reg.province == ciudad);
                });          
        
                //¿from es mas pequeño o igual a to?
                if(from>to){
                    console.log(`No se han recibido los campos esperados:`);
                    response.status(400).send("Bad Request");
                }
            
                if(from != null && to != null && from<=to){
                    filteredList = filteredList.filter((reg)=>
                    {
                    return (reg.year >= from && reg.year <=to);
                    }); 
                    
                }

                //Comprobamos si existe 
                if (filteredList==0){
                    console.log(`Data not found /hotel-occupancy-surveys: ${err}`);
                        response.status(404).send("Data not found");
                }

                //Resultado
                if(request.query.limit != undefined || request.query.offset != undefined){
                    filteredList = paginacion(request,filteredList);
                }
                filteredList.forEach((element)=>{
                    delete element._id;
                });

                //Comprobamos fields
                if(request.query.fields!=null){

                    //Comprobamos si los campos son correctos

                    var listaFields = request.query.fields.split(",");
                    for(var i = 0; i<listaFields.length;i++){
                        var element = listaFields[i];
                        if(element != "province" && element != "year" && element != "tourist" && element != "average_daily_expenditure" && element != "average_stay"){
                            console.log(`No se han recibido los campos esperados:`);
                            response.status(400).send("Bad Request");
                        }
                    }
                }

                if(filteredList.length!=0){
                    response.send(JSON.stringify(filteredList,null,2));
                    console.log(`data returned: ${filteredList.length}`); 
                }
            }
        }
    });

});

app.get(BASE_API_URL+"/hotel-occupancy-surveys/:province/:year", (request,response) => {
    var anyo = parseInt(request.params.year);
    var ciudad = request.params.province;
    console.log(`New GET to /hotel-occupancy-surveys/${ciudad}/${anyo}`);
    
    db.find({province : ciudad, year : anyo}).exec((err, data) =>{
        if(err){
            console.log(`Error geting /hotel-occupancy-surveys/${ciudad}/${anyo}: ${err}`);
            response.sendStatus(500);
        }else{
            if(data.length!=0){
                console.log(`data returned ${data.length}`);
                delete data[0]._id;
                response.json(data[0]); 
            }
            else{
                console.log(`Data not found /hotel-occupancy-surveys/${province}/${year}: ${err}`);
                response.status(404).send("Data not found");
            }
        }
    });
});

/*
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
*/


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
            } else {
                if(data==0){
                    console.log(`Not Found`);
                    response.sendStatus(404);  
            } else{
                console.log(`Numero de documentos actualizados: ${data}`);
                response.sendStatus(200);  
                }
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
    var anyo = parseInt(request.params.year);

    console.log(`New DELETE to //hotel-occupancy-surveys/${ciudad}/${anyo}`);

    db.remove({province:ciudad, year:anyo},{multi:true},function (err, dbRemoved){
        if(err){
            console.log(`Error deleting /hotel-occupancy-surveys/${ciudad}/${anyo}: ${err}`);
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
};

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


export {loadBackend_ana};
