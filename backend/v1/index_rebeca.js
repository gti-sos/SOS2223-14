import Datastore from 'nedb';
var db = new Datastore();
const BASE_API_URL = "/api/v1";
console.log("Init Module index_rebeca.js load.");

function loadBackend_rebeca(app) {

    var datos = [
        {
            "province": "Andalucía",
            "year": 2021,
            "tourist": 20035828,
            "average_daily_expenditure": 68.6,
            "average_stay": 6.9
        },
        {
            "province": "Almería",
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
            "province": "Almería",
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

    // GET /andalusia-tourism-situation-surveys/docs

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys/docs", (request,response) => {

        console.log(`REDIRECT TO /andalusia-tourism-situation-surveys/docs`);

        response.status(301).redirect("https://documenter.getpostman.com/view/25998638/2s93JzLgAC")
    
    });

    // GET /andalusia-tourism-situation-surveys/loadInitialData

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys/loadInitialData", (request,response) => {
        console.log("New GET to /andalusia-tourism-situation-surveys/loadInitialData");
        db.find({}).sort({year:1}).exec(function(err,data){
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys/loadInitialData: ${err}`);
                response.sendStatus(500);
            }else{          
                if(data.length==0){
                    console.log(`data inserted: ${datos.length}`);  
                    db.insert(datos);   
                    response.status(200).send("OK");
                }
                else{
                     console.log(`Data is already inserted: ${data.length}`);
                     response.status(200).send("Data is already inserted");          
                }
            } 
        });        
    });

    // GET /andalusia-tourism-situation-surveys

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys", (request,response) => {
        console.log("New GET to /andalusia-tourism-situation-surveys");

        var province = request.query.province;
        var year = request.query.year;
        var from = request.query.from;
        var to = request.query.to;
        var tourist = request.query.tourist;
        var below_tourist = request.query.below_tourist;
        var above_tourist = request.query.above_tourist;
        var average_daily_expenditure = request.query.average_daily_expenditure;
        var below_average_daily_expenditure = request.query.below_average_daily_expenditure;
        var above_average_daily_expenditure = request.query.above_average_daily_expenditure;
        var average_stay = request.query.average_stay;
        var below_average_stay = request.query.below_average_stay;
        var above_average_stay = request.query.above_average_stay;

        // Comprobamos query

        for(var i = 0; i<Object.keys(request.query).length;i++){
            var element = Object.keys(request.query)[i];
            if(element != "year" && element != "from" && element != "to" && element != "province" 
            && element != "limit" && element != "offset" && element != "tourist" && 
            element != "average_daily_expenditure" && element != "average_stay" &&
            element != "below_tourist" && element != "above_tourist" && 
            element != "below_average_daily_expenditure" && element != "above_average_daily_expenditure"
            && element != "below_average_stay" && element != "above_average_stay"){
                console.log(`No se han recibido los campos esperados:`);
                response.status(400).send("Bad Request");
            }
        }

        // Comprobamos si from es menor o igual a to, si above_x es menor o igual a below_x...
        
        if(from>to){
            console.log(`No se han recibido los campos esperados.`);
            response.status(400).send("Bad Request");
        } else if (above_tourist>below_tourist) {
            console.log(`No se han recibido los campos esperados.`);
            response.status(400).send("Bad Request");
        } else if (above_average_daily_expenditure>below_average_daily_expenditure) {
            console.log(`No se han recibido los campos esperados.`);
            response.status(400).send("Bad Request");
        } else if (above_average_stay>below_average_stay) {
            console.log(`No se han recibido los campos esperados.`);
            response.status(400).send("Bad Request");
        } else {

            db.find({},function(err, filteredList){
            
                if(err){
                    console.log(`Error getting /andalusia-tourism-situation-surveys: ${err}`);
                    response.sendStatus(500);
                }
    
                if (filteredList==0){
                    console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                    response.status(404).send("Data not found");
                }
    
                // Apartado para búsqueda por provincia
    
                if (province != null){
                    var filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.province == province);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }
                }
    
                // Apartado para búsqueda por año
    
                if (year != null){
                    var filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.year == year);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }
                }
    
                // Apartado para from y to
                
                if(from != null && to != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.year >= from && reg.year <=to);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para búsqueda por turistas
    
                if (tourist != null){
                    var filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.tourist == tourist);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }
                }
    
                // Apartado para above_tourist
                
                if(above_tourist != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.tourist >= above_tourist);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para below_tourist
                
                if(below_tourist != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.tourist <=below_tourist);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para above_tourist y below_tourist
                
                if(above_tourist != null && below_tourist != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.tourist >= above_tourist && reg.tourist <=below_tourist);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para búsqueda por gasto medio diario
    
                if (average_daily_expenditure != null){
                    var filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.average_daily_expenditure == average_daily_expenditure);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }
                }
    
                // Apartado para above_average_daily_expenditure
                
                if(above_average_daily_expenditure != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.average_daily_expenditure >= above_average_daily_expenditure);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para below_average_daily_expenditure
                
                if(below_average_daily_expenditure != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.average_daily_expenditure<=below_average_daily_expenditure);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para above_average_daily_expenditure y below_average_daily_expenditure
                
                if(above_average_daily_expenditure != null && below_average_daily_expenditure != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.average_daily_expenditure >= above_average_daily_expenditure && 
                            reg.average_daily_expenditure <=below_average_daily_expenditure);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para búsqueda por estancia media
    
                if (average_stay != null){
                    var filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.average_stay == average_stay);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }
                }
    
                // Apartado para above_average_stay
                
                if(above_average_stay != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.average_stay >= above_average_stay);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para below_average_stay
                
                if(below_average_stay != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.average_stay<=below_average_stay);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
                        response.status(404).send("Data not found");
                    }    
                }
    
                // Apartado para above_average_stay y below_average_stay
                
                if(above_average_stay != null && below_average_stay != null){
                    filteredList = filteredList.filter((reg)=>
                    {
                        return (reg.average_stay >= above_average_stay && 
                            reg.average_stay <=below_average_stay);
                    });
    
                    if (filteredList==0){
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
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
                } 
            });
        }
        
    });

    // GET /andalusia-tourism-situation-surveys/:province

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province",(request, response)=>{
        var ciudad =request.params.province;
        var from = request.query.from;
        var to = request.query.to;

        console.log(`New GET to /andalusia-tourism-situation-surveys/${ciudad}`);

        //Comprobamos query

        for(var i = 0; i<Object.keys(request.query).length;i++){
            var element = Object.keys(request.query)[i];
            if(element != "from" && element != "to"){
                console.log(`No se han recibido los campos esperados:`);
                response.status(400).send("Bad Request");
            }
        }

        //Comprobamos si from es mas pequeño o igual a to

        if(from>to){
            console.log(`No se han recibido los campos esperados:`);
            response.status(400).send("Bad Request");
        }

        db.find({province:ciudad}, function(err,filteredList){
            
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys: ${err}`);
                response.sendStatus(500);
            }
            else{
                if(filteredList.length==0){
                    console.log(`Data not found /andalusia-tourism-situation-surveys/${ciudad}: ${err}`);
                    response.status(404).send("Data not found");
                }
                else{
                    filteredList = filteredList.filter((reg)=> {
                        return (reg.province == ciudad);
                    });          
            
                    //Comprobamos si from es mas pequeño o igual a to

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
                        console.log(`Data not found /andalusia-tourism-situation-surveys: ${err}`);
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

                    if(filteredList.length>1){
                        response.send(JSON.stringify(filteredList,null,2));
                        console.log(`Datos devueltos: ${filteredList.length}`);
                    }
                    else{
                        if(filteredList.length!=0){
                            console.log(`Dato devuelto: ${filteredList.length}`);
                            delete filteredList[0]._id;
                            response.json(filteredList[0]);
                        }
                    }
                }
            }
        });

    });
    
    // GET /andalusia-tourism-situation-surveys/:province/:year

    app.get(BASE_API_URL+"/andalusia-tourism-situation-surveys/:province/:year", (request,response) => {
        var año = parseInt(request.params.year);
        var ciudad = request.params.province;
    
        console.log(`New GET to /andalusia-tourism-situation-surveys/${ciudad}/${año}`);
        
        db.find({province : ciudad,year : año}).exec((err, data) =>{
            if(err){
                console.log(`Error geting /andalusia-tourism-situation-surveys/${ciudad}/${año}: ${err}`);
                response.sendStatus(500);
            }else{
                
                if(data.length!=0){
                    console.log(`data returned ${data.length}`);
                    delete data[0]._id;
                    response.json(data[0]); 
                }
                else{
                    console.log(`Data not found /andalusia-tourism-situation-surveys/${province}/${year}: ${err}`);
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

        if(!newFile.province || !newFile.year || !newFile.tourist || !newFile.average_daily_expenditure || !newFile.average_stay){
            console.log(`No se han recibido los campos esperados:`);
            response.status(400).send("Bad Request");
        }else{
            db.update({$and: [{province:ciudad}, {year:año}]}, {$set: newFile},function(err, data){
                if(err){
                    console.log(`Error put /andalusia-tourism-situation-surveys/${ciudad}/${año}: ${err}`);
                    response.sendStatus(500);
                } else {
                    if(data==0){
                        console.log(`Not Found`);
                        response.sendStatus(404);  
                    }
                    else{
                        console.log(`Numero de documentos actualizados: ${data}`);
                        response.sendStatus(200);  
                    }
                }
            });
        }
    });

    // DELETE /andalusia-tourism-situation-surveys

    app.delete(BASE_API_URL +"/andalusia-tourism-situation-surveys",(request, response)=>{
        db.remove({},{multi:true},function (err, dbRemoved){
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

        db.remove({province:ciudad, year:año},{multi:true},function (err, dbRemoved){
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

        db.remove({province:ciudad},{multi:true},function (err, numRemoved){
            if (err){
                console.log(`Error deleting /andalusia-tourism-situation-surveys/${ciudad}: ${err}`);
                response.sendStatus(500);
            } else {
                if(numRemoved==0){
                    response.status(404).send("Not Found");
                } else {
                    console.log(`Files removed ${numRemoved}`);
                    response.sendStatus(200);
                }              
            }
        });
    });

    // DELETE /andalusia-tourism-situation-surveys//:year
    
    app.delete(BASE_API_URL +"/andalusia-tourism-situation-surveys//:year",(request, response)=>{
        var año = parseInt(request.params.year);

        console.log(`New DELETE to /andalusia-tourism-situation-surveys//${año}`);

        db.remove({year:año},{multi:true},function (err, dbRemoved){
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

export {loadBackend_rebeca};

function paginacion(req, lista){

    var res = [];
    const limit = req.query.limit;
    const offset = req.query.offset;
    
    if(limit < 1 || offset < 0 || offset > lista.length){
        res.push("ERROR EN PARAMETROS LIMIT Y/O OFFSET");
        return res;
    }

    res = lista.slice(offset,parseInt(limit)+parseInt(offset));
    return res;

};