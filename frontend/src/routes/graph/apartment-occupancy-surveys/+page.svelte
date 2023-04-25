<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";

    let API = "/api/v2";
    let dataNames = "";
    let dataTravelers = "";
    let dataOvernightStay = "";
    let dataAverageStay = "";
    let result = "";
    let resultStatus = "";

    if (dev) {
        API = "http://localhost:12345" + API;
    }

    onMount(async () => {
        getNames();
    });

    async function loadChart(dataNames,dataTravelers,dataOvernightStay,dataAverageStay) {
        Highcharts.chart("container", {
            chart: {
                type: "column",
            },
            title: {
                text: "Ocupación de apartamentos en Andalucía",
            },
            subtitle: {
                text: 'Source: <a href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank">API Ocupación de apartamentos en Andalucía</a>',
            },
            xAxis: {
                categories: dataNames,
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
                    data: dataTravelers,
                },
                {
                    name: "Pernoctaciones",
                    data: dataOvernightStay,
                },
                {
                    name: "Estancia media",
                    data: dataAverageStay,
                },
            ],
        });
    }

    async function getNames() {
        resultStatus = result = "";
        const res = await fetch(API + "/dataName", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataNames = dataRecieved;
            getTravelers();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function getTravelers() {
        resultStatus = result = "";
        const res = await fetch(API + "/dataTravelers", {
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
        resultStatus = result = "";
        const res = await fetch(API + "/dataOvernightStay", {
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
        const status = await res.status;
        resultStatus = status;
    }

    async function getAverageStay() {
        resultStatus = result = "";
        const res = await fetch(API + "/dataAverageStay", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            result = JSON.stringify(dataRecieved, null, 2);
            dataAverageStay = dataRecieved;
            loadChart(dataNames,dataTravelers,dataOvernightStay,dataAverageStay);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
</svelte:head>
<main>
    <h1 style="text-align:center;">Graph</h1>
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description" />
    </figure>
</main>
