import { c as create_ssr_component, e as escape, v as validate_component, d as each, f as add_attribute } from "../../../chunks/index.js";
import { T as Table, B as Button } from "../../../chunks/Table.js";
const apartmentOccupancySurveys = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let datos = [];
  let newFileProvince = "";
  let newFileYear = "";
  let newFileTraveler = "";
  let newFileOvernightStay = "";
  let newFileAverageStay = "";
  return `<main><h1><u>Apartment-Occupancy-Surveys</u></h1>
    <p>Data returned: ${escape(datos.length)}</p>
    ${validate_component(Table, "Table").$$render($$result, {}, {}, {
    default: () => {
      return `<thead><tr><th>Province</th>
                <th>Year</th>
                <th>Traveler</th>
                <th>Overnight_stay</th>
                <th>Average_stay</th>
                <th>Action</th></tr></thead>
        <tbody>${each(datos, (dato) => {
        return `<tr><td>${escape(dato.province)}</td>
                    <td>${escape(dato.year)}</td>
                    <td>${escape(dato.traveler)}</td>
                    <td>${escape(dato.overnight_stay)}</td>
                    <td>${escape(dato.average_stay)}</td>
                    <td>${validate_component(Button, "Button").$$render($$result, { color: "info" }, {}, {
          default: () => {
            return `Borrar/actualizar dato`;
          }
        })}</td>
                </tr>`;
      })}</tbody>`;
    }
  })}

    <h3>Create data</h3>
    <div><input id="create" placeholder="Province"${add_attribute("value", newFileProvince, 0)}>
        <input id="create" placeholder="Year"${add_attribute("value", newFileYear, 0)}>
        <input id="create" placeholder="Traveler"${add_attribute("value", newFileTraveler, 0)}>
        <input id="create" placeholder="Overnight stay"${add_attribute("value", newFileOvernightStay, 0)}>
        <input id="create" placeholder="Average stay"${add_attribute("value", newFileAverageStay, 0)}>
        ${validate_component(Button, "Button").$$render($$result, { color: "warning" }, {}, {
    default: () => {
      return `Crear dato`;
    }
  })}</div>
    ${``}
    <div id="delete-all"><p>Do you want to delete all data?</p>
        ${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
    default: () => {
      return `Borrar todo`;
    }
  })}</div></main>`;
});
export {
  Page as default
};
