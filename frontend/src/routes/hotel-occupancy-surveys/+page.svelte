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
        API = "https://sos2223-14.appspot.com" + API;
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

    let searchAverageEmployment = "";
    let searchEstimatedAverageOpenEstablishment = "";
    let searchEstimatedAveragePlace = "";
    let searchEstimatedRoom = "";
    let searchOccupancyRateByPlace = "";
    let searchOccupancyRateByWeekendPlace = "";
    let searchRoomOccupancyRate = "";

    let searchProvince = "";
    let searchYear = "";
    let searchProvinceID = "";
    let searchYearID = null;
    let searchProvinceRange = "";
    let getFrom = "";
    let getTo = "";
    let searchAboveEmployment = "";
    let searchBelowEmployment = "";
    
    let aboveAverageEmployment = null;
    let aboveOpenEstablishment = null;
    let aboveAveragePlace = null;
    let aboveEstimatedRoom = null;
    let aboveOccupancyByPlace = null;
    let aboveOccupancyByWeekendPlace = null;
    let aboveRoomOccupancyRate = null;


    let limit = 10;
    let offset=0;
    let from = "";
    let to = "";

    async function getAllData() {
        resultStatus = result = "";
        const res = await fetch(API+`?offset=${offset}&&limit=${limit}`, {
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
            getAllData();
            message = "Los datos han sido insertados correctamente."
            c = "success";
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
                average_employment: parseFloat(newFileAverageEmployment),
                estimated_average_open_establishment: parseFloat(newFileEstimatedAverageOpenEstablishment),
                estimated_average_place: parseFloat(newFileEstimatedAveragePlace),
                estimated_room: parseFloat(newFileEstimatedRoom),
                occupancy_rate_by_place: parseFloat(newFileOccupancyRateByPlace),
                occupancy_rate_by_weekend_place: parseFloat(newFileOccupancyRateByWeekendPlace),
                room_occupancy_rate: parseFloat(newFileRoomOccupancyRate),

            }),
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 201) {
            message = "Elemento creado";
            c = "success";
            getAllData();
        } else if (status == 409) {
            message = "Conflicto, elemento ya existente";
            c = "warning";
        } else if (status == 400) {
            message = "Rellene todos los campos de manera correcta";
            c = "warning";
        } else if (status == 500) {
            message = "Error interno";
            c = "danger";
        }
    }

    async function deleteFile(province, year) {
        resultStatus = result = "";
        const res = await fetch(API+"/"+province+"/"+year, {
            method: "DELETE",
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            window.alert("Se ha borrado el dato");
            location.reload();
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

    async function fromTo(from,to) {
        resultStatus = result = "";
        const res = await fetch(API+`?limit=${limit}&&offset=${offset}&&from=${from}&&to=${to}`, {
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

    async function nextPage() {
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

    async function getProvince(searchProvince) {
        resultStatus = result = ""; 
        const res = await fetch(API+`?province=${searchProvince}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="La provincia indicada no se encuentra registrada en la base de datos."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    }

    async function getYear(searchYear) {
        resultStatus = result = ""; 
        const res = await fetch(API+`?year=${searchYear}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="El año indicado no se encuentra registrado en la base de datos."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    }

    async function getEmployment(searchAboveEmployment,searchBelowEmployment) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_average_employment=${searchAboveEmployment}&&below_employment=${searchBelowEmployment}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="No hay datos para mostrar."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        } 
    }


    async function getProvYear(searchProvinceID,searchYearID) {
        resultStatus = result = ""; 
        const res = await fetch(API+`?provinceSearch=${searchProvinceID}&&yearSearch=${searchYearID}`, {
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
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="El ID indicado no se encuentra registrado en la base de datos."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    }

async function getFromTo(searchProvinceRange,getFrom,getTo) {
        resultStatus = result = "";
        if (searchProvinceRange != "") {
            const res = await fetch(API+`?province=${searchProvinceRange}&from=${getFrom}&to=${getTo}`, {
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
            if (status == 200) {
                message = "Elemento encontrado";
                c = "success";
            } else if (status == 400) {
                message = "La petición no es correcta."
                c = "danger";
            } else if (status == 404) {
                message="No hay datos disponibles del rango indicado."
                c = "danger";
            } else if (status == 500) {
                message = "Error del servidor";
                c = "danger";
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
            const status = await res.status;
            resultStatus = status;
            if (status == 200) {
                message = "Elemento encontrado";
                c = "success";
            } else if (status == 400) {
                message = "La petición no es correcta."
                c = "danger";
            } else if (status == 404) {
                message="No hay datos disponibles del rango indicado."
                c = "danger";
            } else if (status == 500) {
                message = "Error del servidor";
                c = "danger";
            } 
        }
        
    }

    //Media de empleo
    async function getAverageEmployment(aboveAverageEmployment) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_average_employment=${aboveAverageEmployment}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="No hay datos con ese rango de media de empleo."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    }

    //Establecimiento abierto medio estimado
    async function getOpenEstablishment(aboveOpenEstablishment) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_open_establishment=${aboveOpenEstablishment}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="No hay datos con ese rango de establecimiento abierto."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    } 

    //Lugar promedio estimado
    async function getAveragePlace(aboveAveragePlace) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_average_place=${aboveAveragePlace}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="No hay datos con ese rango de media de lugar."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    } 

    //Habitaciones estimadas
    async function getEstimatedRoom(aboveEstimatedRoom) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_estimated_room=${aboveEstimatedRoom}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="No hay datos con ese rango de habitaciones estimadas."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    } 

    //Tasa de ocupación por lugar
    async function getOccupancyByPlace(aboveOccupancyByPlace) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_occupancy_by_place=${aboveOccupancyByPlace}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="No hay datos con ese rango por lugar."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    } 

    //Tasa de ocupación por lugar de fin de semana
    async function getOccupancyByWeekendPlace(aboveOccupancyByWeekendPlace) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_occupancy_by_weekend_place=${aboveOccupancyByWeekendPlace}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="No hay datos con ese rango de por lugar de fin de semana."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
        }
    } 

    //Tasa de ocupación de la habitación
    async function getRoomOccupancyRate(aboveRoomOccupancyRate) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_room_occupancy_rate=${aboveRoomOccupancyRate}`, {
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
        if (status == 200) {
            message = "Elemento encontrado";
            c = "success";
        } else if (status == 400) {
            message = "La petición no es correcta."
            c = "danger";
        } else if (status == 404) {
            message="No hay datos con ese rango de ocupación de la habitación."
            c = "danger";
        } else if (status == 500) {
            message = "Error del servidor";
            c = "danger";
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
    <br>
    {#if datos.length == 0}
        <p>¿Quieres recargar todos los datos iniciales?</p>
        <Button color="success" on:click={getInitialData}>Cargar datos iniciales</Button>
    {:else if datos.length > 0}
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
                    <td>{dato["province"]}</td>
                    <td>{dato["year"]}</td>
                    <td>{dato["average_employment"]}</td>
                    <td>{dato["estimated_average_open_establishment"]}</td>
                    <td>{dato["estimated_average_place"]}</td>
                    <td>{dato["estimated_room"]}</td>
                    <td>{dato["occupancy_rate_by_place"]}</td>
                    <td>{dato["occupancy_rate_by_weekend_place"]}</td>
                    <td>{dato["room_occupancy_rate"]}</td>

                    <td>
                        <Button color="info" on:click={view(dato.province, dato.year)}>Editar</Button>
                    </td>

                    <td>
                        <Button color="danger" on:click={deleteFile(dato.province, dato.year)}>Borrar</Button>
                    </td>
                </tr>
            {/each}
        </tbody>
        </Table>
        {#if datos.length >= 10}
        <div style="text-align: center;">
            <Button color="dark" on:click={getAllData}>Página anterior</Button>
            <Button color="dark" on:click={nextPage}>Página siguiente</Button>
        </div>
        {/if}
        {#if datos.length < 10 && nextPage}
        <div style="text-align: center;">
            <Button color="dark" on:click={getAllData}>Página anterior</Button>
        </div>
        {/if}
        
        
        <br>
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
    
        <div id="delete-all">
            <p>¿Seguro que quieres borrar todos los datos?</p>
            <Button color="danger" on:click={deleteAll}>Borrar datos</Button>
        </div>

    
    <h3>Búsqueda avanzada</h3>
    <br>
    <div>
        <input placeholder="Provincia a buscar" bind:value={searchProvince} />
        <Button color="warning" on:click={getProvince(searchProvince)}>Buscar por provincia</Button>
    </div>
    <br>
    <div>
        <input placeholder="Año a buscar" bind:value={searchYear} />
        <Button color="warning" on:click={getYear(searchYear)}>Buscar por año</Button>
    </div>
    <br>
    <div>
        <input placeholder="Media de empleo a partir de..." bind:value={aboveAverageEmployment} />
        <Button color="warning" on:click={getAverageEmployment(aboveAverageEmployment)}>Media de empleo a partir de...</Button>
    </div>
    <br>
    <div>
        <input placeholder="Media de establecimiento abierto a partir de..." bind:value={aboveOpenEstablishment} />
        <Button color="warning" on:click={getOpenEstablishment(aboveOpenEstablishment)}>Media de establecimiento abierto a partir de...</Button>
    </div>
    <br>
    <div>
        <input placeholder="Media de lugar a partir de..." bind:value={aboveAveragePlace} />
        <Button color="warning" on:click={getAveragePlace(aboveAveragePlace)}>Media de lugar a partir de...</Button>
    </div>
    <br>
    <div>
        <input placeholder="Media de habitaciones estimadas a partir de..." bind:value={aboveEstimatedRoom} />
        <Button color="warning" on:click={getEstimatedRoom(aboveEstimatedRoom)}>Media de habitaciones estimadas a partir de...</Button>
    </div>
    <br>
    <div>
        <input placeholder="Tasa de ocupación por lugar a partir de..." bind:value={aboveOccupancyByPlace} />
        <Button color="warning" on:click={getOccupancyByPlace(aboveOccupancyByPlace)}>Tasa de ocupación por lugar a partir de...</Button>
    </div>
    <br>
    <div>
        <input placeholder="Tasa de ocupación por lugar de fin de semana a partir de..." bind:value={aboveOccupancyByWeekendPlace} />
        <Button color="warning" on:click={getOccupancyByWeekendPlace(aboveOccupancyByWeekendPlace)}>Tasa de ocupación por lugar de fin de semana a partir de...</Button>
    </div>
    <br>
    <div>
        <input placeholder="Tasa de ocupación de la habitación a partir de..." bind:value={aboveRoomOccupancyRate} />
        <Button color="warning" on:click={getRoomOccupancyRate(aboveRoomOccupancyRate)}>Tasa de ocupación de la habitación a partir de...</Button>
    </div>
    <br>
    <div>
        <input placeholder="Provincia a buscar" bind:value={searchProvinceID} />
        <input placeholder="Año a buscar" bind:value={searchYearID} />
        <Button color="warning" on:click={getProvYear(searchProvinceID,searchYearID)}>Buscar por provincia y año</Button>
    </div>
    <br>
    <div>
        <input placeholder="Mín. empleo" bind:value={searchAboveEmployment} />
        <input placeholder="Máx. empleo" bind:value={searchBelowEmployment} />
        <Button color="warning" on:click={getEmployment(searchAboveEmployment,searchBelowEmployment)}>Buscar por media de empleo</Button>
    </div>
    <br>
    <div>
        <input placeholder="Provincia del rango" bind:value={searchProvinceRange} />
        <input placeholder="Año de inicio" bind:value={getFrom} />
        <input placeholder="Año de fin" bind:value={getTo} />
        <Button color="warning" on:click={getFromTo(searchProvinceRange,getFrom,getTo)}>Buscar por rango de año</Button>
    </div>
    <br>
    {/if}
    
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
    <div id="new-post">
        <Button color="warning" on:click={createFile}>Crear dato</Button>
    </div>
</main>
