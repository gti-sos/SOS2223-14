const BASE_API_URL = "/api/v1";

app.get(BASE_API_URL+"/hotel-occupancy-surveys", (request,response) => {
    response.json(lista)
    console.log("New request to /hotel-occupancy-surveys");
});

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
        occupancy_rate_by_weekend_place: 52
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
        ccupancy_rate_by_weekend_place: 55
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
        occupancy_rate_by_weekend_place: 40
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
        occupancy_rate_by_weekend_place: 43
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
        occupancy_rate_by_weekend_place: 57
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
        occupancy_rate_by_weekend_place: 31
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
        occupancy_rate_by_weekend_place: 54
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
        occupancy_rate_by_weekend_place: 46
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
        occupancy_rate_by_weekend_place: 59
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
        occupancy_rate_by_weekend_place: 61
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
        occupancy_rate_by_weekend_place: 51
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
        occupancy_rate_by_weekend_place: 53
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
        occupancy_rate_by_weekend_place: 58
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
        occupancy_rate_by_weekend_place: 39
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
        occupancy_rate_by_weekend_place: 71
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
        occupancy_rate_by_weekend_place: 63
    }
]
