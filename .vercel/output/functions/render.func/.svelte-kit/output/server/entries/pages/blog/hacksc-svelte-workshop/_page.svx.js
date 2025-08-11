import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
import { B as BlogGallery } from "../../../../chunks/BlogGallery.js";
const workshop1 = "/_app/immutable/assets/svelte-workshop-1-521a6936.jpg";
const workshop2 = "/_app/immutable/assets/svelte-workshop-2-6a8c3b71.jpg";
const workshop3 = "/_app/immutable/assets/svelte-workshop-3-be4a4776.jpg";
const workshop4 = "/_app/immutable/assets/svelte-workshop-4-4a7aa7d3.jpg";
const workshop5 = "/_app/immutable/assets/svelte-workshop-5-cd3482ba.jpg";
const workshop6 = "/_app/immutable/assets/svelte-workshop-6-292d33ae.jpg";
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
  )}
<p>I was absolutely elated to evangelize about Svelte and SvelteKit this past February at HackSC 2023! I’m the organizing team’s Design Lead, but this was my little side quest to share my love for this tool with hackers at the event. Feel free to scroll further for some images, followed by a recording of the workshop!</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
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
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop2,
          caption: "Introducing myself, featuring some avid hand movement."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop3,
          caption: "Totally engaged hackers :)"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop4,
          caption: "Workshop POV: behind the speaker!"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: workshop5,
          caption: "Workshop room at capacity, with hackers sitting on the steps."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
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
  })}
<div class="${"iframe-container"}"><iframe class="${"iframe"}" src="${"https://www.youtube.com/embed/PQIbCtuJ2cM"}"></iframe></div>`;
});
export {
  Page as default,
  metadata
};
