import { c as create_ssr_component, e as escape, v as validate_component, f as add_attribute, d as each } from "../../../chunks/index.js";
import { T as Table, B as Button } from "../../../chunks/Table.js";
const apartmentOccupancySurveys = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let datos = [];
  let searchProvince = "";
  let searchYear = "";
  let searchTraveler = "";
  let searchOvernightStay = "";
  let searchAverageStay = "";
  let from = "";
  let to = "";
  let newFileProvince = "";
  let newFileYear = "";
  let newFileTraveler = "";
  let newFileOvernightStay = "";
  let newFileAverageStay = "";
  return `<main>${``}
    <h1><u>Encuesta de ocupación de apartamentos</u></h1>
    <p>Datos devueltos: ${escape(datos.length)}</p>
    <h3><u>Insertar intervalo de tiempo</u></h3>
    ${validate_component(Table, "Table").$$render($$result, { id: "tabla" }, {}, {
    default: () => {
      return `<thead><tr><th>Desde</th>
                <th>Hasta</th>
                <th>Acción</th></tr></thead>
        <tbody><tr><td><input${add_attribute("value", from, 0)}></td>
                <td><input${add_attribute("value", to, 0)}></td>
                <td>${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
        default: () => {
          return `Buscar intervalo`;
        }
      })}</td></tr></tbody>`;
    }
  })}
    <h3><u>Busca un elemento</u></h3>
    ${validate_component(Table, "Table").$$render($$result, {}, {}, {
    default: () => {
      return `<thead><tr><th>Provincia</th>
                <th>Año</th>
                <th>Turistas</th>
                <th>Pernoctación</th>
                <th>Estancia media</th>
                <th>Acción</th></tr></thead>
        <tbody><tr><td><input${add_attribute("value", searchProvince, 0)}></td>
                <td><input${add_attribute("value", searchYear, 0)}></td>
                <td><input${add_attribute("value", searchTraveler, 0)}></td>
                <td><input${add_attribute("value", searchOvernightStay, 0)}></td>
                <td><input${add_attribute("value", searchAverageStay, 0)}></td>
                <td>${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
        default: () => {
          return `Buscar dato`;
        }
      })}</td></tr></tbody>`;
    }
  })}
    <h3><u>Elementos encontrados</u></h3>
    ${validate_component(Table, "Table").$$render($$result, {}, {}, {
    default: () => {
      return `<thead><tr><th>Provincia</th>
                <th>Año</th>
                <th>Turistas</th>
                <th>Pernoctación media</th>
                <th>Estancia media</th>
                <th>Acción</th></tr></thead>
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
    <div id="buttons">${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
    default: () => {
      return `Página anterior`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
    default: () => {
      return `Página siguiente`;
    }
  })}</div>
    <h3>Crear elemento</h3>
    <div class="createData"><input id="create" class="input" placeholder="Provincia"${add_attribute("value", newFileProvince, 0)}>
        <input id="create" class="input" placeholder="Año"${add_attribute("value", newFileYear, 0)}>
        <input id="create" class="input" placeholder="Turista"${add_attribute("value", newFileTraveler, 0)}>
        <input id="create" class="input" placeholder="Pernoctacion media"${add_attribute("value", newFileOvernightStay, 0)}>
        <input id="create" class="input" placeholder="Estancia media"${add_attribute("value", newFileAverageStay, 0)}></div>
    <div id="create-button">${validate_component(Button, "Button").$$render($$result, { color: "warning" }, {}, {
    default: () => {
      return `Crear dato`;
    }
  })}</div>
    <div id="buttons"><p>¿Quieres borrarlo todo?  ¿Quieres recargar la base?</p>
        ${validate_component(Button, "Button").$$render($$result, { color: "danger" }, {}, {
    default: () => {
      return `Borrar todo`;
    }
  })}
        ${validate_component(Button, "Button").$$render($$result, { id: "load", color: "success" }, {}, {
    default: () => {
      return `Recargar datos`;
    }
  })}</div></main>`;
});
export {
  Page as default
};
