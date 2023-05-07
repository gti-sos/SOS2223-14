<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { Table } from "sveltestrap";
    import axios, { formToJSON } from 'axios';

    onMount(async () => {
        getPokemonData();
    });

    let datosPokemon = [];

    async function getPokemonData() {
        const options = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json',
            headers: {
                'X-RapidAPI-Key': 'b59f48aa26mshed592c021d6d930p1eab12jsn1f5001bba931',
                'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            datosPokemon = response.data;
        } catch (error) {
            console.error(error);
        }
    }

</script>

<main>

    <h3 align="center"><u>Pokémon Go</u></h3>
        <p style="text-align:center">
            Datos de: <a
                style="text-decoration: none; color:black"
                href="https://rapidapi.com/Chewett/api/pokemon-go1/"
                target="_blank"><u>Rapid API Pokémon Go</u></a
            >
        </p>
    <br>
    <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Ataque Base</th>
                <th>Defensa Base</th>
                <th>Resistencia Base</th>
                <th>Forma</th>
            </tr>
        </thead>
        <tbody>
            {#each datosPokemon as dato}
                <tr>
                    <td>{dato["pokemon_id"]}</td>
                    <td>{dato["pokemon_name"]}</td>
                    <td>{dato["base_attack"]}</td>
                    <td>{dato["base_defense"]}</td>
                    <td>{dato["base_stamina"]}</td>
                    <td>{dato["form"]}</td>
                </tr>
            {/each}
            <br>
        </tbody>
    </Table>

</main>