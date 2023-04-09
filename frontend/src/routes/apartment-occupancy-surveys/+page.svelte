<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    import { Table, Button, Alert } from "sveltestrap";
    import {} from "./apartment-occupancy-surveys.css";
    
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
        getAllData();
    });

    let API = "/api/v2/apartment-occupancy-surveys";

    if (dev) {
        API = "http://localhost:12345" + API;
    }

    let datos = [];
    let dato = "";
    let newFileProvince = "";
    let newFileYear = "";
    let newFileTraveler = "";
    let newFileOvernightStay = "";
    let newFileAverageStay = "";

    let result = "";
    let resultStatus = "";
    let message="";
    let c="";

    async function getAllData() {
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
                traveler: parseInt(newFileTraveler),
                overnight_stay: parseFloat(newFileOvernightStay),
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
            getAllData();
        }else if(status==409){
            message="Error 409, Conflicto, el elemento ya existe"
            c="warning";
        }
        else if(status==400){
            message="Error 400, Bad Request, rellena todos los campos"
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
            window.alert("Todo borrado");
        }
    }

    async function view(province,year) {
        window.location.href = "http://localhost:12345/apartment-occupancy-surveys/"+province + "/" + year;
    }

</script>

<main>
    <h1><u>Apartment-Occupancy-Surveys</u></h1>
    <p>Data returned: {datos.length}</p>
    <Table>
        <thead>
            <tr>
                <th>Province</th>
                <th>Year</th>
                <th>Traveler</th>
                <th>Overnight_stay</th>
                <th>Average_stay</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#each datos as dato}
                <tr>
                    <td>{dato.province}</td>
                    <td>{dato.year}</td>
                    <td>{dato.traveler}</td>
                    <td>{dato.overnight_stay}</td>
                    <td>{dato.average_stay}</td>
                    <td>
                        <Button color="info" on:click={view(dato.province, dato.year)}>Borrar/actualizar dato</Button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </Table>

    <h3>Create data</h3>
    <div class="createData">
        <input id="create" placeholder="Province" bind:value={newFileProvince} />
        <input id="create" placeholder="Year" bind:value={newFileYear} />
        <input id="create" placeholder="Traveler" bind:value={newFileTraveler} />
        <input id="create" placeholder="Overnight stay" bind:value={newFileOvernightStay} />
        <input id="create" placeholder="Average stay" bind:value={newFileAverageStay} />
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
