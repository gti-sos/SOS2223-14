import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#inicio.svelte-y7biek{margin-top:15px}a.svelte-y7biek{color:rgb(16, 16, 17);text-decoration:none;font-size:21px;padding-top:20px;margin-left:10px;text-align:center}main.svelte-y7biek{margin-top:20px;position:relative;height:200px}.container.svelte-y7biek{width:1200px;height:200px;display:grid;grid-template-rows:50% 50%;grid-template-columns:20% 20% 20% 20% 20%;border-style:solid;border-width:3px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-ntmb4z_START -->${$$result.title = `<title>SOS2223-14</title>`, ""}<!-- HEAD_svelte-ntmb4z_END -->`, ""}
<main class="svelte-y7biek"><nav><div class="container svelte-y7biek"><a id="inicio" href="/" class="svelte-y7biek">Inicio</a>
            <a href="/apartment-occupancy-surveys" class="svelte-y7biek">Encuesta de ocupación de apartamentos</a>
            <a href="/andalusia-tourism-situation-surveys" class="svelte-y7biek">Encuesta de coyuntura turística de Andalucía</a>
            <a href="/hotel-occupancy-surveys" class="svelte-y7biek">Encuesta de ocupación hotelera</a>
            <a href="/integrations" class="svelte-y7biek">Usos/Integraciones</a>
            <a href="/about" class="svelte-y7biek">Vídeos</a>
            <a id="inicio" href="/analytics" class="svelte-y7biek">Gráfica conjunta</a>
            <a href="/graph/apartment-occupancy-surveys" class="svelte-y7biek">Gráfica ocupación de apartamentos</a>
            <a href="/graph/hotel-occupancy-surveys" class="svelte-y7biek">Gráfica ocupación de hoteles</a>
            <a href="/graph/andalusia-tourism-situation-surveys" class="svelte-y7biek">Gráfica de coyuntura turística en Andalucía</a></div></nav>
</main>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-u0hmyr{margin-bottom:30px}a.svelte-u0hmyr{color:crimson;margin-left:40px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-u0hmyr"><a href="https://github.com/gti-sos/SOS2223-14" style="text-decoration: none;" class="svelte-u0hmyr">Realizado por SOS2223-14 </a>
</main>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <hr>
    ${slots.default ? slots.default({}) : ``}
    <hr>
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Layout as default
};
