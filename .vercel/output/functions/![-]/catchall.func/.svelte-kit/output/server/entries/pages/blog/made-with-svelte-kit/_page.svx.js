import { c as create_ssr_component, h as compute_rest_props, j as spread, k as add_classes, e as escape, l as escape_attribute_value, p as escape_object, q as createEventDispatcher, v as validate_component } from "../../../../chunks/ssr.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
import { B as BlogGallery } from "../../../../chunks/BlogGallery.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css$1 from "highlight.js/lib/languages/css";
const css = {
  code: ".langtag.svelte-1w9vok{position:relative}.langtag.svelte-1w9vok::after{content:attr(data-language);position:absolute;top:var(--langtag-top, 0);right:var(--langtag-right, 0);display:flex;align-items:center;justify-content:center;background:var(--langtag-background, inherit);color:var(--langtag-color, inherit);border-radius:var(--langtag-border-radius, 0);padding:var(--langtag-padding, 1em)}",
  map: '{"version":3,"file":"LangTag.svelte","sources":["LangTag.svelte"],"sourcesContent":["<script>\\n  /** @type {any} */\\n  export let code;\\n\\n  /** @type {string} */\\n  export let highlighted;\\n\\n  /** @type {string} */\\n  export let languageName = \\"plaintext\\";\\n\\n  /** @type {boolean} */\\n  export let langtag = false;\\n<\/script>\\n\\n<pre class:langtag data-language={languageName} {...$$restProps}><code\\n    class:hljs={true}\\n    >{#if highlighted}{@html highlighted}{:else}{code}{/if}</code\\n  ></pre>\\n\\n<style>\\n  .langtag {\\n    position: relative;\\n  }\\n\\n  .langtag::after {\\n    content: attr(data-language);\\n    position: absolute;\\n    top: var(--langtag-top, 0);\\n    right: var(--langtag-right, 0);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background: var(--langtag-background, inherit);\\n    color: var(--langtag-color, inherit);\\n    border-radius: var(--langtag-border-radius, 0);\\n    padding: var(--langtag-padding, 1em);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoBE,sBAAS,CACP,QAAQ,CAAE,QACZ,CAEA,sBAAQ,OAAQ,CACd,OAAO,CAAE,KAAK,aAAa,CAAC,CAC5B,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,aAAa,CAAC,EAAE,CAAC,CAC1B,KAAK,CAAE,IAAI,eAAe,CAAC,EAAE,CAAC,CAC9B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,oBAAoB,CAAC,QAAQ,CAAC,CAC9C,KAAK,CAAE,IAAI,eAAe,CAAC,QAAQ,CAAC,CACpC,aAAa,CAAE,IAAI,uBAAuB,CAAC,EAAE,CAAC,CAC9C,OAAO,CAAE,IAAI,iBAAiB,CAAC,IAAI,CACrC"}'
};
const LangTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["code", "highlighted", "languageName", "langtag"]);
  let { code } = $$props;
  let { highlighted } = $$props;
  let { languageName = "plaintext" } = $$props;
  let { langtag = false } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0) $$bindings.highlighted(highlighted);
  if ($$props.languageName === void 0 && $$bindings.languageName && languageName !== void 0) $$bindings.languageName(languageName);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0) $$bindings.langtag(langtag);
  $$result.css.add(css);
  return `<pre${spread(
    [
      {
        "data-language": escape_attribute_value(languageName)
      },
      escape_object($$restProps)
    ],
    {
      classes: (langtag ? "langtag" : "") + " svelte-1w9vok"
    }
  )}><code${add_classes("hljs".trim())}>${highlighted ? `<!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END -->` : `${escape(code)}`}</code></pre>`;
});
const HighlightSvelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let highlighted;
  let $$restProps = compute_rest_props($$props, ["code", "langtag"]);
  let { code } = $$props;
  let { langtag = false } = $$props;
  createEventDispatcher();
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("css", css$1);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0) $$bindings.langtag(langtag);
  highlighted = hljs.highlightAuto(code).value;
  return `${slots.default ? slots.default({ highlighted }) : ` ${validate_component(LangTag, "LangTag").$$render($$result, Object.assign({}, $$restProps, { languageName: "svelte" }, { langtag }, { highlighted }, { code }), {}, {})} `}`;
});
const advice = "/_app/immutable/assets/ginkoids-advice.B-3XbNJ0.png";
const portfolioGrid = "/_app/immutable/assets/portfolio-grid.-vuySReF.png";
const regret = "/_app/immutable/assets/regret.DqeceRVm.png";
const email1 = "/_app/immutable/assets/ios-email-input.B7mgFoea.png";
const email2 = "/_app/immutable/assets/android-email-input.DA_so4i5.png";
const vwlDesign = "/_app/immutable/assets/vwl-site.BLznnC-5.png";
const metadata = {
  "title": "Made with Svelte(Kit)",
  "slug": "made-with-svelte-kit",
  "publishDate": "JAN 18 2022",
  "tags": [{ "name": "code" }],
  "thumbnail": "vwl-site.png",
  "summary": "My 20-something-day journey to create this website from scratch. What came easily, what to avoid, etc. Essentially, a layman’s guide to building a personal website. A very meta post."
};
const { title, slug, publishDate, tags, thumbnail, summary } = metadata;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const code1 = `<script>
    import vivian from '$lib/assets/vivian.png';
<\/script>
...
<img src={vivian} alt="viv" />`;
  const code2 = `import vivian from '$lib/assets/vivian.png';`;
  return `${validate_component(PostHeader, "PostHeader").$$render(
    $$result,
    {
      title,
      publishDate,
      tags,
      slug,
      thumbnail,
      summary
    },
    {},
    {}
  )} <p data-svelte-h="svelte-6ay9kg">So, Svelte is not for the faint-hearted. 😭</p> <p data-svelte-h="svelte-1mme279">Not that I don’t recommend it. Svelte and SvelteKit are intuitively wonderful in many ways—enough so that someone without years of web dev experience (like me) could pick it up fairly easily. However, because it is such a new framework, I came prepared for the frustration that ensues when things <em>just don’t work</em>.</p> <p data-svelte-h="svelte-j442aq">I’ve also been entertaining the idea of creating a layman’s guide to building a personal website for a while now. I was pretty set on giving my personal website a refresh this winter break (check out the old one, <a href="http://vivsdivs.com/" rel="nofollow">vivsdivs.com</a>). It seemed like the perfect opportunity to learn something new and share my experience. If you’re interested in how I made this website—what came easily, what to avoid, etc., read on. I hope you find something useful :)</p> <p data-svelte-h="svelte-o3juxl"><strong>Why Svelte?</strong> There are so many great options out there. The short answer is that I love <em>The Pudding</em>, and they use SvelteKit. Also, it seemed that a reasonable amount of people have moved their blogs from Gatsby to SvelteKit, in the same way that they moved from Jekyll to Gatsby a few years back. Might as well be ahead of the curve, right? 😉</p> <p data-svelte-h="svelte-1cdgjs8"> </p> <h2 data-svelte-h="svelte-cfkdhp">Preparing for battle</h2> <p data-svelte-h="svelte-1qpvona">I first spent three days in Figma designing the website, from color scheme to style guide to full layouts of the home, blog, and portfolio pages (in both desktop and mobile view). Honestly, it was a lot of work, but it set me up for success when actually coding the site, and I didn’t have to question my design decisions down the line. I’m also glad that I prioritized the mobile view early on, instead of freaking out about responsive design long after the rest of the website was implemented. I love Figma (so much), so no complaints here. Feel free to browse my <a href="https://www.figma.com/file/h7KckVZmrTNeVQd2afZwME/website?node-id=92%3A573" rel="nofollow">Figma document</a> if you’re curious! If you’d like to dive deeper into about my design process, let me know and I might make a more design-focused post in the future.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: vwlDesign,
      caption: "The styled covered page for my website design (vivianwli.com)"
    },
    {},
    {}
  )} <p data-svelte-h="svelte-w3ukkg">Before I popped open the code editor, I also started by doing the <a href="https://svelte.dev/tutorial/basics" rel="nofollow">Svelte tutorial</a> in full. It was very interactive and helpful, and it also set me up to know which resources to reach for later on. I also took <a href="https://www.notion.so/svelte-notes-6cac9e1403e04b1c8647ec518ee0b11e" rel="nofollow">notes</a> on what I learned from the tutorial. They’re not amazing, comprehensive notes or anything, but they show the amount of preparation that I did before taking the plunge.</p> <p data-svelte-h="svelte-1iwrjw3">Now, we’re ready. Onward!</p> <p data-svelte-h="svelte-1cdgjs8"> </p> <h2 data-svelte-h="svelte-uthof6">👍🏻 things</h2> <h3 data-svelte-h="svelte-g65gh1">Floating orb background</h3> <p data-svelte-h="svelte-1szufc">This is probably one of my favorite aspects of the website. I had it all planned out in Figma from the beginning. I originally found this complicated generative art solution with PixiJS by <a href="https://georgefrancis.dev/writing/create-a-generative-landing-page-and-webgl-powered-background/" rel="nofollow">George Francis</a>. It’s really, <em>really</em> cool, and I had so much fun just playing with his CodePen. However, I ultimately decided to stick to the basics using <code>spans</code> animated with CSS. When in doubt, follow Ginkoid’s advice:</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: advice,
      caption: "Ginkoid's wise words, via Discord."
    },
    {},
    {}
  )} <p data-svelte-h="svelte-15ek821">Here’s the <a href="https://codepen.io/Mamboleoo/pen/BxMQYQ" rel="nofollow">CodePen</a> that I referenced, which did the job wonderfully!</p> <h3 data-svelte-h="svelte-dyxav2">Svelte(Kit) stuff</h3> <ul data-svelte-h="svelte-5amrau"><li><strong>The docs:</strong> I loved the docs, for both <a href="https://svelte.dev/docs" rel="nofollow">Svelte</a> and <a href="https://kit.svelte.dev/docs" rel="nofollow">SvelteKit</a>. So wonderful and helpful, 10/10. This is where you learn about all sorts of fun things, like SvelteKit’s modules (<code>$app/environment</code>, <code>$app/stores</code>, etc.), loading, and anchor options. Had my back when Stack Overflow didn’t 🥲</li> <li><strong>SvelteKit’s file-based routing system:</strong> very intuitive! It works exactly how you think it does—each page goes into <code>/routes</code> as a <code>.svelte</code> file.</li> <li><strong>Svelte transitions:</strong> super easy to use with really beautiful results. I used them for my page transitions (and I really <em>could</em> start throwing them everywhere). One of the quickest things that I did to elevate the feel of my website. The transition usually only runs when your component enters and leaves the DOM, but you can also trigger the animation on a value change with a <a href="https://stackoverflow.com/questions/62626343/svelte-transition-on-reactive-data-change" rel="nofollow">#key block</a>.</li></ul> <h3 data-svelte-h="svelte-15t5qiv">Flexbox, Grid, and other common CSS utilities</h3> <p data-svelte-h="svelte-14w8hes">Even in the presence of ✨fun new technology✨, one must not forget about good old flex and grid. I read through the complete guides this time (<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="nofollow">flex</a> and <a href="https://kit.svelte.dev/docs" rel="nofollow">grid</a>), thanks to CSS-Tricks. With these tools (and units like <code>fr</code> and <code>min-content</code>), creating responsive layouts was honestly pretty fun. One example: grid was key to creating the faux file folder on the portfolio page.</p> <p data-svelte-h="svelte-1ka9lr4">Essentially, I have an SVG for each tab—just the tab part, not the rectangular folder body. Why? I expect the file folder to resize frequently, whether due to different screen sizes, or whether certain rows are filtered. The rectangular folder body for each tab is just a <code>div</code>, designed to be easily resized by its grid container. I also had the tab label text (”design” and “writing”).</p> <p data-svelte-h="svelte-tu5xnc">Here’s how I put everything together using grid. I’ll refer to these elements by their class name; feel free to inspect the page or follow along using the <a href="https://github.com/teacupkittie/vwl" rel="nofollow">GitHub repo</a>.</p> <ul><li data-svelte-h="svelte-76luvo"><code>.tabs</code> : a parent grid with only one cell, to ensure that the two tabs are stacked on top of each other using <code>z-index</code></li> <li><code data-svelte-h="svelte-joqu9o">.design-tab</code> and <code data-svelte-h="svelte-1aj21ko">.writing-tab</code>: grids with <code data-svelte-h="svelte-o5h4hn">grid-template-columns</code> determined by <code data-svelte-h="svelte-qa7jvp">rems</code> to ensure that each SVG tab is always in the right place. I used column 1 as an offset, column 2 as the tab itself, and column 3 as <code data-svelte-h="svelte-9ex1yb">auto</code>. Here’s a picture:
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: portfolioGrid,
      caption: "Grid layout outlines from the Chrome DevTools view."
    },
    {},
    {}
  )}</li> <li data-svelte-h="svelte-78uk5i"><code>.tab-page-content</code>: a regular ol’ container inside each tab</li> <li data-svelte-h="svelte-1un1xst"><code>.buttons</code>: a flex container holding the tags, <code>.content-container</code>: a regular container on each page</li> <li data-svelte-h="svelte-dl8t36"><code>.content-row</code>: a flex container holding the items on each row, with each row pertaining to one category. I could have totally done some horizontal masonry madness to autofill the page content, but I wanted to have better control over exactly how the page looked—an example where hardcoding and softcoding meet.</li></ul> <p data-svelte-h="svelte-1koggf5">Later on, I also added in <code>.tab-selector</code>, which sits on top of the tabs (<code>z-index</code>-wise). These are fitted to be directly on top of the two SVGs, because I realized that the writing tab can’t be clicked (the design tab is the exact same size, and directly on top). I also used grid for this!</p> <h3 data-svelte-h="svelte-168zppv">Blogging with <code>mdsvex</code></h3> <p data-svelte-h="svelte-1goq6uf"><a href="https://mdsvex.pngwn.io/" rel="nofollow">Svelte in Markdown</a> (aka <code>mdsvex</code>) is pretty great. Blogging would be much harder without it. There are some great tutorials—I followed this one by <a href="https://megzari.com/blog/about_this_site/" rel="nofollow">Raphael Mezgari</a>. His repo is on GitHub, too, and poking around really helped me to get a sense of how things worked. I haven’t ran into any problems yet, and maybe I’ll start adding animated Svelte penguins in my blog posts someday.</p> <p data-svelte-h="svelte-1cdgjs8"> </p> <h2 data-svelte-h="svelte-uch7ev">👎🏻 things</h2> <p data-svelte-h="svelte-1k6jcoe">One of the main downsides of SvelteKit is that it’s so new. Compared to React frameworks, it has a much smaller community and fewer resources. So everything is just a LITTLE harder. This screenshot sums up most of the breakdowns that I had while coding:</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: regret,
      caption: "So many times when I faltered in my decision to use Svelte."
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-1odw47b">Icon packs</h3> <p data-svelte-h="svelte-1nngvyq">React has this amazing package called <code>react-icons</code>. Using icons becomes very easy. I first found a Svelte alternative, <code>svelte-icons-pack</code>, but for some reason many of the Ionicons icons were either filled incorrectly or did not display at all. I thought Ionicons looked pretty good (and I had designed with them), so I then proceeded to try every other way of using Ionicons. On Christmas Day. I read every tutorial, Stack Overflow post, and GitHub issue until someone mentioned that Ionicons just had some compatibility issues with Svelte 😭 Eventually, I migrated to Feather Icons (and tried every other way again). I came crawling back to <code>svelte-icons-pack</code>, which seemed to work perfectly fine with Feather Icons. Moral of the story: <code>svelte-icons-pack</code> is probably the easiest way to use icons in Svelte, and just don’t use Ionicons. Thanks, @leshak on GitHub!</p> <h3 data-svelte-h="svelte-rcfacx">Responsive, lazy-loading images</h3> <p data-svelte-h="svelte-e4g26e">Gatsby has this amazing thing called <code>gatsby-plugin-image</code>. Next.js has this amazing thing called <code>next/image</code>. SvelteKit has nothing (yet) 😭</p> <p data-svelte-h="svelte-1ap5vxg">There were actually a fair amount of Svelte plugins, but SvelteKit is also so different from Svelte that solutions that work for Svelte often don’t work for SvelteKit. Trying to get any sort of image placeholder (solid color, low-resolution blur) was a total pain. Ultimately, I think there’s just much more I have to learn about images in web development. Most of the solutions that I could find relied on specifying a width and height for the image, which makes sense because the placeholder needs a width and height in order to take up space and reduce cumulative layout shift. However, I wanted my images to resize dynamically to fit the size of its container. Maybe I just need to create a million sizes of the image with <code>srcset</code>? I’m not sure how Gatsby and Next.js do it, but I would love to learn.</p> <p data-svelte-h="svelte-uegxyc">Here were some of the resources that I looked at and tried to use: <a href="https://kentcdodds.com/blog/building-an-awesome-image-loading-experience" rel="nofollow">Kent C. Dodd’s blog post</a>, <a href="https://rodneylab.com/sveltekit-image-plugin/" rel="nofollow">Rodney Lab’s SvelteKit Image Plugin</a>, <a href="https://github.com/woltapp/blurhash" rel="nofollow">blurhash</a>. They’re still great resources! In the meantime, I’m just using <code>vite-imagetools</code> to resize my images and convert them to WebP. Maybe someday I’ll attempt to save the masses by making a <code>sveltekit-image</code> if SvelteKit doesn’t man up and do it soon.</p> <h3 data-svelte-h="svelte-qtnfwe">Newsletters</h3> <p data-svelte-h="svelte-2u8ze0">I’d narrowed it down to three main options: Substack, Revue, and Buttondown. Substack and Revue are both huge in the newsletter world, while Buttondown is a small (but really cool!) service. Any one of these services would have worked wonderfully, save for one aspect: the subscription email embed. With Substack, a styled embed isn’t even in the picture because Substack has a closed API. Scott Spence outlines this solution for a styled email form with <a href="https://scottspence.com/posts/email-form-submission-with-sveltekit" rel="nofollow">Revue</a>, which has an open API, but it seemed to be a very significant amount of work. On the other hand, Buttondown provided the HTML for the email form so that I could style it to my heart’s content.</p> <p data-svelte-h="svelte-96mo81">This <em>would</em> have been rather dandy, but I realized that whenever the form was submitted, the page would redirect to Buttondown’s page. This was automatic—the redirect was forced, and you could only change the redirect destination from the Buttondown dashboard. It would be extremely disorienting for the viewer to be thrown to another site, and then have to navigate back toward <a href="https://scottspence.com/posts/email-form-submission-with-sveltekit" rel="nofollow">vivianwli.com</a>.</p> <p data-svelte-h="svelte-1fy1d7s"><strong>The (somewhat) jank solution?</strong> I chose <a href="http://vivianwli.com/blog" rel="nofollow">vivianwli.com/blog</a> as my redirect link. Even then, the navigation would kick the user to the top of the page. To make this seem more natural, I used <code>svelte-toast</code> to create an “Email submitted!” toast. I changed the Buttondown redirect link to <a href="http://vivianwli.com/blog?emailSubmitted=true" rel="nofollow">vivianwli.com/blog?emailSubmitted=true</a>, and then ran toast when the <code>emailSubmitted</code> parameter was true. Hey, it works!</p> <p data-svelte-h="svelte-1cdgjs8"> </p> <h2 data-svelte-h="svelte-elf55a">🤌🏻 things</h2> <h3 data-svelte-h="svelte-1yx6tk2">Scroll-snapping</h3> <p data-svelte-h="svelte-16qp8dr">Scroll-snapping only has <code>mandatory</code> and <code>proximity</code> as its options. I wanted to use it for a pseudo-slideshow animation, but the <code>proximity</code> distance is determined by the browser. You can’t choose how close the scroll must be before it snaps. I’m still using it on the home page (for tiny re-orientations), but it really doesn’t do much. In this case, it’s a simple but very limited tool.</p> <h3 data-svelte-h="svelte-16ajep3">Where images go</h3> <p data-svelte-h="svelte-158hq8c">I switched the location of my images folder several times while building the website. I was very confused about this, but I have an answer for you! In order for it to work in both dev mode and build mode, you have two options:</p> <ul><li><code data-svelte-h="svelte-uk9qxq">static</code>: Svelte can’t do dynamic imports, (a la <code data-svelte-h="svelte-1bwfiqe">src={picture1}</code> where <code data-svelte-h="svelte-1qit19t">picture1</code> is your file name). If you’re trying to display images where its path would be a variable (my <code data-svelte-h="svelte-1wg4jd7">BlogCard.svelte</code> and <code data-svelte-h="svelte-khtlth">ArticleCard.svelte</code>), put it in static. You can’t access <code data-svelte-h="svelte-1fkgjes">src</code> at build time!
<ul><li><code data-svelte-h="svelte-1fkgjes">src</code> (I did <code data-svelte-h="svelte-11nu5xa">src/$lib/assets</code>): this is great for when you know exactly which images you need (the home page, the portfolio, my blog posts). You can import and use it like this:
${validate_component(HighlightSvelte, "HighlightSvelte").$$render($$result, { code: code1 }, {}, {})}
This way, you can do some responsive stuff, like loading smaller images via \`vite-imagetools\`.
${validate_component(HighlightSvelte, "HighlightSvelte").$$render($$result, { code: code2 }, {}, {})}</li></ul></li></ul> <h3 data-svelte-h="svelte-1c6egmt">#justiOSthings</h3> <p data-svelte-h="svelte-b2c6on">Chrome DevTools has a great option for responsive design, allowing developers to emulate different screen sizes and ensure that it looks great. However, because it’s just an emulator, my designs came out looking a bit wonky on iPhone at first. My heading text wasn’t italicized, my portfolio images were horrendously stretched (just really blurry colors), and my email form looked like this:</p> ${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2", className: "half-width" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: email1,
          className: "gallery-img",
          caption: "The email form on an iOS device."
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: email2,
          className: "gallery-img",
          caption: "The email form on an Android device."
        },
        {},
        {}
      )}`;
    }
  })} <p data-svelte-h="svelte-1mlzwge">So if DevTools doesn’t work, what does? If you have a Mac and an iPhone, you can enable Inspect Element on your iPhone and then connect to your computer. If not, tough luck. However BroswerStack offers ten-minute trials to test on an actual iPhone. Although the time seems ridiculously short, it actually really helped! Just a bit of fiddling in DevTools got me where I wanted.</p> <h3 data-svelte-h="svelte-dvx6ve">Flash of Unstyled Content (FOUC)</h3> <p data-svelte-h="svelte-97g8v7">The first time I experienced this in dev mode, it was terrifying. My background orbs were black, my text was in Times New Roman, everything was in the wrong place. Scenes out of a horror movie. This goes away at build time, but I was also experiencing this “flash of partially-styled content” in production as well. Everything would be the right color, but the layout was still off and the margins didn’t kick in until a second later. I dealt with it for a while, but I ultimately fixed this issue by moving some of the relevant styles from <code>__layout.svelte</code> into <code>app.scss</code>. I’m pretty sure this is because <code>app.html</code> is used in every page and saturated with the Svelte content, so the styles from <code>app.scss</code> are put in place first before the rest of the page finishes loading. Victory!</p> <p data-svelte-h="svelte-1cdgjs8"> </p> <h2 data-svelte-h="svelte-1fwa7ob">Thanks</h2> <p data-svelte-h="svelte-ulibev">Thanks to Jason, Ailuropoda Melanoleuca, and ginkoid for answering my many questions. You guys are the best! Thanks to you, the reader, for embarking with my on my journey as well. I hope you enjoyed!</p> <p data-svelte-h="svelte-1cdgjs8"> </p> <h2 data-svelte-h="svelte-wk6bpy">Bye</h2> <p data-svelte-h="svelte-dg8dyh">I suppose this is it. See you again when there’s a V3…?!</p> <p data-svelte-h="svelte-1976arv">Just kidding. I hope to blog more often on here, so you can <a href="https://buttondown.email/vivian" rel="nofollow">subscribe</a> to my newsletter if you’d like to hear more from me. Have a wonderful day!</p>`;
});
export {
  Page as default,
  metadata
};
