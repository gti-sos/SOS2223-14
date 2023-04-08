<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    import { Table, Button } from "sveltestrap";

    onMount(async () => {
        getFiles();
    });

    let API = "/api/v2/apartment-occupancy-surveys";

    if (dev) {
        API = "http://localhost:12345" + API;
    }

    let datos = [];
    let newFileProvince = "";
    let newFileYear = "";
    let newFileTraveler = "";
    let newFileOvernightStay = "";
    let newFileAverageStay = "";

    let result = "";
    let resultStatus = "";

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
                year: newFileYear,
                traveler: newFileTraveler,
                overnight_stay: newFileOvernightStay,
                average_stay: newFileAverageStay,
            }),
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 201) {
            getFiles();
        }
    }

    async function deleteFile(province, year) {
        resultStatus = result = "";
        const res = await fetch(API + "/" + province, {
            method: "DELETE",
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            getFiles();
        }
    }
</script>

<h1 style="text-align: center;">Create data</h1>

<div>
    Province: <input bind:value={newFileProvince} />
    Year: <input bind:value={newFileYear} />
    Traveler: <input bind:value={newFileTraveler} />
    Overnight: <input bind:value={newFileOvernightStay} />
    Average: <input bind:value={newFileAverageStay} />
    <Button on:click={createFile}>Create</Button>
</div>

<h1 style="text-align: center;">Apartment-Occupancy-Surveys</h1>
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
                    <Button on:click={deleteFile(dato.province, dato.year)}
                        >Delete</Button
                    >
                    <Button>Edit</Button>
                </td>
            </tr>
        {/each}
    </tbody>
</Table>


{#if resultStatus != ""}
    <p id="result">
        Result: {resultStatus}
    </p>
{/if}

<style>
    #result {
        margin-top: 80px;
    }
</style>
