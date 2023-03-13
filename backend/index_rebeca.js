var Datastore = require('nedb');
var db = new Datastore();
const BASE_API_URL = "/api/v1";
console.log("Init Module index_rebeca.js load.");

module.exports = (app) => {

    var datos = [
        {
            "province": "Andalucía",
            "year": 2021,
            "tourist": 20035828,
            "average_daily_expenditure": 68.6,
            "average_stay": 6.9
        },
        {
            "province": "Almeria",
            "year": 2021,
            "tourist": 1927988,
            "average_daily_expenditure": 64.5,
            "average_stay": 7.5
        },
        {
            "province": "Cádiz",
            "year": 2021,
            "tourist": 3844944,
            "average_daily_expenditure": 78.2,
            "average_stay": 7.1
        },
        {
            "province": "Córdoba",
            "year": 2021,
            "tourist": 1136002,
            "average_daily_expenditure": 66.2,
            "average_stay": 3
        },
        {
            "province": "Granada",
            "year": 2021,
            "tourist": 2641329,
            "average_daily_expenditure": 67.3,
            "average_stay": 4.7
        },
        {
            "province": "Huelva",
            "year": 2021,
            "tourist": 2015905,
            "average_daily_expenditure": 58.7,
            "average_stay": 7.6
        },
        {
            "province": "Jaén",
            "year": 2021,
            "tourist": 708561,
            "average_daily_expenditure": 74.5,
            "average_stay": 2.7
        },
        {
            "province": "Málaga",
            "year": 2021,
            "tourist": 5337807,
            "average_daily_expenditure": 65.4,
            "average_stay": 8.3
        },
        {
            "province": "Sevilla",
            "year": 2021,
            "tourist": 2423292,
            "average_daily_expenditure": 72.5,
            "average_stay": 3.7
        },
        {
            "province": "Andalucía",
            "year": 2022,
            "tourist": 30769974,
            "average_daily_expenditure": 72.5,
            "average_stay": 6.4
        },
        {
            "province": "Almeria",
            "year": 2022,
            "tourist": 2514258,
            "average_daily_expenditure": 66.8,
            "average_stay": 7.3
        },
        {
            "province": "Cádiz",
            "year": 2022,
            "tourist": 5406797,
            "average_daily_expenditure": 84.5,
            "average_stay": 6.9
        },
        {
            "province": "Córdoba",
            "year": 2022,
            "tourist": 1883120,
            "average_daily_expenditure": 72.6,
            "average_stay": 3.2
        },
        {
            "province": "Granada",
            "year": 2022,
            "tourist": 4006663,
            "average_daily_expenditure": 73.4,
            "average_stay": 4.3
        },
        {
            "province": "Huelva",
            "year": 2022,
            "tourist": 3232381,
            "average_daily_expenditure": 56.9,
            "average_stay": 6.3
        },
        {
            "province": "Jaén",
            "year": 2022,
            "tourist": 984601,
            "average_daily_expenditure": 78.7,
            "average_stay": 2.6
        },
        {
            "province": "Málaga",
            "year": 2022,
            "tourist": 8325665,
            "average_daily_expenditure": 71.3,
            "average_stay": 7.4
        },
        {
            "province": "Sevilla",
            "year": 2022,
            "tourist": 4416490,
            "average_daily_expenditure": 72.6,
            "average_stay": 3.5
        }
    ];

    // GET /andalusia-tourism-situation-surveys

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys", (request,response) => {
        console.log("New GET to /andalusia-tourism-situation-surveys");
        db.find({}, (err, data)=>{
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys: ${err}`);
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
                    console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                    response.status(404).send("Data not found");
                }                
            }
        });
        
    });

    // GET /andalusia-tourism-situation-surveys/loadInitialData

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys/loadInitialData", (request,response) => {
        console.log("New GET to /andalusia-tourism-situation-surveys/loadInitialData");
        db.find({}).sort({year:1}).skip(0).limit(10).exec(function(err,data){
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys/loadInitialData: ${err}`);
                response.sendStatus(500);
            }else{          
                console.log(`Data has been inserted in /andalusia-tourism-situation-surveys.`);
                db.insert(datos);
                response.status(200).send("OK");
            } 
        });        
    });

    // GET /andalusia-tourism-situation-surveys/:province

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province", (request,response) => {
        var ciudad = request.params.province;

        console.log(`New GET to /andalusia-tourism-situation-surveys/${ciudad}`);

        db.find({province : ciudad}, function(err, data){
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys/${ciudad}: ${err}`);
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
                    console.log(`Data not found /andalusia-tourism-situation-surveys/${ciudad}: ${err}`);
                    response.status(404).send("Data not found");
                 }        
            }
        });
    });

    // GET /andalusia-tourism-situation-surveys//:year

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys//:year", (request,response) => {
        var año = parseInt(request.params.year);
        console.log(`New GET to /andalusia-tourism-situation-surveys//${año}`);
        db.find({$and: [{year:año}]}).exec(function(err,data){
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys//${año}: ${err}`);
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
                    console.log(`Data not found /andalusia-tourism-situation-surveys//${year}: ${err}`);
                    response.status(404).send("Data not found");
                 }    
            }
        })
        
    });
    
    // GET /andalusia-tourism-situation-surveys/:province/:year

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province/:year", (request,response) => {
        var año = parseInt(request.params.year);
        var ciudad = request.params.province;
    
        console.log(`New GET to /andalusia-tourism-situation-surveys/${ciudad}/${año}`);
        db.find({province : ciudad,year : año}, function(err, data){
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys/${ciudad}/${año}: ${err}`);
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
                    console.log(`Data not found /andalusia-tourism-situation-surveys/${province}/${year}: ${err}`);
                    response.status(404).send("Data not found");
                }
            }
        });
    });

    // GET /andalusia-tourism-situation-surveys/:province/:yearIni/:yearFin

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province/:yearIni/:yearFin", (request,response) => {
        var añoIni = parseInt(request.params.yearIni);
        var añoFin = parseInt(request.params.yearFin);
        var ciudad = request.params.province;
        console.log("New GET to /andalusia-tourism-situation-surveys/:province/:yearIni/:yearFin");

        
        db.find({province : ciudad,year : {$gte: añoIni, $lte: añoFin}}, function(err, data){
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys/${ciudad}/${añoIni}/${añoFin}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length!=0){
                    response.json(data.map((d)=>{
                        delete d._id;
                        return d;
                    }));
                }
                else{
                    console.log(`Data not found /andalusia-tourism-situation-surveys/${ciudad}/${añoIni}/${añoFin}: ${err}`);
                    response.status(404).send("Data not found");
                }                
            }
        });
    });

    // GET /andalusia-tourism-situation-surveys//:yearIni/:yearFin

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys//:yearIni/:yearFin", (request,response) => {
        var añoIni = parseInt(request.params.yearIni);
        var añoFin = parseInt(request.params.yearFin);

        
        db.find({$and: [{year: {$gte: añoIni, $lte: añoFin}}]}, function(err, data){
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys//${añoIni}/${añoFin}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length!=0){
                    response.json(data.map((d)=>{
                        delete d._id;
                        return d;
                    })); 
                }
                else{
                    console.log(`Data not found /andalusia-tourism-situation-surveys//${añoIni}/${añoFin}: ${err}`);
                    response.status(404).send("Data not found");
                }
            }
        });
    });

    // POST /andalusia-tourism-situation-surveys
    
    app.post(BASE_API_URL+"/andalusia-tourism-situation-surveys", (request,response) => {
        var newFile = request.body;
        console.log("new request new POST request /andalusia-tourism-situation-surveys");
        if (!newFile.province || !newFile.year || !newFile.tourist || !newFile.average_daily_expenditure || !newFile.average_stay){
            console.log(`No se han recibido los campos esperados:`);
            response.status(400).send("Bad Request");
        } else {
            db.find({province: newFile.province, year:newFile.year}, function(err, data){
                if (err){
                    console.log(`Error posting /andalusia-tourism-situation-surveys: ${err}`);
                    response.sendStatus(500);
                }
                else {
                    if (data.length!=0){
                        response.status(409).send("This resource already exists");
                    }
                    else {
                        db.insert(newFile, function(err, data){
                            if (err){
                                console.log(`Error posting /andalusia-tourism-situation-surveys: ${err}`);
                                response.sendStatus(500);
                            } else {
                                console.log(`newFile = ${JSON.stringify(newFile,null,2)}`);
                                console.log("New POST to /andalusia-tourism-situation-surveys");
                                response.status(201).send("Created");
                            }
                        });
                    }
                }
            });
            
        }        
    });

    // POST ERROR /andalusia-tourism-situation-surveys/:province

    app.post(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province",(request,response)=>{
        console.log("New POST to /:province/:year");
        response.sendStatus(405, "Method not allowed");
    });

    // POST ERROR /andalusia-tourism-situation-surveys/:province/:year

    app.post(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province/:year",(request,response)=>{
        console.log("New POST to /:province/:year");
        response.sendStatus(405, "Method not allowed");
    }); 
    
    // PUT ERROR /andalusia-tourism-situation-surveys

    app.put(BASE_API_URL + "/andalusia-tourism-situation-surveys",(request,response)=>{
        response.sendStatus(400, "La ID del recurso no es correcta.");
    });

    // PUT ERROR /andalusia-tourism-situation-surveys/:province

    app.put(BASE_API_URL + "/andalusia-tourism-situation-surveys/:province",(request,response)=>{
        response.sendStatus(400, "La ID del recurso no es correcta.");
    });

    // PUT /andalusia-tourism-situation-surveys/:province/:year

    app.put(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province/:year", (request,response) => {
        var newFile = request.body;
        var ciudad = request.params.province;
        var año = parseInt(request.params.year);
        db.update({province:ciudad, year:año}, {$set: newFile}, {}, function(err, datos){
                 console.log(`Numero de documentos actualizados: ${datos}`);
                 response.sendStatus(201);  

                 if(!newFile.province || !newFile.year || !newFile.traveler || !newFile.overnight_stay || !newFile.average_stay){
                    console.log(`No se han recibido los campos esperados:`);
                    response.status(400).send("Bad Request");
                }else{

                    db.update({$and: [{province:ciudad}, {year:año}]}, {$set: newFile},function(err, data){
                        if(err){
                            console.log(`Error put /andalusia-tourism-situation-surveys/${ciudad}/${año}: ${err}`);
                            response.sendStatus(500);
                        }
                        else{
                            console.log(`Numero de documentos actualizados: ${data}`);
                            response.sendStatus(200);  
                            }
                    }); 
                }
        });
    });

    app.put(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province/:year", (request,response) => {
        var newFile = request.body;
        var ciudad = request.params.province;
        var año = parseInt(request.params.year);

        if(!newFile.province || !newFile.year || !newFile.traveler || !newFile.overnight_stay || !newFile.average_stay){
            console.log(`No se han recibido los campos esperados:`);
            response.status(400).send("Bad Request");
        }else{
            db.update({$and: [{province:ciudad}, {year:año}]}, {$set: newFile},function(err, data){
                if(err){
                    console.log(`Error put /andalusia-tourism-situation-surveys/${ciudad}/${año}: ${err}`);
                    response.sendStatus(500);
                }
                else{
                    console.log(`Numero de documentos actualizados: ${data}`);
                    response.sendStatus(200);  
                    }
            });
        }
    });

    // DELETE /andalusia-tourism-situation-surveys

    app.delete(BASE_API_URL +"/andalusia-tourism-situation-surveys",(request, response)=>{
        db.remove({},function (err, dbRemoved){
            if(err){
                console.log(`Error deleting /andalusia-tourism-situation-surveys/${ciudad}: ${err}`);
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

    // DELETE /andalusia-tourism-situation-surveys/:province/:year

    app.delete(BASE_API_URL +"/andalusia-tourism-situation-surveys/:province/:year",(request, response)=>{
        var ciudad = request.params.province;
        var año = parseInt(request.params.year);

        console.log(`New DELETE to /andalusia-tourism-situation-surveys/${ciudad}/${año}`);

        db.remove({province:ciudad, year:año},{},function (err, dbRemoved){
            if(err){
                console.log(`Error deleting /andalusia-tourism-situation-surveys/${ciudad}/${año}: ${err}`);
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

    // DELETE /andalusia-tourism-situation-surveys/:province

    app.delete(BASE_API_URL +"/andalusia-tourism-situation-surveys/:province",(request, response)=>{
        var ciudad = request.params.province;

        console.log(`New DELETE to /andalusia-tourism-situation-surveys/${ciudad}`);

        db.remove({province:ciudad},{},function (err, dbRemoved){
            if(err){
                console.log(`Error deleting /andalusia-tourism-situation-surveys/${ciudad}: ${err}`);
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

    // DELETE /andalusia-tourism-situation-surveys//:year
    
    app.delete(BASE_API_URL +"/andalusia-tourism-situation-surveys//:year",(request, response)=>{
        var año = parseInt(request.params.year);

        console.log(`New DELETE to /andalusia-tourism-situation-surveys//${año}`);

        db.remove({year:año},{},function (err, dbRemoved){
            if(err){
                console.log(`Error deleting /andalusia-tourism-situation-surveys//${año}: ${err}`);
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

};