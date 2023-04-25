<script>
    import { Button } from "sveltestrap";
    import {} from "./style-graphs.css";

    async function redirect_apartment_occupancy_surveys(){
        window.location.href = "/graph/apartment-occupancy-surveys";
    }

    async function redirect_hotel_occupancy_surveys(){
        window.location.href = "/graph/hotel-occupancy-surveys";
    }

    async function redirect_andalusia_tourism_situation_surveys(){
        window.location.href = "/graph/andalusia-tourism-situation-surveys";
    }

</script>
<main>
    <h1 style="text-align: center; font-family:initial; font-style: oblique;">Rutas grafos</h1>
    <div class="container">
        <div class="photo-block">
            <div class="photo-image-block">
                <img class="photo-image" src="https://cdn3.excelyvba.com/wp-content/uploads/2013/01/gr%C3%A1ficos-combinados-en-excel.jpg"
                                         alt="Imagen">
            </div>
            <div class="photo-header-block">
                <h2 class="photo-title">Ocupación de apartamentos en Andalucía</h2>
            </div>
            <Button color="dark" on:click={redirect_apartment_occupancy_surveys}>Ver gráfica</Button>           
        </div>
        <div class="photo-block">
            <div class="photo-image-block">
                <img class="photo-image" src="https://st2.depositphotos.com/1064093/49510/v/600/depositphotos_495102068-stock-illustration-colorful-cylinders-bar-graph-column.jpg"
                                         alt="Imagen">
            </div>
            <div class="photo-header-block">
                <h2 class="photo-title">Coyuntura de apartamentos en Andalucía</h2>
            </div>
            <Button color="dark" on:click={redirect_andalusia_tourism_situation_surveys}>Ver gráfica</Button>            
        </div>
        <div class="photo-block">
            <div class="photo-image-block">
                <img class="photo-image" src="https://thumbs.dreamstime.com/b/gr%C3%A1ficos-financieros-41675922.jpg"
                                         alt="Imagen">
            </div>
            <div class="photo-header-block">
                <h2 class="photo-title">Ocupación hotelera</h2>
            </div> 
            <Button color="dark" on:click={redirect_hotel_occupancy_surveys}>Ver gráfica</Button>           
        </div>            
    </div>
</main>