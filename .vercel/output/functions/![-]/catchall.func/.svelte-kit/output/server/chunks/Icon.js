import { c as create_ssr_component, j as spread, l as escape_attribute_value, p as escape_object } from "./ssr.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { size = "1em" } = $$props;
  let { viewBox = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { className = "" } = $$props;
  let innerHtml;
  let attr = {};
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0) $$bindings.viewBox(viewBox);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  {
    {
      attr = {};
      if (color) {
        if (src.a.stroke !== "none") {
          attr.stroke = color;
        }
        if (src.a.fill !== "none") {
          attr.fill = color;
        }
      }
    }
  }
  {
    {
      innerHtml = (title ? `<title>${title}</title>` : "") + src.c;
    }
  }
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "0" },
      { class: escape_attribute_value(className) },
      escape_object(src.a),
      escape_object(attr),
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${innerHtml}<!-- HTML_TAG_END --></svg>`;
});
export {
  Icon as I
};
