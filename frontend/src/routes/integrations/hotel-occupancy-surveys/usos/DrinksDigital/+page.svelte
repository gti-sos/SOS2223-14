<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { Table } from "sveltestrap";
    import axios, { formToJSON } from 'axios';

    onMount(async () => {
        getDrinksData();
    });

    let datos = [];

    async function getDrinksData() {
      const options = {
        method: 'GET',
        url: 'https://drinks-digital1.p.rapidapi.com/v1/cocktails',
        params: {limit: '20'},
        headers: {
          'X-RapidAPI-Key': 'cabc8ff376msh5464a7ba2e23576p108b12jsn68f28b207567',
          'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        datos = response.data;
      } catch (error) {
        console.error(error);
      }
    }


</script>

<main>
    <h3 align="center"><u>Drinks Digital</u></h3>
        <p style="text-align:center">
            Datos de: <a
                style="text-decoration: none; color:black"
                href="https://rapidapi.com/SaaSDev/api/drinks-digital1"
                target="_blank"><u>Rapid API Drinks Digital</u></a
            >
        </p>
    <br>
    <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Nombre del cóctel</th>
                <th>Descripción</th>
                <th>Tips adicionales</th>
                <th>Alcohol</th>
            </tr>
        </thead>
        <tbody>
            {#each datos as dato}
                <tr>
                    <td>{dato["id"]}</td>
                    <td>{dato["spirit_id"]}</td>
                    <td>{dato["cocktail_name"]}</td>
                    <td>{dato["description"]}</td>
                    <td>{dato["additional_tips"]}</td>
                    <td>{dato["alcoholic"]}</td>
                </tr>
            {/each}
            <br>
        </tbody>
    </Table>

</main>