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

    let average_daily_expenditure = [];
    let average_employment = [];
    let rooms = [];
    let occupancy_rate_by_place = [];
    let occupancy_rate_by_weekend_place = [];
    let room_occupancy_rate = [];

    onMount(async () => {
        getData1();
        getData2();
        await getDataApartment();
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
    }

    async function getData2() {
        const res = await fetch(API + "/andalusia-tourism-situation-surveys/loadInitialData", {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
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
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                if (!provincias.includes(p)) {
                    provincias.push(p);
                }
                
                average_daily_expenditure.push(
                    parseFloat(datos[i]["average_daily_expenditure"])
                );
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

            loadHighCharts(
                provincias,
                traveler,
                overnight_stay,
                average_stay,
                average_daily_expenditure,
                average_employment,
                rooms,
                occupancy_rate_by_place,
                occupancy_rate_by_weekend_place,
                room_occupancy_rate
            );
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }
    async function loadHighCharts(
        provincias,
        traveler,
        overnight_stay,
        average_stay,
        average_daily_expenditure,
        average_employment,
        rooms,
        occupancy_rate_by_place,
        occupancy_rate_by_weekend_place,
        room_occupancy_rate
    ) {
        Highcharts.chart("container", {
            chart: {
                type: "column",
            },
            title: {
                text: "",
            },
            subtitle: {
                text: 'Source: <a href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank">API Ocupación de apartamentos en Andalucía</a>, <a href="https://sos2223-14.appspot.com/api/v2/hotel-occupancy-surveys" target="_blank">API Ocupación de hoteles en Andalucía</a> y <a href="https://sos2223-14.appspot.com/api/v2/andalusia-tourism-situation-surveys" target="_blank">API Coyuntura turística en Andalucía</a>',
            },
            xAxis: {
                categories: provincias,
                crosshair: true,
            },
            yAxis: {
                min: 0,
                max: 10,
                title: {
                    text: "Total",
                },
            },
            tooltip: {
                headerFormat:
                    '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat:
                    '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Turistas",
                    data: traveler,
                },
                {
                    name: "Pernoctaciones",
                    data: overnight_stay,
                },
                {
                    name: "Estancia media",
                    data: average_stay,
                },
                {
                    name: "Gasto medio",
                    data: average_daily_expenditure,
                },
                {
                    name: "Media de empleo",
                    data: average_employment,
                },
                {
                    name: "Habitaciones",
                    data: rooms,
                },
                {
                    name: "Tasa de ocupación por lugar",
                    data: occupancy_rate_by_place,
                },
                {
                    name: "Tasa de ocupación por lugar de fin de semana",
                    data: occupancy_rate_by_weekend_place,
                },
                {
                    name: "Tasa de ocupacion por habitación",
                    data: room_occupancy_rate,
                },
            ],
        });
    }

    async function loadJSCharting(
        provincias,
        traveler,
        overnight_stay,
        average_stay,
        average_daily_expenditure,
        rooms,
        occupancy_rate_by_place,
        occupancy_rate_by_weekend_place,
        room_occupancy_rate
    ) {
        var chart = JSC.chart("chartDiv_1", {
            debug: true,
            defaultSeries_type: "column",

            title_label_text: "Gráfica (parámetros pequeños)",
            yAxis: { label_text: "" },
            xAxis: {
                label_text: "",
                categories: provincias,
            },
            series: [
                {
                    name: "Estancia media",
                    points: average_stay,
                },
                {
                    name: "Gasto medio",
                    points: average_daily_expenditure,
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
                    name: "Tasa de ocupación de habitación",
                    points: room_occupancy_rate,
                },
            ],
        });

        var chart = JSC.chart("chartDiv_3", {
            debug: true,
            defaultSeries_type: "column",
            title_label_text: "Gráfica (todo junto)",
            yAxis: { label_text: "" },
            xAxis: {
                label_text: "",
                categories: provincias,
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
                    name: "Habitaciones",
                    points: rooms,
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
                    name: "Tasa de ocupación por lugar",
                    points: occupancy_rate_by_place,
                },
                {
                    name: "Tasa de ocupación por lugar de fin de semana",
                    points: occupancy_rate_by_weekend_place,
                },
                {
                    name: "Tasa de ocupación de habitación",
                    points: room_occupancy_rate,
                },
            ],
        });

        var chart = JSC.chart("chartDiv_2", {
            debug: true,
            defaultSeries_type: "column",
            title_label_text: "Gráfica (parámetros grandes)",
            yAxis: { label_text: "" },
            xAxis: {
                label_text: "",
                categories: provincias,
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
                    name: "Habitaciones",
                    points: rooms,
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
    <h2 style="text-align: center; margin-top:100px; font-style:oblique; font-family:initial">
        Gráfica ocupación de apartamentos, de hoteles y coyuntura turística
        en Andalucía
    </h2>
    <p style="text-align:center">
        Gráfica con: <a
            style="text-decoration: none; color:black"
            href="https://www.highcharts.com/"
            target="_blank"><u>Highcharts</u></a
        >
    </p>
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description" />
    </figure>
    <div style="margin-left: 30px; margin-right:100px">
        
        <p style="text-align:center">Gráfica con: <a style="text-decoration: none; color:black" href="https://jscharting.com/" target="_blank"><u>JSCharting</u></a></p>
        <div id="chartDiv_1" style="width:1500px; height:500px; margin: 0px auto;"/>
        <div
            id="chartDiv_2"
            style="width:1500px; height:500px; margin: 0px auto; margin-top:40px"
        />
        <div
            id="chartDiv_3"
            style="width:1500px; height:500px; margin: 0px auto; margin-top:40px"
        />
    </div>
</main>
