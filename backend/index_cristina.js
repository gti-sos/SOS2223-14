var Datastore = require('nedb');
var db = new Datastore();
var main = require("C:/Users/crisc/Dropbox/Universidad/Tercero/SOS/SOS2223-14/index-CCG");
const BASE_API_URL = "/api/v1";

module.exports = (app) => {    
    var datos = [
        {
            "province": "Almeria",
            "year": 2021,
            "traveler": 175430,
            "overnight_stay": 852651,
            "average_stay": 4.9
        },
        {
            "province": "Cádiz",
            "year": 2021,
            "traveler": 141934,
            "overnight_stay": 547194,
            "average_stay": 3.9
        },
        {
            "province": "Córdoba",
            "year": 2021,
            "traveler": 40273,
            "overnight_stay": 92011,
            "average_stay": 2.3
        },
        {
            "province": "Granada",
            "year": 2021,
            "traveler": 208463,
            "overnight_stay": 527799,
            "average_stay": 2.5
        },
        {
            "province": "Huelva",
            "year": 2021,
            "traveler": 70746,
            "overnight_stay": 324824,
            "average_stay": 4.6
        },
        {
            "province": "Jaén",
            "year": 2021,
            "traveler": 54969,
            "overnight_stay": 138818,
            "average_stay": 2.5
        },
        {
            "province": "Málaga",
            "year": 2021,
            "traveler": 722109,
            "overnight_stay": 3411916,
            "average_stay": 4.7
        },
        {
            "province": "Sevilla",
            "year": 2021,
            "traveler": 220579,
            "overnight_stay": 669075,
            "average_stay": 3
        },
        {
            "province": "Almeria",
            "year": 2022,
            "traveler": 221240,
            "overnight_stay": 980040,
            "average_stay": 4.4
        },
        {
            "province": "Cádiz",
            "year": 2022,
            "traveler": 249383,
            "overnight_stay": 805508,
            "average_stay": 3.2
        },
        {
            "province": "Córdoba",
            "year": 2022,
            "traveler": 67647,
            "overnight_stay": 141530,
            "average_stay": 2.1
        },
        {
            "province": "Granada",
            "year": 2022,
            "traveler": 280920,
            "overnight_stay": 759208,
            "average_stay": 2.7
        },
        {
            "province": "Huelva",
            "year": 2022,
            "traveler": 86304,
            "overnight_stay": 332581,
            "average_stay": 3.9
        },
        {
            "province": "Jaén",
            "year": 2022,
            "traveler": 60408,
            "overnight_stay": 142543,
            "average_stay": 2.4
        },
        {
            "province": "Málaga",
            "year": 2022,
            "traveler": 1087377,
            "overnight_stay": 5479489,
            "average_stay": 5
        },
        {
            "province": "Sevilla",
            "year": 2022,
            "traveler": 420921,
            "overnight_stay": 1218569,
            "average_stay": 2.9
        }
    ];

    db.insert(datos);

    app.get(BASE_API_URL+"/apartment-occupancy-surveys", (request,response) => {
        console.log("New GET to /apartment-occupancy-surveys");
        db.find({}, (err, data)=>{
            if(err){
                console.log(`Error geting /apartment-occupancy-surveys: ${err}`);
                response.sendStatus(500);
            }else{
                console.log(`data returned ${data.length}`);
                response.json(data.map((d)=>{
                    delete d._id;
                    return d;
                })); 
                response.sendStatus(200); 
            }
        });
        
    });

    app.get(BASE_API_URL+"/apartment-occupancy-surveys/loadInitialData", (request,response) => {
        console.log("New GET to /apartment-occupancy-surveys/loadInitialData");
        db.find({}).sort({year:1}).skip(0).limit(10).exec(function(err,data){
            if(err){
                console.log(`Error geting /apartment-occupancy-surveys/loadInitialData: ${err}`);
                response.sendStatus(500);
            }else{                
                console.log(`data returned ${data.length}`);
                response.json(data.map((d)=>{
                    delete d._id;
                    return d;
                }));    
                response.sendStatus(201);
            } 
        });        
    });

    app.get(BASE_API_URL+"/apartment-occupancy-surveys/:province", (request,response) => {
        var ciudad = request.params.province;

        console.log(`New GET to /apartment-occupancy-surveys/${ciudad}`);
        db.find({province : ciudad}, function(err, data){
            if(err){
                console.log(`Error geting /apartment-occupancy-surveys/${ciudad}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length!= 0){
                    console.log(`data returned ${data.length}`);
                    response.json(data.map((c)=>{
                        delete c._id;
                        return c;
                    }));
                    response.status(200); 
                }
                 else{
                    console.log(`Data not found /apartment-occupancy-surveys/${ciudad}: ${err}`);
                    response.sendStatus(404);
                    response.send("Data not found");
                 }        
            }
        });
    });

    app.get(BASE_API_URL+"/apartment-occupancy-surveys//:year", (request,response) => {
        var año = parseInt(request.params.year);
        console.log(`New GET to /apartment-occupancy-surveys//${año}`);
        db.find({$and: [{year:año}]}).exec(function(err,data){
            if(err){
                console.log(`Error geting /apartment-occupancy-surveys//${año}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length!= 0){
                    console.log(`data returned ${data.length}`);
                    response.json(data.map((c)=>{
                        delete c._id;
                        return c;
                    }));
                    response.status(200); 
                }
                 else{
                    console.log(`Data not found /apartment-occupancy-surveys//${año}: ${err}`);
                    response.sendStatus(404);
                    response.send("Data not found");
                 }    
            }
        })
        
    });
    
    app.get(BASE_API_URL+"/apartment-occupancy-surveys/:province/:year", (request,response) => {
        var año = parseInt(request.params.year);
        var ciudad = request.params.province;
    
        console.log(`New GET to /apartment-occupancy-surveys/${ciudad}/${año}`);
        db.find({province : ciudad,year : año}, function(err, data){
            if(err){
                console.log(`Error geting /apartment-occupancy-surveys/${ciudad}/${año}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length!=0){
                    console.log(`data returned ${data.length}`);
                    response.json(data.map((c)=>{
                        delete c._id;
                        return c;
                    }));
                    response.status(200); 
                }
                else{
                    console.log(`Data not found /apartment-occupancy-surveys/${ciudad}/${año}: ${err}`);
                    response.sendStatus(404);
                    response.send("Data not found");
                }
            }
        });
    });

    app.get(BASE_API_URL+"/apartment-occupancy-surveys/:province/:yearIni/:yearFin", (request,response) => {
        var añoIni = parseInt(request.params.yearIni);
        var añoFin = parseInt(request.params.yearFin);
        var ciudad = request.params.province;

        
        db.find({province : ciudad,year : {$gte: añoIni, $lte: añoFin}}, function(err, data){
            if(err){
                console.log(`Error geting /apartment-occupancy-surveys/${ciudad}/${añoIni}/${añoFin}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length!=0){
                    response.json(data.map((c)=>{
                        delete c._id;
                        return c;
                    }));
                    response.status(200); 
                }
                else{
                    console.log(`Data not found /apartment-occupancy-surveys/${ciudad}/${añoIni}/${añoFin}: ${err}`);
                    response.sendStatus(404);
                    response.send("Data not found");
                }                
            }
        });
    });

    app.get(BASE_API_URL+"/apartment-occupancy-surveys//:yearIni/:yearFin", (request,response) => {
        var añoIni = parseInt(request.params.yearIni);
        var añoFin = parseInt(request.params.yearFin);

        
        db.find({$and: [{year: {$gte: añoIni, $lte: añoFin}}]}, function(err, data){
            if(err){
                console.log(`Error geting /apartment-occupancy-surveys//${añoIni}/${añoFin}: ${err}`);
                response.sendStatus(500);
            }else{
                if(data.length!=0){
                    response.json(data.map((c)=>{
                        delete c._id;
                        return c;
                    }));
                    response.status(200); 
                }
                else{
                    console.log(`Data not found /apartment-occupancy-surveys//${añoIni}/${añoFin}: ${err}`);
                    response.sendStatus(404);
                    response.send("Data not found");
                }
            }
        });
    });

    app.post(BASE_API_URL+"/apartment-occupancy-surveys", (request,response) => {
        var newFile = request.body;

        console.log(`newFile = ${JSON.stringify(newFile,null,2)}`);
        
        console.log("New POST to /apartment-occupancy-surveys");

        db.insert(newFile);

        response.sendStatus(201);
    });

    app.put(BASE_API_URL + "/apartment-occupancy-surveys",(request,response)=>{
        response.sendStatus(405, "Method not allowed");
    });

    app.put(BASE_API_URL + "/apartment-occupancy-surveys/:province",(request,response)=>{
        response.sendStatus(405, "Method not allowed");
    });

    app.post(BASE_API_URL+"/:province/:year",(request,response)=>{
        response.sendStatus(405, "Method not allowed");
    });

    app.post(BASE_API_URL+"/:province",(request,response)=>{
        response.sendStatus(405, "Method not allowed");
    });

    app.put(BASE_API_URL+"/apartment-occupancy-surveys/:province/:year", (request,response) => {
        var newFile = request.body;
        var ciudad = request.params.province;
        var año = parseInt(request.params.year);
        db.update({province:ciudad, year:año}, {$set: newFile}, {}, function(err, resultados){
            if(err){
                console.log(`Error put /apartment-occupancy-surveys/${ciudad}/${año}: ${err}`);
                response.sendStatus(400);
            }
            else{
                 console.log(`Numero de documentos actualizados: ${resultados}`);
                 response.sendStatus(201);            
            }
        });
    });

    app.delete(BASE_API_URL +"/apartment-occupancy-surveys",(request, response)=>{
        db.remove({},function (err, dbRemoved){
            if(err){
                console.log(`Error deleting /apartment-occupancy-surveys/${ciudad}: ${err}`);
                response.sendStatus(500);
            }else{
                console.log(`Files removed ${dbRemoved}`);
                response.sendStatus(200);               
            }
        });
    });

    app.delete(BASE_API_URL +"/apartment-occupancy-surveys/:province/:year",(request, response)=>{
        var ciudad = request.params.province;
        var año = parseInt(request.params.year);

        console.log(`New DELETE to /apartment-occupancy-surveys/${ciudad}/${año}`);

        db.remove({province:ciudad, year:año},{},function (err, dbRemoved){
            if(err){
                console.log(`Error deleting /apartment-occupancy-surveys/${ciudad}/${año}: ${err}`);
                response.sendStatus(500);
            }else{
                console.log(`Files removed ${dbRemoved}`);
                response.sendStatus(200);               
            }
        });
    });
    
};