<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
    import { dev } from '$app/environment';
    import { Table, Button, Alert } from 'sveltestrap';
    import { page } from '$app/stores';
    import {} from './style.css';

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
        getData();
    });

    let province = $page.params.province;
    let year = $page.params.year;

    let API = "/api/v2/hotel-occupancy-surveys/" + province + "/" + year;

    if (dev) {
        API = "https://sos2223-14.appspot.com" + API;
    }

    let dato = [];
    let result = "";
    let resultStatus = "";
    let message = "";
    let c = "";

    async function getData() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            dato = data;
            updatedProvince = dato.province;
            updatedYear = dato.year;
            updatedAverageEmployment = dato.average_employment;
            updatedEstimatedAverageOpenEstablishment = dato.estimated_average_open_establishment;
            updatedEstimatedAveragePlace = dato.estimated_average_place;
            updatedEstimatedRoom = dato.estimated_room;
            updatedOccupancyRateByPlace = dato.occupancy_rate_by_place;
            updatedOccupancyRateByWeekendPlace = dato.occupancy_rate_by_weekend_place;
            updatedRoomOccupancyRate = dato.room_occupancy_rate;

        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if (status == 404) {
            message = `El elemento: ${province} ${year}; no ha sido encontrado`;
            c = "danger";
            document.getElementById("main").textContent = "";
        }
        if (status == 500) {
            message = "Error interno";
            c = "danger";
        }

    }

    let updatedProvince = province;
    let updatedYear = year;
    let updatedAverageEmployment = "";
    let updatedEstimatedAverageOpenEstablishment = "";
    let updatedEstimatedAveragePlace = "";
    let updatedEstimatedRoom = "";
    let updatedOccupancyRateByPlace = "";
    let updatedOccupancyRateByWeekendPlace = "";
    let updatedRoomOccupancyRate = "";

    async function updateFile() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                province: updatedProvince,
                year: updatedYear,
                average_employment: updatedAverageEmployment,
                estimated_average_open_establishment: updatedEstimatedAverageOpenEstablishment,
                estimated_average_place: updatedEstimatedAveragePlace,
                estimated_room: updatedEstimatedRoom,
                occupancy_rate_by_place: updatedOccupancyRateByPlace,
                occupancy_rate_by_weekend_place: updatedOccupancyRateByWeekendPlace,
                room_occupancy_rate: updatedRoomOccupancyRate,

            }),
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            message = "Elemento actualizado";
            c = "success";
            getData();
        } else if (status == 400) {
            message = "Rellene todos los campos y de manera correcta";
            c = "warning";
        } else if (status == 500) {
            message = "Error interno";
            c = "danger";
        }
    }

</script>
<main>
    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
    <div class="elementos">
    <h1><u>Detalles del elemento</u></h1>
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
                <tr>
                    <td>{province}</td>
                    <td>{year}</td>
                    <td><input bind:value={updatedAverageEmployment}></td>
                    <td><input bind:value={updatedEstimatedAverageOpenEstablishment}></td>
                    <td><input bind:value={updatedEstimatedAveragePlace}></td>
                    <td><input bind:value={updatedEstimatedRoom}></td>
                    <td><input bind:value={updatedOccupancyRateByPlace}></td>
                    <td><input bind:value={updatedOccupancyRateByWeekendPlace}></td>
                    <td><input bind:value={updatedRoomOccupancyRate}></td>

                    <td>
                        <Button color="info" on:click={updateFile}>Guardar</Button>
                    </td>
                </tr>
        </tbody>
    </Table>
    </div>

</main>