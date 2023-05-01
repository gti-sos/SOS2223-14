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
            loadJSCharting(provincias, traveler, overnight_stay, average_stay,nO2,O3,sO2);
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

    async function loadJSCharting(provincias,traveler,overnight_stay,average_stay,nO2,O3,sO2) {
        var chart = JSC.chart('chartDiv', { 
            debug: true, 
            defaultSeries_type: 'horizontalColumn', 
            title_label_text: '', 
            yAxis: { label_text: ''}, 
            xAxis: {
                label_text: '', 
                categories: provincias
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
                { 
                    name: 'nO2', 
                    points: nO2
                },
                { 
                    name: 'O3', 
                    points: O3
                },
                { 
                    name: 'sO2', 
                    points: sO2
                }, 
            ] 
        });
    }
</script>

<svelte:head>
    <script src="https://code.jscharting.com/latest/jscharting.js"></script>
</svelte:head>
<main>
    <div style="margin-left: 30px;">
        <h2 style="text-align:center; font-style: oblique;">Gráfica ocupación de apartamentos y contaminación</h2>
        <p style="text-align:center">Source: <a style="text-decoration: none; color:black" href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank"><u>API Ocupación de apartamentos en Andalucía</u></a> y  <a style="text-decoration: none; color:black" href="https://sos2223-12.appspot.com/api/v2/pollutions" target="_blank"><u>API Contaminación</u></a></p>
        <p style="text-align:center">Gráfica con: <a style="text-decoration: none; color:black" href="https://jscharting.com/" target="_blank"><u>JSCharting</u></a>, type: horizontalColumn</p>
    </div>
    <div id="chartDiv" style="width:1500px; height:600px; margin: 0px auto; margin-top:40px">
    </div>
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