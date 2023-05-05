import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#inicio.svelte-1smkici{margin-top:15px}a.svelte-1smkici{color:rgb(16, 16, 17);text-decoration:none;font-size:21px;padding-top:20px;margin-left:10px;text-align:center}main.svelte-1smkici{margin-top:20px;position:relative;border-color:black;border-style:solid;border-width:3px;height:200px}.container.svelte-1smkici{display:grid;grid-template-rows:50% 50%;grid-template-columns:20% 20% 20% 20% 20%}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-ntmb4z_START -->${$$result.title = `<title>SOS2223-14</title>`, ""}<!-- HEAD_svelte-ntmb4z_END -->`, ""}
<main class="svelte-1smkici"><nav><div class="container svelte-1smkici"><a id="inicio" href="/" class="svelte-1smkici">Inicio</a>
            <a id="inicio" href="/analytics" class="svelte-1smkici">Gráfica conjunta</a>
            <a href="/graph/apartment-occupancy-surveys" class="svelte-1smkici">Gráfica ocupación de apartamentos</a>
            <a href="/graph/hotel-occupancy-surveys" class="svelte-1smkici">Gráfica ocupación de hoteles</a>
            <a href="/graph/andalusia-tourism-situation-surveys" class="svelte-1smkici">Gráfica de coyuntura turística en Andalucía</a>
            <a href="/integrations" class="svelte-1smkici">Usos/Integraciones</a>
            <a href="/apartment-occupancy-surveys" class="svelte-1smkici">Encuesta de ocupación de apartamentos</a>
            <a href="/andalusia-tourism-situation-surveys" class="svelte-1smkici">Encuesta de coyuntura turística de Andalucía</a>
            <a href="/hotel-occupancy-surveys" class="svelte-1smkici">Encuesta de ocupación hotelera</a></div></nav>
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
