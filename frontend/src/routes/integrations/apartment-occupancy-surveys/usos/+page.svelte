<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { Table } from "sveltestrap";
    import axios, { formToJSON } from "axios";
    import {} from "./style_tabla.css";

    onMount(async () => {
        datos1();
        datos2();
    });

    let datos_1 = "";
    let datos_2 = "";

    async function datos1() {
        const options = await fetch("https://the-mexican-food-db.p.rapidapi.com/", {
            method: "GET",
            headers: {
                "content-type": "application/octet-stream",
                'X-RapidAPI-Key': 'fca57522bdmsha7e5e245d9ae51bp115418jsndced47a7ac5f',
                'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
            },
        });
        try {
            const response = await options.json();
            datos_1 = response;
        } catch (error) {
            console.error(error);
        }
    }

    async function datos2() {
        const options = await fetch("https://exercisedb.p.rapidapi.com/exercises", {
            method: "GET",
            headers: {
                "content-type": "application/octet-stream",
                'X-RapidAPI-Key': 'fca57522bdmsha7e5e245d9ae51bp115418jsndced47a7ac5f',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },
        });
        try {
            const response = await options.json();
            datos_2 = response;
        } catch (error) {
            console.error(error);
        }
    }
</script>

<main>
    <div id="tabla">
        <h3><u>Base de datos Comida Mexicana API Documentación</u></h3>
        <p style="text-align:center">
            Datos de: <a
                style="text-decoration: none; color:black"
                href="https://rapidapi.com/rapihub-rapihub-default/api/the-mexican-food-db/"
                target="_blank"><u>Rapid API Comida mexicana</u></a
            >
        </p>
        <Table>
            <thead>
                <tr>
                    <th id="tabla1">Id</th>
                    <th id="tabla1">Título</th>
                    <th id="tabla1">Dificultad</th>
                    <th id="tabla1">Imagen</th>
                </tr>
            </thead>
            <tbody>
                {#each datos_1 as dato}
                    <tr>
                        <td>{dato["id"]}</td>
                        <td>{dato["title"]}</td>
                        <td>{dato["difficulty"]}</td>
                        <td>{dato["image"]}</td>
                    </tr>
                {/each}
            </tbody>
        </Table>
    </div>

    <div id="tabla">
        <h3><u>Deporte y Salud: Base de Datos Ejercicios API</u></h3>
        <p style="text-align:center">
            Datos de: <a
                style="text-decoration: none; color:black"
                href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/"
                target="_blank"><u>Rapid API ExerciseDB</u></a
            >
        </p>
        <Table>
            <thead>
                <tr>
                    <th id="tabla2">Id</th>
                    <th id="tabla2">Nombre</th>
                    <th id="tabla2">Etiqueta</th>
                    <th id="tabla2">Parte del cuerpo</th>
                    <th id="tabla2">Equipo</th>
                    <th id="tabla2">Gif url</th>
                </tr>
            </thead>
            <tbody>
                {#each datos_2 as dato}
                    <tr>
                        <td>{dato["id"]}</td>
                        <td>{dato["name"]}</td>
                        <td>{dato["target"]}</td>
                        <td>{dato["bodyPart"]}</td>
                        <td>{dato["equipment"]}</td>
                        <td>{dato["gifUrl"]}</td>
                    </tr>
                {/each}
            </tbody>
        </Table>
    </div>
</main>
