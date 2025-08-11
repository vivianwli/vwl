import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
import { B as BlogGallery } from "../../../../chunks/BlogGallery.js";
const originalHome = "/_app/immutable/assets/netlify-original-home.kpeRVuxS.png";
const redesignHome1 = "/_app/immutable/assets/netlify-redesign-home-1.CYTm5WCJ.png";
const redesignHome2 = "/_app/immutable/assets/netlify-redesign-home-2.BJGiG5H8.png";
const originalDeploys1 = "/_app/immutable/assets/netlify-original-deploys-1.QELFsdoW.png";
const originalDeploys2 = "/_app/immutable/assets/netlify-original-deploys-2.BFYbPFaW.png";
const redesignUserFlow = "/_app/immutable/assets/netlify-redesign-user-flow.DLH2-FHm.png";
const originalUserFlow = "/_app/immutable/assets/netlify-original-user-flow.Cipk9VJa.png";
const metadata = {
  "title": "Kleiner Perkins design challenge: Redesigning Netlify",
  "slug": "redesigning-netlify",
  "publishDate": "JAN 17 2023",
  "tags": [{ "name": "design" }],
  "thumbnail": "netlify.png",
  "summary": "In this case study, we take a look at how Netlify can modify their user interface and user flow to simplify key actions."
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
  )} <p data-svelte-h="svelte-172np33">In this case study, we take a look at how Netlify can modify their user interface and user flow to simplify key actions. Netlify is one of the most popular options when it comes to deploying websites from code respositories. Their use cases span from individuals to large companies, and an effective redesign would mean a more seamless experience for countless users.</p> <h2 data-svelte-h="svelte-1qvabbl">User interviews</h2> <p data-svelte-h="svelte-5n6ne3">I interviewed developers with a range of experience, both specifically in Netlify and broadly in web development. Some were well-acquainted with Netlify’s interface, while others had only tried to deploy a site once or twice. Based on these user interviews, I found that the most prominent pain points lay in <strong>clearly navigating through the site</strong> and understanding where they were among the potential pages. Many of the pages presented <strong>too much information without clear hierarchy</strong>, and provided <strong>too much action autonomy</strong>.</p> <h2 data-svelte-h="svelte-bg3an8">Design approach</h2> <p data-svelte-h="svelte-zbnjxm">The name of the game is differentiation. I mapped out the typical user journey below: developers start by clicking to view a certain production or preview deploy, or clicking to view all deploys of a certain type. From the “production” or “preview” deploys page, the user then clicks on a specific deploy to view more details and visit the site.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: originalUserFlow,
      className: "gallery-img",
      caption: "<b>BEFORE:</b> Typical user flow when accessing deployed sites."
    },
    {},
    {}
  )} <p data-svelte-h="svelte-92clzb">It took me a while to even realize that the two different actions (clicking to “view production deploys” and clicking to “view deploy previews”) actually led to the same page. The screens looked so similar that they were often mistaken for each other, and yet they misleadingly appreared to be distinct pages despite just being loaded in different states. As echoed by the user interviews, users often felt like they were running circles in a maze. I decided to <strong>reorganize page navigation points to be where they were most intuitive.</strong></p> <p data-svelte-h="svelte-160bcqh">Moreover, we want to keep the interface simple to navigate for novice and experienced users alike. Since nearly all Netlify users share the same goals and key actions, we want to give the user as few options and steps as possible. In this case, the fewer pages, the better—especially since several of the pages in the user flow shared significant overlapping information. Therefore, I propose this user flow refactor that <strong>slims the journey into just two screens</strong>.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: redesignUserFlow,
      className: "gallery-img",
      caption: "<b>AFTER:</b> Typical user flow when accessing deployed sites."
    },
    {},
    {}
  )} <p data-svelte-h="svelte-pp66u5">Here’s what the reimagined user flow looks like in action. Below are the original screens:</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: originalHome,
      caption: "<b>BEFORE:</b> Original site homepage that linked to two states of the deploys page (production and previews)."
    },
    {},
    {}
  )} ${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: originalDeploys1,
          className: "gallery-img",
          caption: "<b>BEFORE:</b> Original page for production deploys."
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: originalDeploys2,
          className: "gallery-img",
          caption: "<b>BEFORE:</b> Original page for deploy previews."
        },
        {},
        {}
      )}`;
    }
  })} <p data-svelte-h="svelte-gbk8ve">I wanted to make the most of the space on the site homepage, <strong>utilizing the empty space</strong> in the top right corner to instead <strong>enlarge the site thumbnail</strong> and draw attention to the most recent published deployment. As a pseudo-”hero” for the page, a pictorial preview is a great indicator for which site the user is viewing, as well as what state the most recent site is in.</p> <p data-svelte-h="svelte-15lhj7l">This new enlarged component on the homepage features several additional adjustments: a large <strong>“Latest production deploy”</strong> label, a <strong>green border</strong> to signal “active” status, and a <strong>descriptive commit message that</strong> is prioritized above the commit branch and hash. It includes the same functionality from the original smaller component, but adds a <strong>“open active site”</strong> button to calls users to see what’s live without navigating through the user flow.</p> <p data-svelte-h="svelte-16zd6im">We combine two pages into one page, in turn simplifying three steps in the user flow to just one <strong>all-access dashboard</strong> where users can toggle between production and preview deploys. By keeping this component on the homepage, we remove the illusion that the production and preview deploys are on different pages. We consolidate the displayed information in a form that feels more lightweight and gives the user more control.</p> <p data-svelte-h="svelte-1uj3w5t">Finally, I also added a much-needed <strong>“Branch name” label</strong> to the deploys component, calling on users to specify a certain branch from which to view deploys where it was previously unclear.</p> ${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: redesignHome1,
          className: "gallery-img",
          caption: "<b>AFTER:</b> Redesigned production deploys, integrated with site homepage."
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: redesignHome2,
          className: "gallery-img",
          caption: "<b>AFTER:</b> Redesigned deploy previews, integrated with site homepage."
        },
        {},
        {}
      )}`;
    }
  })} <p data-svelte-h="svelte-1hgybia">That’s it! Simple changes that still keep the user’s familiarity, but improve the user’s ability to navigate and take the most common actions with ease.</p>`;
});
export {
  Page as default,
  metadata
};
