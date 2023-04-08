import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, j as add_attribute, e as escape, a as setContext, v as validate_component, k as each } from "../../../chunks/index.js";
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(" ");
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let classes;
  let defaultAriaLabel;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "active",
    "block",
    "children",
    "close",
    "color",
    "disabled",
    "href",
    "inner",
    "outline",
    "size",
    "style",
    "value",
    "white"
  ]);
  let { class: className2 = "" } = $$props;
  let { active = false } = $$props;
  let { block = false } = $$props;
  let { children = void 0 } = $$props;
  let { close = false } = $$props;
  let { color = "secondary" } = $$props;
  let { disabled = false } = $$props;
  let { href = "" } = $$props;
  let { inner = void 0 } = $$props;
  let { outline = false } = $$props;
  let { size = null } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  let { white = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className2 !== void 0)
    $$bindings.class(className2);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.white === void 0 && $$bindings.white && white !== void 0)
    $$bindings.white(white);
  ariaLabel = $$props["aria-label"];
  classes = classnames(className2, close ? "btn-close" : "btn", close || `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, {
    active,
    "btn-close-white": close && white
  });
  defaultAriaLabel = close ? "Close" : null;
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { disabled: disabled || null },
      { href: escape_attribute_value(href) },
      {
        "aria-label": escape_attribute_value(ariaLabel || defaultAriaLabel)
      },
      { style: escape_attribute_value(style) }
    ],
    {}
  )}${add_attribute("this", inner, 0)}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</a>` : `<button${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { disabled: disabled || null },
      { value: escape_attribute_value(value) },
      {
        "aria-label": escape_attribute_value(ariaLabel || defaultAriaLabel)
      },
      { style: escape_attribute_value(style) }
    ],
    {}
  )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      ${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}
    `}</button>`}`;
});
const Modal_svelte_svelte_type_style_lang = "";
const Offcanvas_svelte_svelte_type_style_lang = "";
const Colgroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("colgroup", true);
  return `<colgroup>${slots.default ? slots.default({}) : ``}</colgroup>`;
});
let className = "";
const ResponsiveContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let responsiveClassName;
  let { responsive = false } = $$props;
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  responsiveClassName = classnames(className, {
    "table-responsive": responsive === true,
    [`table-responsive-${responsive}`]: typeof responsive === "string"
  });
  return `${responsive ? `<div${add_attribute("class", responsiveClassName, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const TableFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("footer", true);
  return `<tfoot${spread([escape_object($$restProps)], {})}><tr>${slots.default ? slots.default({}) : ``}</tr></tfoot>`;
});
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("header", true);
  return `<thead${spread([escape_object($$restProps)], {})}><tr>${slots.default ? slots.default({}) : ``}</tr></thead>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "size",
    "bordered",
    "borderless",
    "striped",
    "dark",
    "hover",
    "responsive",
    "rows"
  ]);
  let { class: className2 = "" } = $$props;
  let { size = "" } = $$props;
  let { bordered = false } = $$props;
  let { borderless = false } = $$props;
  let { striped = false } = $$props;
  let { dark = false } = $$props;
  let { hover = false } = $$props;
  let { responsive = false } = $$props;
  let { rows = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className2 !== void 0)
    $$bindings.class(className2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.bordered === void 0 && $$bindings.bordered && bordered !== void 0)
    $$bindings.bordered(bordered);
  if ($$props.borderless === void 0 && $$bindings.borderless && borderless !== void 0)
    $$bindings.borderless(borderless);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  classes = classnames(className2, "table", size ? "table-" + size : false, bordered ? "table-bordered" : false, borderless ? "table-borderless" : false, striped ? "table-striped" : false, dark ? "table-dark" : false, hover ? "table-hover" : false);
  return `${validate_component(ResponsiveContainer, "ResponsiveContainer").$$render($$result, { responsive }, {}, {
    default: () => {
      return `<table${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${rows ? `${validate_component(Colgroup, "Colgroup").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
      ${validate_component(TableHeader, "TableHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({ row }) : ``}`;
        }
      })}
      <tbody>${each(rows, (row2) => {
        return `<tr>${slots.default ? slots.default({ row: row2 }) : ``}
          </tr>`;
      })}</tbody>
      ${validate_component(TableFooter, "TableFooter").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}` : `${slots.default ? slots.default({}) : ``}`}</table>`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#result.svelte-jo0cbs{margin-top:30px}h1.svelte-jo0cbs{padding-top:50px;text-align:center;margin-bottom:20px}main.svelte-jo0cbs{margin-left:100px;margin-right:40px}#delete-all.svelte-jo0cbs{font-style:oblique;text-align:center;padding-top:40px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let datos = [];
  let newFileProvince = "";
  let newFileYear = "";
  let newFileTraveler = "";
  let newFileOvernightStay = "";
  let newFileAverageStay = "";
  $$result.css.add(css);
  return `<main class="svelte-jo0cbs"><h1 class="svelte-jo0cbs"><u>Apartment-Occupancy-Surveys</u></h1>
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
                    <td>${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Delete`;
          }
        })}
                        ${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Edit`;
          }
        })}</td>
                </tr>`;
      })}</tbody>`;
    }
  })}

    <h1 class="svelte-jo0cbs">Create data</h1>
    <div><input placeholder="Province"${add_attribute("value", newFileProvince, 0)}>
        <input placeholder="Year"${add_attribute("value", newFileYear, 0)}>
        <input placeholder="Traveler"${add_attribute("value", newFileTraveler, 0)}>
        <input placeholder="Overnight stay"${add_attribute("value", newFileOvernightStay, 0)}>
        <input placeholder="Average stay"${add_attribute("value", newFileAverageStay, 0)}>
        ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Create`;
    }
  })}</div>

    ${``}

    <div id="delete-all" class="svelte-jo0cbs"><p>¿Quieres borrar todos los datos?</p>
        ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Borrar todo`;
    }
  })}</div>
</main>`;
});
export {
  Page as default
};
