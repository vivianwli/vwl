
// image imports
import traderJoes from '$lib/assets/trader-joes-big.png?webp&h=1000';
import hackscIG from '$lib/assets/hacksc-ig.png?webp';
import climateduIG from '$lib/assets/climatedu-ig.png?webp';
import marketFermentation from '$lib/assets/market-fermentation-2.png?webp';
import blobs from '$lib/assets/blobs-portfolio.png?webp';
import iy8 from '$lib/assets/iy8.png?webp';
import b1c from '$lib/assets/b1c-surfing.png?webp';
import makerTee from '$lib/assets/nyt-maker-2022.png?webp';
import sirensMerch from '$lib/assets/sirens-merch.png?webp';
import oracle from '$lib/assets/blair-oracle.png?webp';
import climateduSite from '$lib/assets/climatedu-website.png?webp';
import stillIntoYou from '$lib/assets/still-into-you.png?webp';
import drawdown from '$lib/assets/drawdown.png?webp';
import sscFlyer from '$lib/assets/ssc-flyer.png?webp';
import hackSCSponsor from '$lib/assets/hacksc-sponsorship.png?webp';
import hackSCSite from '$lib/assets/hacksc-cover.png?webp';
import nyt from '$lib/assets/nyt-thumbnail.png?webp';
import reddit from '$lib/assets/reddit-logo.svg';
import sscCover from '$lib/assets/ssc-brand-guide-cover.png?webp';
import pikquik from '$lib/assets/pikquik.svg?webp&h=600';
import todos from '$lib/assets/todos-thumbnail.png?webp&h=600';
import bamboo from '$lib/assets/bamboo.png?webp&h=600';
import dickinson from '$lib/assets/dickinson-woolf.png?webp&h=1000';
import parkSpace from '$lib/assets/park-space-infographic.png?webp&h=1000';

// projects card info
export let projectsItems = [
  {
    link: 'https://todos.vivianwli.com',
    title: 'Spring 2023 in "To-Do"s',
    thumbnail: 'todos-thumbnail.png',
    info: 'MAY 4 2023',
    summary:
      'A Priestly chart (connected dot plot) view of my activities across the semester, as tracked by my to-do app. Made with D3, Prisma, Supabase!',
    tags: ['visualization']
  },
  {
    link: 'https://bamboo.vivianwli.com',
    title: 'Bamboo housing',
    thumbnail: 'bamboo.png',
    info: 'JUL 1 2022',
    summary:
      'A visual review of bamboo construction for residential use. How is bamboo currently used in the built environment, and how can it flourish in the future?',
    tags: ['research', 'visualization']
  },
  {
    link: 'blog/sustainable-textiles',
    title: 'An antidote to greenwashing',
    thumbnail: 'haute-greenwashing.png',
    info: 'DEC 3 2021 • HAUTE MAGAZINE',
    summary:
      "An in-depth feature on textiles and their impact in the context of sustainable fashion. Written for Haute Magazine's Fall 2021 issue, On the Edge.",
    tags: ['journalism']
  },
  {
    link: 'https://drive.google.com/file/d/1rFpdk-Jk-Yu2RCvrqzmTKbINfGt8sUdt/view',
    title:
      'Predicting COVID-19 cases via LSTM modeling with weather, mobility, and demographic data',
    thumbnail: 'covid-model.png',
    info: 'NOV 1 2020 • UMD INSTITUTE FOR RESEARCH IN ELECTRONICS AND APPLIED PHYSICS',
    summary:
      'A research project exploring the potential of applying machine learning (more specifically, an entity-aware long short term memory network) to COVID-19 case prediction.',
    tags: ['research']
  },
  {
    link: 'https://youtu.be/UmOasRlMuXs',
    title: 'The hidden link between bats, COVID-19, and climate change',
    thumbnail: 'breakthrough.png',
    info: 'JUN 25 2020 • BREAKTHROUGH JUNIOR CHALLENGE',
    summary:
      'A synthesized explanation of yet another reason climate change should matter to us—the potential normalcy of pandemics via zoonotic diseases.',
    tags: ['educational', 'video']
  },
  {
    link: 'https://www.nytimes.com/2020/05/07/learning/an-unexpected-dinner-guest-marine-plastic-pollution-hides-a-neurological-toxin-in-our-food.html',
    title:
      'An unexpected dinner guest: marine plastic pollution hides a neurological toxin in our food',
    thumbnail: 'nyt-stem-writing.jpg',
    info: 'MAY 7 2020 • THE NEW YORK TIMES',
    summary:
      'One of eight winning essays (among 1,618 entries) from the New York Times Learning Network\'s STEM projects Contest. Also published on <a href="https://phys.org/news/2019-09-marine-plastic-pollution-neurological-toxin.html">Phys.org</a>.',
    tags: ['journalism']
  },
  {
    link: 'https://msmagazine.com/2019/12/16/inside-the-feminist-tech-jamboree-helping-girls-break-barriers-in-stem/',
    title: 'Inside the feminist tech jamboree helping girls break barriers in STEM',
    thumbnail: 'technica.jpg',
    info: 'DEC 16 2019 • MS. MAGAZINE',
    summary:
      'Behind-the-scenes of Technica, an all-women and non-binary hackathon hosted annually at the University of Maryland, College Park. Published as a part of "The Future is Ms."',
    tags: ['journalism']
  },
  {
    link: 'http://climatetracker.org/youths-reporting-on-youths/',
    title: "Tracking the UN's youth climate delegates",
    thumbnail: 'climate-tracker.jpg',
    info: 'OCT 2 2019 • CLIMATE TRACKER',
    summary:
      'Profiles of international leaders at the UN Youth Action Summit alongside the global climate strikes on September 20, 2019. Written with Yamila Frej and Amogh Dimri during a three-day mentorship with Climate Tracker.',
    tags: ['journalism']
  },
  {
    link: 'https://silverchips.mbhs.edu/content/raising-the-standard-for-mcps-in-ongoing-contract-negotiations-32318/',
    title: 'Raising the standard for MCPS in ongoing contract negotiations',
    thumbnail: 'teachers.jfif',
    info: 'NOV 13 2019 • SILVER CHIPS ONLINE',
    summary:
      "Coverage of teachers' responses to the teacher strikes in Chicago, especially in light of recent contract re-negotiations for Mongomery County Public Schools.",
    tags: ['journalism']
  }
];

export let designItems = [
  {
    tag: 'ui-ux',
    rows: [
      [
        {
          title: 'Reddit Ads Design (2023)',
          description:
            'During my summer internship, I worked on three product design projects to simplify the Reddit Ads platform for small businesses, from ad creative to Pixel event integration to viewing performance data.',
          link: '/blog/reddit-ads-design-2023',
          src: reddit,
          pdfSrc: "https://drive.google.com/uc?id=1q04_YwydaGHbkVG7eUJWc8mI47RohGNU&embedded=true"
        },
        {
          title: 'The New York Times (2022)',
          description:
            'I worked on various interfaces, both internal and reader-facing, during my summer internship at the New York Times. I coded these, too!',
          link: '/blog/new-york-times-2022',
          src: nyt
        }
      ],
      [
        {
          title: 'Pikquik',
          description:
            'My team\'s final project for ACAD 324, a spunky UI/UX design for a festival food app!',
          link: '/blog/pikquik',
          src: pikquik
        },
        {
          title: 'Spring 2023 in "To-Do"s',
          description:
            'For ACAD 280: Designing for Digital Experiences, I used an app called TickTick to meticulously track and tag my tasks. Then, I visualized it as a connected dot plot, or Priestley chart.',
          link: 'https://todos.vivianwli.com',
          src: todos
        },
        {
          title: 'Bamboo housing',
          description:
            'A visual review of bamboo construction for residential use. How is bamboo currently used in the built environment, and how can it flourish in the future?',
          link: 'https://bamboo.vivianwli.com',
          src: bamboo
        },
      ],
      [
        {
          title: 'Student Sustainability Committee brand guide',
          description:
            "Brand guide for the USC Presidential Working Group's Student Sustainability Committee. Designed in Figma.",
          link: 'https://www.figma.com/file/bkBckw68TnfQXLYtaNBRla/SSC?node-id=131%3A34',
          src: sscCover
        },
        {
          title: 'HackSC interim website',
          description:
            '"Themeless" interim website design for HackSC, to be reused during the time period between hackathons, typically summer to winter of each year. Designed as a team that I led.',
          link: 'https://www.figma.com/file/avCtBh86T7U4PxCbnVAmhc/HackSC-Interim-Website?node-id=1%3A533',
          src: hackSCSite
        },
        {
          title: 'ORACLE of Blair',
          description:
            'Web and graphic design for our senior class model of the 2020 Presidential election. Designed in Figma.',
          link: 'https://2020.polistat.mbhs.edu',
          src: oracle
        },
        {
          title: 'climatedu',
          description:
            'Website platform design for climatedu.org, an online climate course for middle and high school students. Designed in Figma.',
          link: 'https://climatedu.org',
          src: climateduSite
        }
      ]
    ]
  },
  {
    tag: '3D',
    rows: [
      [
        {
          title: "Low poly Trader Joe's",
          description:
            "This low-poly scene was my very first project in Blender. I love grocery stores and the holidays (especially Christmas), so it's a perfect combination!",
          src: traderJoes
        },
        {
          title: 'LA Park Space',
          description:
            'For ARCH 519: Sustainability in the Built Environment, I visualized the trend of park space per capita in LA over time, and compared that to the city\'s goal.',
          src: parkSpace
        },
        {
          title: 'Emily Dickinson\'s "Room of One\'s Own"',
          description:
            'For COLT 374: Women Writers in Europe and America, I created a low poly model that brings together the central themes from both Virginia Woolf and Emily Dickinson\'s work.',
          link: '/blog/dickinson-woolf',
          src: dickinson
        }
      ]
    ]
  },
  {
    tag: 'illustration',
    rows: [
      [
        {
          title: 'Sirens merch graphic',
          description:
            'Matisse-inspired sweatshirt graphic design for Sirens A Cappella. Made in Figma and Adobe Fresco.',
          src: sirensMerch
        },
        {
          title: 'Fruit blob emojis',
          description: 'Custom emojis made for Discord, illustrated in Adobe Fresco!',
          link: 'blog/fruit-blobs',
          src: blobs
        },
        {
          title: 'Market fermentation',
          description: 'Movie poster made in Adobe Illustrator and InDesign.',
          src: marketFermentation
        }
      ],
      [
        {
          title: 'b1c shirt graphic',
          description:
            'Merch graphic for cyberscurity team "b1c", centered around the theme of making waves.',
          src: b1c
        },
        {
          title: 'iy8 logo',
          description:
            'Sample logo (very not official) for Cohort 8 of IYA (note the 8!). Illustrated in Adobe Fresco.',
          src: iy8
        },
        {
          title: 'NYT Maker Week 2022 shirt',
          description:
            'Winning T-shirt design for Maker Week at the New York Times, the all-company hackathon.',
          src: makerTee
        }
      ]
    ]
  },
  {
    tag: 'informational',
    rows: [
      [
        {
          title: 'Student Sustainability Committee infographic',
          description:
            "One-pager for the USC Presidential Working Group's Student Sustainability Committee. Designed in Figma.",
          src: sscFlyer
        },
        {
          title: 'HackSC Sponsorship packet',
          description:
            'Sponsorship packed used for pitching HackSC to potential sponsor companies. Designed in Figma.',
          src: hackSCSponsor
        }
      ]
    ]
  },
  {
    tag: 'social-media',
    rows: [
      [
        {
          title: 'HackSC Instagram',
          description:
            'Brand identity and Instagram assets for HackSC 2022. Neon gradients, glow effects, and blobs. Made in Figma!',
          link: 'https://instagram.com/hackscofficial',
          src: hackscIG
        },
        {
          title: 'climatedu Instagram',
          description:
            "Themed doodles for climatedu's weekly Infographic posts. Illustrations in Adobe Fresco on iPad, assembled in Figma.",
          link: 'https://instagram.com/climateduteam',
          src: climateduIG
        }
      ]
    ]
  },
  {
    tag: 'animation',
    rows: [
      [
        {
          title: 'Still into you lyric video',
          description:
            'Lyric video for "Still Into You" by Paramore. Designed in Figma and Illustrator, animated with After Effects.',
          link: 'https://youtu.be/7ea1WhX4Wu8?t=36',
          src: stillIntoYou
        },
        {
          title: 'Drawdown for dummies ep. 1',
          description:
            "Episode 1 of Drawdown for dummies, a video series breaking down Project Drawdown's 100 top solutions to bring us to climate drawdown. Made in Premiere Pro and After Effects.",
          link: 'https://youtu.be/UWAu4PoBFxA',
          src: drawdown
        }
      ]
    ]
  }
];