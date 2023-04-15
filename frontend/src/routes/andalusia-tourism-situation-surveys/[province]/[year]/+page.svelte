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

    let API = "/api/v2/andalusia-tourism-situation-surveys";

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
            updatedTourist = dato.tourist;
            updatedAverageDailyExpenditure = dato.average_stay;
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
    let updatedTourist = "";
    let updatedAverageDailyExpenditure = "";
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
                tourist: updatedTourist,
                average_daily_expenditure: updatedAverageDailyExpenditure,
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

    async function view() {
        window.location.href = "https://sos2223-14.appspot.com/andalusia-tourism-situation-surveys";
    }

</script>

<main>
    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
    <h1><u>Detalles</u></h1>
    <Table>
        <thead>
            <tr>
                <th>Provincia</th>
                <th>Año</th>
                <th>Turista</th>
                <th>Gasto medio diario</th>
                <th>Estancia media</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{updatedProvince}</td>
                <td>{updatedYear}</td>
                <td><input bind:value={updatedTourist}></td>
                <td><input bind:value={updatedAverageDailyExpenditure}></td>
                <td><input bind:value={updatedAverageStay}></td>
                <td>
                    <Button color="info" on:click={updateData}>Actualizar dato</Button>
                </td>
            </tr>
            <tr>
                <td>{updatedProvince}</td>
                <td>{updatedYear}</td>
                <td>{updatedTourist}</td>
                <td>{updatedAverageDailyExpenditure}</td>
                <td>{updatedAverageStay}</td>                
                <td>
                    <Button color="danger" on:click={deleteFile(updatedProvince,updatedYear)}>Borrar dato</Button>
                </td>
            </tr>
        </tbody>
    </Table>
    <br>
    <div class="elementos">
        <Button color="info" on:click={view}>Atrás</Button>
    </div>
</main>