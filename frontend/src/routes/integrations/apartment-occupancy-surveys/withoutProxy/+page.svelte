<script>
    //@ts-nocheck
    import { onMount } from "svelte";

    let API_compañerx_2 = "https://sos2223-12.appspot.com/api/v2/pollutions";
    let API_cristina ="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys";
    let datos = "";
    let result_1 = "";
    let resultStatus_1 = "";
    let result_2 = "";
    let resultStatus_2 = "";
    let p = "";
    let provincias = [];
    let nO2 = [];
    let O3 = [];
    let sO2 = [];
    let traveler = [];
    let overnight_stay = [];
    let average_stay = [];

    onMount(async () => {
        getData_cristina();
    });

    async function getData_compañerx() {
        const res = await fetch(API_compañerx_2, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result_1 = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                if (!provincias.includes(p)) {
                    provincias.push(p);
                }
                nO2.push(parseFloat(datos[i]["NO2"]));
                O3.push(parseFloat(datos[i]["O3"]));
                sO2.push(parseFloat(datos[i]["SO2"]));
            }
            loadData(provincias, traveler, overnight_stay, average_stay,nO2,O3,sO2);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus_1 = status;
    }

    async function getData_cristina() {
        const res = await fetch(API_cristina, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result_2 = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                provincias.push(p);
                traveler.push(datos[i]["traveler"]);
                overnight_stay.push(datos[i]["overnight_stay"]);
                average_stay.push(datos[i]["average_stay"]);
            }
            getData_compañerx();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus_2 = status;
    }

    async function loadData(
        provincias,
        traveler,
        overnight_stay,
        average_stay,
        nO2,
        O3,
        sO2
    ) {
        Highcharts.chart("container", {
            chart: {
                zoomType: "xy",
            },
            title: {
                text: "Gráfica ocupación de apartamentos y contaminación",
                align: "center",
            },
            subtitle: {
                text: 'Source: <a href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank">API Ocupación de apartamentos en Andalucía</a> y  <a href="https://sos2223-12.appspot.com/api/v2/pollutions" target="_blank">API Contaminación</a>',
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
                        format: "{value}",
                        style: {
                            color: Highcharts.getOptions().colors[2],
                        },
                    },
                    title: {
                        text: "",
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
                        format: "{value}",
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
                    name: "NO2",
                    type: "spline",
                    data: nO2,
                    marker: {
                        enabled: false,
                    },
                    dashStyle: "shortdot",
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "O3",
                    type: "spline",
                    data: O3,
                    marker: {
                        enabled: false,
                    },
                    tooltip: {
                        valueSuffix: "",
                    },
                },
                {
                    name: "sO2",
                    type: "spline",
                    data: sO2,
                    marker: {
                        enabled: false,
                    },
                    dashStyle: "shortdot",
                    tooltip: {
                        valueSuffix: "",
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
        <div id="container" style="height: 900px;" />
        <p class="highcharts-description" />
    </figure>
    <div style="margin-left:40px;font-size:20px;">
        <h4>Resultado compañerx</h4>
        {#if resultStatus_1 != ""}
            <p>Result:{resultStatus_1}</p>
            <pre>                
                {result_1}
            </pre>
        {/if}
        <h4>Resultados propios</h4>
        {#if resultStatus_2 != ""}
            <p>Result: {resultStatus_2}</p>
            <pre>
                {result_2}
            </pre>
        {/if}
    </div>
    
</main>