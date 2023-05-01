<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { Table, Button, Alert } from "sveltestrap";

    const colors = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
    ];

    let API =
        "https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys";
    let p = "";
    let dato = "";
    let datos = "";
    let provincias = [];
    let traveler = [];
    let overnight_stay = [];
    let average_stay = [];
    let province = "";
    let result = "";
    let resultStatus = "";
    let message = "";
    let c = "";

    let traveler_js = [];
    let overnight_stay_js = [];
    let average_stay_js = [];

    onMount(async () => {
        getAllData();
    });

    async function loadHighCharts(
        provincias,
        traveler,
        overnight_stay,
        average_stay
    ) {
        Highcharts.chart("container", {
            chart: {
                type: "column",
            },
            title: {
                text: "",
            },
            subtitle: {
                text: 'Source: <a href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank">API Ocupación de apartamentos en Andalucía</a>',
            },
            xAxis: {
                categories: provincias,
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
                    data: traveler,
                },
                {
                    name: "Pernoctaciones",
                    data: overnight_stay,
                },
                {
                    name: "Estancia media",
                    data: average_stay,
                },
            ],
        });
    }

    async function getAllData() {
        const res = await fetch(API, {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                provincias.push(p);
                traveler.push(parseInt(datos[i]["traveler"]));
                overnight_stay.push(parseInt(datos[i]["overnight_stay"]));
                average_stay.push(parseInt(datos[i]["average_stay"]));
            }
            loadHighCharts(provincias, traveler, overnight_stay, average_stay);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadJSCharting(
        traveler_js,
        overnight_stay_js,
        average_stay_js
    ) {
        var chart = JSC.chart("chartDiv", {
            debug: true,
            defaultSeries_type: "column",
            title_label_text: "",
            yAxis: { label_text: "" },
            xAxis: {
                label_text: "",
                categories: [""],
            },
            series: [
                {
                    name: "Turistas",
                    points: traveler_js,
                },
                {
                    name: "Pernoctaciones",
                    points: overnight_stay_js,
                },
                {
                    name: "Estancia media",
                    points: average_stay_js,
                },
            ],
        });
    }

    async function getData(province) {
        resultStatus = result = "";
        const res = await fetch(API + "/" + province, {
            method: "GET",
        });
        try {
            const data = await res.json();
            dato = data;
            traveler_js = [];
            overnight_stay_js = [];
            average_stay_js = [];
            for (let i = 0; i < dato.length; i++) {
                traveler_js.push(dato[i]["traveler"]);
                overnight_stay_js.push(dato[i]["overnight_stay"]);
                average_stay_js.push(dato[i]["average_stay"]);
            }
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            message = "Provincia encontrada";
            c = "success";
            loadJSCharting(traveler_js, overnight_stay_js, average_stay_js);
        } else if (status == 404) {
            message = "Provincia no encontrada";
            c = "danger";
        } else if (status == 500) {
            message = "Error interno";
            c = "danger";
        }
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
    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
    <h1 style="text-align:center;font-style: oblique; font-family: initial;">
        Gráfica ocupación de apartamentos
    </h1>
    <p style="text-align:center">
        Gráfica con: <a
            style="text-decoration: none; color:black"
            href="https://www.highcharts.com/"
            target="_blank"><u>Highcharts</u></a
        >
    </p>
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description" />
    </figure>
    <h2 style="text-align: center; font-style: oblique; font-family: initial;">
        Gráfica {province}
    </h2>
    <p style="text-align:center">
        Gráfica con: <a
            style="text-decoration: none; color:black"
            href="https://jscharting.com/"
            target="_blank"><u>JSCharting</u></a
        >
    </p>
    <h3 style="text-align: center; font-style: oblique;">
        <u>Introduce una ciudad para mostrar su gráfica</u>
    </h3>
        <div>
            <input style="margin-left: 750px;height: 45px; text-align: center;" placeholder="Provincia" bind:value={province}/>
        </div>
        <div>
            <Button style="margin-left: 600px;height: 45px; margin-top: 20px;" color="warning" on:click={getData(province)}>Buscar</Button>
        </div>
                    
    <div
        id="chartDiv"
        style="max-width:740px; height:400px; margin: 0px auto; margin-top:40px"
    />
</main>
