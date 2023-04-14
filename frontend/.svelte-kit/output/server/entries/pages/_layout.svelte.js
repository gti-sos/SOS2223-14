import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#inicio.svelte-17zxjtf{margin-top:15px}a.svelte-17zxjtf{color:rgb(2, 56, 107);text-decoration:none;font-size:20px;margin-right:120px}main.svelte-17zxjtf{margin-top:20px}.container.svelte-17zxjtf{display:grid;grid-template-columns:25% 25% 25% 25%;text-align:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="svelte-17zxjtf"><nav><div class="container svelte-17zxjtf"><a id="inicio" href="/" class="svelte-17zxjtf">Inicio</a>
            <a href="/apartment-occupancy-surveys" class="svelte-17zxjtf">Encuesta de ocupación de apartamentos</a>
            <a href="/andalusia-tourism-situation-surveys" class="svelte-17zxjtf">Encuesta de coyuntura turística de Andalucía</a>
            <a href="/hotel-occupancy-surveys" class="svelte-17zxjtf">Encuesta de ocupación hotelera</a></div></nav>
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
