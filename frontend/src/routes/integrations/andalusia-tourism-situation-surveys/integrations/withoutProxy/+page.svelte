<svelte:head>
    <!-- Google Charts -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<script>

    // @ts-nocheck
    import {onMount} from 'svelte';

    let API_JL = "https://sos2223-19.appspot.com/api/v2/occupation-stats";

    let result = "";
    let resultStatus = "";

    let datos = [];

    let datosJL = [];

    async function getDataJL() {
        resultStatus = result = ""; 
        const res = await fetch(API_JL, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            //datosJL.push(['Mes','Estancia Media']);
            for (let i = 0; i < datos.length; i++) {
                datosJL.push([datos[i][1],datos[i][4]]);
            }
            console.log(datosJL);
            loadGC_JL(datosJL);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function loadGC_JL(datos) {
        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {

            var data = google.visualization.arrayToDataTable(datos);

            var options = {
                title: 'Population of Largest U.S. Cities',
                chartArea: {width: '50%'},
                hAxis: {
                title: 'Total Population',
                minValue: 0
                },
                vAxis: {
                title: 'City'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

            chart.draw(data, options);
        }
    }

    onMount(async () => {
        getDataJL();
    })

</script>

<main>

    <div id="chart_div"></div>

</main>