import { c as create_ssr_component, f as add_attribute, e as escape, d as each, v as validate_component, b as subscribe } from "../../../chunks/index.js";
import { T as Tag } from "../../../chunks/Tag.js";
/* empty css                   */import { I as Icon } from "../../../chunks/Icon.js";
import "svelte-icons-pack/fi/FiX.js";
import FiMail from "svelte-icons-pack/fi/FiMail.js";
import FiLinkedin from "svelte-icons-pack/fi/FiLinkedin.js";
import { p as page } from "../../../chunks/stores.js";
const ArticleCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-container.svelte-1soyb9w.svelte-1soyb9w{background-color:var(--postcard-color);box-shadow:0 0 1rem var(--secondary-subtle-color);display:flex;margin:1.5rem 0}@media screen and (max-width: 50rem){.card-container.svelte-1soyb9w.svelte-1soyb9w{display:block}}.card-container.svelte-1soyb9w img.svelte-1soyb9w{width:40%;object-fit:cover}@media screen and (max-width: 50rem){.card-container.svelte-1soyb9w img.svelte-1soyb9w{width:100%}}.card-container.svelte-1soyb9w .date.svelte-1soyb9w{font-size:0.8rem}.card-container.svelte-1soyb9w .post-description.svelte-1soyb9w{padding:1.5rem;align-self:center}@media screen and (max-width: 50rem){.card-container.svelte-1soyb9w .post-description.svelte-1soyb9w{padding:0 1rem 0.5rem 1rem}}.card-container.svelte-1soyb9w h2.svelte-1soyb9w{font-size:1.2rem;margin-top:0;margin-bottom:0}@media screen and (max-width: 50rem){.card-container.svelte-1soyb9w h2.svelte-1soyb9w{margin-top:1rem}}.card-container.svelte-1soyb9w p.svelte-1soyb9w{font-size:0.9rem;margin-bottom:0}a.svelte-1soyb9w.svelte-1soyb9w{text-decoration:none;color:var(--text-color)}.buttons.svelte-1soyb9w.svelte-1soyb9w{padding-top:1rem}",
  map: null
};
const ArticleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  $$result.css.add(css$1);
  return `<a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", article.link, 0)} target="${"_blank"}" class="${"svelte-1soyb9w"}"><div class="${"card-container svelte-1soyb9w"}"><img${add_attribute("src", "/thumbnails/" + article.thumbnail + "?w=400&webp", 0)}${add_attribute("alt", article.title, 0)} class="${"svelte-1soyb9w"}">
		<div class="${"post-description svelte-1soyb9w"}"><h2 class="${"svelte-1soyb9w"}">${escape(article.title)}</h2>
			<p class="${"date svelte-1soyb9w"}">${escape(article.info)}</p>
			<div class="${"buttons svelte-1soyb9w"}">${each(article.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}`;
  })}</div>
			<p class="${"svelte-1soyb9w"}"><!-- HTML_TAG_START -->${article.summary}<!-- HTML_TAG_END --></p></div></div>
</a>`;
});
const Circle_svelte_svelte_type_style_lang = "";
const Circle2_svelte_svelte_type_style_lang = "";
const Circle3_svelte_svelte_type_style_lang = "";
const DoubleBounce_svelte_svelte_type_style_lang = "";
const GoogleSpin_svelte_svelte_type_style_lang = "";
const ScaleOut_svelte_svelte_type_style_lang = "";
const SpinLine_svelte_svelte_type_style_lang = "";
const Stretch_svelte_svelte_type_style_lang = "";
const BarLoader_svelte_svelte_type_style_lang = "";
const Jumper_svelte_svelte_type_style_lang = "";
const RingLoader_svelte_svelte_type_style_lang = "";
const SyncLoader_svelte_svelte_type_style_lang = "";
const Rainbow_svelte_svelte_type_style_lang = "";
const Firework_svelte_svelte_type_style_lang = "";
const Pulse_svelte_svelte_type_style_lang = "";
const Jellyfish_svelte_svelte_type_style_lang = "";
const Chasing_svelte_svelte_type_style_lang = "";
const Square_svelte_svelte_type_style_lang = "";
const Shadow_svelte_svelte_type_style_lang = "";
const Moon_svelte_svelte_type_style_lang = "";
const Plane_svelte_svelte_type_style_lang = "";
const Diamonds_svelte_svelte_type_style_lang = "";
const Clock_svelte_svelte_type_style_lang = "";
const Wave_svelte_svelte_type_style_lang = "";
const Puff_svelte_svelte_type_style_lang = "";
const ArrowDown_svelte_svelte_type_style_lang = "";
const ArrowUp_svelte_svelte_type_style_lang = "";
const PortfolioModal_svelte_svelte_type_style_lang = "";
const traderJoes = "/_app/immutable/assets/trader-joes-big-981d6edb.webp";
const hibiscus = "/_app/immutable/assets/hibiscus-20307270.webp";
const marketFermentation = "/_app/immutable/assets/market-fermentation-2-5ac65bec.webp";
const blobs = "/_app/immutable/assets/blobs-portfolio-4d79814c.webp";
const b1c = "/_app/immutable/assets/b1c-surfing-880d15fd.webp";
const makerTee = "/_app/immutable/assets/nyt-maker-2022-6f7d26f6.webp";
const sirensMerch = "/_app/immutable/assets/sirens-merch-d9dea941.webp";
const stillIntoYou = "/_app/immutable/assets/still-into-you-30037315.webp";
const drawdown = "/_app/immutable/assets/drawdown-af33d4bc.webp";
const sscFlyer = "/_app/immutable/assets/ssc-flyer-f605b8fe.webp";
const hackSCSponsor = "/_app/immutable/assets/hacksc-sponsorship-abf42924.webp";
const msr = "/_app/immutable/assets/msr-2cff3bec.webp";
const msrHacks = "/_app/immutable/assets/msrHacks-1f97e683.webp";
const nyt = "/_app/immutable/assets/nyt-thumbnail-6aef7cc2.webp";
const pudding = "/_app/immutable/assets/pudding-19727fb1.webp";
const reddit = "/_app/immutable/assets/reddit-5c817ded.webp";
const onomatopoeiaOdyssey = "/_app/immutable/assets/onomatopoeia-odyssey-26e07d2a.png";
const sscCover = "/_app/immutable/assets/ssc-brand-guide-cover-b9b13106.webp";
const pikquik = "/_app/immutable/assets/pikquik-1b8ce245.svg?webp&h=600";
const todos = "/_app/immutable/assets/todos-thumbnail-5ffa56c1.webp";
const bamboo = "/_app/immutable/assets/bamboo-3b6458f0.webp";
const dickinson = "/_app/immutable/assets/dickinson-woolf-6ee9341c.webp";
const parkSpace = "/_app/immutable/assets/park-space-infographic-9af7f58d.webp";
const urbanGreenSpace = "/_app/immutable/assets/urban-green-space-00fcba34.webp";
const hackSC2024 = "/_app/immutable/assets/hacksc-2024-3ba61504.webp";
const bigFish = "/_app/immutable/assets/big-fish-dba3f846.webp";
const sierCover = "/_app/immutable/assets/sier-cover-39e752d7.webp";
const sierMockups = "/_app/immutable/assets/sier-mockups-bf630283.webp";
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
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modal-container.svelte-es56d3.svelte-es56d3{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--secondary-subtle-color);box-sizing:border-box;z-index:20;display:flex;justify-content:center;align-items:center}h1.svelte-es56d3.svelte-es56d3{margin-bottom:2rem}@media screen and (max-width: 32rem){h1.svelte-es56d3.svelte-es56d3{padding:0 5vw}}svg.svelte-es56d3.svelte-es56d3{filter:drop-shadow(0 0 1rem var(--secondary-subtle-color));grid-row:1/span 2;height:100%;grid-column:2}@media screen and (max-width: 32rem){svg.svelte-es56d3.svelte-es56d3{height:90%}}.tab-page.svelte-es56d3.svelte-es56d3{background-color:var(--bg-color);grid-row:2/-1;grid-column:1/-1;z-index:1;height:100%}.tab-page.svelte-es56d3 .tab-page-content.svelte-es56d3{margin:2rem}.top.svelte-es56d3.svelte-es56d3{z-index:2}.top.svelte-es56d3 svg.svelte-es56d3{fill:var(--bg-color)}.bottom.svelte-es56d3 .tab-page.svelte-es56d3{box-shadow:0 0 1rem var(--secondary-subtle-color)}.bottom.svelte-es56d3 svg.svelte-es56d3{fill:var(--bg-shadow-color)}.bottom.svelte-es56d3 .tab-page-content.svelte-es56d3{display:none}.tabs.svelte-es56d3.svelte-es56d3{display:grid;max-width:100%;width:100%}.tabs.svelte-es56d3 .tab-selector.svelte-es56d3{grid-column:1;grid-row:1;z-index:3;width:100%;height:2.5rem;display:grid;grid-template-columns:2.5rem 11rem 11rem auto}@media screen and (max-width: 50rem){.tabs.svelte-es56d3 .tab-selector.svelte-es56d3{grid-template-columns:0rem 11rem 11rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-es56d3 .tab-selector.svelte-es56d3{grid-template-columns:0rem 9rem 9rem auto}}.tabs.svelte-es56d3 .tab-selector .design-selector.svelte-es56d3{grid-column:2}.tabs.svelte-es56d3 .tab-selector .projects-selector.svelte-es56d3{grid-column:3}.tabs.svelte-es56d3 .tab.svelte-es56d3{grid-column:1;grid-row:1;display:grid;grid-template-rows:2.5rem 2.5rem auto}@media screen and (max-width: 32rem){.tabs.svelte-es56d3 .tab.svelte-es56d3{grid-template-rows:2rem 2.5rem auto}}.tabs.svelte-es56d3 .tab .tab-label.svelte-es56d3{font-size:1rem;margin:0;grid-row:1;grid-column:2;z-index:2;justify-self:center;align-self:center}.tabs.svelte-es56d3 .design-tab.svelte-es56d3{grid-template-columns:2.5rem 12rem auto}@media screen and (max-width: 50rem){.tabs.svelte-es56d3 .design-tab.svelte-es56d3{grid-template-columns:0 12rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-es56d3 .design-tab.svelte-es56d3{grid-template-columns:0 10rem auto}}.tabs.svelte-es56d3 .projects-tab.svelte-es56d3{grid-template-columns:12.5rem 12rem auto}@media screen and (max-width: 50rem){.tabs.svelte-es56d3 .projects-tab.svelte-es56d3{grid-template-columns:10rem 12rem auto}}@media screen and (max-width: 32rem){.tabs.svelte-es56d3 .projects-tab.svelte-es56d3{grid-template-columns:8rem 10rem auto}}.selectedTag.svelte-es56d3 .filter{background-color:var(--highlight-color);color:var(--primary-selected-color)}.content-row.svelte-es56d3.svelte-es56d3{margin:1.5rem 0;display:flex;gap:1.5rem}.content-row.svelte-es56d3 .description.svelte-es56d3{opacity:0%;transition:opacity 0.5s;background-color:var(--absolute);border:1.5px solid var(--lighter);color:var(--text-color);font-size:0.85rem;padding:1.5rem;align-content:end;width:20rem;border-radius:5px}.content-row.svelte-es56d3 .description h2.svelte-es56d3{font-size:1.2rem;margin-bottom:0.5rem}.content-row.svelte-es56d3 .description p.svelte-es56d3{margin:0}.content-row.svelte-es56d3 .description.mobile.svelte-es56d3{opacity:90%;z-index:10;box-shadow:0 0 2rem var(--secondary-subtle-color);position:fixed;top:auto;left:0;bottom:0;height:min-content;width:100vw;box-sizing:border-box;border:none;border-radius:0}.content-row.svelte-es56d3 .description.mobile .more-link-mobile.svelte-es56d3{display:inline}@media(hover: hover){.content-row.svelte-es56d3 .img-container:hover .description.svelte-es56d3{opacity:95%;z-index:10}.content-row.svelte-es56d3 .img-container.svelte-es56d3{cursor:pointer}}.content-row.svelte-es56d3 .img-container:focus .description.svelte-es56d3{opacity:95%;z-index:10}.content-row.svelte-es56d3 .more-link.svelte-es56d3{display:inline;font-style:italic}.content-row.svelte-es56d3 img.svelte-es56d3{box-shadow:0 0 1rem var(--secondary-subtle-color);max-height:100%;max-width:100%;object-fit:scale-down;flex-grow:1}@media screen and (max-width: 50rem){.content-row.svelte-es56d3.svelte-es56d3{flex-direction:column}}.outro.svelte-es56d3.svelte-es56d3{display:flex;flex-direction:column;align-items:center}.outro.svelte-es56d3 h2.svelte-es56d3{background-color:var(--primary-color);background-image:none;font-size:1.75rem;margin:3rem 0 0 0}.outro.svelte-es56d3 .icons.svelte-es56d3{display:flex;gap:0.5rem}.outro.svelte-es56d3 .media-icon{font-size:1.5rem !important;color:var(--primary-color)}@media(hover: hover){.outro.svelte-es56d3 .media-icon:hover{color:var(--primary-selected-color);cursor:pointer}}",
  map: null
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
  do {
    $$settled = true;
    isMobile = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-h8188z_START -->${$$result.title = `<title>portfolio</title>`, ""}<meta property="${"og:title"}" content="${"vivian li's portfolio"}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:image"}" content="${"/thumbnails/vwl-site.png"}"><meta property="${"og:url"}" content="${"https://www.vivianwli.com/portfolio"}"><!-- HEAD_svelte-h8188z_END -->`, ""}



<div class="${"content"}">${``}

	<h1 class="${"svelte-es56d3"}">portfolio</h1>

	
	<div class="${"tabs svelte-es56d3"}">
		<div class="${"tab-selector svelte-es56d3"}"><div class="${"design-selector svelte-es56d3"}"></div>
			<div class="${"projects-selector svelte-es56d3"}"></div></div>
		
		<div class="${"design-tab tab " + escape(designPos, true) + " svelte-es56d3"}"><h2 class="${"tab-label svelte-es56d3"}">design</h2>
			
			<svg viewBox="${"0 0 263 108"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-es56d3"}"><path d="${"M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"}"></path></svg>
			
			<div class="${"tab-page svelte-es56d3"}"><div class="${"tab-page-content svelte-es56d3"}">
					<div class="${"buttons"}">
						${each(Object.keys(designTags).filter((k) => designTags[k]), (tag) => {
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
      )}
							</div>`;
    })}
						
						${each(Object.keys(designTags).filter((k) => !designTags[k]), (tag) => {
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
      )}
							</div>`;
    })}
						<div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
      default: () => {
        return `clear all`;
      }
    })}</div></div>

					

					<div class="${"content-container"}">
						${each(designItems, (category) => {
      return `${noneSelected() || designTags[category.tag] ? `${each(category.rows, (row) => {
        return `<div class="${escape(category.tag, true) + " content-row svelte-es56d3"}">${each(row, (item) => {
          return `<div class="${"img-container svelte-es56d3"}">${isMobile ? `${currentMobileDescription === item.title ? `<div class="${"description mobile svelte-es56d3"}"><h2 class="${"svelte-es56d3"}">${escape(item.title)}</h2>
															${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
            default: () => {
              return `${escape(category.tag)}`;
            }
          })}
															<p style="${"margin-top: 0.75rem"}" class="${"svelte-es56d3"}">${escape(item.description)}
																${"link" in item ? `<span class="${"more-link-mobile svelte-es56d3"}">More <a${add_attribute("href", item.link, 0)}>here</a>.
																	</span>` : ``}</p>
														</div>` : ``}
													<img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.title, 0)} class="${"svelte-es56d3"}">` : `<div class="${"web-item-container"}"><div class="${"description svelte-es56d3"}" style="${"position: fixed; left: " + escape(m.x + 5, true) + "px; top: " + escape(m.y + 5, true) + "px"}"><h2 class="${"svelte-es56d3"}">${escape(item.title)}</h2>
															${validate_component(Tag, "Tag").$$render($$result, { className: "inactive" }, {}, {
            default: () => {
              return `${escape(category.tag)}`;
            }
          })}
															<p style="${"margin-top: 0.75rem"}" class="${"svelte-es56d3"}">${escape(item.description)}
															</p></div>
														<img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.title, 0)} class="${"svelte-es56d3"}">
													</div>`}
											</div>`;
        })}
									</div>`;
      })}` : ``}`;
    })}</div></div></div></div>
		
		<div class="${"projects-tab tab " + escape(projectsPos, true) + " svelte-es56d3"}"><h2 class="${"tab-label svelte-es56d3"}">projects</h2>
			<svg viewBox="${"0 0 263 108"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-es56d3"}"><path d="${"M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"}"></path></svg>
			<div class="${"tab-page svelte-es56d3"}"><div class="${"tab-page-content svelte-es56d3"}"><div class="${"buttons"}">${each(Object.keys(projectsTags).filter((k) => projectsTags[k]), (tag) => {
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
      )}
							</div>`;
    })}
						${each(Object.keys(projectsTags).filter((k) => !projectsTags[k]), (tag) => {
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
      )}
							</div>`;
    })}
						<div>${validate_component(Tag, "Tag").$$render($$result, { className: "clear" }, {}, {
      default: () => {
        return `clear all`;
      }
    })}</div></div>
					<div class="${"content-container"}">
						
						${Object.keys(projectsTags).filter((k) => projectsTags[k]).length === 0 ? `${each(projectsItems, (article) => {
      return `${validate_component(ArticleCard, "ArticleCard").$$render($$result, { article }, {}, {})}`;
    })}` : `${each(projectsItems, (article) => {
      return `${each(article.tags, (tag) => {
        return `${projectsTags[tag] ? `${validate_component(ArticleCard, "ArticleCard").$$render($$result, { article }, {}, {})}` : ``}`;
      })}`;
    })}`}</div></div></div></div></div>

	
	<div class="${"outro svelte-es56d3"}"><h2 class="${"svelte-es56d3"}">don&#39;t be shy...</h2>
		<div class="${"icons svelte-es56d3"}"><a sveltekit:prefetch href="${"https://www.linkedin.com/in/vivianwli/"}">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        src: FiLinkedin,
        className: "custom-icon media-icon"
      },
      {},
      {}
    )}</a>
			<a sveltekit:prefetch href="${"mailto:vivianwli.design@gmail.com"}">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        src: FiMail,
        className: "custom-icon media-icon"
      },
      {},
      {}
    )}</a></div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
