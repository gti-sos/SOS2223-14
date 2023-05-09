<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    import { Table, Button, Alert } from "sveltestrap";
    import {} from "./apartment-occupancy-surveys.css";

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
    
    let datos = [];
    let dato = "";
    let searchProvince = "";
    let searchYear = "";
    let searchTraveler = "";
    let searchOvernightStay = "";
    let searchAverageStay = "";
    let b = "";
    let from = "";
    let to = "";
    let API = "/api/v2/apartment-occupancy-surveys";
    let newFileProvince = "";
    let newFileYear = "";
    let newFileTraveler = "";
    let newFileOvernightStay = "";
    let newFileAverageStay = "";
    let result = "";
    let resultStatus = "";
    let limit = 10;
    let offset=0;
    let message = "";
    let c = "";
    let l = `?limit=${limit}&&offset=${offset}`;

    if (dev) {
        API = "http://localhost:12345" + API;
    }

    onMount(async () => {
        getAllData();
    });

    
    async function getAllData() {
        resultStatus = result = "";
        const res = await fetch(API+l+b, {
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

    async function loadAllData() {
        resultStatus = result = "";
        const res = await fetch(API+`/loadInitialData`, {
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
        if (status == 200) {
            message = "Recarga completada";
            c = "success";
            location.reload();
        }else if (status == 500) {
            message = "Error interno";
            c = "danger";
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
        if (status == 201) {
            message = "Elemento creado";
            c = "success";
            b = "";
            const elementos = document.getElementsByClassName("input");
            for(let i=0; i<elementos.length; i++){
                elementos[i].value = "";
            }
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

    async function searchData(searchProvince,searchYear,searchTraveler,searchOvernightStay,searchAverageStay) {
        resultStatus = result = "";
        if(searchProvince!="" && searchYear!=""){
            b = `&&province=${searchProvince}&&year=${searchYear}`;
        }
        else if(searchProvince!="" && searchYear===""){
            if(searchTraveler!="" && searchOvernightStay!=""&& searchAverageStay!=""){
                b = `&&province=${searchProvince}&&traveler=${searchTraveler}&&overnight_stay=${searchOvernightStay}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay!=""&& searchAverageStay===""){
                b = `&&province=${searchProvince}&&traveler=${searchTraveler}&&overnight_stay=${searchOvernightStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay===""&& searchAverageStay!=""){
                b = `&&province=${searchProvince}&&traveler=${searchTraveler}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler==="" && searchOvernightStay!=""&& searchAverageStay!=""){
                b = `&&province=${searchProvince}&&overnight_stay=${searchOvernightStay}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay===""&& searchAverageStay===""){
                b = `&&province=${searchProvince}&&traveler=${searchTraveler}`;
            }
            else if(searchTraveler==="" && searchOvernightStay!=""&& searchAverageStay===""){
                b = `&&province=${searchProvince}&&overnight_stay=${searchOvernightStay}`;
            }
            else if(searchTraveler==="" && searchOvernightStay===""&& searchAverageStay!=""){
                b = `&&province=${searchProvince}&&average_stay=${searchAverageStay}`;
            }
            else{
                b = `&&province=${searchProvince}`;
            }            
        }
        else if(searchProvince==="" && searchYear!=""){
            if(searchTraveler!="" && searchOvernightStay!=""&& searchAverageStay!=""){
                b = `&&year=${searchYear}&&traveler=${searchTraveler}&&overnight_stay=${searchOvernightStay}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay!=""&& searchAverageStay===""){
                b = `&&year=${searchYear}&&traveler=${searchTraveler}&&overnight_stay=${searchOvernightStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay===""&& searchAverageStay!=""){
                b = `&&year=${searchYear}&&traveler=${searchTraveler}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler==="" && searchOvernightStay!=""&& searchAverageStay!=""){
                b = `&&year=${searchYear}&&overnight_stay=${searchOvernightStay}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay===""&& searchAverageStay===""){
                b = `&&year=${searchYear}&&traveler=${searchTraveler}`;
            }
            else if(searchTraveler==="" && searchOvernightStay!=""&& searchAverageStay===""){
                b = `&&year=${searchYear}&&overnight_stay=${searchOvernightStay}`;
            }
            else if(searchTraveler==="" && searchOvernightStay===""&& searchAverageStay!=""){
                b = `&&year=${searchYear}&&average_stay=${searchAverageStay}`;
            }
            else{
                b = `&&year=${searchYear}`;
            } 
        }
        else if(searchTraveler!="" || searchOvernightStay!="" || searchAverageStay!=""){
            if(searchTraveler!="" && searchOvernightStay!=""&& searchAverageStay!=""){
                b = `&&traveler=${searchTraveler}&&overnight_stay=${searchOvernightStay}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay!=""&& searchAverageStay===""){
                b = `&&traveler=${searchTraveler}&&overnight_stay=${searchOvernightStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay===""&& searchAverageStay!=""){
                b = `&&traveler=${searchTraveler}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler==="" && searchOvernightStay!=""&& searchAverageStay!=""){
                b = `&&overnight_stay=${searchOvernightStay}&&average_stay=${searchAverageStay}`;
            }
            else if(searchTraveler!="" && searchOvernightStay===""&& searchAverageStay===""){
                b = `&&traveler=${searchTraveler}`;
            }
            else if(searchTraveler==="" && searchOvernightStay!=""&& searchAverageStay===""){
                b = `&&overnight_stay=${searchOvernightStay}`;
            }
            else if(searchTraveler==="" && searchOvernightStay===""&& searchAverageStay!=""){
                b = `&&average_stay=${searchAverageStay}`;
            }
        }
        else{
            b = "";
        }
        l = `?limit=${10}&&offset=${0}`;
        const res = await fetch(API+l+b, {
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
        if (status == 200) {
            message = "El elemento encontrado";
            c = "success";
        } else if (status == 404) {
            message = "Elemento no encontrado";
            c = "danger";
        }else if (status == 500) {
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
        window.location.href = "https://sos2223-14.appspot.com/apartment-occupancy-surveys" + "/" +province +"/" +year;
    }

    async function fromTo(from,to) {
        resultStatus = result = "";
        const res = await fetch(API+`?offset=${offset}&&limit=${limit}&&from=${from}&&to=${to}`, {
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
        if (status == 200) {
            message = "Intervalo encontrado";
            c = "success";
        } else if (status == 404) {
            message = "Intervalo no encontrado";
            c = "danger";
        }else if (status == 500) {
            message = "Error interno";
            c = "danger";
        }
    }

    async function previousPage() {
        offset -= limit;
        if(offset<0){
            message = "No puedes retroceder estás en el principio de la lista de elementos";
            c = "danger";
            offset += limit;
        }
        else {
            l = `?limit=${limit}&&offset=${offset}`;
            getAllData();
        }
    }

    async function nextPage() {
        offset += limit;
        resultStatus = result = "";
        const res = await fetch(API+b, {
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

        if(offset>=datos.length){
            message = "No hay más elementos para mostrar";
            c = "danger";
            offset -= limit;
            l = `?limit=${limit}&&offset=${offset}`;
            getAllData();
        }
        else{
            l = `?limit=${limit}&&offset=${offset}`;
            getAllData();
        }
              
    }

</script>

<main>

    {#if message != ""}
        <Alert color={c}>{message}</Alert>
    {/if}
    <h1><u>Encuesta de ocupación de apartamentos</u></h1>
    <p>Datos devueltos: {datos.length}</p>
    <h3><u>Insertar intervalo de tiempo</u></h3>
    <Table id="tabla">
        <thead>
            <tr>
                <th>Desde</th>
                <th>Hasta</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input bind:value={from} /></td>
                <td><input bind:value={to} /></td>
                <td>
                    <Button color="success" on:click={fromTo(from, to)}>Buscar intervalo</Button>
                </td>
            </tr>
        </tbody>
    </Table>
    <h3><u>Busca un elemento</u></h3>
    <Table>
        <thead>
            <tr>
                <th>Provincia</th>
                <th>Año</th>
                <th>Turistas</th>
                <th>Pernoctación</th>
                <th>Estancia media</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input bind:value={searchProvince} /></td>
                <td><input bind:value={searchYear} /></td>
                <td><input bind:value={searchTraveler} /></td>
                <td><input bind:value={searchOvernightStay} /></td>
                <td><input bind:value={searchAverageStay} /></td>
                <td>
                    <Button color="success" on:click={searchData(searchProvince, searchYear,
                                                                searchTraveler,searchOvernightStay, searchAverageStay)}>Buscar dato</Button>
                </td>
            </tr>
        </tbody>
    </Table>
    <h3><u>Elementos encontrados</u></h3>
    <Table>
        <thead>
            <tr>
                <th>Provincia</th>
                <th>Año</th>
                <th>Turistas</th>
                <th>Pernoctación media</th>
                <th>Estancia media</th>
                <th>Acción</th>
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
    <div id="buttons">
        <Button color="dark" on:click={previousPage}>Página anterior</Button>
        <Button color="dark" on:click={nextPage}>Página siguiente</Button>
    </div>
    <h3>Crear elemento</h3>
    <div class="createData">
        <input id="create" class="input" placeholder="Provincia" bind:value={newFileProvince}/>
        <input id="create" class="input" placeholder="Año" bind:value={newFileYear} />
        <input id="create" class="input" placeholder="Turista" bind:value={newFileTraveler} />
        <input id="create" class="input" placeholder="Pernoctacion media" bind:value={newFileOvernightStay}/>
        <input id="create" class="input" placeholder="Estancia media" bind:value={newFileAverageStay}/>
    </div>
    <div id="create-button">
        <Button color="warning" on:click={createFile}>Crear dato</Button>
    </div>
    <div id="buttons">
        <p>¿Quieres borrarlo todo?  ¿Quieres recargar la base?</p>
        <Button color="danger" on:click={deleteAll}>Borrar todo</Button>
        <Button id="load" color="success" on:click={loadAllData}>Recargar datos</Button>
    </div>

</main>
