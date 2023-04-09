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
        API = "http://localhost:12345" + API;
    }

    let datos = [];
    let dato = "";
    let newFileProvince = "";
    let newFileYear = "";
    let newFileTourist = "";
    let newFileAverageDailyExpenditure = "";
    let newFileAverageStay = "";

    let result = "";
    let resultStatus = "";
    let message="";
    let c="";

    async function getFiles() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos = data;
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
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
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if (status==201) {
            getFiles();
        }else if(status==409){
            message="Error 409, Conflict, data already exists"
            c="danger";
        }
        else if(status==400){
            message="Error 400, Bad Request, complete all the fields"
            c="warning";
        }else if(status == 500){
            message="Error 500, Internal Error"
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
            window.alert("Everything is deleted");
        }
    }

    async function view(province,year) {
        window.location.href = "http://localhost:12345/andalusia-tourism-situation-surveys/"+province + "/" + year;
    }

</script>

<main>
    <h1><u>Andalusia tourism situation surveys</u></h1>
    <p>Data returned: {datos.length}</p>
    <Table>
        <thead>
            <tr>
                <th>Province</th>
                <th>Year</th>
                <th>Tourist</th>
                <th>Average_daily_expenditure</th>
                <th>Average_stay</th>
                <th>Action</th>
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
        </tbody>
    </Table>

    <h3>Create data</h3>
    <div>
        <input placeholder="Province" bind:value={newFileProvince} />
        <input placeholder="Year" bind:value={newFileYear} />
        <input placeholder="Tourist" bind:value={newFileTourist} />
        <input placeholder="Average daily expenditure" bind:value={newFileAverageDailyExpenditure} />
        <input placeholder="Average stay" bind:value={newFileAverageStay} />
        <Button color="warning" on:click={createFile}>Crear dato</Button>
    </div>
    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
    <div id="delete-all">
        <p>Do you want to delete all data?</p>
        <Button color="danger" on:click={deleteAll}>Borrar todo</Button>
    </div>
</main>
