<svelte:head>
    <!-- HighCharts -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
</svelte:head>

<script>

     //@ts-nocheck
    import { onMount } from "svelte";

    let APIG13 = "https://sos2223-14.appspot.com/employ";
    let APIANA ="https://sos2223-14.appspot.com/api/v2/hotel-occupancy-surveys";

    let id = "";
    let datosAnaG13 = [];
    let datos = [];
    let resultStatus = "";
    let result = "";


    async function getData13() {
        resultStatus = result = ""; 
        const res = await fetch(APIG13, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                id = `${datos[i]["region"]}\n${datos[i]["year"]}`;
                datosAnaG13.push([id,datos[i]["employed_person"]]);
            }
            getDataAna(datosAnaG13);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function getDataAna(datosAnaG13) {
        resultStatus = result = ""; 
        const res = await fetch(APIANA, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                id = `${datos[i]["province"]}\n${datos[i]["year"]}`;
                datosAnaG13.push([id,datos[i]["average_employment"]]);
            }
            loadAG13(datosAnaG13);
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function loadAG13(datosAnaG13) {
        const categories = [];
        const averageEmploymentData = [];
        const employedPersonData = [];

        for (const dataPoint of datosAnaG13) {
            const category = dataPoint[0].split("\n")[0];
            const averageEmployment = dataPoint[1];
            const employedPerson = dataPoint[2];

            categories.push(category);
            averageEmploymentData.push(averageEmployment);
            employedPersonData.push(employedPerson);
        }

        Highcharts.chart('container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Empleo en Andalucía'
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
                name: 'Media de empleo',
                marker: {
                    symbol: 'square'
                },
                data: averageEmploymentData
            }, {
                name: 'Establecimiento abierto medio estimado',
                marker: {
                    symbol: 'triangle'
                },
                data: employedPersonData
            }]
        });
    }

    onMount(async () => {
        getData13();
    })

</script>

<main>

    <h1 align="center">Uso de Proxy para la integración con G13</h1>
    <br>
    <br>
    <div id="container" style="width: 800px; height: 500px; margin-left: 50px; margin-bottom:150px;"></div>

</main>