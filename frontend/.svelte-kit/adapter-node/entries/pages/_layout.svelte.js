import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-ynsp8b{color:rgb(2, 56, 107);text-decoration:none;font-size:20px}main.svelte-ynsp8b{margin-top:20px}.container.svelte-ynsp8b{display:grid;grid-template-columns:25% 25% 25% 25%;text-align:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="svelte-ynsp8b"><nav><div class="container svelte-ynsp8b"><a href="/" class="svelte-ynsp8b">Home</a>
            <a href="/apartment-occupancy-surveys" class="svelte-ynsp8b">Apartment Occupancy Surveys</a>
            <a href="/andalusia-tourism-situation-surveys" class="svelte-ynsp8b">Andalusia Tourism Situation Surveys</a>
            <a href="/hotel-occupancy-surveys" class="svelte-ynsp8b">Hotel Occupancy Surveys</a></div></nav>
</main>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-3ta52y{margin-bottom:30px}a.svelte-3ta52y{color:crimson}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-3ta52y"><a href="https://github.com/gti-sos/SOS2223-14" style="text-decoration: none;" class="svelte-3ta52y">Made by SOS2223-14 </a>
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
