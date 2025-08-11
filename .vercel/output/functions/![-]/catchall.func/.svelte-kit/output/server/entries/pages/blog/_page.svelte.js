import { c as create_ssr_component, d as add_attribute, e as escape, b as each, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                  */
import { T as Tag } from "../../../chunks/Tag.js";
import { S as SvelteToast } from "../../../chunks/SvelteToast.js";
import "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
const css$1 = {
  code: ".card-container.svelte-w2j6tx.svelte-w2j6tx{background-color:var(--postcard-color);box-shadow:0 0 1rem var(--secondary-subtle-color)}.card-container.svelte-w2j6tx img.svelte-w2j6tx{width:100%}.card-container.svelte-w2j6tx .date.svelte-w2j6tx{font-size:0.8rem;margin-top:0.5rem}.card-container.svelte-w2j6tx .post-description.svelte-w2j6tx{padding:0 1rem 0.5rem 1rem}.card-container.svelte-w2j6tx h2.svelte-w2j6tx{font-size:1.2rem;margin-bottom:0.5rem}.card-container.svelte-w2j6tx a.svelte-w2j6tx{text-decoration:none;color:var(--text-color)}.card-container.svelte-w2j6tx p.svelte-w2j6tx{font-size:0.9rem}",
  map: `{"version":3,"file":"PostCard.svelte","sources":["PostCard.svelte"],"sourcesContent":["<script>\\n\\timport '../../app.scss';\\n\\texport let post;\\n\\timport Tag from './Tag.svelte';\\n<\/script>\\n\\n<div class=\\"card-container\\">\\n\\t<a\\n\\t\\tsveltekit:prefetch\\n\\t\\tsveltekit:noscroll\\n\\t\\thref=\\"blog/{post.slug}\\"\\n\\t\\ton:click={() =>\\n\\t\\t\\tsetTimeout(() => {\\n\\t\\t\\t\\tdocument.body.scrollTop = document.documentElement.scrollTop = 0;\\n\\t\\t\\t}, 600)}\\n\\t>\\n\\t\\t<img src={'/thumbnails/' + post.thumbnail + '?w=400&webp'} alt={post.title} />\\n\\t\\t<div class=\\"post-description\\">\\n\\t\\t\\t<h2>{post.title}</h2>\\n\\t\\t\\t<p class=\\"date\\">\\n\\t\\t\\t\\t{#if post.editDate !== undefined}\\n\\t\\t\\t\\t\\tEDITED {post.editDate}\\n\\t\\t\\t\\t{:else if post.publishDate !== undefined}\\n\\t\\t\\t\\t\\t{post.publishDate}\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</p>\\n\\t\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t\\t{#each post.tags as tag}\\n\\t\\t\\t\\t\\t<Tag className=\\"inactive\\">{tag.name}</Tag>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<p>{post.summary}</p>\\n\\t\\t</div>\\n\\t</a>\\n</div>\\n\\n<style lang=\\"scss\\">.card-container {\\n  background-color: var(--postcard-color);\\n  box-shadow: 0 0 1rem var(--secondary-subtle-color);\\n}\\n.card-container img {\\n  width: 100%;\\n}\\n.card-container .date {\\n  font-size: 0.8rem;\\n  margin-top: 0.5rem;\\n}\\n.card-container .post-description {\\n  padding: 0 1rem 0.5rem 1rem;\\n}\\n.card-container h2 {\\n  font-size: 1.2rem;\\n  margin-bottom: 0.5rem;\\n}\\n.card-container a {\\n  text-decoration: none;\\n  color: var(--text-color);\\n}\\n.card-container p {\\n  font-size: 0.9rem;\\n}</style>\\n"],"names":[],"mappings":"AAoCmB,2CAAgB,CACjC,gBAAgB,CAAE,IAAI,gBAAgB,CAAC,CACvC,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,wBAAwB,CACnD,CACA,6BAAe,CAAC,iBAAI,CAClB,KAAK,CAAE,IACT,CACA,6BAAe,CAAC,mBAAM,CACpB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MACd,CACA,6BAAe,CAAC,+BAAkB,CAChC,OAAO,CAAE,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,IACzB,CACA,6BAAe,CAAC,gBAAG,CACjB,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,MACjB,CACA,6BAAe,CAAC,eAAE,CAChB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,YAAY,CACzB,CACA,6BAAe,CAAC,eAAE,CAChB,SAAS,CAAE,MACb"}`
};
const PostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
  $$result.css.add(css$1);
  return `<div class="card-container svelte-w2j6tx"><a sveltekit:prefetch sveltekit:noscroll href="${"blog/" + escape(post.slug, true)}" class="svelte-w2j6tx"><img${add_attribute("src", "/thumbnails/" + post.thumbnail + "?w=400&webp", 0)}${add_attribute("alt", post.title, 0)} class="svelte-w2j6tx"> <div class="post-description svelte-w2j6tx"><h2 class="svelte-w2j6tx">${escape(post.title)}</h2> <p class="date svelte-w2j6tx">${post.editDate !== void 0 ? `EDITED ${escape(post.editDate)}` : `${post.publishDate !== void 0 ? `${escape(post.publishDate)}` : ``}`}</p> <div class="buttons">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
      default: () => {
        return `${escape(tag.name)}`;
      }
    })}`;
  })}</div> <p class="svelte-w2j6tx">${escape(post.summary)}</p></div></a> </div>`;
});
const css = {
  code: ".post-container.svelte-1cogf2l{display:grid;grid-template-columns:repeat(auto-fill, minmax(15rem, 1fr));grid-gap:2rem;padding:3rem 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\texport let data;\\n\\n\\t// component imports\\n\\timport PostCard from '$lib/components/PostCard.svelte';\\n\\timport Tag from '$lib/components/Tag.svelte';\\n\\n\\t// toast import\\n\\timport { SvelteToast } from '@zerodevx/svelte-toast';\\n\\n\\t// no selected tags by default\\n\\tlet selectedTags = {};\\n\\n\\t// clear all selected tags\\n\\tfunction clear() {\\n\\t\\tfor (const key in selectedTags) {\\n\\t\\t\\tselectedTags[key] = false;\\n\\t\\t}\\n\\t}\\n\\n\\tfor (const post of data.posts) {\\n\\t\\t// create a date object for each post\\n\\t\\tif (post !== undefined) {\\n\\t\\t\\tif (post.editDate !== undefined) {\\n\\t\\t\\t\\tpost.dateObj = new Date(post.editDate);\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tpost.dateObj = new Date(post.publishDate);\\n\\t\\t\\t}\\n\\n\\t\\t\\t// add tags from all posts\\n\\t\\t\\tfor (const postTag of post.tags) {\\n\\t\\t\\t\\tselectedTags[postTag.name] = false;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\t// sort posts by date\\n\\tdata.posts.sort((a, b) => b.dateObj - a.dateObj);\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>blog</title>\\n\\t<meta property=\\"og:title\\" content=\\"vivian li's blog\\" />\\n\\t<meta property=\\"og:type\\" content=\\"website\\" />\\n\\t<meta property=\\"og:image\\" content=\\"/thumbnails/vwl-site.png\\" />\\n\\t<meta property=\\"og:url\\" content=\\"https://www.vivianwli.com/blog\\" />\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<!-- toast that only shows after user subscribes to the newsletter -->\\n\\t<SvelteToast />\\n\\t<h1>blog</h1>\\n\\t<p>Ideas, experiments, and reflections. Welcome!</p>\\n\\n\\t<!-- tag filters -->\\n\\t<div class=\\"buttons\\">\\n\\t\\t<!-- display selected tags first -->\\n\\t\\t{#each Object.keys(selectedTags).filter((k) => selectedTags[k]) as tag}\\n\\t\\t\\t<div\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tselectedTags[tag] = !selectedTags[tag];\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<Tag className={selectedTags[tag] ? 'selected' : ''}>{tag}</Tag>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t\\t<!-- display inactive tags -->\\n\\t\\t{#each Object.keys(selectedTags).filter((k) => !selectedTags[k]) as tag}\\n\\t\\t\\t<div\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tselectedTags[tag] = !selectedTags[tag];\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<Tag className={selectedTags[tag] ? 'selected' : ''}>{tag}</Tag>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t\\t<!-- clear all button -->\\n\\t\\t<div on:click={() => clear()}>\\n\\t\\t\\t<Tag className=\\"clear\\">clear all</Tag>\\n\\t\\t</div>\\n\\n\\t\\t<!-- posts! -->\\n\\t</div>\\n\\t<div class=\\"post-container\\">\\n\\t\\t<!-- if no tags have been selected, display all posts -->\\n\\t\\t{#if Object.keys(selectedTags).filter((k) => selectedTags[k]).length === 0}\\n\\t\\t\\t{#each data.posts as post}\\n\\t\\t\\t\\t{#if post !== undefined && post.hidden !== true}\\n\\t\\t\\t\\t\\t<PostCard {post} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t{/each}\\n\\t\\t\\t<!-- if at least one tag has been selected, only display posts with matching tags -->\\n\\t\\t{:else}\\n\\t\\t\\t{#each data.posts as post}\\n\\t\\t\\t\\t{#each post.tags as tag}\\n\\t\\t\\t\\t\\t{#if selectedTags[tag.name]}\\n\\t\\t\\t\\t\\t\\t{#if post !== undefined && post.hidden !== true}\\n\\t\\t\\t\\t\\t\\t\\t<PostCard {post} />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t{/each}\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t/* responsive grid layout for posts */\\n\\t.post-container {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\\n\\t\\tgrid-gap: 2rem;\\n\\t\\tpadding: 3rem 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2GC,8BAAgB,CACf,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5D,QAAQ,CAAE,IAAI,CACd,OAAO,CAAE,IAAI,CAAC,CACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let selectedTags = {};
  for (const post of data.posts) {
    if (post !== void 0) {
      if (post.editDate !== void 0) {
        post.dateObj = new Date(post.editDate);
      } else {
        post.dateObj = new Date(post.publishDate);
      }
      for (const postTag of post.tags) {
        selectedTags[postTag.name] = false;
      }
    }
  }
  data.posts.sort((a, b) => b.dateObj - a.dateObj);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-6np8tt_START -->${$$result.title = `<title>blog</title>`, ""}<meta property="og:title" content="vivian li's blog"><meta property="og:type" content="website"><meta property="og:image" content="/thumbnails/vwl-site.png"><meta property="og:url" content="https://www.vivianwli.com/blog"><!-- HEAD_svelte-6np8tt_END -->`, ""} <div class="content"> ${validate_component(SvelteToast, "SvelteToast").$$render($$result, {}, {}, {})} <h1 data-svelte-h="svelte-cvg234">blog</h1> <p data-svelte-h="svelte-1xukavm">Ideas, experiments, and reflections. Welcome!</p>  <div class="buttons"> ${each(Object.keys(selectedTags).filter((k) => selectedTags[k]), (tag) => {
    return `<div>${validate_component(Tag, "Tag").$$render(
      $$result,
      {
        className: selectedTags[tag] ? "selected" : ""
      },
      {},
      {
        default: () => {
          return `${escape(tag)}`;
        }
      }
    )} </div>`;
  })}  ${each(Object.keys(selectedTags).filter((k) => !selectedTags[k]), (tag) => {
    return `<div>${validate_component(Tag, "Tag").$$render(
      $$result,
      {
        className: selectedTags[tag] ? "selected" : ""
      },
      {},
      {
        default: () => {
          return `${escape(tag)}`;
        }
      }
    )} </div>`;
  })}  <div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
    default: () => {
      return `clear all`;
    }
  })}</div> </div> <div class="post-container svelte-1cogf2l"> ${Object.keys(selectedTags).filter((k) => selectedTags[k]).length === 0 ? `${each(data.posts, (post) => {
    return `${post !== void 0 && post.hidden !== true ? `${validate_component(PostCard, "PostCard").$$render($$result, { post }, {}, {})}` : ``}`;
  })} ` : `${each(data.posts, (post) => {
    return `${each(post.tags, (tag) => {
      return `${selectedTags[tag.name] ? `${post !== void 0 && post.hidden !== true ? `${validate_component(PostCard, "PostCard").$$render($$result, { post }, {}, {})}` : ``}` : ``}`;
    })}`;
  })}`}</div> </div>`;
});
export {
  Page as default
};
