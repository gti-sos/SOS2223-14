import { c as create_ssr_component, v as validate_component } from './index-efdb2ac9.js';

const css = {
  code: "a.svelte-1ssjf7p{color:rgb(2, 56, 107);text-decoration:none;font-size:20px}.container.svelte-1ssjf7p{display:grid;grid-template-columns:25% 25% 25% 25%;text-align:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><nav><div class="container svelte-1ssjf7p"><a href="/" class="svelte-1ssjf7p">Home</a>
            <a href="/apartment-occupancy-surveys" class="svelte-1ssjf7p">Apartment Occupancy Surveys</a>
            <a href="/andalusia-tourism-situation-surveys" class="svelte-1ssjf7p">Andalusia Tourism Situation Surveys</a>
            <a href="/hotel-occupancy-surveys" class="svelte-1ssjf7p">Hotel Occupancy Surveys</a></div></nav>
</main>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="https://github.com/gti-sos/SOS2223-14" style="text-decoration: none;">Made by SOS2223-14 </a>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <hr>
    ${slots.default ? slots.default({}) : ``}
    <hr>
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-48608205.js.map
