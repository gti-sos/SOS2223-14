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
  return `<main><h1><u>Encuesta de ocupacion de apartamentos</u></h1>
    <p>Datos devueltos: ${escape(datos.length)}</p>
    ${validate_component(Table, "Table").$$render($$result, {}, {}, {
    default: () => {
      return `<thead><tr><th>Provincia</th>
                <th>Año</th>
                <th>Turistas</th>
                <th>Pernoctacion media</th>
                <th>Estancia media</th>
                <th>Accion</th></tr></thead>
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

    <h3>Crear elemento</h3>
    <div class="createData"><input id="create" placeholder="Provincia"${add_attribute("value", newFileProvince, 0)}>
        <input id="create" placeholder="Año"${add_attribute("value", newFileYear, 0)}>
        <input id="create" placeholder="Turista"${add_attribute("value", newFileTraveler, 0)}>
        <input id="create" placeholder="Pernoctacion media"${add_attribute("value", newFileOvernightStay, 0)}>
        <input id="create" placeholder="Estancia media"${add_attribute("value", newFileAverageStay, 0)}>
        ${validate_component(Button, "Button").$$render($$result, { color: "warning" }, {}, {
    default: () => {
      return `Crear dato`;
    }
  })}</div>

    ${``}
    <div id="delete-all"><p>¿Quieres borrarlo todo?</p>
        ${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
    default: () => {
      return `Borrar todo`;
    }
  })}</div></main>`;
});
export {
  Page as default
};
