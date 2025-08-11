import { c as create_ssr_component, e as escape, b as each, d as add_attribute, v as validate_component, r as null_to_empty } from "./ssr.js";
import { T as Tag } from "./Tag.js";
/* empty css    */
const css$1 = {
  code: ".container.svelte-16z33hw{margin-bottom:3rem}h1.svelte-16z33hw{line-height:4rem}@media screen and (max-width: 32rem){h1.svelte-16z33hw{font-size:2.5rem}}",
  map: `{"version":3,"file":"PostHeader.svelte","sources":["PostHeader.svelte"],"sourcesContent":["<script>\\n\\timport Tag from './Tag.svelte';\\n\\texport let title;\\n\\texport let publishDate;\\n\\texport let editDate;\\n\\texport let tags;\\n\\texport let thumbnail;\\n\\texport let slug;\\n\\texport let summary;\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{title}</title>\\n\\t<meta property=\\"og:title\\" content={title} />\\n\\t<meta property=\\"og:type\\" content=\\"article\\" />\\n\\t<meta property=\\"og:image\\" content={'/thumbnails/' + thumbnail} />\\n\\t<meta property=\\"og:url\\" content={'https://www.vivianwli.com/blog/' + slug} />\\n\\t<meta property=\\"og:description\\" content={summary} />\\n</svelte:head>\\n\\n<!--Title-->\\n<div class=\\"container\\">\\n\\t<h1>{title}</h1>\\n\\t<p class=\\"date\\">\\n\\t\\tPUBLISHED {publishDate}\\n\\t\\t{#if editDate}\\n\\t\\t\\t• LAST EDITED {editDate}\\n\\t\\t{/if}\\n\\t</p>\\n\\t<div class=\\"buttons\\">\\n\\t\\t{#each tags as tag}\\n\\t\\t\\t<Tag className=\\"inactive\\">{tag.name}</Tag>\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n\\n<style lang=\\"scss\\">.container {\\n  margin-bottom: 3rem;\\n}\\n\\nh1 {\\n  line-height: 4rem;\\n}\\n@media screen and (max-width: 32rem) {\\n  h1 {\\n    font-size: 2.5rem;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAoCmB,yBAAW,CAC5B,aAAa,CAAE,IACjB,CAEA,iBAAG,CACD,WAAW,CAAE,IACf,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,iBAAG,CACD,SAAS,CAAE,MACb,CACF"}`
};
const PostHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { publishDate } = $$props;
  let { editDate } = $$props;
  let { tags } = $$props;
  let { thumbnail } = $$props;
  let { slug } = $$props;
  let { summary } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.publishDate === void 0 && $$bindings.publishDate && publishDate !== void 0) $$bindings.publishDate(publishDate);
  if ($$props.editDate === void 0 && $$bindings.editDate && editDate !== void 0) $$bindings.editDate(editDate);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0) $$bindings.thumbnail(thumbnail);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0) $$bindings.summary(summary);
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-3kds6d_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:type" content="article"><meta property="og:image"${add_attribute("content", "/thumbnails/" + thumbnail, 0)}><meta property="og:url"${add_attribute("content", "https://www.vivianwli.com/blog/" + slug, 0)}><meta property="og:description"${add_attribute("content", summary, 0)}><!-- HEAD_svelte-3kds6d_END -->`, ""}  <div class="container svelte-16z33hw"><h1 class="svelte-16z33hw">${escape(title)}</h1> <p class="date">PUBLISHED ${escape(publishDate)} ${editDate ? `• LAST EDITED ${escape(editDate)}` : ``}</p> <div class="buttons">${each(tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
      default: () => {
        return `${escape(tag.name)}`;
      }
    })}`;
  })}</div> </div>`;
});
const css = {
  code: "img.svelte-15dtf7u.svelte-15dtf7u{width:50%;display:block;margin:2rem auto 1rem auto;box-shadow:0 0 1.2rem 0.1rem var(--secondary-subtle-color)}@media screen and (max-width: 50rem){img.svelte-15dtf7u.svelte-15dtf7u{width:90%}}.caption.svelte-15dtf7u.svelte-15dtf7u{text-align:center;display:block;width:50%;font-size:0.9rem;margin:1rem auto 2rem auto;color:var(--secondary-selected-color);font-style:italic}@media screen and (max-width: 50rem){.caption.svelte-15dtf7u.svelte-15dtf7u{width:90%}}.gallery-img.svelte-15dtf7u img.svelte-15dtf7u{width:90%}.gallery-img.svelte-15dtf7u .caption.svelte-15dtf7u{width:90%}.half-img.svelte-15dtf7u img.svelte-15dtf7u{width:20rem;max-width:90%}.half-img.svelte-15dtf7u .caption.svelte-15dtf7u{width:20rem;max-width:90%}",
  map: `{"version":3,"file":"BlogImage.svelte","sources":["BlogImage.svelte"],"sourcesContent":["<script>\\n\\timport '../../app.scss';\\n\\texport let src;\\n\\texport let caption = null;\\n\\texport let className;\\n<\/script>\\n\\n<div class={className}>\\n\\t<img {src} alt={caption} />\\n\\t<div class=\\"caption\\">{@html caption}</div>\\n</div>\\n\\n<style lang=\\"scss\\">img {\\n  width: 50%;\\n  display: block;\\n  margin: 2rem auto 1rem auto;\\n  box-shadow: 0 0 1.2rem 0.1rem var(--secondary-subtle-color);\\n}\\n@media screen and (max-width: 50rem) {\\n  img {\\n    width: 90%;\\n  }\\n}\\n\\n.caption {\\n  text-align: center;\\n  display: block;\\n  width: 50%;\\n  font-size: 0.9rem;\\n  margin: 1rem auto 2rem auto;\\n  color: var(--secondary-selected-color);\\n  font-style: italic;\\n}\\n@media screen and (max-width: 50rem) {\\n  .caption {\\n    width: 90%;\\n  }\\n}\\n\\n.gallery-img img {\\n  width: 90%;\\n}\\n.gallery-img .caption {\\n  width: 90%;\\n}\\n\\n.half-img img {\\n  width: 20rem;\\n  max-width: 90%;\\n}\\n.half-img .caption {\\n  width: 20rem;\\n  max-width: 90%;\\n}</style>\\n"],"names":[],"mappings":"AAYmB,iCAAI,CACrB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC3B,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,MAAM,CAAC,IAAI,wBAAwB,CAC5D,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,iCAAI,CACF,KAAK,CAAE,GACT,CACF,CAEA,sCAAS,CACP,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC3B,KAAK,CAAE,IAAI,0BAA0B,CAAC,CACtC,UAAU,CAAE,MACd,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,sCAAS,CACP,KAAK,CAAE,GACT,CACF,CAEA,2BAAY,CAAC,kBAAI,CACf,KAAK,CAAE,GACT,CACA,2BAAY,CAAC,uBAAS,CACpB,KAAK,CAAE,GACT,CAEA,wBAAS,CAAC,kBAAI,CACZ,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,GACb,CACA,wBAAS,CAAC,uBAAS,CACjB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,GACb"}`
};
const BlogImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { caption = null } = $$props;
  let { className } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0) $$bindings.caption(caption);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(className), true) + " svelte-15dtf7u"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", caption, 0)} class="svelte-15dtf7u"> <div class="caption svelte-15dtf7u"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></div> </div>`;
});
export {
  BlogImage as B,
  PostHeader as P
};
