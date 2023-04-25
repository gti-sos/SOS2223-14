<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { Table } from "sveltestrap";

    let API_compañerx = "https://sos2223-12.appspot.com/api/v2/agroclimatic";
    let API_cristina = "https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys";
    let datos = "";
    let result = "";
    let a = "";
    let b = "";
    let provincias = [];
    let minimas = [];
    let maximas = [];
    let dataTravelers = "";
    let dataOvernightStay = "";
    let dataAverageStay = "";

    onMount(async () => {
        getNames_compañerx();
        getNames_cristina();
    });

    async function getNames_compañerx() {
        const res = await fetch(API_compañerx, {
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
        const res = await fetch(API_cristina + "/dataName", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataNames = dataRecieved;
            for (let i = 0; i < datos.length; i++) {
                a = `${datos[i]["province"]} ${datos[i]["year"]}`;
                provincias.push(a);
            }
            getTravelers();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function getTravelers() {
        const res = await fetch(API_cristina + "/dataTravelers", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataTravelers = dataRecieved;
            getOvernightStay();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function getOvernightStay() {
        const res = await fetch(API_cristina + "/dataOvernightStay", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataOvernightStay = dataRecieved;
            getAverageStay();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getAverageStay() {
        const res = await fetch(API_cristina + "/dataAverageStay", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataAverageStay = dataRecieved;
            getMinima();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getMinima() {
        const res = await fetch(API_compañerx, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            for (let i = 0; i < datos.length; i++) {
                b = `${datos[i]["minimun_temperature"]}`;
                minimas.push(parseInt(b));
            }
            console.log(minimas);
            getMaxima();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getMaxima() {
        const res = await fetch(API_compañerx, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            for (let i = 0; i < datos.length; i++) {
                b = `${datos[i]["maximun_temperature"]}`;
                maximas.push(parseInt(b));
            }
            console.log(maximas);
            loadData();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadData() {
        Highcharts.chart("container", {
            chart: {
                zoomType: "xy",
            },
            title: {
                text: "Average Monthly Weather Data for Tokyo",
                align: "left",
            },
            subtitle: {
                text: "Source: WorldClimate.com",
                align: "left",
            },
            xAxis: [
                {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
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
                    title: {
                        text: "Rainfall",
                        style: {
                            color: Highcharts.getOptions().colors[0],
                        },
                    },
                    labels: {
                        format: "{value} mm",
                        style: {
                            color: Highcharts.getOptions().colors[0],
                        },
                    },
                },
                {
                    // Tertiary yAxis
                    gridLineWidth: 0,
                    title: {
                        text: "Sea-Level Pressure",
                        style: {
                            color: Highcharts.getOptions().colors[1],
                        },
                    },
                    labels: {
                        format: "{value} mb",
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
                    name: "Rainfall",
                    type: "column",
                    yAxis: 1,
                    data: [
                        49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                        216.4, 194.1, 95.6, 54.4,
                    ],
                    tooltip: {
                        valueSuffix: " mm",
                    },
                },
                {
                    name: "Sea-Level Pressure",
                    type: "spline",
                    yAxis: 2,
                    data: [
                        1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6,
                        1010.2, 1013.1, 1016.9, 1018.2, 1016.7,
                    ],
                    marker: {
                        enabled: false,
                    },
                    dashStyle: "shortdot",
                    tooltip: {
                        valueSuffix: " mb",
                    },
                },
                {
                    name: "Temperature",
                    type: "spline",
                    data: [
                        7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3,
                        13.9, 9.6,
                    ],
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
        <div id="container"></div>
        <p class="highcharts-description">
        </p>
    </figure>
</main>
