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
            updatedTraveler = dato.traveler;
            updatedOvernightStay = dato.average_stay;
            updatedAverageStay = dato.average_stay;
        }
         catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;

        if (status == 500) {
            message = "Error 500, Error interno";
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
        }else if (status == 400) {
            message = "Error 400, rellena todos los campos";
            c = "warning";
        } else if (status == 500) {
            message = "Error 500, Error interno";
            c = "danger";
        }
    }

    async function deleteFile(province,year) {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "DELETE",
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            const elementos = document.getElementsByClassName("elementos");
            for(let i=0; i<elementos.length; i++){
                elementos[i].textContent = "";
            }
            
            message = "Elemento borrado";
            c = "success";
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
    <Table class="elementos">
        <tbody>
            <tr>
                <td>{updatedProvince}</td>
                <td>{updatedYear}</td>
                <td>{updatedTraveler}</td>
                <td>{updatedOvernightStay}</td>
                <td>{updatedAverageStay}</td>                
                <td>
                    <Button color="danger" on:click={deleteFile(updatedProvince,updatedYear)}>Borrar dato</Button>
                </td>
            </tr>
        </tbody>
    </Table>
    <div class="elementos">
        <ul>
            <li>
                Province:{updatedProvince}
            </li>
            <li>
                Year: {updatedYear}
            </li>
            <li>
                Traveler: {updatedTraveler}
            </li>
            <li>
                Overnight_stay: {updatedOvernightStay}
            </li>
            <li>
                Average_stay:{updatedAverageStay}
            </li>
        </ul>
    </div>
</main>