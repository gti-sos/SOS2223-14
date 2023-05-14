<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
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

    let average_employment_js = [];
    let estimated_room_js = [];
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
                phc = `${datos[i]["province"]} ${datos[i]["year"]}`;
                provinces.push(phc);
                average_employment.push(datos[i]["average_employment"]);
                estimated_room.push(datos[i]["estimated_room"]);
                estimated_average_place.push(datos[i]["estimated_average_place"]);
            }
            loadChart(provinces, average_employment, estimated_room, estimated_average_place);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadChart(provinces, average_employment, estimated_room, estimated_average_place){
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
                name: "Media de empleo",
                marker: {
                    symbol: 'square'
                },
                data: average_employment

            }, {
                name: "Habitaciones estimadas",
                marker: {
                    symbol: 'triangle'
                },
                data: estimated_room
            }, {
                name: "Lugar promedio estimado",
                marker: {
                    symbol: 'diamond'
                },
                data: estimated_average_place
            }]
        });
    }

    onMount(async () =>{
        getData();
    });
</script>

<main>
    <h1>Graph</h1>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            This chart shows how symbols and shapes can be used in charts.
            Highcharts includes several common symbol shapes, such as squares,
            circles and triangles, but it is also possible to add your own
            custom symbols. In this chart, custom weather symbols are used on
            data points to highlight that certain temperatures are warm while
            others are cold.
        </p>
    </figure>

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
