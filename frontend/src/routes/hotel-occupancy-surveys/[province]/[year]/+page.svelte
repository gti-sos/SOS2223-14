<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    import { Table, Button, Alert } from "sveltestrap";
    import { page } from "$app/stores";
    import {} from "./style.css";
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

    let URL_BASE = "";

    if (dev) {
        URL_BASE = "https://sos2223-14.appspot.com";
    }

    onMount(async () => {
        getData();
    });

    let province = $page.params.province;
    let year = $page.params.year;

    let API = "/api/v2/hotel-occupancy-surveys";

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
        const res = await fetch(API + "/" + province + "/" + year, {
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
            message = `El elemento: ${province} ${year}; No encontrado`;
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

    async function updateData() {
        resultStatus = result = "";
        const res = await fetch(API + "/" + province + "/" + year, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                province: updatedProvince,
                year: updatedYear,
                updatedAverageEmployment: updatedAverageEmployment,
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
            message = "El elemento se ha actualizado";
            c = "success";
            getData();
        } else if (status == 400) {
            message = "Rellena todos los campos y de manera correcta";
            c = "warning";
        } else if (status == 500) {
            message = "Error interno";
            c = "danger";
        }
    }
/*
    async function deleteFile(province, year) {
        resultStatus = result = "";
        const res = await fetch(API + "/" + province + "/" + year, {
            method: "DELETE",
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            const elementos = document.getElementsByClassName("elementos");
            for (let i = 0; i < elementos.length; i++) {
                elementos[i].textContent = "";
            }
            message = "El elemento está borrado";
            c = "success";
        }
    }
    */

    async function comeBack() {
        window.location.href = URL_BASE + "/hotel-occupancy-surveys";
    }
</script>

<main>

    <div class="elementos">
        <h1><u>Detalles del dato</u></h1>
        <Table>
            <thead>
                <tr>
                    <th>Provincia</th>
                    <th>Año</th>
                    <th>Turistas</th>
                    <th>Pernoctacion media</th>
                    <th>Estancia media</th>
                    <th>Accion</th>
                    <th>Turistas</th>
                    <th>Pernoctacion media</th>
                    <th>Estancia media</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{$page.params.province}</td>
                    <td>{$page.params.year}</td>
                    <td><input bind:value={updatedAverageEmployment}></td>
                    <td><input bind:value={updatedEstimatedAverageOpenEstablishment}></td>
                    <td><input bind:value={updatedEstimatedAveragePlace}></td>
                    <td><input bind:value={updatedEstimatedRoom}></td>
                    <td><input bind:value={updatedOccupancyRateByPlace}></td>
                    <td><input bind:value={updatedOccupancyRateByWeekendPlace}></td>
                    <td><input bind:value={updatedRoomOccupancyRate}></td>
                        <td>
                        <Button color="info" on:click={updateData}
                            >Guardar</Button
                        >
                    </td>
                </tr>
            </tbody>
        </Table>
        <div>
            <ul>
                <li>
                    Provincia:{$page.params.province}
                </li>
                <li>
                    Año: {$page.params.year}
                </li>
                <li>
                    Media de empleo: {updatedAverageEmployment}
                </li>
                <li>
                    Establecimiento abierto medio estimado: {updatedEstimatedAverageOpenEstablishment}
                </li>
                <li>
                    Lugar promedio estimado: {updatedEstimatedAveragePlace}
                </li>
                <li>
                    Habitaciones estimadas: {updatedEstimatedRoom}
                </li>
                <li>
                    Tasa de ocupación por lugar: {updatedOccupancyRateByPlace}
                </li>
                <li>
                    Tasa de ocupación por lugar de fin de semana: {updatedOccupancyRateByWeekendPlace}
                </li>
                <li>
                    Tasa de ocupación de la habitación: {updatedRoomOccupancyRate}
                </li>

            </ul>
        </div>
    </div>
    <br>
    <Button id="volver" color="info" on:click={comeBack}>Volver a la página</Button>
</main>
