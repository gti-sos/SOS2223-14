<svelte:head>
    <!-- HighCharts -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>

    <!-- Canvas -->
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</svelte:head>

<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";

    let API = "/api/v2/hotel-occupancy-surveys/data";

    if (dev) {
        API = "https://sos2223-14.appspot.com" + API;
    }

    let data = [];
    let provinces = [];
    let average_employment = [];
    let estimated_average_open_establishment = [];
    let estimated_average_place = [];
    let estimated_room = [];
    let occupancy_rate_by_place = [];
    let occupancy_rate_by_weekend_place = [];
    let room_occupancy_rate = [];
    let datos = "";
    let phc = "";
    let result = "";
    let resultStatus = "";
    let dataPoints = [];

    async function getData() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                phc = `${datos[i][0]} ${datos[i][1]}`;
                provinces.push(phc);
                average_employment.push(datos[i][2]);
                estimated_average_open_establishment.push(datos[i][3]);
                estimated_average_place.push(datos[i][4]);
                estimated_room.push(datos[i][5]);
                occupancy_rate_by_place.push(datos[i][6]);
                occupancy_rate_by_weekend_place.push(datos[i][7]);
                room_occupancy_rate.push(datos[i][8]);
            }
            loadHChart(provinces, average_employment, estimated_average_open_establishment, estimated_average_place, estimated_room, occupancy_rate_by_place, occupancy_rate_by_weekend_place, room_occupancy_rate);
            loadCanvasChart(provinces, estimated_room);

        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }
    

    async function loadHChart(provinces, average_employment, estimated_average_open_establishment, estimated_average_place, estimated_room, occupancy_rate_by_place, occupancy_rate_by_weekend_place, room_occupancy_rate){
        Highcharts.chart('container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Andalucía'
            },
            subtitle: {
                text: 'Source: ' +
                    '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
                    'target="_blank">Wikipedia.com</a>'
            },
            xAxis: {
                categories: provinces,
                accessibility: {
                    description: 'Provincias'
                }
            },
            yAxis: {
                title: {
                    text: 'Total'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Media de empleo',
                marker: {
                    symbol: 'square'
                },
                data: average_employment

            }, {
                name: 'Establecimiento abierto medio estimado',
                marker: {
                    symbol: 'triangle'
                },
                data: estimated_average_open_establishment
            }, {
                name: 'Lugar promedio estimado',
                marker: {
                    symbol: 'diamond'
                },
                data: estimated_average_place
            }, {
                name: 'Habitaciones estimadas',
                marker: {
                    symbol: 'triangle'
                },
                data: estimated_room
            }, {
                name: 'Tasa de ocupación por lugar',
                marker: {
                    symbol: 'triangle'
                },
                data: occupancy_rate_by_place
            }, {
                name: 'Tasa de ocupación por lugar de fin de semana',
                marker: {
                    symbol: 'triangle'
                },
                data: occupancy_rate_by_weekend_place
            }, {
                name: 'Tasa de ocupación de la habitación',
                marker: {
                    symbol: 'triangle'
                },
                data: room_occupancy_rate
            }]
        });
    }

    async function loadCanvasChart(provinces, estimated_room) {
        const chartData = provinces.map((province, i) => ({
            label: province,
            y: estimated_room[i]
        }));
        var chart = new CanvasJS.Chart("chartContainer", {
            
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Habitaciones estimadas por provincias"
            },
            axisY: {
                title: "Habitaciones estimadas"
            },
            data: [{        
                type: "column",  
                showInLegend: true, 
                legendMarkerColor: "grey",
                legendText: "Provincias",
                dataPoints: chartData
            }]
        });
        chart.render();
    } 

    onMount(async () => {
        getData();
    })
</script>

<main>
    <h1>Gráfrica Ocupación hotelera</h1>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            Datros recogidos para los años 2021 y 2022.
        </p>
    </figure>

    <div id="chartContainer" style="height: 250px;"></div>

    {#if resultStatus != ""}
        <p>
            Result: 
        </p>
        <pre>
            {resultStatus}
            {result}
        </pre>
    {/if}
</main>
