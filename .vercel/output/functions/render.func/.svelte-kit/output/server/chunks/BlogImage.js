import {
	c as create_ssr_component,
	e as escape,
	f as add_attribute,
	d as each,
	v as validate_component,
	r as null_to_empty
} from './index.js';
import { T as Tag } from './Tag.js';
/* empty css     */ const PostHeader_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.container.svelte-16z33hw{margin-bottom:3rem}h1.svelte-16z33hw{line-height:4rem}@media screen and (max-width: 32rem){h1.svelte-16z33hw{font-size:2.5rem}}',
	map: null
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
	if ($$props.publishDate === void 0 && $$bindings.publishDate && publishDate !== void 0)
		$$bindings.publishDate(publishDate);
	if ($$props.editDate === void 0 && $$bindings.editDate && editDate !== void 0)
		$$bindings.editDate(editDate);
	if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
	if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
		$$bindings.thumbnail(thumbnail);
	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
		$$bindings.summary(summary);
	$$result.css.add(css$1);
	return `${(($$result.head += `<!-- HEAD_svelte-3kds6d_START -->${(($$result.title = `<title>${escape(title)}</title>`), '')}<meta property="${'og:title'}"${add_attribute('content', title, 0)}><meta property="${'og:type'}" content="${'article'}"><meta property="${'og:image'}"${add_attribute('content', '/thumbnails/' + thumbnail, 0)}><meta property="${'og:url'}"${add_attribute('content', 'https://www.vivianwli.com/blog/' + slug, 0)}><meta property="${'og:description'}"${add_attribute('content', summary, 0)}><!-- HEAD_svelte-3kds6d_END -->`), '')}


<div class="${'container svelte-16z33hw'}"><h1 class="${'svelte-16z33hw'}">${escape(title)}</h1>
	<p class="${'date'}">PUBLISHED ${escape(publishDate)}
		${editDate ? `• LAST EDITED ${escape(editDate)}` : ``}</p>
	<div class="${'buttons'}">${each(tags, (tag) => {
		return `${validate_component(Tag, 'Tag').$$render(
			$$result,
			{ className: 'inactive' },
			{},
			{
				default: () => {
					return `${escape(tag.name)}`;
				}
			}
		)}`;
	})}</div>
</div>`;
});
const BlogImage_svelte_svelte_type_style_lang = '';
const css = {
	code: 'img.svelte-15dtf7u.svelte-15dtf7u{width:50%;display:block;margin:2rem auto 1rem auto;box-shadow:0 0 1.2rem 0.1rem var(--secondary-subtle-color)}@media screen and (max-width: 50rem){img.svelte-15dtf7u.svelte-15dtf7u{width:90%}}.caption.svelte-15dtf7u.svelte-15dtf7u{text-align:center;display:block;width:50%;font-size:0.9rem;margin:1rem auto 2rem auto;color:var(--secondary-selected-color);font-style:italic}@media screen and (max-width: 50rem){.caption.svelte-15dtf7u.svelte-15dtf7u{width:90%}}.gallery-img.svelte-15dtf7u img.svelte-15dtf7u{width:90%}.gallery-img.svelte-15dtf7u .caption.svelte-15dtf7u{width:90%}.half-img.svelte-15dtf7u img.svelte-15dtf7u{width:20rem;max-width:90%}.half-img.svelte-15dtf7u .caption.svelte-15dtf7u{width:20rem;max-width:90%}',
	map: null
};
const BlogImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { src } = $$props;
	let { caption = null } = $$props;
	let { className } = $$props;
	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
		$$bindings.caption(caption);
	if ($$props.className === void 0 && $$bindings.className && className !== void 0)
		$$bindings.className(className);
	$$result.css.add(css);
	return `<div class="${escape(null_to_empty(className), true) + ' svelte-15dtf7u'}"><img${add_attribute('src', src, 0)}${add_attribute('alt', caption, 0)} class="${'svelte-15dtf7u'}">
	<div class="${'caption svelte-15dtf7u'}"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></div>
</div>`;
});
export { BlogImage as B, PostHeader as P };
