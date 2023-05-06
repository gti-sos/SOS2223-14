<svelte:head>
    <!-- Google Charts -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<script>

    // @ts-nocheck
    import {onMount} from 'svelte';

    let API_19 = "https://sos2223-19.appspot.com/api/v2/occupation-stats";
    let API_R = "https://sos2223-14.appspot.com/api/v2/andalusia-tourism-situation-surveys";

    let result = "";
    let resultStatus = "";

    let datos = [];

    let datos_19_R = [];

    
    async function getData19(datos_19_R) {
        resultStatus = result = ""; 
        const res = await fetch(API_19, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                datos_19_R.push([datos[i]["month"],datos[i]["average_stay"]]);
            }
            console.log(datos_19_R)
            loadGC_19_R(datos_19_R);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function getDataR() {
        resultStatus = result = ""; 
        const res = await fetch(API_R, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            datos_19_R.push(['Año o Mes','Estancia Media']);
            for (let i = 0; i < datos.length; i++) {
                if (datos[i]["province"] == "Almería") {
                    datos_19_R.push([(datos[i]["year"]).toString(),datos[i]["average_stay"]]);
                }
            }
            getData19(datos_19_R);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function loadGC_19_R(datos_19_R) {
        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {

            var data = google.visualization.arrayToDataTable(datos_19_R);

            var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

            chart.draw(data, {
                width: 800, 
                height: 600, 
                title: 'Estancia Media en la provincia de Almería', 
                hAxis: {
                    title: 'Total'
                },
                vAxis: {
                    title: 'Año o Mes'
                }
            });

        }
    }

    onMount(async () => {
        getDataR();
    })

</script>

<main>

    <h1 align="center">Integración sin Proxy</h1>

    <div id="chart_div" align="center"></div>
    
</main>