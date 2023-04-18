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
    let AboveAverageStay = null;
    let BelowAverageStay = null;

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

    async function deleteFile(province) {
        resultStatus = result = "";
        const res = await fetch(API+"/"+province, {
            method: "DELETE",
        });
        const status = await res.status;
        resultStatus = status;
        if (status == 200) {
            window.alert("Se ha borrado el dato");
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

/*
    async function previousPage() {
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
*/
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
        const res = await fetch(API+`?above_employment=${searchAboveEmployment}&&below_employment=${searchBelowEmployment}`, {
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

/*
    async function getID(searchProvinceID,searchYearID) {
        resultStatus = result = ""; 
        const res = await fetch(API+`?province=${searchProvinceID}&&year=${searchYearID}`, {
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
*/
/*
    async function getFromTo(searchProvinceRange,getFrom,getTo) {
        resultStatus = result = "";
        const res = await fetch(API+`?province=${searchProvinceRange}&&from=${getFrom}&&to=${getTo}`, {
                method: "GET",
            });
            if (searchProvinceRange != "") {
            try {
                const data = await res.json();
                result = JSON.stringify(data, null, 2);
                datos = data;
            } catch (error) {
                console.log(`Error al parsear el resultado: ${error}`);
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
*/

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

    async function getAverageStay(getAboveAverageStay,getBelowAverageStay) {
        resultStatus = result = "";
        const res = await fetch(API+`?above_average_stay=${getAboveAverageStay}&&below_average_stay=${getBelowAverageStay}`, {
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
            message="No hay datos con ese rango de estancia media."
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
                        <Button color="info" on:click={view(dato.province, dato.year)}>Editar</Button>
                    </td>

                    <td>
                        <Button color="danger" on:click={deleteFile(dato.province)}>Borrar</Button>
                    </td>
                </tr>
            {/each}
        </tbody>
        </Table>
        <Button color="dark" on:click={getAllData}>Página anterior</Button>
        <Button color="dark" on:click={nextPage}>Página siguiente</Button>
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
        <input placeholder="Provincia que quiere buscar" bind:value={searchProvince} />
        <Button color="warning" on:click={getProvince(searchProvince)}>Buscar por provincia</Button>
    </div>
    <br>
    <div>
        <input placeholder="Año que quiere buscar" bind:value={searchYear} />
        <Button color="warning" on:click={getYear(searchYear)}>Buscar por año</Button>
    </div>
    <br>
    <div>
        <input placeholder="Provincia ID" bind:value={searchProvinceID} />
        <input placeholder="Año ID" bind:value={searchYearID} />
        <Button color="warning" on:click={getID(searchProvinceID,searchYearID)}>Buscar por ID</Button>
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
        <Button color="warning" on:click={getFromTo(getFrom,getTo)}>Buscar por rango de año</Button>
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
