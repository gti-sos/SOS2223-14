const BASE_API_URL = "/api/v1";
const express = require('express');
const app = express();
//var Datastore = require('nedb');
//var db = new Datastore();

//module.exports = (app) => {  
var lista = [
    {
        province: "Almería",
        year: 2021,
        average_employment: 1.848,
        estimated_average_open_establishment: 138,
        estimated_average_place: 18.924,
        estimated_room: 7.487,
        occupancy_rate_by_place: 43,
        occupancy_rate_by_weekend_place: 49,
        room_occupancy_rate: 52
    },
    {
        province: "Sevilla",
        year: 2021,
        average_employment: 4.112,
        estimated_average_open_establishment: 351,
        estimated_average_place: 30.156,
        estimated_room: 13.874,
        occupancy_rate_by_place: 48,
        occupancy_rate_by_weekend_place: 56, 
        room_occupancy_rate: 55
    },
    {
        province: "Córdoba",
        year: 2021,
        average_employment: 828,
        estimated_average_open_establishment: 148,
        estimated_average_place: 8.784,
        estimated_room: 4.438,
        occupancy_rate_by_place: 33,
        occupancy_rate_by_weekend_place: 42,
        room_occupancy_rate: 40
    },
    {
        province: "Granada",
        year: 2021,
        average_employment: 1.948,
        estimated_average_open_establishment: 278,
        estimated_average_place: 21.678,
        estimated_room: 10.340,
        occupancy_rate_by_place: 37,
        occupancy_rate_by_weekend_place: 47,
        room_occupancy_rate: 43
    },
    {
        province: "Huelva",
        year: 2021,
        average_employment: 1.846,
        estimated_average_open_establishment: 110,
        estimated_average_place: 12.693,
        estimated_room: 5.689,
        occupancy_rate_by_place: 53,
        occupancy_rate_by_weekend_place: 61,
        room_occupancy_rate: 57
    },
    {
        province: "Jaén",
        year: 2021,
        average_employment: 755,
        estimated_average_open_establishment: 142,
        estimated_average_place: 7.039,
        estimated_room: 3.627,
        occupancy_rate_by_place: 27,
        occupancy_rate_by_weekend_place: 35,
        room_occupancy_rate: 31
    },
    {
        province: "Málaga",
        year: 2021,
        average_employment: 8548,
        estimated_average_open_establishment: 401,
        estimated_average_place: 59.870,
        estimated_room: 27.065,
        occupancy_rate_by_place: 48,
        occupancy_rate_by_weekend_place: 54,
        room_occupancy_rate: 54
    },
    {
        province: "Sevilla",
        year: 2021,
        average_employment: 2.441,
        estimated_average_open_establishment: 250,
        estimated_average_place: 23.494,
        estimated_room: 11.694,
        occupancy_rate_by_place: 40,
        occupancy_rate_by_weekend_place: 50,
        room_occupancy_rate: 46
    },
    {
        province: "Almería",
        year: 2022,
        average_employment: 2.968,
        estimated_average_open_establishment: 179,
        estimated_average_place: 25.974,
        estimated_room: 10.190,
        occupancy_rate_by_place: 47,
        occupancy_rate_by_weekend_place: 54,
        room_occupancy_rate: 59
    },
    {
        province: "Sevilla",
        year: 2022,
        average_employment: 5.896,
        estimated_average_open_establishment: 408,
        estimated_average_place: 38.916,
        estimated_room: 17.735,
        occupancy_rate_by_place: 53,
        occupancy_rate_by_weekend_place: 61,
        room_occupancy_rate: 61
    },
    {
        province: "Córdoba",
        year: 2022,
        average_employment: 1.209,
        estimated_average_open_establishment: 183,
        estimated_average_place: 10.936,
        estimated_room: 5.509,
        occupancy_rate_by_place: 44,
        occupancy_rate_by_weekend_place: 55,
        room_occupancy_rate: 51
    },
    {
        province: "Granada",
        year: 2022,
        average_employment: 3.178,
        estimated_average_open_establishment: 361,
        estimated_average_place: 29.478,
        estimated_room: 14.080,
        occupancy_rate_by_place: 47,
        occupancy_rate_by_weekend_place: 58,
        room_occupancy_rate: 53
    },
    {
        province: "Huelva",
        year: 2022,
        average_employment: 2.720,
        estimated_average_open_establishment: 136,
        estimated_average_place: 18.341,
        estimated_room: 8.055,
        occupancy_rate_by_place: 53,
        occupancy_rate_by_weekend_place: 62,
        room_occupancy_rate: 58
    },
    {
        province: "Jaén",
        year: 2022,
        average_employment: 926,
        estimated_average_open_establishment: 161,
        estimated_average_place: 8.016,
        estimated_room: 4.040,
        occupancy_rate_by_place: 33,
        occupancy_rate_by_weekend_place: 45,
        room_occupancy_rate: 39
    },
    {
        province: "Málaga",
        year: 2022,
        average_employment: 13.875,
        estimated_average_open_establishment: 548,
        estimated_average_place: 84.299,
        estimated_room: 38.044,
        occupancy_rate_by_place: 61,
        occupancy_rate_by_weekend_place: 66,
        room_occupancy_rate: 71
    },
    {
        province: "Sevilla",
        year: 2022,
        average_employment: 4.203,
        estimated_average_open_establishment: 365,
        estimated_average_place: 32.045,
        estimated_room: 16.057,
        occupancy_rate_by_place: 56,
        occupancy_rate_by_weekend_place: 65,
        room_occupancy_rate: 63
    }
]
  
app.get(BASE_API_URL+"/hotel-occupancy-surveys", (request,response) => {
    response.json(lista)
    console.log("New request to /hotel-occupancy-surveys");
});

//db.insert(lista);

app.post(BASE_API_URL+"/hotel-occupancy-surveys", (request,response) => {
    var newFile = request.body;        
    console.log(`newFile = ${JSON.stringify(newFile, null, 2)}`);
    console.log("New POST to /hotel-occupancy-surveys");
    lista.push(newFile);
    response.sendStatus(201);
});

app.get(BASE_API_URL+"/hotel-occupancy-surveys/loadInitialData", (request,response) => {
    if (lista.length === 0) {
        for (let i = 0; i < 10; i++) {
            lista.push({
                province: "Nueva provincia",
                year: 2023,
                average_employment: Math.random() * 10000,
                estimated_average_open_establishment: Math.random() * 500,
                estimated_average_place: Math.random() * 100000,
                estimated_room: Math.random() * 50000,
                occupancy_rate_by_place: Math.random() * 100,
                occupancy_rate_by_weekend_place: Math.random() * 100,
                room_occupancy_rate: Math.random() * 100
            });
        }
        
    console.log("New GET to /hotel-occupancy-surveys/loadInitialData");
        response.status(200).json({ message: "Datos iniciales creados correctamente" });
    } else {
        response.status(409).json({ message: "Ya existen datos en la lista" });
    }
});     











//}