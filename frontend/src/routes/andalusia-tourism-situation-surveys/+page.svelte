<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    import { Table, Button, Alert } from "sveltestrap";
    import {} from "./andalusia-tourism-situation-surveys.css";
    
    const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];

    onMount(async () => {
        getFiles();
    });

    let API = "/api/v2/andalusia-tourism-situation-surveys";

    if (dev) {
        API = "https://sos2223-14.appspot.com" + API;
    }

    let datos = [];
    let dato = "";
    let newFileProvince = "";
    let newFileYear = "";
    let newFileTourist = "";
    let newFileAverageDailyExpenditure = "";
    let newFileAverageStay = "";
    let offset = 0;
    let limit = 10;

    let result = "";
    let resultStatus = "";
    let message="";
    let c="";

    async function getFiles() {
        resultStatus = result = "";
        const res = await fetch(API+`?offset=${offset}&&limit=${limit}`, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
        } catch (error) {
            console.log(`Error al parsear el resultado: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function getNextPage() {
        resultStatus = result = "";
        const res = await fetch(API+`?offset=10&&limit=${limit}`, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
        } catch (error) {
            console.log(`Error al parsear el resultado: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    async function createFile() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                province: newFileProvince,
                year: parseInt(newFileYear),
                tourist: parseInt(newFileTourist),
                average_daily_expenditure: parseFloat(newFileAverageDailyExpenditure),
                average_stay: parseFloat(newFileAverageStay),
            }),
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            dato = data;
            
        } catch (error) {
            console.log(`Error al parsear el resultado: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if (status==201) {
            getFiles();
        }else if(status==409){
            message="Conflicto, el dato ya se encuentra en la base de datos."
            c="danger";
        }
        else if(status==400){
            message="Se necesitan completar todos los campos."
            c="warning";
        }else if(status == 500){
            message="Error interno del servidor"
            c="danger";
        }
    }

   

    async function deleteAll() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "DELETE",
        });
        const status = await res.status;
        resultStatus = status;
        if (status==200) {
            location.reload();
            window.alert("Todo a sido borrado.");
        }
    }

    async function view(province,year) {
        window.location.href = "https://sos2223-14.appspot.com/andalusia-tourism-situation-surveys/"+province + "/" + year;
    }

</script>

<main>
    <h1><u>Encuesta de coyuntura turística de Andalucía</u></h1>
    <p>Datos devueltos: {datos.length}</p>
    <Table>
        <thead>
            <tr>
                <th>Provincia</th>
                <th>Año</th>
                <th>Turistas</th>
                <th>Gasto medio diario</th>
                <th>Estancia media</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {#each datos as dato}
                <tr>
                    <td>{dato.province}</td>
                    <td>{dato.year}</td>
                    <td>{dato.tourist}</td>
                    <td>{dato.average_daily_expenditure}</td>
                    <td>{dato.average_stay}</td>
                    <td>
                        <Button color="info" on:click={view(dato.province, dato.year)}>Ir al dato</Button>
                    </td>
                </tr>
            {/each}
            <br>
            <Button color="warning" on:click={getFiles}>1</Button>
            <Button color="warning" offset=10 on:click={getNextPage}>2</Button>
        </tbody>
    </Table>

    <h3>Crear dato</h3>
    <div>
        <input placeholder="Provincia" bind:value={newFileProvince} />
        <input placeholder="Año" bind:value={newFileYear} />
        <input placeholder="Turista" bind:value={newFileTourist} />
        <input placeholder="Gasto medio diario" bind:value={newFileAverageDailyExpenditure} />
        <input placeholder="Estancia media" bind:value={newFileAverageStay} />
        <Button color="warning" on:click={createFile}>Crear dato</Button>
    </div>
    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
    <div id="delete-all">
        <p>¿Quieres borrar todos los datos?</p>
        <Button color="danger" on:click={deleteAll}>Borrar todo</Button>
    </div>
</main>
