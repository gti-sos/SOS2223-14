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
        const res = await fetch(API+`?offset=0&&limit=${limit}`, {
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

    let message_ini = "";

    async function getInitialData() {

        resultStatus = result = "";
        const res = await fetch(API+`/loadInitialData`, {
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
        if(status==200){
            message_ini="Los datos han sido insertados correctamente."
            c="success";
        }
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

    let getFileProvince = "";
    let message_p = "";

    async function getProvince() {
        resultStatus = result = ""; 
        const res = await fetch(API+`?province=${getFileProvince}`, {
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
        if (status==404) {
            message_p="La provincia indicada no se encuentra registrada en la base de datos."
            c="warning";
        }
    }

    let getFileYear = null;
    let message_y = "";

    async function getYear() {
        resultStatus = result = ""; 
        const res = await fetch(API+`?year=${getFileYear}`, {
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
        if (status==404) {
            message_y="El año indicado no se encuentra registrado en la base de datos."
            c="warning";
        }
    }

    let getFileProvinceID = "";
    let getFileYearID = null;
    let message_id = "";

    async function getID() {
        resultStatus = result = ""; 
        const res = await fetch(API+`/${getFileProvinceID}/${getFileYearID}`, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            dato = data;
            datos.push(dato);
        } catch (error) {
            console.log(`Error al parsear el resultado: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if (status==404) {
            message_id="El ID indicado no se encuentra registrado en la base de datos."
            c="warning";
        }
    }

    let getFileProvinceRange = "";
    let getFrom = null;
    let getTo = null;
    let message_r = "";

    async function getFromTo() {
        resultStatus = result = "";
        if (getFileProvinceRange != "") {
            const res = await fetch(API+`?province=${getFileProvinceRange}&&from=${getFrom}&&to=${getTo}`, {
                method: "GET",
            });
            try {
                const data = await res.json();
                result = JSON.stringify(data, null, 2);
                datos = data;
            } catch (error) {
                console.log(`Error al parsear el resultado: ${error}`);
            }
        } else {
            const res = await fetch(API+`?from=${getFrom}&&to=${getTo}`, {
                method: "GET",
            });
            try {
                const data = await res.json();
                result = JSON.stringify(data, null, 2);
                datos = data;
            } catch (error) {
                console.log(`Error al parsear el resultado: ${error}`);
            }
        }
        const status = await res.status;
        resultStatus = status;
        if (status==404) {
            message_r="No hay datos disponibles del rango indicado."
            c="warning";
        }
    }

    let getAboveTourist = null;
    let getBelowTourist = null;
    let message_t = "";

    async function getTourist() {
        resultStatus = result = "";
        const res = await fetch(API+`?above_tourist=${getAboveTourist}&&below_tourist=${getBelowTourist}`, {
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
        if (status==404) {
            message_t="No hay datos con ese rango de turistas."
            c="warning";
        }
    }

    let getAboveAverageDailyExpenditure = null;
    let getBelowAverageDailyExpenditure = null;
    let message_ade = "";

    async function getAverageDailyExpenditure() {
        resultStatus = result = "";
        const res = await fetch(API+`?above_average_daily_expenditure=${getAboveAverageDailyExpenditure}&&below_average_daily_expenditure=${getBelowAverageDailyExpenditure}`, {
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
        if (status==404) {
            message_ade="No hay datos con ese rango de gasto medio diario."
            c="warning";
        }
    }

    let getAboveAverageStay = null;
    let getBelowAverageStay = null;
    let message_as = "";

    async function getAverageStay() {
        resultStatus = result = "";
        const res = await fetch(API+`?above_average_stay=${getAboveAverageStay}&&below_average_stay=${getBelowAverageStay}`, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            datos=data;
        } catch (error) {
            console.log(`Error al parsear el resultado: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if (status==404) {
            message_ade="No hay datos con ese rango de estancia media."
            c="warning";
        }
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
    <br>
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
            {#if datos.length == 0}
                <Button color="success" on:click={getInitialData}>Cargar datos iniciales</Button>
                {#if message_ini != ""}
                    <br>
                    <Alert color={c}>{message_ini}</Alert>
                    <br>
                    <Button color="success" on:click={getFiles}>Mostrar datos</Button>
                {/if}
            {:else if datos.length > 0}
                <Button color="warning" on:click={getFiles}>1</Button>
                <Button color="warning" on:click={getNextPage}>2</Button>
            {/if}
        </tbody>
    </Table>

    <h3>Busqueda avanzada</h3>
    <br>
    <div>
        <input placeholder="Provincia que quiere buscar" bind:value={getFileProvince} />
        <Button color="warning" on:click={getProvince}>Buscar por provincia</Button>
    </div>
    {#if message_p != ""}
        <Alert color={c}>{message_p}</Alert>
    {/if}
    
    <br>
    <div>
        <input placeholder="Año que quiere buscar" bind:value={getFileYear} />
        <Button color="warning" on:click={getYear}>Buscar por año</Button>
    </div>
    {#if message_y != ""}
        <Alert color={c}>{message_y}</Alert>
    {/if}
    <br>
    <div>
        <input placeholder="Provincia ID" bind:value={getFileProvinceID} />
        <input placeholder="Año ID" bind:value={getFileYearID} />
        <Button color="warning" on:click={getID}>Buscar por ID</Button>
    </div>
    {#if message_id != ""}
        <Alert color={c}>{message_id}</Alert>
    {/if}
    <br>
    <div>
        <input placeholder="Provincia del rango" bind:value={getFileProvinceRange} />
        <input placeholder="Año de inicio" bind:value={getFrom} />
        <input placeholder="Año de fin" bind:value={getTo} />
        <Button color="warning" on:click={getFromTo}>Buscar por rango de año</Button>
    </div>
    {#if message_r != ""}
        <Alert color={c}>{message_r}</Alert>
    {/if}
    <br>
    <div>
        <input placeholder="Min. turistas" bind:value={getAboveTourist} />
        <input placeholder="Max. turistas" bind:value={getBelowTourist} />
        <Button color="warning" on:click={getTourist}>Buscar por turistas</Button>
    </div>
    {#if message_t != ""}
        <Alert color={c}>{message_t}</Alert>
    {/if}
    <br>
    <div>
        <input placeholder="Min. gasto medio diario" bind:value={getAboveAverageDailyExpenditure} />
        <input placeholder="Max. gasto medio diario" bind:value={getBelowAverageDailyExpenditure} />
        <Button color="warning" on:click={getAverageDailyExpenditure}>Buscar por gasto medio diario</Button>
    </div>
    {#if message_ade != ""}
        <Alert color={c}>{message_ade}</Alert>
    {/if}
    <br>
    <div>
        <input placeholder="Min. estancia media" bind:value={getAboveAverageStay} />
        <input placeholder="Max. estancia media" bind:value={getBelowAverageStay} />
        <Button color="warning" on:click={getAverageStay}>Buscar por estancia media</Button>
    </div>
    {#if message_as != ""}
        <Alert color={c}>{message_as}</Alert>
    {/if}

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

    {#if datos.length > 0}
        <div id="delete-all">
            <p>¿Quieres borrar todos los datos?</p>
            <Button color="danger" on:click={deleteAll}>Borrar todo</Button>
        </div>
    {/if}
    
</main>