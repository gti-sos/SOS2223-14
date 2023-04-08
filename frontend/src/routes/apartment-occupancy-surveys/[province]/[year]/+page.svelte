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

    onMount(async () => {
        getData();
    });
    let province = $page.params.province;
    let year = $page.params.year;

    let API = "/api/v2/apartment-occupancy-surveys/" + province + "/" + year;

    if (dev) {
        API = "http://localhost:12345" + API;
    }

    let dato=[];
    let updatedProvince = province;
    let updatedYear = year;
    let updatedTraveler = "";
    let updatedOvernightStay = "";
    let updatedAverageStay = "";

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
        }
         catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
        if (status == 404) {
            message = "Error 404, este dato no existe";
            c = "danger";
        } else if (status == 400) {
            message = "Error 400, Bad Request, completa todos los campos";
            c = "warning";
        } else if (status == 500) {
            message = "Error 500, Error interno";
            c = "danger";
        }
    }

    async function updateData() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                province: updatedProvince,
                year: updatedYear,
                traveler: updatedTraveler,
                overnight_stay: updatedOvernightStay,
                average_stay: updatedAverageStay,
            }),
        });

        const status = await res.status;
        resultStatus = status;

        if (status == 200) {
            message = "Éxito";
            c = "success";
            getData();
        } else if (status == 404) {
            message = "Error 404, dato no encontrado";
            c = "danger";
        }else if (status == 400) {
            message = "Error 400, rellena todos los campos";
            c = "warning";
        } else if (status == 500) {
            message = "Error 500, Error interno";
            c = "danger";
        }
    }
</script>

<main>
    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
    <h1><u>Data details</u></h1>
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
            <tr>
                <td>{updatedProvince}</td>
                <td>{updatedYear}</td>
                <td><input bind:value={updatedTraveler}></td>
                <td><input bind:value={updatedOvernightStay}></td>
                <td><input bind:value={updatedAverageStay}></td>
                <td>
                    <Button color="info" on:click={updateData}>Actualizar dato</Button>
                </td>
            </tr>
        </tbody>
    </Table>
    <div class="container">
        <ul>
            <li>
                Province:{dato.province}
            </li>
            <li>
                Year: {dato.year}
            </li>
            <li>
                Traveler: {dato.traveler}
            </li>
            <li>
                Overnight_stay: {dato.overnight_stay}
            </li>
            <li>
                Average_stay:{dato.average_stay}
            </li>
        </ul>
    </div>
</main>
