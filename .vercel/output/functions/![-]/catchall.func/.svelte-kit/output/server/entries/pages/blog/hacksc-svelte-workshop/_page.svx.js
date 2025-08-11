import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
import { B as BlogGallery } from "../../../../chunks/BlogGallery.js";
const workshop1 = "/_app/immutable/assets/svelte-workshop-1.DzbLo6WD.jpg";
const workshop2 = "/_app/immutable/assets/svelte-workshop-2.D33TOl8M.jpg";
const workshop3 = "/_app/immutable/assets/svelte-workshop-3.D-55Bh1k.jpg";
const workshop4 = "/_app/immutable/assets/svelte-workshop-4.BOPXWtXB.jpg";
const workshop5 = "/_app/immutable/assets/svelte-workshop-5.BG6mPfUa.jpg";
const workshop6 = "/_app/immutable/assets/svelte-workshop-6.CuBB1Pys.jpg";
const metadata = {
  "title": "My HackSC 2023 workshop: intro to Svelte",
  "slug": "hacksc-svelte-workshop",
  "publishDate": "APR 11 2023",
  "tags": [{ "name": "code" }],
  "thumbnail": "svelte-workshop.png",
  "summary": "During HackSC 2023, I hosted a workshop introducing our lovely hackers to Svelte and SvelteKit. Watch the recording and view the action shots here!"
};
const { title, slug, publishDate, tags, thumbnail, summary } = metadata;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )} <p data-svelte-h="svelte-ocgj8s">I was absolutely elated to evangelize about Svelte and SvelteKit this past February at HackSC 2023! I’m the organizing team’s Design Lead, but this was my little side quest to share my love for this tool with hackers at the event. Feel free to scroll further for some images, followed by a recording of the workshop!</p> ${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop1,
          caption: "Introducing the workshop!"
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop2,
          caption: "Introducing myself, featuring some avid hand movement."
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop3,
          caption: "Totally engaged hackers :)"
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop4,
          caption: "Workshop POV: behind the speaker!"
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop5,
          caption: "Workshop room at capacity, with hackers sitting on the steps."
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop6,
          caption: "Head-on lecture shot."
        },
        {},
        {}
      )}`;
    }
  })} <div class="iframe-container" data-svelte-h="svelte-hwobsh"><iframe class="iframe" src="https://www.youtube.com/embed/PQIbCtuJ2cM"></iframe></div>`;
});
export {
  Page as default,
  metadata
};
