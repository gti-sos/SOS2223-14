<script>
    //@ts-nocheck
    import { onMount } from "svelte";

    let API = "https://sos2223-14.appspot.com/api/v2";
    let p = "";
    let datos = "";
    let provincias = [];
    let traveler = [];
    let overnight_stay = [];
    let average_stay = [];
    let resultStatus = "";

    let average_daily_expenditure = [];

    let estimated_average_open_establishment = [];
    let estimated_average_place = [];
    let average_employment = [];
    let rooms = [];
    let occupancy_rate_by_place = [];
    let occupancy_rate_by_weekend_place = [];
    let room_occupancy_rate = [];

    onMount(async () => {
        getData1();
    });


    async function getData1() {
        const res = await fetch(API + "/hotel-occupancy-surveys/loadInitialData", {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if(resultStatus==200){
            getData2();
        }
    }

    async function getData2() {
        const res = await fetch(API + "/andalusia-tourism-situation-surveys", {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            getDataApartment();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if(resultStatus==200){
            getDataApartment();
        }
    }

    async function getDataApartment() {
        const res = await fetch(API + "/apartment-occupancy-surveys", {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                provincias.push(p);
                traveler.push(parseInt(datos[i]["traveler"]));
                overnight_stay.push(parseInt(datos[i]["overnight_stay"]));
                average_stay.push(parseInt(datos[i]["average_stay"]));
            }
            getDataTourism();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getDataTourism() {
        const res = await fetch(API + "/andalusia-tourism-situation-surveys", {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                if (datos[i]["province"] != "Andalucía") {
                    p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                    if (!provincias.includes(p)) {
                        provincias.push(p);
                    }

                    average_daily_expenditure.push(
                        parseFloat(datos[i]["average_daily_expenditure"])
                    );
                }
            }
            getDataHotel();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getDataHotel() {
        const res = await fetch(API + "/hotel-occupancy-surveys", {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                if (!provincias.includes(p)) {
                    provincias.push(p);
                }
                estimated_average_open_establishment.push(parseInt(datos[i]["estimated_average_open_establishment"]));
                estimated_average_place.push(parseInt(datos[i]["estimated_average_place"]));
                average_employment.push(parseInt(datos[i]["average_employment"]))
                rooms.push(parseFloat(datos[i]["estimated_room"]));
                occupancy_rate_by_place.push(
                    parseInt(datos[i]["occupancy_rate_by_place"])
                );
                occupancy_rate_by_weekend_place.push(
                    parseInt(datos[i]["occupancy_rate_by_weekend_place"])
                );
                room_occupancy_rate.push(
                    parseInt(datos[i]["room_occupancy_rate"])
                );
            }

            loadJSCharting(
                provincias,
                traveler,
                overnight_stay,
                average_stay,
                average_daily_expenditure,
                average_employment,
                estimated_average_open_establishment,
                estimated_average_place,
                rooms,
                occupancy_rate_by_place,
                occupancy_rate_by_weekend_place,
                room_occupancy_rate
            );
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadJSCharting(
        provincias,
        traveler,
        overnight_stay,
        average_stay,
        average_daily_expenditure,
        average_employment,
        estimated_average_open_establishment,
        estimated_average_place,
        rooms,
        occupancy_rate_by_place,
        occupancy_rate_by_weekend_place,
        room_occupancy_rate
    ) {
        var chart = JSC.chart("chartDiv", {
            debug: true,
            defaultSeries_type: "column",

            title_label_text: "",
            yAxis: { label_text: "" },
            xAxis: {
                label_text: "",
                categories: provincias
            },
            series: [
                {
                    name: "Turistas",
                    points: traveler,
                },
                {
                    name: "Pernoctaciones",
                    points: overnight_stay,
                },
                {
                    name: "Estancia media",
                    points: average_stay,
                },
                {
                    name: "Gasto medio",
                    points: average_daily_expenditure,
                },                
                {
                    name: "Media de empleo",
                    points: average_employment,
                },
                {
                    name: "Establecimiento abierto medio estimado",
                    points: estimated_average_open_establishment,
                },
                {
                    name: "Lugar promedio estimado",
                    points: estimated_average_place,
                },
                {
                    name: "Habitaciones",
                    points: rooms,
                },
                {
                    name: "Tasa de ocupación por lugar",
                    points: occupancy_rate_by_place,
                },
                {
                    name: "Tasa de ocupación por lugar de fin de semana",
                    points: occupancy_rate_by_weekend_place,
                },
                {
                    name: "Tasa de ocupación por habitación",
                    points: room_occupancy_rate,
                },
            ],
        });        
    }
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="https://code.jscharting.com/latest/jscharting.js"></script>
</svelte:head>
<main>
    <div style="margin-left: 30px; margin-right:100px">
        <h2 style="text-align: center; margin-top:100px; font-style:oblique; font-family:initial">
            Gráfica ocupación de apartamentos, de hoteles y coyuntura turística
            en Andalucía
        </h2>
        <p style="text-align:center">Fuentes: <a style="text-decoration: none; color:black" href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank"><u>API Ocupación de apartamentos</u></a>, <a style="text-decoration: none; color:black" href="https://sos2223-14.appspot.com/api/v2/hotel-occupancy-surveys" target="_blank"><u>API Ocupación de hoteles</u></a> y <a style="text-decoration: none; color:black" href="https://sos2223-14.appspot.com/api/v2/andalusia-tourism-situation-surveys" target="_blank"><u>API Coyuntura turística</u></a></p>
        <p style="text-align:center">Gráfica con: <a style="text-decoration: none; color:black" href="https://jscharting.com/" target="_blank"><u>JSCharting</u></a></p>
        <div id="chartDiv" style="width:1500px; height:500px; margin: 0px auto;"/>
    </div>
</main>
