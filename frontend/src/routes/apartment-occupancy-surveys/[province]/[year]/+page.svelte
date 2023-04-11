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

    let API = "/api/v2/apartment-occupancy-surveys";

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
            updatedTraveler = dato.traveler;
            updatedOvernightStay = dato.average_stay;
            updatedAverageStay = dato.average_stay;
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
    let updatedTraveler = "";
    let updatedOvernightStay = "";
    let updatedAverageStay = "";

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
                traveler: updatedTraveler,
                overnight_stay: updatedOvernightStay,
                average_stay: updatedAverageStay,
            }),
        });
        const status = await res.status;
        resultStatus = status;

        if (status == 200) {
            message = "El elemento se ha actualizado";
            c = "success";
            getData();
        } else if (status == 400) {
            message = "Rellena todos los campos";
            c = "warning";
        } else if (status == 500) {
            message = "Error interno";
            c = "danger";
        }
    }

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
</script>

<main>
    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
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
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{updatedProvince}</td>
                    <td>{updatedYear}</td>
                    <td><input bind:value={updatedTraveler} /></td>
                    <td><input bind:value={updatedOvernightStay} /></td>
                    <td><input bind:value={updatedAverageStay} /></td>
                    <td>
                        <Button color="info" on:click={updateData}
                            >Actualizar dato</Button
                        >
                    </td>
                </tr>
            </tbody>
        </Table>
        <div>
            <ul>
                <li>
                    Provincia:{updatedProvince}
                </li>
                <li>
                    Año: {updatedYear}
                </li>
                <li>
                    Turistas: {updatedTraveler}
                </li>
                <li>
                    Pernoctacion media: {updatedOvernightStay}
                </li>
                <li>
                    Estancia media:{updatedAverageStay}
                </li>
            </ul>
        </div>
        <Button id="borrar" color="danger" on:click={deleteFile(updatedProvince, updatedYear)}>Borrar dato</Button>
    </div>
    
</main>