import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component } from "../../../chunks/index.js";
/* empty css                   */import { T as Tag } from "../../../chunks/Tag.js";
import { S as SvelteToast } from "../../../chunks/SvelteToast.js";
const PostCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-container.svelte-w2j6tx.svelte-w2j6tx{background-color:var(--postcard-color);box-shadow:0 0 1rem var(--secondary-subtle-color)}.card-container.svelte-w2j6tx img.svelte-w2j6tx{width:100%}.card-container.svelte-w2j6tx .date.svelte-w2j6tx{font-size:0.8rem;margin-top:0.5rem}.card-container.svelte-w2j6tx .post-description.svelte-w2j6tx{padding:0 1rem 0.5rem 1rem}.card-container.svelte-w2j6tx h2.svelte-w2j6tx{font-size:1.2rem;margin-bottom:0.5rem}.card-container.svelte-w2j6tx a.svelte-w2j6tx{text-decoration:none;color:var(--text-color)}.card-container.svelte-w2j6tx p.svelte-w2j6tx{font-size:0.9rem}",
  map: null
};
const PostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<div class="${"card-container svelte-w2j6tx"}"><a sveltekit:prefetch sveltekit:noscroll href="${"blog/" + escape(post.slug, true)}" class="${"svelte-w2j6tx"}"><img${add_attribute("src", "/thumbnails/" + post.thumbnail + "?w=400&webp", 0)}${add_attribute("alt", post.title, 0)} class="${"svelte-w2j6tx"}">
		<div class="${"post-description svelte-w2j6tx"}"><h2 class="${"svelte-w2j6tx"}">${escape(post.title)}</h2>
			<p class="${"date svelte-w2j6tx"}">${post.editDate !== void 0 ? `EDITED ${escape(post.editDate)}` : `${post.publishDate !== void 0 ? `${escape(post.publishDate)}` : ``}`}</p>
			<div class="${"buttons"}">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
      default: () => {
        return `${escape(tag.name)}`;
      }
    })}`;
  })}</div>
			<p class="${"svelte-w2j6tx"}">${escape(post.summary)}</p></div></a>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-container.svelte-1cogf2l{display:grid;grid-template-columns:repeat(auto-fill, minmax(15rem, 1fr));grid-gap:2rem;padding:3rem 0}",
  map: null
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-6np8tt_START -->${$$result.title = `<title>blog</title>`, ""}<meta property="${"og:title"}" content="${"vivian li's blog"}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:image"}" content="${"/thumbnails/vwl-site.png"}"><meta property="${"og:url"}" content="${"https://www.vivianwli.com/blog"}"><!-- HEAD_svelte-6np8tt_END -->`, ""}

<div class="${"content"}">
	${validate_component(SvelteToast, "SvelteToast").$$render($$result, {}, {}, {})}
	<h1>blog</h1>
	<p>Ideas, experiments, and reflections. Welcome!</p>

	
	<div class="${"buttons"}">
		${each(Object.keys(selectedTags).filter((k) => selectedTags[k]), (tag) => {
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
    )}
			</div>`;
  })}
		
		${each(Object.keys(selectedTags).filter((k) => !selectedTags[k]), (tag) => {
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
    )}
			</div>`;
  })}
		
		<div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
    default: () => {
      return `clear all`;
    }
  })}</div>

		</div>
	<div class="${"post-container svelte-1cogf2l"}">
		${Object.keys(selectedTags).filter((k) => selectedTags[k]).length === 0 ? `${each(data.posts, (post) => {
    return `${post !== void 0 && post.hidden !== true ? `${validate_component(PostCard, "PostCard").$$render($$result, { post }, {}, {})}` : ``}`;
  })}
			` : `${each(data.posts, (post) => {
    return `${each(post.tags, (tag) => {
      return `${selectedTags[tag.name] ? `${post !== void 0 && post.hidden !== true ? `${validate_component(PostCard, "PostCard").$$render($$result, { post }, {}, {})}` : ``}` : ``}`;
    })}`;
  })}`}</div>
</div>`;
});
export {
  Page as default
};
