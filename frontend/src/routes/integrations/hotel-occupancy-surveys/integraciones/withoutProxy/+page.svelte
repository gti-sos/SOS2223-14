<svelte:head>
    <!-- HighCharts -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
</svelte:head>

<script>

    // @ts-nocheck
    import {onMount} from 'svelte';

    let APIG19 = "https://sos2223-19.appspot.com/api/v2/occupancy-of-accomodation-in-rural-tourism";
    let APIANA = "https://sos2223-14.appspot.com/api/v2/hotel-occupancy-surveys";

    let result = "";
    let resultStatus = "";

    let datos = [];
    let datosAnaG19 = [];


    
    async function getData19(datosAnaG19) {
        resultStatus = result = ""; 
        const res = await fetch(APIG19, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                datosAnaG19.push([datos[i]["month"],datos[i]["overnight_stay"]]);
            }
            console.log(datosAnaG19)
            loadAnaG19(datosAnaG19);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function getDataAna() {
        resultStatus = result = ""; 
        const res = await fetch(APIANA, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                if (datos[i]["province"] == "Almería") {
                    datosAnaG19.push([(datos[i]["year"]).toString(),datos[i]["estimated_room"]]);
                }
            }
            getData19(datosAnaG19);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function loadAnaG19(datosAnaG19) {
    const categories = [];
    const estimatedRoomData = [];

    for (const dataPoint of datosAnaG19) {
        const category = dataPoint[0];
        const estimatedRoom = dataPoint[1];

        categories.push(category);
        estimatedRoomData.push(estimatedRoom);
    }

    Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Habitaciones estimadas en Andalucía'
        },
        subtitle: {
            text: 'Source: ' +
                '<a href="https://www.highcharts.com/" ' +
                'target="_blank">HighCharts</a>'
        },
        xAxis: {
            categories: categories,
            accessibility: {
                description: 'Provincias'
            }
        },
        yAxis: {
            title: {
                text: 'Total'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Habitaciones estimadas',
            marker: {
                symbol: 'square'
            },
            data: estimatedRoomData
        }]
    });
}
    onMount(async () => {
        getDataAna();
    })

</script>

<main>

    <h1 align="center">Integración sin Proxy con G19</h1>
    <br>
    <br>
    <div id="container" align="center"></div>
    
</main>