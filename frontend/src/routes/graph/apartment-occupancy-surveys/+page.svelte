<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";

    let API = "https://sos2223-14.appspot.com/api/v2";
    let dataNames = "";
    let dataTravelers = "";
    let dataOvernightStay = "";
    let dataAverageStay = "";
    let result_1 = "";
    let resultStatus_1 = "";
    let result_2 = "";
    let resultStatus_2 = "";
    let dato="";
    let datos="";
    let traveler=[];
    let overnight_stay=[]
    let average_stay=[];

    onMount(async () => {
        getAllData();
        getData();
        getNames();
    });

    async function loadHighCharts(
        dataNames,
        dataTravelers,
        dataOvernightStay,
        dataAverageStay
    ) {
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
        const res = await fetch(API + "/dataName", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            dataNames = dataRecieved;
            getTravelers();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getAllData() {
        resultStatus_1 = result_1 = "";
        const res = await fetch(API + "/apartment-occupancy-surveys", {
            method: "GET",
        });
        try {
            const data = await res.json();
            result_1 = JSON.stringify(data, null, 2);
            datos = data;
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus_1 = status;
    }

    async function getTravelers() {
        const res = await fetch(API + "/dataTravelers", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            dataTravelers = dataRecieved;
            getOvernightStay();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getOvernightStay() {
        const res = await fetch(API + "/dataOvernightStay", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            dataOvernightStay = dataRecieved;
            getAverageStay();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getAverageStay() {
        const res = await fetch(API + "/dataAverageStay", {
            method: "GET",
        });
        try {
            const dataRecieved = await res.json();
            dataAverageStay = dataRecieved;
            loadHighCharts(
                dataNames,
                dataTravelers,
                dataOvernightStay,
                dataAverageStay
            );
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadJSCharting(traveler,overnight_stay,average_stay) {
        var chart = JSC.chart('chartDiv', { 
            debug: true, 
            defaultSeries_type: 'column', 
            title_label_text: '', 
            yAxis: { label_text: ''}, 
            xAxis: {
                label_text: '', 
                categories: ['']
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
                name: 'Estancia media', 
                points: average_stay 
                }, 
            ] 
        });
    }

    async function getData() {
        resultStatus_2 = result_2 = "";
        const res = await fetch(API + "/apartment-occupancy-surveys/Granada", {
            method: "GET",
        });
        try {
            const data = await res.json();
            result_2 = JSON.stringify(data, null, 2);
            dato = data;
            for(let i=0; i<dato.length; i++){
                traveler.push(dato[i]["traveler"]);
                overnight_stay.push(dato[i]["overnight_stay"]);
                average_stay.push(dato[i]["average_stay"]);
            }
            loadJSCharting(traveler,overnight_stay,average_stay);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus_2 = status;
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
    <h1 style="text-align:center;font-style: oblique; font-family: initial;">Gráfica datos totales</h1>
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description" />
    </figure>

    {#if resultStatus_1 != ""}
        <div style="margin-left: 20px; font-size:21px">
            <p>Result:</p>
            <pre>
                {resultStatus_1}
                {result_1}
            </pre>
        </div>
    {/if}
    <h2 style="text-align: center; font-style: oblique; font-family: initial;">Gráfica Granada</h2>
    <u><p style="text-align: center;">
        Gráfica con JSCharting
    </p></u>
    <div id="chartDiv" style="max-width:740px; height:400px; margin: 0px auto; margin-top:40px">
    </div>
    {#if resultStatus_2 != ""}
        <div style="margin-left: 20px; font-size:21px">
            <p>Result:</p>
            <pre>
                {resultStatus_2}
                {result_2}
            </pre>
        </div>
    {/if}
</main>
