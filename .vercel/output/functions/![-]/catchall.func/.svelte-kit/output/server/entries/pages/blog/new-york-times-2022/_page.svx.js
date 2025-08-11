import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
import { B as BlogGallery } from "../../../../chunks/BlogGallery.js";
const admin1 = "/_app/immutable/assets/election-admin-1.CxGXM1Il.png";
const admin2 = "/_app/immutable/assets/election-admin-2.DGdQeSZJ.png";
const admin3 = "/_app/immutable/assets/election-admin-3.CaRSND2L.png";
const admin4 = "/_app/immutable/assets/election-admin-4.DPgXn0zH.png";
const admin5 = "/_app/immutable/assets/election-admin-5.COzzkSbo.png";
const admin6 = "/_app/immutable/assets/election-admin-6.Ciy04NLU.png";
const layoutEditor = "/_app/immutable/assets/nyt-asset-layout-editor.Cam4AxLG.gif";
const nhtsa1 = "/_app/immutable/assets/nhtsa-1.C-gqCoD_.png";
const nhtsa2 = "/_app/immutable/assets/nhtsa-2.M-Q-9jmy.png";
const dsl = "/_app/immutable/assets/nyt-design-systems-library.DFWzD6LT.gif";
const newsletter1 = "/_app/immutable/assets/intern-newsletter-1.Dh_Zbwck.png";
const newsletter2 = "/_app/immutable/assets/intern-newsletter-2.AnFCaYAu.png";
const newsletter3 = "/_app/immutable/assets/intern-newsletter-3.D-cmCxfA.png";
const newsletter4 = "/_app/immutable/assets/intern-newsletter-4.Bzbt00Qe.png";
const newsletter5 = "/_app/immutable/assets/intern-newsletter-5.CqkJPoQ7.png";
const makerWeekBanner = "/_app/immutable/assets/nyt-maker-banner.B97mbWoD.png";
const makerWeekTee = "/_app/immutable/assets/nyt-maker-2022.B7FEB7Ok.png";
const makerTeam = "/_app/immutable/assets/maker-week-team.DuFL63E4.png";
const snacks = "/_app/immutable/assets/snacks-channel.DchcYiTg.png";
const trendingRacesGif = "/_app/immutable/assets/trending-races.rt8U8lHd.gif";
const trendingRacesIterations = "/_app/immutable/assets/trending-race-iterations.Dbwpo6J5.png";
const trendingRacesGitHub = "/_app/immutable/assets/trending-races-github.Djd-EFBi.png";
const trendingRacesPraise = "/_app/immutable/assets/trending-races-praise.NJVwgaM6.png";
const metadata = {
  "title": "Interning at the New York Times (2022)",
  "slug": "new-york-times-2022",
  "publishDate": "SEPT 24 2022",
  "tags": [{ "name": "internship" }, { "name": "code" }, { "name": "ui/ux" }],
  "thumbnail": "nyt-thumbnail.png",
  "summary": "A rundown of my internship experience during summer 2022 on the Interactive News desk at the New York Times. Read about the projects that I worked on, as well as what I've learned!"
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
  )} <p data-svelte-h="svelte-lozsh1">This past summer, I interned at the New York Times on the <a href="https://github.com/newsdev/about-int" rel="nofollow">Interactive News Team (INT)</a>! I’ve had the pleasure of working on many projects at the Times, from UI/UX design to spreadsheet wrangling to illustration to fullstack software development. I had such a wonderful experience with the team and with the company, and I’m elated to share what I’ve learned.</p> <h2 data-svelte-h="svelte-1fb65ez">Work-related projects</h2> <p data-svelte-h="svelte-f8m6z2">These were all so fun, I swear. Primarily elections, but also some one-off projects. The elections rig is written in TypeScript, Next.js, and a home-rolled variation on Sveltekit, with express and PostGreSQL handling the backend (if you’re curious)!</p> <h3 data-svelte-h="svelte-2ugzjv">Elections asset layout editor</h3> <p data-svelte-h="svelte-1qa79x2">This was one of my biggest projects of the summer! Essentially, our elections reporting rig is composed of several apps which gather data, manage election events, publish pages, and more. The <code>election-pages</code> app previews and renders all New York Times election results pages. I worked on an <strong>interactive wysiwyg-style editor for elections asset layouts</strong>.</p> <p data-svelte-h="svelte-1kkx8p6">Let’s imagine that it’s a hectic election night and the Alabama Governor’s race gets really interesting. Everyone has their eyes peeled. We’d want to move the AL Gov. race to the top of the page. However, to change page layout and attributes, we currently have to go into the code, edit a complicated json, and re-deploy. Once again, it’s intimidating for those who aren’t already knee-deep in the elections reporting apps. This interface allows users to rearrange sections and edit properties without ever touching the code.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: layoutEditor,
      className: "gallery-img",
      caption: "A preview of the asset layout editor's functionalities."
    },
    {},
    {}
  )} <p data-svelte-h="svelte-1lxaqof">I designed this interface in Figma and developed it from scratch. I spent significant time in the sea of CSS-styles, dealing with broad aesthetic and microinteractions. I also connected my interface to the rest of the app, pulling in existing page layouts and creating APIs to send the layouts back to the <code>election-admin</code> app.</p> <h3 data-svelte-h="svelte-rhmzj6">UI/UX improvements in the <code>election-admin</code> app</h3> <p data-svelte-h="svelte-1sbrufm">One of my first projects on INT was a <strong>UI/UX audit</strong> of our <code>election-admin</code> app. <code>election-admin</code> is responsible for managing events and assets, whether they be standalone pages or embedded into others (such as on the home page). More specifically, I tackled the interface used to create and edit these assets. Having a more user-friendly interface would make it easier for different people to configure elections without significant training. We’d be able to run election nights more reliably and with fewer people.</p> <p data-svelte-h="svelte-3r2o5o">Here’s a detailed rundown of some changes that I implemented:</p> ${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: admin6,
          className: "gallery-img",
          caption: "<b>BEFORE:</b> Asset details and election event details."
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: admin5,
          className: "gallery-img",
          caption: "<b>AFTER:</b> Asset details and election event details."
        },
        {},
        {}
      )}`;
    }
  })} <p data-svelte-h="svelte-kz4ba1">For this first side-by-side comparison (above):</p> <ul data-svelte-h="svelte-1ks4vds"><li>I introduced section headers, splitting up the fields categorically to make the interface more self-explanatory. These include <strong>Asset Details</strong>, <strong>Event Details</strong>, <strong>Publication Details</strong>, and <strong>Advanced Options</strong></li> <li>I adjusted the widths of many text fields to match their intuitive widths (e.g. a state code like “CA” will never be as long as the full screen)</li> <li>I hid inferrable fields like <code>Asset type</code> and <code>Election event</code></li> <li>I rearranged the order and layout of the form fields to reflect the user’s priorities, rather than the developer’s</li> <li>I added captions and documentation as necessary to guide the user through the form</li></ul> ${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: admin4,
          className: "gallery-img",
          caption: "<b>BEFORE:</b> Publication details and version history."
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: admin3,
          className: "gallery-img",
          caption: "<b>AFTER:</b> Publication details and version history."
        },
        {},
        {}
      )}`;
    }
  })} <p data-svelte-h="svelte-1wf63ca">For this second side-by-side:</p> <ul data-svelte-h="svelte-wb2sjc"><li>I slimmed down the version history display: rather than an expandable, full-width accordion, I created a popover with more readable formatting</li> <li>I untangled the arbitrarily grouped version history fields (also see images below), and rearranged them to make intuitive sense to the user</li> <li>I rearranged the layout of the publication details (<strong>Times Tags</strong>, <strong>Promo Media ID</strong>, <strong>Promo Media Preview</strong>, and <strong>Display Condition</strong>) to optimize text field widths and create a larger space for the image preview</li></ul> ${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: admin2,
          className: "gallery-img",
          caption: "<b>BEFORE:</b> Publication details and advanced options."
        },
        {},
        {}
      )} ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          src: admin1,
          className: "gallery-img",
          caption: "<b>AFTER:</b> Publication details and advanced options."
        },
        {},
        {}
      )}`;
    }
  })} <ul data-svelte-h="svelte-5mr8cn"><li>Similar to the above, I was able to slim down these publication details significantly, simply via the version history popovers and a layout rehash</li> <li>I moved the rarely-edited-but-nice-to-have fields (<strong>Byline</strong>, <strong>Correction</strong>, <strong>Credit</strong>, and <strong>Notes</strong>) into the “Advanced Options” section, which is hidden by default so as not to overwhelm users</li></ul> <p data-svelte-h="svelte-1dx6n1k">As an interface that is touched frequently by many people, this UI/UX audit and refactor ultimately had a pretty positive impact. Several months later, it’s evolved to become even better!</p> <h3 data-svelte-h="svelte-ns1rr0">Trending races component</h3> <p data-svelte-h="svelte-eu4nhw">Finally, a project that is <a href="https://www.nytimes.com/interactive/2022/11/08/us/elections/results-key-races.html" rel="nofollow">live</a>! This trending races component was developed for the front page of the NYT elections results. It became one of my primary projects during October and November, and I’m thankful to have owned a feature that was so central to the Times’ election visuals, from the design to the development, animation, algorithm, and testing.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: trendingRacesGif,
      className: "gallery-img",
      caption: "A GIF showcasing the trending Races animation interaction."
    },
    {},
    {}
  )} <p data-svelte-h="svelte-5s4nuv">I’d followed the project from its inception, back when we weren’t even sure what exactly to do with Chartbeat API data that we were collecting. Soon after we settled on the idea of a trending races component, I became the primary designer and developer for the feature.</p> <p data-svelte-h="svelte-whrxfo">I pushed for design changes that clarified our vote percentage bar, where the reader might otherwise find it ambiguous. Adding a numeric label significantly improved the reader’s ability to understand a race’s status with just a quick glance. After interviewing several team members (as well as some friends and family for the layman’s view), I chose a variation that incorporated a descriptive label while still matching the brand guidelines.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: trendingRacesIterations,
      className: "gallery-img",
      caption: "A screenshot of potential Trending Race component designs from Figma. We chose a modified version of #2!"
    },
    {},
    {}
  )} <p data-svelte-h="svelte-1e3rjrq">In a way, GitHub code reviews were also my user interviews. Although I did not start out with such a thorough approach, I quickly realized the importance of determining every possible state that the component could be in, and ensuring that we’d optimized the design for that state. Beyond the “mid-vote count” and “called” states, there was also a “no results” state when races weren’t reporting yet, a runoff state, and more. I continuously iterated based on my team’s feedback, making adjustments to improve the component’s clarity.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: trendingRacesGitHub,
      caption: "A PR that I made, implementing some design feedback and including the No Results and Runoff designs."
    },
    {},
    {}
  )} <p data-svelte-h="svelte-1hii0wu">Alongside the Times audience team, I contributed to our trending algorithm that used total page views and top change in views to show what captured readers’ attention in real time. I implemented our algorithm logic in code, surfacing five races with the top views overall, and five races with the biggest change in views from the recent time period. Working on this was definitely high-stress, but it felt so rewarding, too.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: trendingRacesPraise,
      caption: "High praise from the 🐐 in #election-night-notes."
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-rfgjq3">Self-driving car crash data</h3> <p data-svelte-h="svelte-1r47mf4">A spontaneous, opportunistic project! The NHTSA released a data dump of self-driving car crash reports on June 18 at 9 am. The dataset encompassed several hundred crashes with cars using advanced driver-assistance technologies. As soon as I got to work that day, I began searching the datasets for narratives and interesting patterns. By lunchtime, I’d generated dozens of pivot tables and statistics to understand location-based patterns, crash contact patterns, redaction patterns, environmental conditions, and descriptions. By 3 pm, the <a href="https://www.nytimes.com/2022/06/15/business/self-driving-car-nhtsa-crash-data.html" rel="nofollow">article</a> was live.</p> ${validate_component(BlogGallery, "BlogGallery").$$render(
    $$result,
    {
      columns: "2",
      className: "half-width",
      caption: "Final published article based on the data analysis that I did with Asmaa Elkeurti and Jason Kao!"
    },
    {},
    {
      default: () => {
        return `${validate_component(BlogImage, "BlogImage").$$render($$result, { src: nhtsa1, className: "gallery-img" }, {}, {})} ${validate_component(BlogImage, "BlogImage").$$render($$result, { src: nhtsa2, className: "gallery-img" }, {}, {})}`;
      }
    }
  )} <p data-svelte-h="svelte-vs8aoq">Most of all, I loved being able to respond to the journalists’ needs. Neal Boudette, Cade Metz and Jack Ewing worked on this article. Throughout the morning, they would propose different hypotheses in our Slack channel, and I would provide quantitative verification or insight based on the data. The process was far more fast-paced than I had anticipated, and it was pretty exciting!</p> <p data-svelte-h="svelte-11gykmz">Since then, I’ve been able to work on similar data projects (e.g. New York state campaign finance data) and newsroom tool fixes based on journalist feedback.</p> <h2 data-svelte-h="svelte-133phi3">Semi work-related projects</h2> <h3 data-svelte-h="svelte-q0zicf">Maker Week 2022: Design systems library</h3> <p data-svelte-h="svelte-1g4b46">Maker Week is a week-long internal hackathon that the New York Times hosts every year. Some ideas become the seeds of instrumental NYT products, while others are just for fun. I chose to work on a tool that aimed to consolidate NYT’s abundance of design systems: the Design Systems Library!</p> <p data-svelte-h="svelte-1788ciq">Our project idea came from a very practical perspective. The Times has at least 12 distinct design systems, each with their own components and flows. However, communication between systems can be weak, and teams are constantly doing duplicate work. We envisioned a utopia where NYT project developers could browse a comprehensive library and pull in components from design systems for interchangeable use.</p> <p data-svelte-h="svelte-dqxpis">I was involved in the design research and prototyping for this project. I spent several days compiling analogous solutions: Material UI docs, Google Fonts and Icons, Storybook, etc. Based on these findings, we then designed an interface that would allow users to browse components via tags, filters, and design system pages.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: dsl,
      caption: "Design systems library"
    },
    {},
    {}
  )} <p data-svelte-h="svelte-9d4m7q">Our Maker Week project ultimately won <strong>Most Likely to be Used by Everyone</strong>. I was able to work with so many extremely talented people across different teams at the New York Times. Collaborating outside of my team bubble proved to be super insightful. Here’s my team that made this project possible:</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: makerTeam,
      caption: "Maker Week Design Systems Library team."
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-lkw1kl">Maker Week T-shirt design</h3> <p data-svelte-h="svelte-254qn8">I love illustration (and it’s only recently become less of a hobby interest), so I decided to shoot my shot and have some fun with this one! I submitted a design featuring a team of birds collaborating to paint a Times “T”. So goofy!</p> <p data-svelte-h="svelte-ytbgbl">I ended up winning the T-shirt design contest, which honestly brings with it an unwarranted amount of clout. It was hilarious to see so many of my coworkers wearing the shirts to the office and in meetings. 10/10 tradition :)</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: makerWeekBanner,
      caption: "A super delightful banner that Mimi Fang composed for our internal Google Forms. Made me feel official :,^)"
    },
    {},
    {}
  )} ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: makerWeekTee,
      caption: "The graphic that I designed for our 2022 Maker Week T-shirt!"
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-1ltfzr7">Intern newsletter</h3> <p data-svelte-h="svelte-15jo9la">This summer, our intern class produced two newsletters, with all articles and accompanying media created by Times interns. I designed the 2022 newsletter layout with Zoe and Kalynka in Figma. We aimed to replicate the print-newspaper-esque aesthetic while still maintaining readability in the narrow format of a newsletter. As product design interns, they imparted wonderful design insight that I learned so much from!</p> ${validate_component(BlogGallery, "BlogGallery").$$render(
    $$result,
    {
      columns: "5",
      caption: "Intern newsletter #1: final product!"
    },
    {},
    {
      default: () => {
        return `${validate_component(BlogImage, "BlogImage").$$render(
          $$result,
          {
            src: newsletter1,
            className: "gallery-img"
          },
          {},
          {}
        )} ${validate_component(BlogImage, "BlogImage").$$render(
          $$result,
          {
            src: newsletter2,
            className: "gallery-img"
          },
          {},
          {}
        )} ${validate_component(BlogImage, "BlogImage").$$render(
          $$result,
          {
            src: newsletter3,
            className: "gallery-img"
          },
          {},
          {}
        )} ${validate_component(BlogImage, "BlogImage").$$render(
          $$result,
          {
            src: newsletter4,
            className: "gallery-img"
          },
          {},
          {}
        )} ${validate_component(BlogImage, "BlogImage").$$render(
          $$result,
          {
            src: newsletter5,
            className: "gallery-img"
          },
          {},
          {}
        )}`;
      }
    }
  )} <h2 data-svelte-h="svelte-5sfsee">Community and experience</h2> <p data-svelte-h="svelte-1ew4iwo">I couldn’t have had a better summer. My team and the intern program provided great support, and I also took a fair amount of personal initiative.</p> <p data-svelte-h="svelte-1bpxqjc">My team director Ben set up coffee chats between me and each person on our team, so I got to know everyone personally. These introductions made me feel so much more welcome in the office. I also took advantage of the opportunity to chat with those outside of my department at the New York Times—Graphics/Digital News Design folks, art directors, food reporters, Games developers, you name it.</p> <p data-svelte-h="svelte-1y36bwh">The employee resource groups were a great way to stay connected beyond work projects. I participated in the July book club for Times Reads, learned about NYT sustainability initiatives with the Times Climate Network, and attended the Womens Network seminars.</p> <p data-svelte-h="svelte-26zxsi">My heart also goes out to the <code>#snacks</code> channel. Several times a week, people would post excess food from events to this channel, free for the taking. Every day felt like a new adventure! I loved the spirit of generosity here, and I was even able to contribute food once myself, too.</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: snacks,
      caption: "The guiding principle of the #snacks channel, laid out for all to see."
    },
    {},
    {}
  )} <p data-svelte-h="svelte-10yurlz">Within INT, we had our own monthly picnics and an “NYHQ Week,” where our remote teammates flew out to New York for an in-person week. Between team coffee runs and bagel tastings, NYHQ Week really strengthened my connection to the team. Everyone on INT is so down-to-earth and thoughtful. I especially want to thank Aaron, our Party Planning Chair (a very official position). I typically can’t eat the sweets provided at celebrations due to my dietary restrations. However, for my final toast with INT, Aaron went out of his way to order a cake from a dedicated vegan and gluten-free bakery. It made my week :,^)</p> <p data-svelte-h="svelte-1to8b4t">Finally, I cherish the time that I spent with my fellow interns in and out of the office, as brief it may have been. I’ve made friendships that will last well beyond the duration of the internship!</p> <h2 data-svelte-h="svelte-12h1xci">On getting the internship</h2> <p data-svelte-h="svelte-1wd2w7v">INT’s internship application process exceeded my expectations. Here’s what happened:</p> <ul data-svelte-h="svelte-18iiu64"><li><p><strong>STEP 1:</strong> I found the application on LinkedIn and applied through their Workday portal. They asked for the usual resume, as well as a few short essays. I could tell they were looking for applicants with a genuine interest in the intersection between journalism and software.</p></li> <li><p><strong>STEP 2:</strong> I did an automated video interview. This one honestly wasn’t great. The platform would ask a question, count down, and then film my timed response. There were no re-dos, and it cut me off automatically after two minutes.</p></li> <li><p><strong>STEP 3:</strong> I did a behavioral interview with my potential manager and one other team member from INT (Scott and Annie!). Scott sent me the questions a few days prior, so I was able to better understand the team and gather my thoughts. Instead of a traditional technical interview, I did a walkthrough of one of my previous coding projects.</p></li> <li><p><strong>STEP 4:</strong> I got the internship!</p></li></ul> <p data-svelte-h="svelte-u7p06a">As someone who isn’t a CS major (and hasn’t leetcoded much), this tech interview alternative allowed me to present myself in the best light possible. I felt more comfortable, and I was able to highlight my thought process. Tech interviews can certainly be crucial to finding skilled candidates, but this interview is a great example of assessing candidates more holistically and broadening the barrier to entry for SWE roles.</p> <h2 data-svelte-h="svelte-1gzgja4">Thank you!</h2> <p data-svelte-h="svelte-1ed0l6r">Thank you so much to everyone at the Times who has made this summer such a valuable learning experience. It’s a notable investment that the team makes every year, and I felt so welcomed every step of the way. Thank you <strong>Asmaa</strong> for being the best mentor I could ask for—thinking of our 1:1s always makes me smile. Thank you <strong>Ben</strong>, <strong>Rachel</strong>, <strong>Scott</strong>, and <strong>Amy</strong> for ensuring that I had engaging projects to work on, and constantly reshaping my NYT path to fit my interests. Thank you to <strong>Andrew F.</strong> for sharing incredible advice as my “intern buddy”, as well as to my intern friends for being my partners in crime (<strong>Zully</strong>, <strong>Zoe</strong>, <strong>Connie</strong>, and so many more). Thank you to the INT team as a whole—you all are the smartest, kindest people that I’ve gotten to work with. Thank you to the Maker Week Team, to folks in the <code>#snacks</code> channel, and to <strong>Ashton</strong> and <strong>Nya</strong> for hosting a successful intern program. I hope we cross paths again!</p>`;
});
export {
  Page as default,
  metadata
};
