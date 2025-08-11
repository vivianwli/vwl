import { c as create_ssr_component, e as escape, b as subscribe, d as each, f as add_attribute, v as validate_component } from "../../chunks/index.js";
/* empty css                */import { n as navigating, p as page } from "../../chunks/stores.js";
import { t as toast } from "../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { I as Icon } from "../../chunks/Icon.js";
import FiMoon from "svelte-icons-pack/fi/FiMoon.js";
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { refresh = "" } = $$props;
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0)
    $$bindings.refresh(refresh);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Background_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".background.svelte-101j5zx.svelte-101j5zx{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}.background.svelte-101j5zx span.svelte-101j5zx{backface-visibility:hidden;position:absolute;animation-name:svelte-101j5zx-move;animation-duration:60;animation-timing-function:linear;animation-iteration-count:infinite}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(1){color:var(--blob-2);top:96%;animation-duration:66s;animation-delay:-37.2s;transform-origin:-10vw 2vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:32rem 0 6.6917772513rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(2){color:var(--blob-1);top:12%;animation-duration:16.5s;animation-delay:-70s;transform-origin:-2vw 3vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 9.2001538482rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(3){color:var(--blob-1);top:76%;animation-duration:18s;animation-delay:-24.9s;transform-origin:-5vw -22vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:32rem 0 9.1019276242rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(4){color:var(--blob-1);top:20%;animation-duration:40.6s;animation-delay:-68.6s;transform-origin:-23vw -2vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 7.0838369151rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(5){color:var(--blob-2);top:54%;animation-duration:37.9s;animation-delay:-66.2s;transform-origin:-18vw 5vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 7.2453261049rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(6){color:var(--blob-1);top:26%;animation-duration:35.7s;animation-delay:-15.9s;transform-origin:20vw -23vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 9.3374778626rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(7){color:var(--blob-1);top:59%;animation-duration:21.7s;animation-delay:-19.3s;transform-origin:-9vw 24vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 6.2437003234rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(8){color:var(--blob-1);top:97%;animation-duration:41.4s;animation-delay:-3.7s;transform-origin:-20vw -21vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 5.6412076179rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(9){color:var(--blob-1);top:28%;animation-duration:28.2s;animation-delay:-29.2s;transform-origin:18vw -17vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 3.3399042264rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(10){color:var(--blob-2);top:87%;animation-duration:14s;animation-delay:-4.8s;transform-origin:-15vw 9vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 6.4777585394rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(11){color:var(--blob-2);top:6%;animation-duration:61.5s;animation-delay:-61.1s;transform-origin:23vw 13vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 7.7911454593rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(12){color:var(--blob-1);top:9%;animation-duration:54.3s;animation-delay:-8.6s;transform-origin:-2vw 25vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 3.184540853rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(13){color:var(--blob-1);top:55%;animation-duration:41.6s;animation-delay:-67.2s;transform-origin:-14vw 4vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 11.568103396rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(14){color:var(--blob-2);top:80%;animation-duration:57.3s;animation-delay:-22.2s;transform-origin:-2vw 13vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 8.9995626449rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(15){color:var(--blob-1);top:51%;animation-duration:69.9s;animation-delay:-22.8s;transform-origin:15vw -21vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 9.4048204249rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(16){color:var(--blob-2);top:99%;animation-duration:25.6s;animation-delay:-18.3s;transform-origin:5vw 22vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 5.2037740598rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(17){color:var(--blob-2);top:59%;animation-duration:36.2s;animation-delay:-68.6s;transform-origin:20vw -16vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:20rem 0 5.6420723279rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(18){color:var(--blob-2);top:79%;animation-duration:28.8s;animation-delay:-38.8s;transform-origin:17vw -20vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 2.5163376863rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(19){color:var(--blob-2);top:25%;animation-duration:13.1s;animation-delay:-1.7s;transform-origin:-13vw 14vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 9.3639442147rem currentColor}.background.svelte-101j5zx span.svelte-101j5zx:nth-child(20){color:var(--blob-1);top:19%;animation-duration:22.5s;animation-delay:-33.2s;transform-origin:-20vw -7vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:20rem 0 7.0667648088rem currentColor}.background.mobile.svelte-101j5zx span.svelte-101j5zx{animation:none}@keyframes svelte-101j5zx-move{100%{transform:translate3d(0, 0, 1px) rotate(360deg)}}",
  map: null
};
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  $$result.css.add(css$2);
  isMobile = true;
  return `

<div class="${"background " + escape(isMobile ? "mobile" : "", true) + " svelte-101j5zx"}"><span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
	<span class="${"svelte-101j5zx"}"></span>
</div>`;
});
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { type = "spin" } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `


<button class="${"hamburger hamburger--" + escape(type, true) + " " + escape(open && "is-active", true)}"><span class="${"hamburger-box"}"><span class="${"hamburger-inner"}"></span></span></button>`;
});
const Menu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-ym2u08{padding-left:1rem;padding-bottom:2rem}a.svelte-ym2u08{display:block;text-decoration:none;color:var(--secondary-color);margin:1.75rem;font-size:1.75rem;line-height:normal}@media(hover: hover){a.svelte-ym2u08:hover{color:var(--primary-color);text-shadow:0 0 0.2rem var(--primary-light-color)}}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { open } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  {
    if ($navigating)
      open = false;
  }
  $$unsubscribe_navigating();
  return `${open ? `<div class="${"svelte-ym2u08"}">${each(["home", "portfolio", "blog"], (link, i) => {
    return `<a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", "/" + link, 0)} class="${"svelte-ym2u08"}">${escape(link)}
			</a>`;
  })}</div>` : ``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-qis14i{position:fixed;width:fit-content;z-index:4}.custom-icon{color:var(--secondary-color);font-size:2rem;opacity:75%}@media(hover: hover){.custom-icon:hover{color:var(--secondary-selected-color);cursor:pointer}}.arrow{opacity:50%;width:100%;margin:auto;margin-top:15vh;margin-bottom:10vh}@media(hover: hover){.arrow:hover{color:var(--secondary-color);cursor:default}}.dark{fill:var(--secondary-color)}@media(hover: hover){.dark:hover{fill:var(--secondary-selected-color)}}.dark-switch.svelte-qis14i{position:fixed;right:0;top:0;padding:2rem;z-index:4}.open.svelte-qis14i{position:absolute;top:0;background-color:var(--bg-color);box-shadow:0 0 12rem var(--secondary-color);height:100dvh;width:70vw;z-index:-1}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  let open;
  let darkTheme;
  let opened = "closed";
  let emailSubmitted = $page.url.searchParams.get("emailSubmitted");
  if (emailSubmitted) {
    toast.push("email submitted!");
    toast.pop((i) => i.target !== "new");
    emailSubmitted = false;
  }
  let portfolio = $page.url.pathname === "/portfolio" ? "portfolio" : "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if ($navigating)
        opened = "closed";
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-104j92h_START --><script>savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
		darkTheme = savedTheme ?? 'light';
		darkTheme === 'light'
			? document.documentElement.setAttribute('data-theme', 'light')
			: document.documentElement.setAttribute('data-theme', 'dark');
	<\/script><!-- HEAD_svelte-104j92h_END -->`, ""}

<div class="${"scroll-bar-wrap"}"><div class="${"scroll-box"}"><div class="${"header svelte-qis14i"}">
			<div class="${"mobile-nav"}"><div style="display: contents; --color:${"var(--secondary-color)"}; --padding:${"2.4rem"}; --layer-width:${"25px"}; --layer-height:${"3px"}; --layer-spacing:${"5px"};">${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      { type: "squeeze", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
				${validate_component(Menu, "Menu").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${opened === "open" ? `<div class="${"open svelte-qis14i"}"></div>` : ``}</div>

			
			<nav><a sveltekit:prefetch sveltekit:noscroll href="${"/"}">home</a>
				<a sveltekit:prefetch sveltekit:noscroll href="${"/portfolio"}">portfolio</a>
				<a sveltekit:prefetch sveltekit:noscroll href="${"/blog"}">blog</a></nav></div>

		
		<div class="${"dark-switch svelte-qis14i"}"><div>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        src: FiMoon,
        className: "custom-icon " + darkTheme
      },
      {},
      {}
    )}</div></div>

		
		<div class="${"page-content " + escape(portfolio, true) + " svelte-qis14i"}">
			${validate_component(PageTransition, "PageTransition").$$render($$result, { refresh: data.key }, {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}</div></div>
	${validate_component(Background, "Background").$$render($$result, {}, {}, {})}
</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return $$rendered;
});
export {
  Layout as default
};
