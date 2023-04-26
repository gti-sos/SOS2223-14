<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { Table } from "sveltestrap";

    let API_compañerx_1 = "https://sos2223-12.appspot.com/api/v2/agroclimatic";
    //let API_compañerx_2 = "https://sos2223-12.appspot.com/api/v2/pollutions";
    let API_cristina = "https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys";
    let datos = "";
    let result = "";
    let resultStatus = "";
    let a = "";
    let p = "";
    let b = "";
    let provincias = [];
    let minimas = [];
    let maximas = [];
    let traveler = [];
    let overnight_stay = [];
    let average_stay = [];

    onMount(async () => {
        getNames_compañerx();
        getNames_cristina();
    });

    async function getNames_compañerx() {
        const res = await fetch(API_compañerx_1, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                a = `${datos[i]["province"]} ${datos[i]["year"]}`;
                provincias.push(a);
            }
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getNames_cristina() {
        const res = await fetch(API_cristina, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                if (!provincias.includes(p)) {
                    provincias.push(p);
                }
                traveler.push(datos[i]["traveler"]);
                overnight_stay.push(datos[i]["overnight_stay"]);
                average_stay.push(datos[i]["average_stay"]);
            }
            getMinima();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getMinima() {
        const res = await fetch(API_compañerx_1, {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                b = `${datos[i]["minimun_temperature"]}`;
                minimas.push(parseInt(b));
            }
            getMaxima();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getMaxima() {
        const res = await fetch(API_compañerx_1, {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                b = `${datos[i]["maximun_temperature"]}`;
                maximas.push(parseInt(b));
            }
            loadData(provincias,traveler,overnight_stay,average_stay);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadData(provincias,traveler,overnight_stay,average_stay) {
        Highcharts.chart("container_1", {
            chart: {
                zoomType: "xy",
            },
            title: {
                text: "Gráfica ocupación de apartamentos y agroclimática",
                align: "center",
            },
            subtitle: {
                text: 'Source: <a href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank">API Ocupación de apartamentos en Andalucía</a> y  <a href="https://sos2223-12.appspot.com/api/v2/agroclimatic" target="_blank">API Agroclimaticas</a>',
                align: "center",
            },
            xAxis: [
                {
                    categories: provincias,
                    crosshair: true,
                },
            ],
            yAxis: [
                {
                    // Primary yAxis
                    labels: {
                        format: "{value}°C",
                        style: {
                            color: Highcharts.getOptions().colors[2],
                        },
                    },
                    title: {
                        text: "Temperature",
                        style: {
                            color: Highcharts.getOptions().colors[2],
                        },
                    },
                    opposite: true,
                },
                {
                    // Secondary yAxis
                    gridLineWidth: 0,
                    labels: {
                        format: "{value}",
                        style: {
                            color: Highcharts.getOptions().colors[0],
                        },
                    },
                },
                {
                    // Tertiary yAxis
                    gridLineWidth: 0,
                    title: {
                        style: {
                            color: Highcharts.getOptions().colors[1],
                        },
                    },
                    labels: {
                        format: "{value} ºC",
                        style: {
                            color: Highcharts.getOptions().colors[1],
                        },
                    },
                    opposite: true,
                },
            ],
            tooltip: {
                shared: true,
            },
            legend: {
                layout: "vertical",
                align: "left",
                x: 80,
                verticalAlign: "top",
                y: 55,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    "rgba(255,255,255,0.25)",
            },
            series: [
                {
                    name: "Turistas",
                    type: "column",
                    yAxis: 1,
                    data: traveler,
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "Pernoctaciones",
                    type: "column",
                    yAxis: 1,
                    data: overnight_stay,
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "Estancia media",
                    type: "column",
                    yAxis: 1,
                    data: average_stay,
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "Temperatura máxima",
                    type: "spline",
                    yAxis: 2,
                    data: maximas,
                    marker: {
                        enabled: false,
                    },
                    dashStyle: "shortdot",
                    tooltip: {
                        valueSuffix: " ºC",
                    },
                },
                {
                    name: "Temperatura mínima",
                    type: "spline",
                    data: minimas,
                    tooltip: {
                        valueSuffix: " °C",
                    },
                },
            ],
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                floating: false,
                                layout: "horizontal",
                                align: "center",
                                verticalAlign: "bottom",
                                x: 0,
                                y: 0,
                            },
                            yAxis: [
                                {
                                    labels: {
                                        align: "right",
                                        x: 0,
                                        y: -6,
                                    },
                                    showLastLabel: false,
                                },
                                {
                                    labels: {
                                        align: "left",
                                        x: 0,
                                        y: -6,
                                    },
                                    showLastLabel: false,
                                },
                                {
                                    visible: false,
                                },
                            ],
                        },
                    },
                ],
            },
        });
    }
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
</svelte:head>
<main>
    <figure class="highcharts-figure">
        <div id="container_1" style="height: 900px;"></div>
        <p class="highcharts-description">
        </p>
    </figure>
</main>
