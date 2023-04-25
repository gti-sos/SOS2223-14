<script>
    //@ts-nocheck
    import { Button } from "sveltestrap";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { dev } from "$app/environment";

    let result = "";
    let resultStatus = "";
    let province = $page.params.province;
    let year = $page.params.year;
    let API = "/api/v2/apartment-occupancy-surveys/"+province+"/"+year;
    let dato="";
    let traveler="";
    let overnight_stay="";
    let average_stay="";

    if (dev) {
        API = "http://localhost:12345" + API;
    }

    onMount(async () => {
        getData();
    });

    async function loadGraph(traveler,overnight_stay,average_stay) {
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
                points: [traveler] 
                }, 
                { 
                name: 'Pernoctaciones', 
                points: [overnight_stay] 
                }, 
                { 
                name: 'Estancia media', 
                points: [average_stay] 
                }, 
            ] 
        });
    }

    async function getData() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            dato = data;
            traveler = dato.traveler;
            overnight_stay = dato.overnight_stay;
            average_stay = dato.average_stay;
            loadGraph(traveler,overnight_stay,average_stay);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

</script>
<svelte:head>
    <script src="https://code.jscharting.com/latest/jscharting.js"></script>
</svelte:head>
<main>
    <h1 style="text-align: center; font-family:initial; font-style: oblique; text-decoration:underline">Gráfica de {province} {year}</h1>    
    <div id="chartDiv" style="max-width:740px; height:400px; margin: 0px auto; margin-top:40px">
    </div>
</main>