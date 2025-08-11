import { c as create_ssr_component, e as escape, r as null_to_empty } from "./ssr.js";
/* empty css    */
/* empty css                                          */
const css = {
  code: ".gallery.svelte-1525flq{display:grid;grid-template-columns:repeat(var(--columns), 1fr)}@media screen and (max-width: 50rem){.gallery.svelte-1525flq{display:block}}.half-width.svelte-1525flq{margin:auto;width:50%}@media screen and (max-width: 50rem){.half-width.svelte-1525flq{width:90%}}.caption.svelte-1525flq{text-align:center;display:block;width:50%;font-size:0.9rem;margin:1rem auto 2rem auto;color:var(--secondary-selected-color);font-style:italic}@media screen and (max-width: 50rem){.caption.svelte-1525flq{width:90%}}",
  map: `{"version":3,"file":"BlogGallery.svelte","sources":["BlogGallery.svelte"],"sourcesContent":["<script>\\n\\timport '../../app.scss';\\n\\texport let columns;\\n\\texport let className;\\n\\texport let caption = null;\\n<\/script>\\n\\n<div class={'gallery ' + className} style=\\"--columns: {columns}\\">\\n\\t<slot />\\n</div>\\n{#if caption}\\n\\t<div class=\\"caption\\">{@html caption}</div>\\n{/if}\\n\\n<style lang=\\"scss\\">.gallery {\\n  display: grid;\\n  grid-template-columns: repeat(var(--columns), 1fr);\\n}\\n@media screen and (max-width: 50rem) {\\n  .gallery {\\n    display: block;\\n  }\\n}\\n\\n.half-width {\\n  margin: auto;\\n  width: 50%;\\n}\\n@media screen and (max-width: 50rem) {\\n  .half-width {\\n    width: 90%;\\n  }\\n}\\n\\n.caption {\\n  text-align: center;\\n  display: block;\\n  width: 50%;\\n  font-size: 0.9rem;\\n  margin: 1rem auto 2rem auto;\\n  color: var(--secondary-selected-color);\\n  font-style: italic;\\n}\\n@media screen and (max-width: 50rem) {\\n  .caption {\\n    width: 90%;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAcmB,uBAAS,CAC1B,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,IAAI,SAAS,CAAC,CAAC,CAAC,GAAG,CACnD,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,uBAAS,CACP,OAAO,CAAE,KACX,CACF,CAEA,0BAAY,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GACT,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,0BAAY,CACV,KAAK,CAAE,GACT,CACF,CAEA,uBAAS,CACP,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC3B,KAAK,CAAE,IAAI,0BAA0B,CAAC,CACtC,UAAU,CAAE,MACd,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,uBAAS,CACP,KAAK,CAAE,GACT,CACF"}`
};
const BlogGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { columns } = $$props;
  let { className } = $$props;
  let { caption = null } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0) $$bindings.columns(columns);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0) $$bindings.caption(caption);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty("gallery " + className), true) + " svelte-1525flq"}" style="${"--columns: " + escape(columns, true)}">${slots.default ? slots.default({}) : ``}</div> ${caption ? `<div class="caption svelte-1525flq"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></div>` : ``}`;
});
export {
  BlogGallery as B
};
