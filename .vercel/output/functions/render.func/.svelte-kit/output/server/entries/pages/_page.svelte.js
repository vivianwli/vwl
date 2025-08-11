import {
	c as create_ssr_component,
	f as add_attribute,
	v as validate_component
} from '../../chunks/index.js';
/* empty css                */ import { I as Icon } from '../../chunks/Icon.js';
import FiArrowDownCircle from 'svelte-icons-pack/fi/FiArrowDownCircle.js';
import { S as SvelteToast } from '../../chunks/SvelteToast.js';
import FiMail from 'svelte-icons-pack/fi/FiMail.js';
import FiGithub from 'svelte-icons-pack/fi/FiGithub.js';
import FiLinkedin from 'svelte-icons-pack/fi/FiLinkedin.js';
import FiInstagram from 'svelte-icons-pack/fi/FiInstagram.js';
const Link_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: "a.svelte-1qf0kt9{transition:0.3s ease;width:fit-content;border:1px solid var(--transparent);background-color:var(--highlight-color);box-shadow:0 0 0.4rem var(--transparent);border-radius:30px;color:var(--primary-selected-color);font-family:'Space Mono';font-weight:600;font-size:0.8rem;padding:0.4rem 0.7rem;cursor:pointer;white-space:nowrap;text-decoration:none}@media(hover: hover){a.svelte-1qf0kt9:hover{border:1px solid var(--primary-button-border-color);background-color:var(--primary-button-hover-color)}}",
	map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { link = '/' } = $$props;
	if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
	$$result.css.add(css$1);
	return `<a sveltekit:prefetch sveltekit:noscroll${add_attribute('href', link, 0)} class="${'svelte-1qf0kt9'}">${slots.default ? slots.default({}) : ``}
</a>`;
});
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		{
			src: FiArrowDownCircle,
			className: 'custom-icon arrow'
		},
		{},
		{}
	)}`;
});
const vivian = '/_app/immutable/assets/vivian-aug2025-26937ab6.webp';
const design1 = '/_app/immutable/assets/market-fermentation-2-bb480940.webp';
const design2 = '/_app/immutable/assets/trader-joes-big-86c035fe.webp';
const code1 = '/_app/immutable/assets/research-2-b5ca7a69.webp';
const code2 = '/_app/immutable/assets/intro-code-95867d96.svg?w=400&webp';
const code3 = '/_app/immutable/assets/research-1-f5fb7a7d.webp';
const write1 = '/_app/immutable/assets/greenwashing-1-16bed324.webp';
const write2 = '/_app/immutable/assets/viv-nytimes-7ed68fa0.webp';
const write3 = '/_app/immutable/assets/greenwashing-2-e2173e50.webp';
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: '.section.svelte-jnvd3t.svelte-jnvd3t{scroll-snap-align:start}@media screen and (max-width: 50rem){}.mini-section.svelte-jnvd3t.svelte-jnvd3t{display:grid;grid-template-columns:1fr 1fr;margin-top:10vh}@media screen and (max-width: 50rem){.mini-section.svelte-jnvd3t.svelte-jnvd3t{grid-template-columns:1fr;grid-template-rows:1fr 1fr}}.mini-section.svelte-jnvd3t img.svelte-jnvd3t{box-shadow:0 0 1.2rem 0.1rem var(--secondary-subtle-color);max-width:100%}.things.svelte-jnvd3t .mini-section.svelte-jnvd3t{margin:20vh 0vw 10vh 0vw}.mini-section.svelte-jnvd3t .avatar.svelte-jnvd3t{width:75%;max-width:20rem;margin:auto;border-radius:100%}@media screen and (max-width: 50rem){.mini-section.svelte-jnvd3t .avatar.svelte-jnvd3t{width:100%}}.text-right.svelte-jnvd3t.svelte-jnvd3t{display:flex;justify-content:center;flex-direction:column;margin-left:10%}@media screen and (max-width: 50rem){.text-right.svelte-jnvd3t.svelte-jnvd3t{margin:auto}}.text-left.svelte-jnvd3t.svelte-jnvd3t{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;text-align:right;margin-right:10%}@media screen and (max-width: 50rem){.text-left.svelte-jnvd3t.svelte-jnvd3t{margin:auto}}.image-right.svelte-jnvd3t.svelte-jnvd3t{margin-left:10%}@media screen and (max-width: 50rem){.image-right.svelte-jnvd3t.svelte-jnvd3t{order:-1;margin:auto}}.image-left.svelte-jnvd3t.svelte-jnvd3t{margin-right:10%}@media screen and (max-width: 50rem){.image-left.svelte-jnvd3t.svelte-jnvd3t{margin:auto}}.intro.svelte-jnvd3t.svelte-jnvd3t{padding-top:5vh}.intro.svelte-jnvd3t .text-right.svelte-jnvd3t{margin-left:0}.intro.svelte-jnvd3t h1.svelte-jnvd3t{margin-top:0;line-height:3rem}.image-stack.svelte-jnvd3t.svelte-jnvd3t{display:grid;grid-template-columns:repeat(12, 1fr);align-content:center;position:relative;padding-top:2em;max-width:25rem}.design-top.svelte-jnvd3t.svelte-jnvd3t{grid-column:8/-1;grid-row:1;z-index:1;transform:rotate(12deg)}.design-bottom.svelte-jnvd3t.svelte-jnvd3t{grid-column:1/span 8;grid-row:1;padding-top:20%;transform:rotate(-10deg)}.code-top.svelte-jnvd3t.svelte-jnvd3t{grid-column:7/-1;grid-row:1;z-index:2;padding-top:20%;transform:rotate(10deg)}.code-middle.svelte-jnvd3t.svelte-jnvd3t{grid-column:1/span 7;grid-row:1;z-index:1;padding-top:75%}.code-bottom.svelte-jnvd3t.svelte-jnvd3t{grid-column:3/span 6;grid-row:1;transform:rotate(-5deg)}.write-top.svelte-jnvd3t.svelte-jnvd3t{grid-column:4/-1;grid-row:1;z-index:2;padding-top:40%;transform:rotate(-15deg)}.write-middle.svelte-jnvd3t.svelte-jnvd3t{grid-column:1/span 6;grid-row:1;z-index:1;transform:rotate(-5deg)}.write-bottom.svelte-jnvd3t.svelte-jnvd3t{grid-column:4/-1;grid-row:1;padding-top:7.5%;transform:rotate(8deg)}.outro.svelte-jnvd3t.svelte-jnvd3t{height:70svh;padding-top:10svh;display:flex;gap:12px;flex-direction:column;justify-content:center;align-items:center}@media screen and (max-width: 50rem){}@media screen and (max-width: 50rem){}.outro.svelte-jnvd3t .media-icon-container.svelte-jnvd3t{display:flex;gap:6px;justify-content:center}.outro.svelte-jnvd3t .media-icon{font-size:1.5rem !important}.outro.svelte-jnvd3t .hidden{visibility:hidden}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `${(($$result.head += `<!-- HEAD_svelte-lejy8w_START -->${(($$result.title = `<title>home</title>`), '')}<meta property="${'og:title'}" content="${"vivian li's website"}"><meta property="${'og:type'}" content="${'website'}"><meta property="${'og:image'}" content="${'/thumbnails/vwl-site.png'}"><meta property="${'og:url'}" content="${'https://www.vivianwli.com'}"><!-- HEAD_svelte-lejy8w_END -->`), '')}

<div class="${'content'}">
	${validate_component(SvelteToast, 'SvelteToast').$$render($$result, {}, {}, {})}
	
	<div class="${'section svelte-jnvd3t'}"><div class="${'mini-section intro svelte-jnvd3t'}"><img class="${'avatar svelte-jnvd3t'}"${add_attribute('src', vivian, 0)} alt="${'viv'}">
			<div class="${'text-right svelte-jnvd3t'}"><h1 class="${'svelte-jnvd3t'}">hello! i&#39;m vivian li.</h1>
				<p>I’m a product designer and UX engineer based in New York City. <b>I love to use design and data to tell stories in beautiful ways</b>, especially about human computer interaction, social connection, and urban
					sustainability. Welcome to my playground!
				</p>
				${validate_component(Link, 'Link').$$render(
					$$result,
					{
						link: 'https://drive.google.com/file/d/1aSM2-1e58h34HcEf8wKtLJuGWerz8NhD/view?usp=sharing'
					},
					{},
					{
						default: () => {
							return `resume`;
						}
					}
				)}</div></div>
		${validate_component(Arrow, 'Arrow').$$render($$result, {}, {}, {})}</div>
	
	<div class="${'section things svelte-jnvd3t'}">
		<div class="${'mini-section svelte-jnvd3t'}"><div class="${'text-left svelte-jnvd3t'}"><h1>i design...</h1>
				<p>I craft visually impactful and delightful experiences, from user interfaces to illustrated
					cards to low-poly 3D worlds. I&#39;m always looking for the small beauties of daily life.
				</p>
				${validate_component(Link, 'Link').$$render(
					$$result,
					{ link: '/portfolio' },
					{},
					{
						default: () => {
							return `my design portfolio`;
						}
					}
				)}</div>
			<div class="${'image-stack image-right svelte-jnvd3t'}"><div class="${'image-stack-item design-top svelte-jnvd3t'}"><img${add_attribute('src', design1, 0)} alt="${'market fermentation poster design'}" class="${'svelte-jnvd3t'}"></div>
				<div class="${'image-stack-item design-bottom svelte-jnvd3t'}"><img${add_attribute('src', design2, 0)} alt="${'low poly trader joes'}" class="${'svelte-jnvd3t'}"></div></div></div>
		
		<div class="${'mini-section svelte-jnvd3t'}"><div class="${'image-stack image-left svelte-jnvd3t'}"><div class="${'image-stack-item code-top svelte-jnvd3t'}"><img${add_attribute('src', code1, 0)} alt="${'my senior research project'}" class="${'svelte-jnvd3t'}"></div>
				<div class="${'image-stack-item code-middle svelte-jnvd3t'}"><img${add_attribute('src', code2, 0)} alt="${'code-ception of this homepage'}" class="${'svelte-jnvd3t'}"></div>
				<div class="${'image-stack-item code-bottom svelte-jnvd3t'}"><img${add_attribute('src', code3, 0)} alt="${'my senior research project'}" class="${'svelte-jnvd3t'}"></div></div>
			<div class="${'text-right svelte-jnvd3t'}"><h1>i code...</h1>
				<p>I bring my visual ideas to life, using web and app development to propel data stories and
					other digital experiences. I&#39;m also a Svelte lover (here&#39;s <a href="${'/blog/made-with-svelte-kit'}">how I coded this site</a>)!
				</p>
				<div class="${'buttons'}">${validate_component(Link, 'Link').$$render(
					$$result,
					{ link: 'https://github.com/teacupkittie' },
					{},
					{
						default: () => {
							return `my github`;
						}
					}
				)}
					${validate_component(Link, 'Link').$$render(
						$$result,
						{ link: '/blog' },
						{},
						{
							default: () => {
								return `my blog`;
							}
						}
					)}</div></div></div>
		
		<div class="${'mini-section svelte-jnvd3t'}"><div class="${'text-left svelte-jnvd3t'}"><h1>i write...</h1>
				<p>A picture may be worth a thousand words, but I have a longstanding respect for distilling
					concepts to their core components and sharing them effectively. Reading and writing lives
					at the forefront of how I communicate ideas.
				</p>
				<div class="${'buttons'}">${validate_component(Link, 'Link').$$render(
					$$result,
					{ link: '/portfolio?tab=projects' },
					{},
					{
						default: () => {
							return `my writing portfolio`;
						}
					}
				)}
					${validate_component(Link, 'Link').$$render(
						$$result,
						{ link: '/blog' },
						{},
						{
							default: () => {
								return `my blog`;
							}
						}
					)}</div></div>
			<div class="${'image-stack image-right svelte-jnvd3t'}"><div class="${'image-stack-item write-top svelte-jnvd3t'}"><img${add_attribute('src', write1, 0)} alt="${'an article i wrote on greenwashing'}" class="${'svelte-jnvd3t'}"></div>
				<div class="${'image-stack-item write-middle svelte-jnvd3t'}"><img${add_attribute('src', write2, 0)} alt="${'an article i wrote on marine plastic pollution'}" class="${'svelte-jnvd3t'}"></div>
				<div class="${'image-stack-item write-bottom svelte-jnvd3t'}"><img${add_attribute('src', write3, 0)} alt="${'an article i wrote on greenwashing'}" class="${'svelte-jnvd3t'}"></div></div></div>
		${validate_component(Arrow, 'Arrow').$$render($$result, {}, {}, {})}</div>
	
	<div class="${'section outro svelte-jnvd3t'}"><h1>i create.</h1>
		
		<div class="${'media-icon-container svelte-jnvd3t'}"><a sveltekit:prefetch href="${'mailto:vivianwli.design@gmail.com'}" target="${'_blank'}">${validate_component(
			Icon,
			'Icon'
		).$$render(
			$$result,
			{
				src: FiMail,
				className: 'custom-icon media-icon'
			},
			{},
			{}
		)}</a>
			<a sveltekit:prefetch href="${'https://github.com/vivianwli'}" target="${'_blank'}">${validate_component(
				Icon,
				'Icon'
			).$$render(
				$$result,
				{
					src: FiGithub,
					className: 'custom-icon media-icon'
				},
				{},
				{}
			)}</a>
			<a sveltekit:prefetch href="${'https://www.linkedin.com/in/vivianwli/'}" target="${'_blank'}">${validate_component(
				Icon,
				'Icon'
			).$$render(
				$$result,
				{
					src: FiLinkedin,
					className: 'custom-icon media-icon'
				},
				{},
				{}
			)}</a>
			<a sveltekit:prefetch href="${'https://instagram.com/mclovivian'}" target="${'_blank'}">${validate_component(
				Icon,
				'Icon'
			).$$render(
				$$result,
				{
					src: FiInstagram,
					className: 'custom-icon media-icon'
				},
				{},
				{}
			)}</a></div></div>
</div>`;
});
export { Page as default };
