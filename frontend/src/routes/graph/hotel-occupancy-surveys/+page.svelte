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
    let estimated_room = [];
    let estimated_average_place = [];
    let datos = "";
    let phc = "";
    let result = "";
    let resultStatus = "";
    let dataPoints = [];


    let average_employment_js = [];
    let estimated_room_cv = [];
    let estimated_average_place_js = [];

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
                estimated_average_place.push(datos[i][3]);
                estimated_room.push(datos[i][4]);
            }
            loadHChart(provinces, average_employment, estimated_average_place, estimated_room);
            loadCanvasChart(provinces, estimated_room);

        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }
    

    async function loadHChart(provinces, average_employment, estimated_average_place, estimated_room){
        Highcharts.chart('container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
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
                name: 'Lugar promedio estimado',
                marker: {
                    symbol: 'triangle'
                },
                data: estimated_average_place
            }, {
                name: 'Habitaciones estimadas',
                marker: {
                    symbol: 'diamond'
                },
                data: estimated_room
            }]
        });
    }

    async function loadCanvasChart(provinces, estimated_room) {
        const chartData = provinces.map((province, index) => ({
            x: province,
            y: estimated_room[index]
        }));

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Ocupación hotelera en Andalucía"
            },
            axisY: {
                title: "Habitaciones estimadas",
                titleFontSize: 24,
                includeZero: true
            },
            data: [{
                type: "column",
                yValueFormatString: "#,### Units",
                dataPoints: chartData
            }]
        });
        chart.render();
    }

    onMount(async () =>{
        getData();
    });
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
