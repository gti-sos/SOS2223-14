<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { Table } from "sveltestrap";

    let API_compañerx_1 = "https://sos2223-12.appspot.com/api/v2/agroclimatic";
    //let API_compañerx_2 = "https://sos2223-12.appspot.com/api/v2/pollutions";
    let API_cristina = "https://sos2223-14.appspot.com/api/v2";
    let datos = "";
    let result = "";
    let a = "";
    let b = "";
    let provincias = [];
    let minimas = [];
    let maximas = [];
    let dataTravelers = "";
    let dataNames = "";
    let dataOvernightStay = "";
    let dataAverageStay = "";

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
        const res = await fetch(API_cristina + "/dataName", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataNames = dataRecieved;
            for (let i = 0; i < dataNames.length; i++) {
                provincias.push(dataNames[i]);
            }
            console.log(provincias);
            getTravelers();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getTravelers() {
        const res = await fetch(API_cristina + "/dataTravelers", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataTravelers = dataRecieved;
            console.log(dataTravelers);
            getOvernightStay();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getOvernightStay() {
        const res = await fetch(API_cristina + "/dataOvernightStay", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataOvernightStay = dataRecieved;
            console.log(dataOvernightStay);
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
            console.log(dataAverageStay);
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
        const res = await fetch(API_compañerx_1, {
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
            loadData(provincias,dataTravelers,dataOvernightStay,dataAverageStay);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadData(provincias,dataTravelers,dataOvernightStay,dataAverageStay) {
        Highcharts.chart("container_1", {
            chart: {
                zoomType: "xy",
            },
            title: {
                text: "Gráfica",
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
                    data: dataTravelers,
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "Pernoctaciones",
                    type: "column",
                    yAxis: 1,
                    data: dataOvernightStay,
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "Estancia media",
                    type: "column",
                    yAxis: 1,
                    data: dataAverageStay,
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
        Highcharts.chart("container_2", {
            chart: {
                zoomType: "xy",
            },
            title: {
                text: "Gráfica",
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
                    data: dataTravelers,
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "Pernoctaciones",
                    type: "column",
                    yAxis: 1,
                    data: dataOvernightStay,
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "Estancia media",
                    type: "column",
                    yAxis: 1,
                    data: dataAverageStay,
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
        <div id="container_2" style="height: 900px;"></div>
        <p class="highcharts-description">
        </p>
    </figure>
</main>
