<svelte:head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<script>

     //@ts-nocheck
    import { onMount } from "svelte";

    let API_17 = "https://sos2223-14.appspot.com/bicycle";
    let API_R ="https://sos2223-14.appspot.com/api/v2/andalusia-tourism-situation-surveys";

    
    let result = "";
    let resultStatus = "";

    let datos = [];

    let id = "";
    let datos_17_R = [];

    async function getData17() {
        resultStatus = result = ""; 
        const res = await fetch(API_17, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            datos_17_R.push(['Provincia y año','Población o Turistas']);
            for (let i = 0; i < datos.length; i++) {
                id = `${datos[i]["province"]}\n${datos[i]["year"]}`;
                datos_17_R.push([id,datos[i]["population"]]);
            }
            getDataR(datos_17_R);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function getDataR(datos_17_R) {
        resultStatus = result = ""; 
        const res = await fetch(API_R, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                if (datos[i]["province"] != "Andalucía") {
                    id = `${datos[i]["province"]}\n${datos[i]["year"]}`;
                    datos_17_R.push([id,datos[i]["tourist"]]);
                }
            }
            loadGC_17_R(datos_17_R);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function loadGC_17_R(datos_17_R) {
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(datos_17_R);

            var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

            chart.draw(data, {
                width: 2400,
                height: 600,
                chart: {
                    title: 'Turistas en Andalucía y ciclistas',
                    subtitle: 'Provincia, Año y Turistas o Población: 2015-2022'
                }
            });

            
        }
    }

    onMount(async () => {
        getData17();
    })

</script>

<main>

    <h1 align="center">Integración con Proxy</h1>
    <br>
    <br>
    <div id="columnchart_material" style="width: 800px; height: 500px; margin-left: 50px; margin-bottom:150px;"></div>

</main>