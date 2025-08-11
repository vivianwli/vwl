import { c as create_ssr_component, e as escape, r as null_to_empty } from "./index.js";
/* empty css     *//* empty css                                           */const css = {
  code: ".gallery.svelte-1525flq{display:grid;grid-template-columns:repeat(var(--columns), 1fr)}@media screen and (max-width: 50rem){.gallery.svelte-1525flq{display:block}}.half-width.svelte-1525flq{margin:auto;width:50%}@media screen and (max-width: 50rem){.half-width.svelte-1525flq{width:90%}}.caption.svelte-1525flq{text-align:center;display:block;width:50%;font-size:0.9rem;margin:1rem auto 2rem auto;color:var(--secondary-selected-color);font-style:italic}@media screen and (max-width: 50rem){.caption.svelte-1525flq{width:90%}}",
  map: null
};
const BlogGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { columns } = $$props;
  let { className } = $$props;
  let { caption = null } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty("gallery " + className), true) + " svelte-1525flq"}" style="${"--columns: " + escape(columns, true)}">${slots.default ? slots.default({}) : ``}</div>
${caption ? `<div class="${"caption svelte-1525flq"}"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></div>` : ``}`;
});
export {
  BlogGallery as B
};
