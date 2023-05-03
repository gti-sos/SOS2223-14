<script>
    //@ts-nocheck
    import { onMount } from "svelte";

    let API_compañerx_1 = "https://sos2223-14.appspot.com/agr";
   
    let API_cristina ="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys";
    let datos = "";
    let p = "";
    let provincias = [];
    let minimas = [];
    let maximas = [];
    let traveler = [];
    let overnight_stay = [];
    let average_stay = [];
    let average_temperature = [];

    onMount(async () => {
        getData_cristina();
    });

    async function getData_compañerx() {
        const res = await fetch(API_compañerx_1, {
            method: "GET",
        });
        try {
            const data = await res.json();
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                if (!provincias.includes(p)) {
                    provincias.push(p);
                }
                average_temperature.push(parseFloat(datos[i]["medium_temperature"]))
                minimas.push(parseFloat(datos[i]["minimun_temperature"]));
                maximas.push(parseFloat(datos[i]["maximun_temperature"]));
            }
            loadJSCharting(
                provincias,
                traveler,
                overnight_stay,
                average_stay,
                maximas,
                minimas
            );
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function getData_cristina() {
        const res = await fetch(API_cristina, {
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
                average_stay.push(parseFloat(datos[i]["average_stay"]));
            }
            getData_compañerx();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
    }

    async function loadJSCharting(provincias,traveler,overnight_stay,average_stay,maximas,minimas,average_temperature) {
        var chart = JSC.chart('chartDiv', { 
            debug: true, 
            defaultSeries_type: 'column', 
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
                    name: 'Temperatura maxima', 
                    points: maximas
                },
                { 
                    name: 'Temperatura minima', 
                    points: minimas
                }, 
                { 
                    name: 'Temperatura media', 
                    points: average_temperature
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
        <h2 style="text-align:center; font-style: oblique;">Gráfica ocupación de apartamentos y agroclimática</h2>
        <p style="text-align:center">Source: <a style="text-decoration: none; color:black" href="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys" target="_blank"><u>API Ocupación de apartamentos en Andalucía</u></a> y  <a style="text-decoration: none; color:black" href="https://sos2223-12.appspot.com/api/v2/agroclimatic" target="_blank"><u>API Agroclimaticas</u></a></p>
        <p style="text-align:center">Gráfica con: <a style="text-decoration: none; color:black" href="https://jscharting.com/" target="_blank"><u>JSCharting</u></a></p>
        <p style="text-align:center">type: column</p>
    </div>
    <div id="chartDiv" style="width:1500px; height:600px; margin: 0px auto; margin-top:40px">
    </div>
</main>
