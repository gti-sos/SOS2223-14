<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    import { Table, Button, Alert } from "sveltestrap";
    import {} from "./hotel-occupancy-surveys.css";

    const colors = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
    ];

    onMount(async () => {
        getAllData();
    });

    let API = "/api/v2/hotel-occupancy-surveys";

    if (dev) {
        API = "http://localhost:12345" + API;
    }

    let datos = [];
    let dato = "";
    let newFileProvince = "";
    let newFileYear = "";
    let newFileAverageEmployment = "";
    let newFileEstimatedAverageOpenEstablishment = "";
    let newFileEstimatedAveragePlace = "";
    let newFileEstimatedRoom = "";
    let newFileOccupancyRateByPlace = "";
    let newFileOccupancyRateByWeekendPlace = "";
    let newFileRoomOccupancyRate = "";

    let result = "";
    let resultStatus = "";
    let message = "";
    let c = "";

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
                average_employment: parseInt(newFileAverageEmployment),
                estimated_average_open_establishment: parseFloat(newFileEstimatedAverageOpenEstablishment),
                estimated_average_place: parseFloat(newFileEstimatedAveragePlace),
                estimated_room: parseFloat(newFileEstimatedRoom),
                occupancy_rate_by_place: parseFloat(newFileOccupancyRateByPlace),
                occupancy_rate_by_weekend_place: parseFloat(newFileOccupancyRateByWeekendPlace),
                room_occupancy_rate: parseFloat(newFileRoomOccupancyRate),

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
        if (status == 201) {
            message = "Elemento creado";
            c = "success";
            getAllData();
        } else if (status == 409) {
            message = "Conflicto, el elemento ya existe";
            c = "warning";
        } else if (status == 400) {
            message = "Rellena todos los campos";
            c = "warning";
        } else if (status == 500) {
            message = "Error interno";
            c = "danger";
        }
    }

    async function deleteAll() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "DELETE",
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            location.reload();
            window.alert("Todo borrado");
        }
    }

    async function view(province, year) {
        window.location.href = "https://sos2223-14.appspot.com/hotel-occupancy-surveys/"+province+"/"+year;
    }
</script>

<main>
    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
    <h1><u>Encuesta de ocupación hotelera</u></h1>
    <p>Datos devueltos: {datos.length}</p>
    <Table>
        <thead>
            <tr>
                <th>Provincia</th>
                <th>Año</th>
                <th>Media de empleo</th>
                <th>Establecimiento abierto medio estimado</th>
                <th>Lugar promedio estimado</th>
                <th>Habitaciones estimadas</th>
                <th>Tasa de ocupación por lugar</th>
                <th>Tasa de ocupación por lugar de fin de semana</th>
                <th>Tasa de ocupación de la habitación</th>

            </tr>
        </thead>
        <tbody>
            {#each datos as dato}
                <tr>
                    <td>{dato.province}</td>
                    <td>{dato.year}</td>
                    <td>{dato.average_employment}</td>
                    <td>{dato.estimated_average_open_establishment}</td>
                    <td>{dato.estimated_average_place}</td>
                    <td>{dato.estimated_room}</td>
                    <td>{dato.occupancy_rate_by_place}</td>
                    <td>{dato.occupancy_rate_by_weekend_place}</td>
                    <td>{dato.room_occupancy_rate}</td>

                    <td>
                        <Button color="info" on:click={view(dato.province, dato.year)}>Borrar/actualizar dato</Button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </Table>

    <h3>Crear elemento</h3>
    <div class="createData">
        <input id="create" placeholder="Provincia" bind:value={newFileProvince}/>
        <input id="create" placeholder="Año" bind:value={newFileYear} />
        <input id="create" placeholder="Media de empleo" bind:value={newFileAverageEmployment}/>
        <input id="create" placeholder="Establecimiento abierto medio estimado" bind:value={newFileEstimatedAverageOpenEstablishment}/>
        <input id="create" placeholder="Lugar promedio estimado" bind:value={newFileEstimatedAveragePlace}/>
        <input id="create" placeholder="Habitaciones estimadas" bind:value={newFileEstimatedRoom}/>
        <input id="create" placeholder="Tasa de ocupación por lugar" bind:value={newFileOccupancyRateByPlace}/>
        <input id="create" placeholder="Tasa de ocupación por lugar de fin de semana" bind:value={newFileOccupancyRateByWeekendPlace}/>
        <input id="create" placeholder="Tasa de ocupación de la habitación" bind:value={newFileRoomOccupancyRate}/>

    </div>
    <div id="delete-all">
        <Button color="warning" on:click={createFile}>Crear dato</Button>
    </div>
    <div id="delete-all">
        <p>¿Quieres borrarlo todo?</p>
        <Button color="danger" on:click={deleteAll}>Borrar todo</Button>
    </div>
</main>

