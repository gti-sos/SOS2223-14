<script>
    import { Button } from "sveltestrap";

    async function watchVideoApartment(){
        window.location.href = "https://drive.google.com/file/d/1RG7JrFRk-GTOGNk1MMZU15r_Mzbv07Qf/view?usp=share_link";
    }

    async function watchVideoHotel(){
        window.location.href = "";
    }

    async function watchVideoTourism(){
        window.location.href = "";
    }

</script>
<main>
    <div class="container">
        <div class="photo-block">
            <div class="photo-image-block">
                <img src = "https://www.marketingdirecto.com/wp-content/uploads/2012/04/video-marketing.jpg" alt="Imagen" style="width: 300px; height: 350px; margin-top: 30px;">
            </div>
            <div id="boton" style="margin-top: 50px">
                <Button color="dark" on:click={watchVideoApartment}>Ver vídeo</Button>
            </div>
        </div>
        <div class="photo-block" style="margin-left: 20px;">
            <div class="photo-image-block">
                <img src = "https://cdn.icon-icons.com/icons2/1713/PNG/512/iconfinder-videologoplayicon-3993847_112649.png" alt="Imagen" style="width: 280px; height: 350px; margin-top:25px; margin-bottom:25px; ">
            </div>
            <div id="boton"  style="margin-top: 30px">
                <Button color="dark" on:click={watchVideoHotel}>Ver vídeo</Button>
            </div>
        </div>
        <div class="photo-block" style="margin-left: 20px">
            <div class="photo-image-block">
                <img src = "https://cdn-icons-png.flaticon.com/512/4404/4404094.png" alt="Imagen" style="width: 330px; margin-top: 80px; margin-bottom:10px;">
            </div>
            <div id="boton"  style="margin-top: 10px">
                <Button color="dark" on:click={watchVideoTourism}>Ver vídeo</Button>
            </div>
        </div>    
   </div> 
</main>
<style>
    .container{
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }
    div.photo-block {
        text-align: center;
        border: 1px solid gray;
        border-radius: 5%;
        height: 500px;
    }
    img {
        max-height: 400px;
        width: auto;
    }
</style>