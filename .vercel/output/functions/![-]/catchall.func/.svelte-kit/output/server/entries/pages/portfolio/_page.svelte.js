import { c as create_ssr_component, d as add_attribute, e as escape, b as each, v as validate_component, a as subscribe } from "../../../chunks/ssr.js";
import { T as Tag } from "../../../chunks/Tag.js";
/* empty css                  */
import { I as Icon } from "../../../chunks/Icon.js";
import "svelte-icons-pack/fi/FiX.js";
import FiMail from "svelte-icons-pack/fi/FiMail.js";
import FiLinkedin from "svelte-icons-pack/fi/FiLinkedin.js";
import { p as page } from "../../../chunks/stores.js";
const css$1 = {
  code: ".card-container.svelte-1soyb9w.svelte-1soyb9w{background-color:var(--postcard-color);box-shadow:0 0 1rem var(--secondary-subtle-color);display:flex;margin:1.5rem 0}@media screen and (max-width: 50rem){.card-container.svelte-1soyb9w.svelte-1soyb9w{display:block}}.card-container.svelte-1soyb9w img.svelte-1soyb9w{width:40%;object-fit:cover}@media screen and (max-width: 50rem){.card-container.svelte-1soyb9w img.svelte-1soyb9w{width:100%}}.card-container.svelte-1soyb9w .date.svelte-1soyb9w{font-size:0.8rem}.card-container.svelte-1soyb9w .post-description.svelte-1soyb9w{padding:1.5rem;align-self:center}@media screen and (max-width: 50rem){.card-container.svelte-1soyb9w .post-description.svelte-1soyb9w{padding:0 1rem 0.5rem 1rem}}.card-container.svelte-1soyb9w h2.svelte-1soyb9w{font-size:1.2rem;margin-top:0;margin-bottom:0}@media screen and (max-width: 50rem){.card-container.svelte-1soyb9w h2.svelte-1soyb9w{margin-top:1rem}}.card-container.svelte-1soyb9w p.svelte-1soyb9w{font-size:0.9rem;margin-bottom:0}a.svelte-1soyb9w.svelte-1soyb9w{text-decoration:none;color:var(--text-color)}.buttons.svelte-1soyb9w.svelte-1soyb9w{padding-top:1rem}",
  map: `{"version":3,"file":"ArticleCard.svelte","sources":["ArticleCard.svelte"],"sourcesContent":["<script>\\n\\timport '../../app.scss';\\n\\texport let article;\\n\\timport Tag from '$lib/components/Tag.svelte';\\n<\/script>\\n\\n<a\\n\\tsveltekit:prefetch\\n\\tsveltekit:noscroll\\n\\thref={article.link}\\n\\ttarget=\\"_blank\\"\\n\\ton:click={() =>\\n\\t\\tsetTimeout(() => {\\n\\t\\t\\tdocument.body.scrollTop = document.documentElement.scrollTop = 0;\\n\\t\\t}, 600)}\\n>\\n\\t<div class=\\"card-container\\">\\n\\t\\t<img src={'/thumbnails/' + article.thumbnail + '?w=400&webp'} alt={article.title} />\\n\\t\\t<div class=\\"post-description\\">\\n\\t\\t\\t<h2>{article.title}</h2>\\n\\t\\t\\t<p class=\\"date\\">{article.info}</p>\\n\\t\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t\\t{#each article.tags as tag}\\n\\t\\t\\t\\t\\t<Tag className=\\"inactive\\">{tag}</Tag>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<p>{@html article.summary}</p>\\n\\t\\t</div>\\n\\t</div>\\n</a>\\n\\n<style lang=\\"scss\\">.card-container {\\n  background-color: var(--postcard-color);\\n  box-shadow: 0 0 1rem var(--secondary-subtle-color);\\n  display: flex;\\n  margin: 1.5rem 0;\\n}\\n@media screen and (max-width: 50rem) {\\n  .card-container {\\n    display: block;\\n  }\\n}\\n.card-container img {\\n  width: 40%;\\n  object-fit: cover;\\n}\\n@media screen and (max-width: 50rem) {\\n  .card-container img {\\n    width: 100%;\\n  }\\n}\\n.card-container .date {\\n  font-size: 0.8rem;\\n}\\n.card-container .post-description {\\n  padding: 1.5rem;\\n  align-self: center;\\n}\\n@media screen and (max-width: 50rem) {\\n  .card-container .post-description {\\n    padding: 0 1rem 0.5rem 1rem;\\n  }\\n}\\n.card-container h2 {\\n  font-size: 1.2rem;\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n@media screen and (max-width: 50rem) {\\n  .card-container h2 {\\n    margin-top: 1rem;\\n  }\\n}\\n.card-container p {\\n  font-size: 0.9rem;\\n  margin-bottom: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: var(--text-color);\\n}\\n\\n.buttons {\\n  padding-top: 1rem;\\n}</style>\\n"],"names":[],"mappings":"AA+BmB,6CAAgB,CACjC,gBAAgB,CAAE,IAAI,gBAAgB,CAAC,CACvC,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,wBAAwB,CAAC,CAClD,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,MAAM,CAAC,CACjB,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,6CAAgB,CACd,OAAO,CAAE,KACX,CACF,CACA,8BAAe,CAAC,kBAAI,CAClB,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,KACd,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,8BAAe,CAAC,kBAAI,CAClB,KAAK,CAAE,IACT,CACF,CACA,8BAAe,CAAC,oBAAM,CACpB,SAAS,CAAE,MACb,CACA,8BAAe,CAAC,gCAAkB,CAChC,OAAO,CAAE,MAAM,CACf,UAAU,CAAE,MACd,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,8BAAe,CAAC,gCAAkB,CAChC,OAAO,CAAE,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,IACzB,CACF,CACA,8BAAe,CAAC,iBAAG,CACjB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,CACjB,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,8BAAe,CAAC,iBAAG,CACjB,UAAU,CAAE,IACd,CACF,CACA,8BAAe,CAAC,gBAAE,CAChB,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,CACjB,CAEA,+BAAE,CACA,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,sCAAS,CACP,WAAW,CAAE,IACf"}`
};
const ArticleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
  $$result.css.add(css$1);
  return `<a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", article.link, 0)} target="_blank" class="svelte-1soyb9w"><div class="card-container svelte-1soyb9w"><img${add_attribute("src", "/thumbnails/" + article.thumbnail + "?w=400&webp", 0)}${add_attribute("alt", article.title, 0)} class="svelte-1soyb9w"> <div class="post-description svelte-1soyb9w"><h2 class="svelte-1soyb9w">${escape(article.title)}</h2> <p class="date svelte-1soyb9w">${escape(article.info)}</p> <div class="buttons svelte-1soyb9w">${each(article.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}`;
  })}</div> <p class="svelte-1soyb9w"><!-- HTML_TAG_START -->${article.summary}<!-- HTML_TAG_END --></p></div></div> </a>`;
});
const traderJoes = "__VITE_IMAGE_ASSET__DRCDNsyO__";
const hibiscus = "__VITE_IMAGE_ASSET__DmLOeyhk__";
const marketFermentation = "__VITE_IMAGE_ASSET__CccNgR0t__";
const blobs = "__VITE_IMAGE_ASSET__Beoy3EI6__";
const b1c = "__VITE_IMAGE_ASSET__B23WOi1f__";
const makerTee = "__VITE_IMAGE_ASSET__CcXGBrYt__";
const sirensMerch = "__VITE_IMAGE_ASSET__Dr5rDrWr__";
const stillIntoYou = "__VITE_IMAGE_ASSET__CpWrNz4h__";
const drawdown = "__VITE_IMAGE_ASSET__DNcZQYVX__";
const sscFlyer = "__VITE_IMAGE_ASSET__cCV7FVEm__";
const hackSCSponsor = "__VITE_IMAGE_ASSET__IjpFZA$4__";
const msr = "__VITE_IMAGE_ASSET__ByRxw$yE__";
const msrHacks = "__VITE_IMAGE_ASSET__6fG2n0C5__";
const nyt = "__VITE_IMAGE_ASSET__BrxrOVQ2__";
const pudding = "__VITE_IMAGE_ASSET__CPYYWNNp__";
const reddit = "__VITE_IMAGE_ASSET__1$8bP8NP__";
const onomatopoeiaOdyssey = "/_app/immutable/assets/onomatopoeia-odyssey.CSwaPah_.png";
const sscCover = "__VITE_IMAGE_ASSET__CL3r_TCr__";
const pikquik = "/_app/immutable/assets/pikquik.B98pKvVI.svg?webp&h=600";
const todos = "__VITE_IMAGE_ASSET__DASklmam__";
const bamboo = "__VITE_IMAGE_ASSET__C9xcpqNf__";
const dickinson = "__VITE_IMAGE_ASSET__m9Hf3VEw__";
const parkSpace = "__VITE_IMAGE_ASSET__BUkvl4CH__";
const urbanGreenSpace = "__VITE_IMAGE_ASSET__IeeNpU9a__";
const hackSC2024 = "__VITE_IMAGE_ASSET__CkSmimTd__";
const bigFish = "__VITE_IMAGE_ASSET__l11DaKf0__";
const sierCover = "__VITE_IMAGE_ASSET__CcchLVT9__";
const sierMockups = "__VITE_IMAGE_ASSET__C58srFVt__";
let projectsItems = [
  {
    link: "https://pudding.cool/2025/03/language/",
    title: "How do animals sound across languages?",
    thumbnail: "pudding-thumbnail.png",
    info: "MAR 2025",
    summary: "How can cultures hear the same physical sounds yet translate them into language so differently? Analyzing animal onomatopoeia across languages can demystify how we shape sound into meaning.",
    tags: ["visualization", "journalism"]
  },
  {
    link: "https://openaccess.cms-conferences.org/publications/book/978-1-964867-35-9/article/978-1-964867-35-9_88",
    title: "Optimizing UX design to enhance user confidence in digital products",
    thumbnail: "ux-confidence.png",
    info: "DEC 2024",
    summary: "A crucial outcome of strong UX design is user confidence, defined as a user’s trust in their ability to effectively interact with a product. This study identifies five key design principles that enhance user confidence.",
    tags: ["research"]
  },
  {
    link: "https://todos.vivianwli.com",
    title: 'Spring 2023 in "To-Do"s',
    thumbnail: "todos-thumbnail.png",
    info: "MAY 4 2023",
    summary: "A Priestly chart (connected dot plot) view of my activities across the semester, as tracked by my to-do app. Made with D3, Prisma, Supabase!",
    tags: ["visualization"]
  },
  {
    link: "https://bamboo.vivianwli.com",
    title: "Bamboo housing",
    thumbnail: "bamboo.png",
    info: "JUL 1 2022",
    summary: "A visual review of bamboo construction for residential use. How is bamboo currently used in the built environment, and how can it flourish in the future?",
    tags: ["research", "visualization"]
  },
  {
    link: "blog/sustainable-textiles",
    title: "An antidote to greenwashing",
    thumbnail: "haute-greenwashing.png",
    info: "DEC 3 2021 • HAUTE MAGAZINE",
    summary: "An in-depth feature on textiles and their impact in the context of sustainable fashion. Written for Haute Magazine's Fall 2021 issue, On the Edge.",
    tags: ["journalism"]
  },
  {
    link: "https://drive.google.com/file/d/1rFpdk-Jk-Yu2RCvrqzmTKbINfGt8sUdt/view",
    title: "Predicting COVID-19 cases via LSTM modeling with weather, mobility, and demographic data",
    thumbnail: "covid-model.png",
    info: "NOV 1 2020 • UMD INSTITUTE FOR RESEARCH IN ELECTRONICS AND APPLIED PHYSICS",
    summary: "A research project exploring the potential of applying machine learning (more specifically, an entity-aware long short term memory network) to COVID-19 case prediction.",
    tags: ["research"]
  },
  {
    link: "https://youtu.be/UmOasRlMuXs",
    title: "The hidden link between bats, COVID-19, and climate change",
    thumbnail: "breakthrough.png",
    info: "JUN 25 2020 • BREAKTHROUGH JUNIOR CHALLENGE",
    summary: "A synthesized explanation of yet another reason climate change should matter to us—the potential normalcy of pandemics via zoonotic diseases.",
    tags: ["educational", "video"]
  },
  {
    link: "https://www.nytimes.com/2020/05/07/learning/an-unexpected-dinner-guest-marine-plastic-pollution-hides-a-neurological-toxin-in-our-food.html",
    title: "An unexpected dinner guest: marine plastic pollution hides a neurological toxin in our food",
    thumbnail: "nyt-stem-writing.jpg",
    info: "MAY 7 2020 • THE NEW YORK TIMES",
    summary: `One of eight winning essays (among 1,618 entries) from the New York Times Learning Network's STEM projects Contest. Also published on <a href="https://phys.org/news/2019-09-marine-plastic-pollution-neurological-toxin.html">Phys.org</a>.`,
    tags: ["journalism"]
  },
  {
    link: "https://msmagazine.com/2019/12/16/inside-the-feminist-tech-jamboree-helping-girls-break-barriers-in-stem/",
    title: "Inside the feminist tech jamboree helping girls break barriers in STEM",
    thumbnail: "technica.jpg",
    info: "DEC 16 2019 • MS. MAGAZINE",
    summary: 'Behind-the-scenes of Technica, an all-women and non-binary hackathon hosted annually at the University of Maryland, College Park. Published as a part of "The Future is Ms."',
    tags: ["journalism"]
  },
  {
    link: "http://climatetracker.org/youths-reporting-on-youths/",
    title: "Tracking the UN's youth climate delegates",
    thumbnail: "climate-tracker.jpg",
    info: "OCT 2 2019 • CLIMATE TRACKER",
    summary: "Profiles of international leaders at the UN Youth Action Summit alongside the global climate strikes on September 20, 2019. Written with Yamila Frej and Amogh Dimri during a three-day mentorship with Climate Tracker.",
    tags: ["journalism"]
  },
  {
    link: "https://silverchips.mbhs.edu/content/raising-the-standard-for-mcps-in-ongoing-contract-negotiations-32318/",
    title: "Raising the standard for MCPS in ongoing contract negotiations",
    thumbnail: "teachers.jfif",
    info: "NOV 13 2019 • SILVER CHIPS ONLINE",
    summary: "Coverage of teachers' responses to the teacher strikes in Chicago, especially in light of recent contract re-negotiations for Mongomery County Public Schools.",
    tags: ["journalism"]
  }
];
let designItems = [
  {
    tag: "ui-ux",
    rows: [
      [
        {
          title: "Microsoft Research",
          description: "During my internship at MSR, I worked with the Human Computer and AI Experiences and the Human Understanding and Empathy research groups to design a community platform for sharing UI-driven mental health hacks. View my interactive intern presentation in Figma!",
          link: "https://www.figma.com/proto/aJhCKHstRCuC1n94h8EXBr/MSR-Hacks-%26-Pitfalls-Project?page-id=0%3A1&node-id=1-47882&node-type=CANVAS&viewport=728%2C320%2C0.02&t=lYdfyIJ4oXbKk5iz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A47882",
          src: msr,
          imgSrc: msrHacks
        },
        {
          title: "The New York Times",
          description: "I designed and coded various interactive experiences and editorial articles during several internships at the New York Times (Summer 2022, Fall 2022, Fall 2024). Check out a project from 2022 below.",
          link: "https://www.nytimes.com/by/vivian-li",
          src: nyt,
          pdfSrc: "1GfLeZuHuFtvPIZJMqv03bEnpXoyZVs1L"
        }
      ],
      [
        {
          title: "Reddit Ads Design",
          description: "During my summer internship, I worked on three product design projects to simplify the Reddit Ads platform for small businesses, from ad creative to Pixel event integration to viewing performance data.",
          link: "/blog/reddit-ads-design-2023",
          src: reddit,
          pdfSrc: "1wWo-lOF51xq3U1CoYh8QG1KDioArhWN0"
        },
        {
          title: "The Pudding",
          description: "During 2024, I designed, coded, and wrote a visual essay on cross-linguistic animal sounds as part of the Pudding Fellowship.",
          link: "https://pudding.cool/2025/03/language/",
          src: pudding,
          imgSrc: onomatopoeiaOdyssey
        },
        {
          title: "SIER",
          description: "For my senior capstone, I joined SIER (Seeing Is Everyone's Right), a startup that creates technology for vision-impaired users at an accessible price point. Here is the companion UI that I designed. More to come!",
          src: sierCover,
          imgSrc: sierMockups
        }
      ],
      [
        {
          title: "Pikquik",
          description: "My team's final project for ACAD 324, a spunky UI/UX design for a festival food app!",
          link: "/blog/pikquik",
          src: pikquik,
          pdfSrc: "1ukV4MYhvHfkJip-ozu9nIamJgOzgFS8z"
        },
        {
          title: 'Spring 2023 in "To-Do"s',
          description: "For ACAD 280: Designing for Digital Experiences, I used an app called TickTick to meticulously track and tag my tasks. Then, I visualized it as a connected dot plot, or Priestley chart.",
          link: "https://todos.vivianwli.com",
          src: todos,
          pdfSrc: "10yYYdcVZg2sRw2PqrtNPFNFN_GbluD7n"
        },
        {
          title: "HackSC 2024 design system",
          description: "As a part of the design team, I worked on the 2024 brand re-design. I worked on creating the illustrations of our hibiscus mascot, and I also contributed ideas for the other parts of this brand proposal.",
          src: hackSC2024,
          pdfSrc: "15ITvYB5u87ghY3ukvm0XHO5GOOStZzyf"
        }
      ],
      [
        {
          title: "Bamboo housing",
          description: "A visual review of bamboo construction for residential use. How is bamboo currently used in the built environment, and how can it flourish in the future?",
          link: "https://bamboo.vivianwli.com",
          src: bamboo
        },
        {
          title: "HackSC Hibiscus",
          description: "During Spring 2023, I led a team of 10 designers to create the 2023 HackSC brand guide, as well as the design system and UI Kit for our new hackathon platform, Hibiscus.",
          src: hibiscus,
          pdfSrc: "1zxUZ88whlmQh68N6eoNdlgPx_K8CW-Ed"
        },
        {
          title: "Student Sustainability Committee brand guide",
          description: "Brand guide for the USC Presidential Working Group's Student Sustainability Committee. Designed in Figma.",
          link: "https://www.figma.com/file/bkBckw68TnfQXLYtaNBRla/SSC?node-id=131%3A34",
          src: sscCover
        }
      ]
    ]
  },
  {
    tag: "3D",
    rows: [
      [
        {
          title: "Urban green space model",
          description: "For my illustration class final, I created this low poly blender model of a city block that utilizes many different types of green space, including a green roof and a farmer's market. The protected bike lanes are extra cute!",
          src: urbanGreenSpace,
          pdfSrc: "1onKvp-ZJIIB997cENj4VZ40xUPCvKoFS"
        },
        {
          title: "LA park space infographic",
          description: "For ARCH 519: Sustainability in the Built Environment, I visualized the trend of park space per capita in LA over time, and compared that to the city's goal.",
          src: parkSpace
        }
      ],
      [
        {
          title: "Low poly Trader Joe's",
          description: "This low-poly scene was my very first project in Blender. I love grocery stores and the holidays (especially Christmas), so it's a perfect combination!",
          src: traderJoes
        },
        {
          title: `Emily Dickinson's "Room of One's Own"`,
          description: "For COLT 374: Women Writers in Europe and America, I created a low poly model that brings together the central themes from both Virginia Woolf and Emily Dickinson's work.",
          link: "/blog/dickinson-woolf",
          src: dickinson
        }
      ]
    ]
  },
  {
    tag: "illustration",
    rows: [
      [
        {
          title: "Sirens merch graphic",
          description: "Matisse-inspired sweatshirt graphic design for Sirens A Cappella. Made in Figma and Adobe Fresco.",
          src: sirensMerch
        },
        {
          title: "Fruit blob emojis",
          description: "Custom emojis made for Discord, illustrated in Adobe Fresco!",
          link: "blog/fruit-blobs",
          src: blobs
        },
        {
          title: "Market fermentation",
          description: "Movie poster made in Adobe Illustrator and InDesign.",
          src: marketFermentation
        }
      ],
      [
        {
          title: "b1c shirt graphic",
          description: 'Merch graphic for cyberscurity team "b1c", centered around the theme of making waves.',
          src: b1c
        },
        {
          title: "Big Fish program cover",
          description: "I illustrated this program cover for a production of the musical Big Fish by several BFA students at USC.",
          src: bigFish
        },
        {
          title: "NYT Maker Week 2022 shirt",
          description: "Winning T-shirt design for Maker Week at the New York Times, the all-company hackathon.",
          src: makerTee
        }
      ]
    ]
  },
  {
    tag: "informational",
    rows: [
      [
        {
          title: "Student Sustainability Committee infographic",
          description: "One-pager for the USC Presidential Working Group's Student Sustainability Committee. Designed in Figma.",
          src: sscFlyer
        },
        {
          title: "HackSC Sponsorship packet",
          description: "Sponsorship packed used for pitching HackSC to potential sponsor companies. Designed in Figma.",
          src: hackSCSponsor
        }
      ]
    ]
  },
  {
    tag: "animation",
    rows: [
      [
        {
          title: "Still into you lyric video",
          description: 'Lyric video for "Still Into You" by Paramore. Designed in Figma and Illustrator, animated with After Effects.',
          link: "https://youtu.be/7ea1WhX4Wu8?t=36",
          src: stillIntoYou
        },
        {
          title: "Drawdown for dummies ep. 1",
          description: "Episode 1 of Drawdown for dummies, a video series breaking down Project Drawdown's 100 top solutions to bring us to climate drawdown. Made in Premiere Pro and After Effects.",
          link: "https://youtu.be/UWAu4PoBFxA",
          src: drawdown
        }
      ]
    ]
  }
];
const css = {
  code: ".modal-container.svelte-es56d3.svelte-es56d3{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--secondary-subtle-color);box-sizing:border-box;z-index:20;display:flex;justify-content:center;align-items:center}h1.svelte-es56d3.svelte-es56d3{margin-bottom:2rem}@media screen and (max-width: 32rem){h1.svelte-es56d3.svelte-es56d3{padding:0 5vw}}svg.svelte-es56d3.svelte-es56d3{filter:drop-shadow(0 0 1rem var(--secondary-subtle-color));grid-row:1/span 2;height:100%;grid-column:2}@media screen and (max-width: 32rem){svg.svelte-es56d3.svelte-es56d3{height:90%}}.tab-page.svelte-es56d3.svelte-es56d3{background-color:var(--bg-color);grid-row:2/-1;grid-column:1/-1;z-index:1;height:100%}.tab-page.svelte-es56d3 .tab-page-content.svelte-es56d3{margin:2rem}.top.svelte-es56d3.svelte-es56d3{z-index:2}.top.svelte-es56d3 svg.svelte-es56d3{fill:var(--bg-color)}.bottom.svelte-es56d3 .tab-page.svelte-es56d3{box-shadow:0 0 1rem var(--secondary-subtle-color)}.bottom.svelte-es56d3 svg.svelte-es56d3{fill:var(--bg-shadow-color)}.bottom.svelte-es56d3 .tab-page-content.svelte-es56d3{display:none}.tabs.svelte-es56d3.svelte-es56d3{display:grid;max-width:100%;width:100%}.tabs.svelte-es56d3 .tab-selector.svelte-es56d3{grid-column:1;grid-row:1;z-index:3;width:100%;height:2.5rem;display:grid;grid-template-columns:2.5rem 11rem 11rem auto}@media screen and (max-width: 50rem){.tabs.svelte-es56d3 .tab-selector.svelte-es56d3{grid-template-columns:0rem 11rem 11rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-es56d3 .tab-selector.svelte-es56d3{grid-template-columns:0rem 9rem 9rem auto}}.tabs.svelte-es56d3 .tab-selector .design-selector.svelte-es56d3{grid-column:2}.tabs.svelte-es56d3 .tab-selector .projects-selector.svelte-es56d3{grid-column:3}.tabs.svelte-es56d3 .tab.svelte-es56d3{grid-column:1;grid-row:1;display:grid;grid-template-rows:2.5rem 2.5rem auto}@media screen and (max-width: 32rem){.tabs.svelte-es56d3 .tab.svelte-es56d3{grid-template-rows:2rem 2.5rem auto}}.tabs.svelte-es56d3 .tab .tab-label.svelte-es56d3{font-size:1rem;margin:0;grid-row:1;grid-column:2;z-index:2;justify-self:center;align-self:center}.tabs.svelte-es56d3 .design-tab.svelte-es56d3{grid-template-columns:2.5rem 12rem auto}@media screen and (max-width: 50rem){.tabs.svelte-es56d3 .design-tab.svelte-es56d3{grid-template-columns:0 12rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-es56d3 .design-tab.svelte-es56d3{grid-template-columns:0 10rem auto}}.tabs.svelte-es56d3 .projects-tab.svelte-es56d3{grid-template-columns:12.5rem 12rem auto}@media screen and (max-width: 50rem){.tabs.svelte-es56d3 .projects-tab.svelte-es56d3{grid-template-columns:10rem 12rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-es56d3 .projects-tab.svelte-es56d3{grid-template-columns:8rem 10rem auto}}.selectedTag.svelte-es56d3 .filter{background-color:var(--highlight-color);color:var(--primary-selected-color)}.content-row.svelte-es56d3.svelte-es56d3{margin:1.5rem 0;display:flex;gap:1.5rem}.content-row.svelte-es56d3 .description.svelte-es56d3{opacity:0%;transition:opacity 0.5s;background-color:var(--absolute);border:1.5px solid var(--lighter);color:var(--text-color);font-size:0.85rem;padding:1.5rem;align-content:end;width:20rem;border-radius:5px}.content-row.svelte-es56d3 .description h2.svelte-es56d3{font-size:1.2rem;margin-bottom:0.5rem}.content-row.svelte-es56d3 .description p.svelte-es56d3{margin:0}.content-row.svelte-es56d3 .description.mobile.svelte-es56d3{opacity:90%;z-index:10;box-shadow:0 0 2rem var(--secondary-subtle-color);position:fixed;top:auto;left:0;bottom:0;height:min-content;width:100vw;box-sizing:border-box;border:none;border-radius:0}.content-row.svelte-es56d3 .description.mobile .more-link-mobile.svelte-es56d3{display:inline}@media(hover: hover){.content-row.svelte-es56d3 .img-container:hover .description.svelte-es56d3{opacity:95%;z-index:10}.content-row.svelte-es56d3 .img-container.svelte-es56d3{cursor:pointer}}.content-row.svelte-es56d3 .img-container:focus .description.svelte-es56d3{opacity:95%;z-index:10}.content-row.svelte-es56d3 .more-link.svelte-es56d3{display:inline;font-style:italic}.content-row.svelte-es56d3 img.svelte-es56d3{box-shadow:0 0 1rem var(--secondary-subtle-color);max-height:100%;max-width:100%;object-fit:scale-down;flex-grow:1}@media screen and (max-width: 50rem){.content-row.svelte-es56d3.svelte-es56d3{flex-direction:column}}.outro.svelte-es56d3.svelte-es56d3{display:flex;flex-direction:column;align-items:center}.outro.svelte-es56d3 h2.svelte-es56d3{background-color:var(--primary-color);background-image:none;font-size:1.75rem;margin:3rem 0 0 0}.outro.svelte-es56d3 .icons.svelte-es56d3{display:flex;gap:0.5rem}.outro.svelte-es56d3 .media-icon{font-size:1.5rem !important;color:var(--primary-color)}@media(hover: hover){.outro.svelte-es56d3 .media-icon:hover{color:var(--primary-selected-color);cursor:pointer}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\t// component imports\\n\\timport Tag from '$lib/components/Tag.svelte';\\n\\timport ArticleCard from '$lib/components/ArticleCard.svelte';\\n\\timport PortfolioModal from '$lib/components/PortfolioModal.svelte';\\n\\timport { projectsItems, designItems } from './data';\\n\\n\\t// icon imports\\n\\timport Icon from 'svelte-icons-pack/Icon.svelte';\\n\\timport FiMail from 'svelte-icons-pack/fi/FiMail';\\n\\timport FiLinkedin from 'svelte-icons-pack/fi/FiLinkedin';\\n\\n\\t// svelte imports\\n\\timport { page } from '$app/stores';\\n\\timport { fly } from 'svelte/transition';\\n\\timport { fade } from 'svelte/transition';\\n\\n\\t// for tooltip: in the case that x and y position aren't set, the cursor should fall back on a position that is out of view -- in this case, (-500, -500)\\n\\tlet m = { x: -500, y: -500 };\\n\\n\\t// logic to determine which tab is active or \\"on top\\"\\n\\tlet designPos;\\n\\tlet projectsPos;\\n\\n\\tlet tab = $page.url.searchParams.get('tab'); // based on url params, i.e. \\"?tab=projects\\"\\n\\tif (tab === 'projects') {\\n\\t\\tdesignPos = 'bottom';\\n\\t\\tprojectsPos = 'top';\\n\\t} else {\\n\\t\\tdesignPos = 'top';\\n\\t\\tprojectsPos = 'bottom';\\n\\t}\\n\\n\\tlet designTags = {};\\n\\tlet projectsTags = {};\\n\\n\\tlet modalItem;\\n\\n\\t// reset all filtering tags to be inactive\\n\\tfunction clear() {\\n\\t\\tfor (const key in projectsTags) {\\n\\t\\t\\tprojectsTags[key] = false;\\n\\t\\t}\\n\\t\\tfor (const key in designTags) {\\n\\t\\t\\tdesignTags[key] = false;\\n\\t\\t}\\n\\t}\\n\\n\\t// check to confirm that no tags have been selected\\n\\tfunction noneSelected() {\\n\\t\\treturn Object.keys(designTags).filter((k) => designTags[k]).length === 0;\\n\\t}\\n\\n\\tlet innerWidth;\\n\\t$: isMobile = innerWidth > 800 ? false : true; // determine whether the user is on mobile\\n\\tlet currentMobileDescription = '';\\n\\n\\t// sets which description is shown on mobile, if any\\n\\tfunction toggleMobileDescription(title) {\\n\\t\\tcurrentMobileDescription === title\\n\\t\\t\\t? (currentMobileDescription = '')\\n\\t\\t\\t: (currentMobileDescription = title);\\n\\t}\\n\\n\\tfor (const article of projectsItems) {\\n\\t\\tfor (const tag of article.tags) {\\n\\t\\t\\tif (!(tag in projectsTags)) {\\n\\t\\t\\t\\tprojectsTags[tag] = false; // all tags start off inactive by default\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\tfor (const category of designItems) {\\n\\t\\tif (!(category.tag in projectsTags)) {\\n\\t\\t\\tdesignTags[category.tag] = false; // all tags start off inactive by default\\n\\t\\t}\\n\\t}\\n\\n\\t// TODO: design tags\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>portfolio</title>\\n\\t<meta property=\\"og:title\\" content=\\"vivian li's portfolio\\" />\\n\\t<meta property=\\"og:type\\" content=\\"website\\" />\\n\\t<meta property=\\"og:image\\" content=\\"/thumbnails/vwl-site.png\\" />\\n\\t<meta property=\\"og:url\\" content=\\"https://www.vivianwli.com/portfolio\\" />\\n</svelte:head>\\n\\n<svelte:window bind:innerWidth />\\n\\n<div class=\\"content\\">\\n\\t{#if modalItem}\\n\\t\\t<div transition:fade class=\\"modal-container\\">\\n\\t\\t\\t<PortfolioModal bind:item={modalItem} />\\n\\t\\t</div>\\n\\t{/if}\\n\\n\\t<h1>portfolio</h1>\\n\\n\\t<!-- outer tabs wrapper -->\\n\\t<div class=\\"tabs\\">\\n\\t\\t<!-- tab selector is perfectly sized to match the tabs, necessary because the two tabs are directly overlapping grids (if one is on the bottom, it will never be selected)-->\\n\\t\\t<div class=\\"tab-selector\\">\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"design-selector\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tprojectsPos = 'bottom';\\n\\t\\t\\t\\t\\tdesignPos = 'top';\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\ton:keydown={() => {\\n\\t\\t\\t\\t\\tprojectsPos = 'bottom';\\n\\t\\t\\t\\t\\tdesignPos = 'top';\\n\\t\\t\\t\\t}}\\n\\t\\t\\t/>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"projects-selector\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tprojectsPos = 'top';\\n\\t\\t\\t\\t\\tdesignPos = 'bottom';\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\ton:keydown={() => {\\n\\t\\t\\t\\t\\tprojectsPos = 'top';\\n\\t\\t\\t\\t\\tdesignPos = 'bottom';\\n\\t\\t\\t\\t}}\\n\\t\\t\\t/>\\n\\t\\t</div>\\n\\t\\t<!-- design tab -->\\n\\t\\t<div\\n\\t\\t\\tclass=\\"design-tab tab {designPos}\\"\\n\\t\\t\\ton:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}\\n\\t\\t>\\n\\t\\t\\t<h2 class=\\"tab-label\\">design</h2>\\n\\t\\t\\t<!-- tab shape -->\\n\\t\\t\\t<svg viewBox=\\"0 0 263 108\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\td=\\"M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</svg>\\n\\t\\t\\t<!-- rectangular shape to give the illusion of a large folder with a tab -->\\n\\t\\t\\t<div class=\\"tab-page\\">\\n\\t\\t\\t\\t<div class=\\"tab-page-content\\">\\n\\t\\t\\t\\t\\t<!-- filters -->\\n\\t\\t\\t\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t\\t\\t\\t<!-- first display all selected tags -->\\n\\t\\t\\t\\t\\t\\t{#each Object.keys(designTags).filter((k) => designTags[k]) as tag}\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdesignTags[tag] = !designTags[tag];\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdesignTags[tag] = !designTags[tag];\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tag className={designTags[tag] ? 'selected' : ''}>{tag}</Tag>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t<!-- then display all unselected tags -->\\n\\t\\t\\t\\t\\t\\t{#each Object.keys(designTags).filter((k) => !designTags[k]) as tag}\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdesignTags[tag] = !designTags[tag];\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdesignTags[tag] = !designTags[tag];\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tag className={designTags[tag] ? 'selected' : ''}>{tag}</Tag>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t<div on:click={() => clear()} on:keydown={() => clear()}>\\n\\t\\t\\t\\t\\t\\t\\t<Tag className=\\"clear\\">clear all</Tag>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<!-- tab content separated into rows -->\\n\\n\\t\\t\\t\\t\\t<div class=\\"content-container\\">\\n\\t\\t\\t\\t\\t\\t<!-- we display each category in designItems by row -->\\n\\t\\t\\t\\t\\t\\t{#each designItems as category}\\n\\t\\t\\t\\t\\t\\t\\t{#if noneSelected() || designTags[category.tag]}\\n\\t\\t\\t\\t\\t\\t\\t\\t{#each category.rows as row}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"{category.tag} content-row\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#each row as item}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"img-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if isMobile}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if currentMobileDescription === item.title}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttransition:fly={{ y: 100, duration: 600 }}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"description mobile\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h2>{item.title}</h2>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tag className=\\"inactive\\">{category.tag}</Tag>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<p style=\\"margin-top: 0.75rem\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{item.description}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if 'link' in item}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"more-link-mobile\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tMore <a href={item.link}>here</a>.\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc={item.src}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\talt={item.title}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => toggleMobileDescription(item.title)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={() => toggleMobileDescription(item.title)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"web-item-container\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => (modalItem = item)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={() => (modalItem = item)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"description\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"position: fixed; left: {m.x + 5}px; top: {m.y + 5}px\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h2>{item.title}</h2>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Tag className=\\"inactive\\">{category.tag}</Tag>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<p style=\\"margin-top: 0.75rem\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{item.description}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src={item.src} alt={item.title} />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<!-- projects tab -->\\n\\t\\t<div class=\\"projects-tab tab {projectsPos}\\">\\n\\t\\t\\t<h2 class=\\"tab-label\\">projects</h2>\\n\\t\\t\\t<svg viewBox=\\"0 0 263 108\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\td=\\"M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</svg>\\n\\t\\t\\t<div class=\\"tab-page\\">\\n\\t\\t\\t\\t<div class=\\"tab-page-content\\">\\n\\t\\t\\t\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t\\t\\t\\t{#each Object.keys(projectsTags).filter((k) => projectsTags[k]) as tag}\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tprojectsTags[tag] = !projectsTags[tag];\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tprojectsTags[tag] = !projectsTags[tag];\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tag className={projectsTags[tag] ? 'selected' : ''}>{tag}</Tag>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t{#each Object.keys(projectsTags).filter((k) => !projectsTags[k]) as tag}\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tprojectsTags[tag] = !projectsTags[tag];\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tprojectsTags[tag] = !projectsTags[tag];\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tag className={projectsTags[tag] ? 'selected' : ''}>{tag}</Tag>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t<div on:click={() => clear()} on:keydown={() => clear()}>\\n\\t\\t\\t\\t\\t\\t\\t<Tag className=\\"clear\\">clear all</Tag>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"content-container\\">\\n\\t\\t\\t\\t\\t\\t<!-- render an article card for each projects item-->\\n\\t\\t\\t\\t\\t\\t<!-- display only filtered ones if a filter has been selected, otherwise display all -->\\n\\t\\t\\t\\t\\t\\t{#if Object.keys(projectsTags).filter((k) => projectsTags[k]).length === 0}\\n\\t\\t\\t\\t\\t\\t\\t{#each projectsItems as article}\\n\\t\\t\\t\\t\\t\\t\\t\\t<ArticleCard {article} />\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t{#each projectsItems as article}\\n\\t\\t\\t\\t\\t\\t\\t\\t{#each article.tags as tag}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if projectsTags[tag]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<ArticleCard {article} />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<!-- outro -->\\n\\t<div class=\\"outro\\">\\n\\t\\t<h2>don't be shy...</h2>\\n\\t\\t<div class=\\"icons\\">\\n\\t\\t\\t<a sveltekit:prefetch href=\\"https://www.linkedin.com/in/vivianwli/\\"\\n\\t\\t\\t\\t><Icon src={FiLinkedin} className=\\"custom-icon media-icon\\" /></a\\n\\t\\t\\t>\\n\\t\\t\\t<a sveltekit:prefetch href=\\"mailto:vivianwli.design@gmail.com\\"\\n\\t\\t\\t\\t><Icon src={FiMail} className=\\"custom-icon media-icon\\" /></a\\n\\t\\t\\t>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style lang=\\"scss\\">.modal-container {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: var(--secondary-subtle-color);\\n  box-sizing: border-box;\\n  z-index: 20;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n/* extra padding for \\"portfolio\\" header */\\nh1 {\\n  margin-bottom: 2rem;\\n}\\n@media screen and (max-width: 32rem) {\\n  h1 {\\n    padding: 0 5vw;\\n  }\\n}\\n\\n/* tab drop shadow */\\nsvg {\\n  filter: drop-shadow(0 0 1rem var(--secondary-subtle-color));\\n  grid-row: 1/span 2;\\n  height: 100%;\\n  grid-column: 2;\\n}\\n@media screen and (max-width: 32rem) {\\n  svg {\\n    height: 90%;\\n  }\\n}\\n\\n/* position both tabs in the same place on the grid */\\n.tab-page {\\n  background-color: var(--bg-color);\\n  grid-row: 2/-1;\\n  grid-column: 1/-1;\\n  z-index: 1;\\n  height: 100%;\\n}\\n.tab-page .tab-page-content {\\n  margin: 2rem;\\n}\\n\\n/* top tab styles */\\n.top {\\n  z-index: 2;\\n}\\n.top svg {\\n  fill: var(--bg-color);\\n}\\n\\n/* bottom tab styles */\\n.bottom .tab-page {\\n  box-shadow: 0 0 1rem var(--secondary-subtle-color);\\n}\\n.bottom svg {\\n  fill: var(--bg-shadow-color);\\n}\\n.bottom .tab-page-content {\\n  display: none;\\n}\\n\\n.tabs {\\n  display: grid;\\n  max-width: 100%;\\n  width: 100%;\\n  /* tab selector sizing to match with the tabs */\\n  /* place each tab grid in the same part of the outer grid */\\n  /* only the top row of each grid is different, to accommodate unique tab placement */\\n}\\n.tabs .tab-selector {\\n  grid-column: 1;\\n  grid-row: 1;\\n  z-index: 3;\\n  width: 100%;\\n  height: 2.5rem;\\n  display: grid;\\n  grid-template-columns: 2.5rem 11rem 11rem auto;\\n  /* responsive sizing */\\n}\\n@media screen and (max-width: 50rem) {\\n  .tabs .tab-selector {\\n    grid-template-columns: 0rem 11rem 11rem auto;\\n  }\\n}\\n@media screen and (max-width: 32rem) {\\n  .tabs .tab-selector {\\n    grid-template-columns: 0rem 9rem 9rem auto;\\n  }\\n}\\n.tabs .tab-selector .design-selector {\\n  grid-column: 2;\\n}\\n.tabs .tab-selector .projects-selector {\\n  grid-column: 3;\\n}\\n.tabs .tab {\\n  grid-column: 1;\\n  grid-row: 1;\\n  display: grid;\\n  grid-template-rows: 2.5rem 2.5rem auto;\\n}\\n@media screen and (max-width: 32rem) {\\n  .tabs .tab {\\n    grid-template-rows: 2rem 2.5rem auto;\\n  }\\n}\\n.tabs .tab .tab-label {\\n  font-size: 1rem;\\n  margin: 0;\\n  grid-row: 1;\\n  grid-column: 2;\\n  z-index: 2;\\n  justify-self: center;\\n  align-self: center;\\n}\\n.tabs .design-tab {\\n  grid-template-columns: 2.5rem 12rem auto;\\n}\\n@media screen and (max-width: 50rem) {\\n  .tabs .design-tab {\\n    grid-template-columns: 0 12rem auto;\\n  }\\n}\\n@media screen and (max-width: 32rem) {\\n  .tabs .design-tab {\\n    grid-template-columns: 0 10rem auto;\\n  }\\n}\\n.tabs .projects-tab {\\n  grid-template-columns: 12.5rem 12rem auto;\\n}\\n@media screen and (max-width: 50rem) {\\n  .tabs .projects-tab {\\n    grid-template-columns: 10rem 12rem auto;\\n  }\\n}\\n@media screen and (max-width: 32rem) {\\n  .tabs .projects-tab {\\n    grid-template-columns: 8rem 10rem auto;\\n  }\\n}\\n\\n.selectedTag :global(.filter) {\\n  background-color: var(--highlight-color);\\n  color: var(--primary-selected-color);\\n}\\n\\n.content-row {\\n  margin: 1.5rem 0;\\n  display: flex;\\n  gap: 1.5rem;\\n  /* image container styling for design tab */\\n}\\n.content-row .description {\\n  opacity: 0%;\\n  transition: opacity 0.5s;\\n  background-color: var(--absolute);\\n  border: 1.5px solid var(--lighter);\\n  color: var(--text-color);\\n  font-size: 0.85rem;\\n  padding: 1.5rem;\\n  align-content: end;\\n  width: 20rem;\\n  border-radius: 5px;\\n}\\n.content-row .description h2 {\\n  font-size: 1.2rem;\\n  margin-bottom: 0.5rem;\\n}\\n.content-row .description p {\\n  margin: 0;\\n}\\n.content-row .description.mobile {\\n  opacity: 90%;\\n  z-index: 10;\\n  box-shadow: 0 0 2rem var(--secondary-subtle-color);\\n  position: fixed;\\n  top: auto;\\n  left: 0;\\n  bottom: 0;\\n  height: min-content;\\n  width: 100vw;\\n  box-sizing: border-box;\\n  border: none;\\n  border-radius: 0;\\n}\\n.content-row .description.mobile .more-link-mobile {\\n  display: inline;\\n}\\n@media (hover: hover) {\\n  .content-row .img-container:hover .description {\\n    opacity: 95%;\\n    z-index: 10;\\n  }\\n  .content-row .img-container {\\n    cursor: pointer;\\n  }\\n}\\n.content-row .img-container:focus .description {\\n  opacity: 95%;\\n  z-index: 10;\\n}\\n.content-row .more-link {\\n  display: inline;\\n  font-style: italic;\\n}\\n.content-row img {\\n  box-shadow: 0 0 1rem var(--secondary-subtle-color);\\n  max-height: 100%;\\n  max-width: 100%;\\n  object-fit: scale-down;\\n  flex-grow: 1;\\n}\\n@media screen and (max-width: 50rem) {\\n  .content-row {\\n    flex-direction: column;\\n  }\\n}\\n\\n/* outro styles */\\n.outro {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.outro h2 {\\n  background-color: var(--primary-color);\\n  background-image: none;\\n  font-size: 1.75rem;\\n  margin: 3rem 0 0 0;\\n}\\n.outro .icons {\\n  display: flex;\\n  gap: 0.5rem;\\n}\\n.outro :global(.media-icon) {\\n  font-size: 1.5rem !important;\\n  color: var(--primary-color);\\n}\\n@media (hover: hover) {\\n  .outro :global(.media-icon):hover {\\n    color: var(--primary-selected-color);\\n    cursor: pointer;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAyTmB,4CAAiB,CAClC,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,wBAAwB,CAAC,CAC/C,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CAGA,8BAAG,CACD,aAAa,CAAE,IACjB,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,8BAAG,CACD,OAAO,CAAE,CAAC,CAAC,GACb,CACF,CAGA,+BAAI,CACF,MAAM,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,wBAAwB,CAAC,CAAC,CAC3D,QAAQ,CAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAClB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,CACf,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,+BAAI,CACF,MAAM,CAAE,GACV,CACF,CAGA,qCAAU,CACR,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,QAAQ,CAAE,CAAC,CAAC,EAAE,CACd,WAAW,CAAE,CAAC,CAAC,EAAE,CACjB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IACV,CACA,uBAAS,CAAC,+BAAkB,CAC1B,MAAM,CAAE,IACV,CAGA,gCAAK,CACH,OAAO,CAAE,CACX,CACA,kBAAI,CAAC,iBAAI,CACP,IAAI,CAAE,IAAI,UAAU,CACtB,CAGA,qBAAO,CAAC,uBAAU,CAChB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,wBAAwB,CACnD,CACA,qBAAO,CAAC,iBAAI,CACV,IAAI,CAAE,IAAI,iBAAiB,CAC7B,CACA,qBAAO,CAAC,+BAAkB,CACxB,OAAO,CAAE,IACX,CAEA,iCAAM,CACJ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAIT,CACA,mBAAK,CAAC,2BAAc,CAClB,WAAW,CAAE,CAAC,CACd,QAAQ,CAAE,CAAC,CACX,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,MAAM,CACd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,MAAM,CAAC,KAAK,CAAC,KAAK,CAAC,IAE5C,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,mBAAK,CAAC,2BAAc,CAClB,qBAAqB,CAAE,IAAI,CAAC,KAAK,CAAC,KAAK,CAAC,IAC1C,CACF,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,mBAAK,CAAC,2BAAc,CAClB,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IACxC,CACF,CACA,mBAAK,CAAC,aAAa,CAAC,8BAAiB,CACnC,WAAW,CAAE,CACf,CACA,mBAAK,CAAC,aAAa,CAAC,gCAAmB,CACrC,WAAW,CAAE,CACf,CACA,mBAAK,CAAC,kBAAK,CACT,WAAW,CAAE,CAAC,CACd,QAAQ,CAAE,CAAC,CACX,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,MAAM,CAAC,MAAM,CAAC,IACpC,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,mBAAK,CAAC,kBAAK,CACT,kBAAkB,CAAE,IAAI,CAAC,MAAM,CAAC,IAClC,CACF,CACA,mBAAK,CAAC,IAAI,CAAC,wBAAW,CACpB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,CAAC,CACX,WAAW,CAAE,CAAC,CACd,OAAO,CAAE,CAAC,CACV,YAAY,CAAE,MAAM,CACpB,UAAU,CAAE,MACd,CACA,mBAAK,CAAC,yBAAY,CAChB,qBAAqB,CAAE,MAAM,CAAC,KAAK,CAAC,IACtC,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,mBAAK,CAAC,yBAAY,CAChB,qBAAqB,CAAE,CAAC,CAAC,KAAK,CAAC,IACjC,CACF,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,mBAAK,CAAC,yBAAY,CAChB,qBAAqB,CAAE,CAAC,CAAC,KAAK,CAAC,IACjC,CACF,CACA,mBAAK,CAAC,2BAAc,CAClB,qBAAqB,CAAE,OAAO,CAAC,KAAK,CAAC,IACvC,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,mBAAK,CAAC,2BAAc,CAClB,qBAAqB,CAAE,KAAK,CAAC,KAAK,CAAC,IACrC,CACF,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,mBAAK,CAAC,2BAAc,CAClB,qBAAqB,CAAE,IAAI,CAAC,KAAK,CAAC,IACpC,CACF,CAEA,0BAAY,CAAS,OAAS,CAC5B,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,CACxC,KAAK,CAAE,IAAI,wBAAwB,CACrC,CAEA,wCAAa,CACX,MAAM,CAAE,MAAM,CAAC,CAAC,CAChB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,MAEP,CACA,0BAAY,CAAC,0BAAa,CACxB,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,CAClC,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,OAAO,CAClB,OAAO,CAAE,MAAM,CACf,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GACjB,CACA,0BAAY,CAAC,YAAY,CAAC,gBAAG,CAC3B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,MACjB,CACA,0BAAY,CAAC,YAAY,CAAC,eAAE,CAC1B,MAAM,CAAE,CACV,CACA,0BAAY,CAAC,YAAY,qBAAQ,CAC/B,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,wBAAwB,CAAC,CAClD,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,CACjB,CACA,0BAAY,CAAC,YAAY,OAAO,CAAC,+BAAkB,CACjD,OAAO,CAAE,MACX,CACA,MAAO,QAAQ,KAAK,CAAE,CACpB,0BAAY,CAAC,cAAc,MAAM,CAAC,0BAAa,CAC7C,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,EACX,CACA,0BAAY,CAAC,4BAAe,CAC1B,MAAM,CAAE,OACV,CACF,CACA,0BAAY,CAAC,cAAc,MAAM,CAAC,0BAAa,CAC7C,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,EACX,CACA,0BAAY,CAAC,wBAAW,CACtB,OAAO,CAAE,MAAM,CACf,UAAU,CAAE,MACd,CACA,0BAAY,CAAC,iBAAI,CACf,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,wBAAwB,CAAC,CAClD,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,CACb,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,wCAAa,CACX,cAAc,CAAE,MAClB,CACF,CAGA,kCAAO,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CACA,oBAAM,CAAC,gBAAG,CACR,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,gBAAgB,CAAE,IAAI,CACtB,SAAS,CAAE,OAAO,CAClB,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,CACA,oBAAM,CAAC,oBAAO,CACZ,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,MACP,CACA,oBAAM,CAAS,WAAa,CAC1B,SAAS,CAAE,MAAM,CAAC,UAAU,CAC5B,KAAK,CAAE,IAAI,eAAe,CAC5B,CACA,MAAO,QAAQ,KAAK,CAAE,CACpB,oBAAM,CAAS,WAAY,MAAO,CAChC,KAAK,CAAE,IAAI,wBAAwB,CAAC,CACpC,MAAM,CAAE,OACV,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let m = { x: -500, y: -500 };
  let designPos;
  let projectsPos;
  let tab = $page.url.searchParams.get("tab");
  if (tab === "projects") {
    designPos = "bottom";
    projectsPos = "top";
  } else {
    designPos = "top";
    projectsPos = "bottom";
  }
  let designTags = {};
  let projectsTags = {};
  function noneSelected() {
    return Object.keys(designTags).filter((k) => designTags[k]).length === 0;
  }
  let currentMobileDescription = "";
  for (const article of projectsItems) {
    for (const tag of article.tags) {
      if (!(tag in projectsTags)) {
        projectsTags[tag] = false;
      }
    }
  }
  for (const category of designItems) {
    if (!(category.tag in projectsTags)) {
      designTags[category.tag] = false;
    }
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isMobile = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-h8188z_START -->${$$result.title = `<title>portfolio</title>`, ""}<meta property="og:title" content="vivian li's portfolio"><meta property="og:type" content="website"><meta property="og:image" content="/thumbnails/vwl-site.png"><meta property="og:url" content="https://www.vivianwli.com/portfolio"><!-- HEAD_svelte-h8188z_END -->`, ""}  <div class="content">${``} <h1 class="svelte-es56d3" data-svelte-h="svelte-1iv1y5u">portfolio</h1>  <div class="tabs svelte-es56d3"> <div class="tab-selector svelte-es56d3"><div class="design-selector svelte-es56d3"></div> <div class="projects-selector svelte-es56d3"></div></div>  <div class="${"design-tab tab " + escape(designPos, true) + " svelte-es56d3"}"><h2 class="tab-label svelte-es56d3" data-svelte-h="svelte-kg81fn">design</h2>  <svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-es56d3"><path d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"></path></svg>  <div class="tab-page svelte-es56d3"><div class="tab-page-content svelte-es56d3"> <div class="buttons"> ${each(Object.keys(designTags).filter((k) => designTags[k]), (tag) => {
      return `<div>${validate_component(Tag, "Tag").$$render(
        $$result,
        {
          className: designTags[tag] ? "selected" : ""
        },
        {},
        {
          default: () => {
            return `${escape(tag)}`;
          }
        }
      )} </div>`;
    })}  ${each(Object.keys(designTags).filter((k) => !designTags[k]), (tag) => {
      return `<div>${validate_component(Tag, "Tag").$$render(
        $$result,
        {
          className: designTags[tag] ? "selected" : ""
        },
        {},
        {
          default: () => {
            return `${escape(tag)}`;
          }
        }
      )} </div>`;
    })} <div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
      default: () => {
        return `clear all`;
      }
    })}</div></div>  <div class="content-container"> ${each(designItems, (category) => {
      return `${noneSelected() || designTags[category.tag] ? `${each(category.rows, (row) => {
        return `<div class="${escape(category.tag, true) + " content-row svelte-es56d3"}">${each(row, (item) => {
          return `<div class="img-container svelte-es56d3">${isMobile ? `${currentMobileDescription === item.title ? `<div class="description mobile svelte-es56d3"><h2 class="svelte-es56d3">${escape(item.title)}</h2> ${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
            default: () => {
              return `${escape(category.tag)}`;
            }
          })} <p style="margin-top: 0.75rem" class="svelte-es56d3">${escape(item.description)} ${"link" in item ? `<span class="more-link-mobile svelte-es56d3" data-svelte-h="svelte-16p5h6o">More <a${add_attribute("href", item.link, 0)}>here</a>.
																	</span>` : ``}</p> </div>` : ``} <img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.title, 0)} class="svelte-es56d3">` : `<div class="web-item-container"><div class="description svelte-es56d3" style="${"position: fixed; left: " + escape(m.x + 5, true) + "px; top: " + escape(m.y + 5, true) + "px"}"><h2 class="svelte-es56d3">${escape(item.title)}</h2> ${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
            default: () => {
              return `${escape(category.tag)}`;
            }
          })} <p style="margin-top: 0.75rem" class="svelte-es56d3">${escape(item.description)} </p></div> <img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.title, 0)} class="svelte-es56d3"> </div>`} </div>`;
        })} </div>`;
      })}` : ``}`;
    })}</div></div></div></div>  <div class="${"projects-tab tab " + escape(projectsPos, true) + " svelte-es56d3"}"><h2 class="tab-label svelte-es56d3" data-svelte-h="svelte-9yifcf">projects</h2> <svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-es56d3"><path d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"></path></svg> <div class="tab-page svelte-es56d3"><div class="tab-page-content svelte-es56d3"><div class="buttons">${each(Object.keys(projectsTags).filter((k) => projectsTags[k]), (tag) => {
      return `<div>${validate_component(Tag, "Tag").$$render(
        $$result,
        {
          className: projectsTags[tag] ? "selected" : ""
        },
        {},
        {
          default: () => {
            return `${escape(tag)}`;
          }
        }
      )} </div>`;
    })} ${each(Object.keys(projectsTags).filter((k) => !projectsTags[k]), (tag) => {
      return `<div>${validate_component(Tag, "Tag").$$render(
        $$result,
        {
          className: projectsTags[tag] ? "selected" : ""
        },
        {},
        {
          default: () => {
            return `${escape(tag)}`;
          }
        }
      )} </div>`;
    })} <div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
      default: () => {
        return `clear all`;
      }
    })}</div></div> <div class="content-container">  ${Object.keys(projectsTags).filter((k) => projectsTags[k]).length === 0 ? `${each(projectsItems, (article) => {
      return `${validate_component(ArticleCard, "ArticleCard").$$render($$result, { article }, {}, {})}`;
    })}` : `${each(projectsItems, (article) => {
      return `${each(article.tags, (tag) => {
        return `${projectsTags[tag] ? `${validate_component(ArticleCard, "ArticleCard").$$render($$result, { article }, {}, {})}` : ``}`;
      })}`;
    })}`}</div></div></div></div></div>  <div class="outro svelte-es56d3"><h2 class="svelte-es56d3" data-svelte-h="svelte-13rkw1l">don&#39;t be shy...</h2> <div class="icons svelte-es56d3"><a sveltekit:prefetch href="https://www.linkedin.com/in/vivianwli/">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        src: FiLinkedin,
        className: "custom-icon media-icon"
      },
      {},
      {}
    )}</a> <a sveltekit:prefetch href="mailto:vivianwli.design@gmail.com">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        src: FiMail,
        className: "custom-icon media-icon"
      },
      {},
      {}
    )}</a></div></div> </div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
