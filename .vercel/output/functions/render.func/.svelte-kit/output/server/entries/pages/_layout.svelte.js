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
  code: ".background.svelte-ybe67n.svelte-ybe67n{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}.background.svelte-ybe67n span.svelte-ybe67n{backface-visibility:hidden;position:absolute;animation-name:svelte-ybe67n-move;animation-duration:60;animation-timing-function:linear;animation-iteration-count:infinite}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(1){color:var(--blob-1);top:43%;animation-duration:68.3s;animation-delay:-10.9s;transform-origin:14vw 0vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 6.1638860694rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(2){color:var(--blob-1);top:18%;animation-duration:24s;animation-delay:-31s;transform-origin:12vw -6vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:20rem 0 4.5716068109rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(3){color:var(--blob-1);top:1%;animation-duration:27s;animation-delay:-46s;transform-origin:-21vw 24vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 8.0058483128rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(4){color:var(--blob-2);top:63%;animation-duration:51s;animation-delay:-19.6s;transform-origin:5vw 7vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:32rem 0 4.6891873774rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(5){color:var(--blob-1);top:72%;animation-duration:17.7s;animation-delay:-51.2s;transform-origin:2vw 11vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 5.0141341258rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(6){color:var(--blob-2);top:94%;animation-duration:42.9s;animation-delay:-40.9s;transform-origin:-1vw -15vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 5.9809999257rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(7){color:var(--blob-1);top:30%;animation-duration:55.9s;animation-delay:-12.5s;transform-origin:-20vw 25vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 5.8681850474rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(8){color:var(--blob-2);top:64%;animation-duration:31.6s;animation-delay:-0.9s;transform-origin:12vw -21vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 8.9895571913rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(9){color:var(--blob-1);top:57%;animation-duration:13.3s;animation-delay:-25.2s;transform-origin:-8vw 3vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 3.8552080609rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(10){color:var(--blob-2);top:71%;animation-duration:68.8s;animation-delay:-52.2s;transform-origin:-8vw -22vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 7.906043151rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(11){color:var(--blob-2);top:74%;animation-duration:65.5s;animation-delay:-48s;transform-origin:12vw 3vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 6.7641498442rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(12){color:var(--blob-1);top:29%;animation-duration:12.9s;animation-delay:-24.8s;transform-origin:17vw 16vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 10.6148107207rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(13){color:var(--blob-2);top:10%;animation-duration:36.9s;animation-delay:-60.5s;transform-origin:-22vw -9vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:-20rem 0 5.5017858005rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(14){color:var(--blob-1);top:29%;animation-duration:64.7s;animation-delay:-33.4s;transform-origin:21vw -20vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:32rem 0 5.8513522745rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(15){color:var(--blob-1);top:21%;animation-duration:47.7s;animation-delay:-12.4s;transform-origin:24vw 15vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 6.2441141479rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(16){color:var(--blob-1);top:96%;animation-duration:35.7s;animation-delay:-20.7s;transform-origin:18vw -4vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:-26rem 0 5.922342093rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(17){color:var(--blob-2);top:80%;animation-duration:54.7s;animation-delay:-34s;transform-origin:-3vw 8vh;width:10rem;height:10rem;border-radius:10rem;box-shadow:20rem 0 5.9890544509rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(18){color:var(--blob-2);top:48%;animation-duration:55.7s;animation-delay:-45.2s;transform-origin:4vw 9vh;width:13rem;height:13rem;border-radius:13rem;box-shadow:26rem 0 6.6795741339rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(19){color:var(--blob-1);top:11%;animation-duration:10.5s;animation-delay:-62.2s;transform-origin:24vw 17vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 11.5563887072rem currentColor}.background.svelte-ybe67n span.svelte-ybe67n:nth-child(20){color:var(--blob-2);top:99%;animation-duration:26s;animation-delay:-44.6s;transform-origin:-10vw 3vh;width:16rem;height:16rem;border-radius:16rem;box-shadow:-32rem 0 11.6017119396rem currentColor}.background.mobile.svelte-ybe67n span.svelte-ybe67n{animation:none}@keyframes svelte-ybe67n-move{100%{transform:translate3d(0, 0, 1px) rotate(360deg)}}",
  map: null
};
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  $$result.css.add(css$2);
  isMobile = true;
  return `

<div class="${"background " + escape(isMobile ? "mobile" : "", true) + " svelte-ybe67n"}"><span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
	<span class="${"svelte-ybe67n"}"></span>
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
