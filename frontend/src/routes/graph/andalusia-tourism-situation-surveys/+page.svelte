<svelte:head>
    <!-- HighCharts -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>

    <!-- Google Charts -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

</svelte:head>

<script>
    
    // @ts-nocheck
    import {onMount} from 'svelte';
    import { dev } from "$app/environment";
    import { Button } from "sveltestrap";

    let API = "/api/v2/andalusia-tourism-situation-surveys/data";
    if (dev) {
        //API = "http://localhost:12345" + API;
        API = "https://sos2223-14.appspot.com" + API;
    }

    let result = "";
    let resultStatus = "";
    let datos = [];

    let id = [];
    let py = "";
    let tourist = [];
    let average_daily_expenditure = [];
    let average_stay = [];
    let t = 0;
    let prov_avstay = [];
    let pas = [];

    
    async function getData() {
        resultStatus = result = ""; 
        const res = await fetch(API, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            prov_avstay.push(["Provincia","Estancia Media"]);
            for (let i = 0; i < datos.length; i++) {
                py = `${datos[i][0]} ${datos[i][1]}`;
                id.push(py);
                if (datos[i][0] == "Andalucía") {
                    t = ((datos[i][2])/50805802)*100;
                    t = parseFloat(t.toFixed(2));
                    tourist.push(t);
                } else {
                    if (datos[i][1] == 2021) {
                        t = ((datos[i][2])/20035828)*100;
                        t = parseFloat(t.toFixed(2));
                        tourist.push(t);
                    } else {
                        t = ((datos[i][2])/30769974)*100;
                        t = parseFloat(t.toFixed(2));
                        tourist.push(t);
                        pas = [];
                        pas.push(datos[i][0],datos[i][4]);
                        prov_avstay.push(pas);
                    }
                }
                average_daily_expenditure.push(datos[i][3]);
                average_stay.push(datos[i][4]);
            }
            loadHChart(id,tourist,average_daily_expenditure,average_stay);
            loadGCAverageStay(prov_avstay);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="El ID indicado no se encuentra registrado en la base de datos."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    }

    async function loadHChart(id,turistas,gasto_medio_diario,estancia_media) {
        Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Gráfica de encuesta de coyuntura turística en Andalucía',
                align: 'center'
            },
            xAxis: {
                categories: id,
                title: {
                    text: null
                },
                gridLineWidth: 1,
                lineWidth: 1
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Media o Porcentaje',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                },
                gridLineWidth: 1
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    borderRadius: '50%',
                    dataLabels: {
                        enabled: true
                    },
                    groupPadding: 0.1
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [
                {
                name: 'Turistas (porcentaje)',
                data: turistas
                },
                {
                name: 'Gasto medio diario',
                data: gasto_medio_diario
                },
                {
                name: 'Estancia media',
                data: estancia_media
                }
            ]
        });
    }

    async function loadGCAverageStay(prov_estmed) {
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = google.visualization.arrayToDataTable(
                prov_estmed
            );

            var options = {
                title: 'Estancia media de las distintas provincias andaluzas en el año 2022',
                is3D: true,
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }
    }
    

    onMount(async () => {
        getData();
    })

    async function view() {
        window.location.href = "https://sos2223-14.appspot.com/andalusia-tourism-situation-surveys";
        //window.location.href = "http://localhost:12345/api/v2/andalusia-tourism-situation-surveys";
    }

</script>

<main>
    <h1>Gráficas</h1>
    
    <figure class="highcharts-figure">
        <div id="container"></div>
    </figure>

    <div id="piechart" style="width: 900px; height: 500px;"></div>
    
    <br>
    
    <Button color="success" on:click={view}>Atrás</Button>

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