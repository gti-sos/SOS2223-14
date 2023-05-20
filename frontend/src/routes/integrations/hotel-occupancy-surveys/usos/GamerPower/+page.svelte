<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { Table } from "sveltestrap";
  import axios, { formToJSON } from 'axios';

  onMount(async () => {
      getGamerData();
  });

  let datos = [];

  async function getGamerData() {
      const options = {
      method: 'GET',
      url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
      headers: {
        'X-RapidAPI-Key': 'cabc8ff376msh5464a7ba2e23576p108b12jsn68f28b207567',
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
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
  <h3 align="center"><u>GamerPower</u></h3>
      <p style="text-align:center">
          Datos de: <a
              style="text-decoration: none; color:black"
              href="https://rapidapi.com/digiwalls/api/gamerpower"
              target="_blank"><u>Rapid API GamerPower</u></a
          >
      </p>
  <br>
  <Table>
      <thead>
          <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Tipo</th>
              <th>Instucciones</th>
              <th>Plataformas</th>
          </tr>
      </thead>
      <tbody>
          {#each datos as dato}
              <tr>
                  <td>{dato["id"]}</td>
                  <td>{dato["title"]}</td>
                  <td>{dato["worth"]}</td>
                  <td>{dato["type"]}</td>
                  <td>{dato["instructions"]}</td>
                  <td>{dato["platforms"]}</td>
              </tr>
          {/each}
          <br>
      </tbody>
  </Table>

</main>