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

    let rooms = [];
    let occupancy_rate_by_place = [];
    let occupancy_rate_by_weekend_place = [];
    let room_occupancy_rate = [];

    onMount(async () => {
        getDataApartment();
    });

    async function getDataApartment() {
        const res = await fetch(API + "/apartment-occupancy-surveys", {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for(let i=0; i<datos.length; i++){
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
            for(let i=0; i<datos.length; i++){
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                provincias.push(p);
                average_daily_expenditure.push(parseFloat(datos[i]["average_daily_expenditure"]));
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
            for(let i=0; i<datos.length; i++){
                rooms.push(parseFloat(datos[i]["estimated_room"]));
                occupancy_rate_by_place.push(parseInt(datos[i]["occupancy_rate_by_place"]));
                occupancy_rate_by_weekend_place.push(parseInt(datos[i]["occupancy_rate_by_weekend_place"]));
                room_occupancy_rate.push(parseInt(datos[i]["room_occupancy_rate"]));
            }
            loadHighCharts(provincias,traveler,overnight_stay,average_stay,
                          average_daily_expenditure,rooms,occupancy_rate_by_place,occupancy_rate_by_weekend_place,room_occupancy_rate);
            console.log(average_daily_expenditure);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadHighCharts(provincias,traveler,overnight_stay,average_stay,average_daily_expenditure,rooms,occupancy_rate_by_place,occupancy_rate_by_weekend_place,room_occupancy_rate) {
        Highcharts.chart("container", {
            chart: {
                type: "column",
            },
            title: {
                text: "Ocupación de apartamentos, de hoteles y coyuntura turística en Andalucía",
            },
            subtitle: {
                text: 'Source: <a href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank">API Ocupación de apartamentos en Andalucía</a>,  <a href="https://sos2223-14.appspot.com/api/v2/andalusia-tourism-situation-surveys" target="_blank">API coyuntura turística en Andalucía</a> y <a href="https://sos2223-14.appspot.com/api/v2/hotel-occupancy-surveys" target="_blank">API Ocupación de hoteles en Andalucía</a>',
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
                    name: "Tasa de ocupación de habitación",
                    data: room_occupancy_rate,
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
</svelte:head>
<main>
    <figure class="highcharts-figure">
        <div id="container" style="height: 700px;"/>
        <p class="highcharts-description" />
    </figure>
</main>