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
                if(!provincias.includes(p)){
                    provincias.push(p);
                }
                
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
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                if(!provincias.includes(p)){
                    provincias.push(p);
                }
                rooms.push(parseFloat(datos[i]["estimated_room"]));
                occupancy_rate_by_place.push(parseInt(datos[i]["occupancy_rate_by_place"]));
                occupancy_rate_by_weekend_place.push(parseInt(datos[i]["occupancy_rate_by_weekend_place"]));
                room_occupancy_rate.push(parseInt(datos[i]["room_occupancy_rate"]));
            }
           /*loadHighCharts(provincias,traveler,overnight_stay,average_stay,
                          average_daily_expenditure,rooms,occupancy_rate_by_place,occupancy_rate_by_weekend_place,room_occupancy_rate);*/
                            loadJSCharting(provincias,traveler,overnight_stay,average_stay,
                          average_daily_expenditure,rooms,occupancy_rate_by_place,occupancy_rate_by_weekend_place,room_occupancy_rate);
                          
            console.log(average_daily_expenditure);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadJSCharting(provincias,traveler,overnight_stay,average_stay,average_daily_expenditure,rooms,occupancy_rate_by_place,occupancy_rate_by_weekend_place,room_occupancy_rate) {
        var chart = JSC.chart('chartDiv_1', { 
            debug: true, 
            defaultSeries_type: 'column', 
            
            title_label_text: 'Gráfica (parámetros pequeños) con JSCharting', 
            yAxis: {label_text: ''}, 
            xAxis: {
                label_text: '', 
                categories: provincias
            }, 
            series: [  
                { 
                    name: 'Estancia media', 
                    points: average_stay
                },
                { 
                    name: 'Gasto medio', 
                    points: average_daily_expenditure
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
                }],

        });

        var chart = JSC.chart('chartDiv_3', { 
            debug: true, 
            defaultSeries_type: 'column', 
            title_label_text: 'Gráfica (todo junto) con JSCharting', 
            yAxis: {label_text: ''}, 
            xAxis: {
                label_text: '', 
                categories: provincias
            }, 
            series: [ 
                { 
                    name: 'Turistas',  
                    points: traveler
                }, 
                { 
                    name: 'Pernoctaciones', 
                    points: overnight_stay
                }, 
                {
                    name: "Habitaciones",
                    points: rooms,
                },
                { 
                    name: 'Estancia media', 
                    points: average_stay
                },
                { 
                    name: 'Gasto medio', 
                    points: average_daily_expenditure
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
                }
                ],

        });

        var chart = JSC.chart('chartDiv_2', { 
            debug: true, 
            defaultSeries_type: 'column', 
            title_label_text: 'Gráfica (parámetros grandes) con JSCharting', 
            yAxis: {label_text: ''}, 
            xAxis: {
                label_text: '', 
                categories: provincias
            }, 
            series: [ 
                { 
                    name: 'Turistas',  
                    points: traveler
                }, 
                { 
                    name: 'Pernoctaciones', 
                    points: overnight_stay
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
    <div style="margin-left: 30px; margin-right:100px">
        <h3 style="text-align: center; margin-top:100px">
            Gráfica ocupación de apartamentos, de hoteles y coyuntura turística en Andalucía
        </h3>
        <div id="chartDiv_1" style="width:1900px; height:500px; margin: 0px auto;">
        </div>
        <div id="chartDiv_2" style="width:1900px; height:500px; margin: 0px auto; margin-top:40px">
        </div>
        <div id="chartDiv_3" style="width:1900px; height:500px; margin: 0px auto; margin-top:40px">
        </div>
    </div>
    
</main>