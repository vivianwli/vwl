import { c as create_ssr_component, e as escape, r as null_to_empty } from "./index.js";
/* empty css     */const Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-jjivcc{transition:0.3s ease;width:fit-content;background-color:var(--secondary-highlight-color);border:1px solid var(--transparent);box-shadow:0 0 0.4rem var(--transparent);border-radius:30px;color:var(--dark);font-family:'Space Mono';font-weight:600;font-size:0.8rem;padding:0.4rem 0.7rem;cursor:pointer;white-space:nowrap}.clear.svelte-jjivcc{background-color:var(--transparent);border:1px solid var(--transparent) !important;height:100%}.inactive.svelte-jjivcc{background-color:var(--highlight-color) !important;color:var(--primary-selected-color);border:1px solid var(--transparent) !important;cursor:default !important;pointer-events:none}.selected.svelte-jjivcc{background-color:var(--highlight-color);color:var(--primary-selected-color)}@media(hover: hover){button.svelte-jjivcc:hover{border:1px solid var(--secondary-button-border-color);background-color:var(--secondary-button-hover-color)}.clear.svelte-jjivcc:hover{background-color:rgba(180, 180, 191, 0.1)}.selected.svelte-jjivcc:hover{border:1px solid var(--primary-button-border-color);background-color:var(--primary-button-hover-color)}}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  return `<button class="${escape(null_to_empty(className), true) + " svelte-jjivcc"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
export {
  Tag as T
};
